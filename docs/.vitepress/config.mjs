import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import fs from 'node:fs/promises';
import { createCommentNotationTransformer } from '@shikijs/transformers'

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function transformerLuaComment() {
  const classMap = {
    "++": "diff add",
    "--": "diff remove"
  }
  const classActivePre = "has-diff"
  return createCommentNotationTransformer(
    "custom-lua-comment",
    new RegExp(`\\s*(?:--)\\s+\\[!code (${Object.keys(classMap).map(escapeRegExp).join("|")})(:\\d+)?\\]\\s*(?:\\*/|-->)?`),
    function ([_, match, range = ":1"], _line, _comment, lines, index) {
      const lineNum = Number.parseInt(range.slice(1), 10);
      lines.slice(index, index + lineNum).forEach((line) => {
        this.addClassToHast(line, classMap[match]);
      });
      if (classActivePre)
        this.addClassToHast(this.pre, classActivePre);
      return true;
    }
  );
}

function isFile(filename) {
  return filename.split('.').length > 1;
}

function buildFileTree(paths) {
  const fileTree = { files: [], children: {} };

  paths.forEach(path => {
    const parts = path.replaceAll('\\', '/').split('/'); // Utilisation de split('\\') pour les chemins Windows
    let currentLevel = fileTree;

    parts.forEach(part => {
      if (part !== '' && !isFile(part)) { // Ignorer la partie vide (pour les chemins commençant par '\\')
        if (!currentLevel.children[part]) {
          currentLevel.children[part] = { files: [], children: {} };
        }
        currentLevel = currentLevel.children[part];
      }
    });

    // Dernière partie de chaque chemin est le nom du fichier
    const fileName = parts[parts.length - 1];
    if (fileName !== '') { // Ignorer les noms de fichier vides
      // Vérifier si le fichier se termine par l'extension ".md"
      if (isFile(fileName)) {
        currentLevel.files.push(fileName.replace('.md', ''));
      }
    }
  });
  return fileTree;
}

const libModulesFiles = await fs.readdir('docs/st_libs/modules', { recursive: true })
let libModules = buildFileTree(libModulesFiles)

function firtToUpperCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function GenerateMenu(fileTree, key, parent) {
  key = (key || '')
  parent = (parent || '') + "/"
  const menu = {
    text: firtToUpperCase(key),
    collapsed: true,
    base: ('/st_libs/modules' + parent + key).replace('//', '/'),
    link: undefined,
    items: []
  }

  if (fileTree.files && fileTree.files.length > 0) {
    for (let index = 0; index < fileTree.files.length; index++) {
      const file = fileTree.files[index];
      if (file.endsWith('.label'))
        menu.text = file.replace('.label', '')
      else if (file == "index")
        menu.link = "/"
      else
        menu.items.push({ text: firtToUpperCase(file), link: '/' + file })
    }
    if (fileTree.files.length == 1)
      menu.link = '/' + fileTree.files[0]
  }
  if (fileTree.children) {
    for (const child in fileTree.children) {
      menu.items.push(GenerateMenu(fileTree.children[child], child, parent + key))
    }
  }
  return menu
}

let sideBarModules = GenerateMenu(libModules)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  sitemap: {
    hostname: 'https://docs.stausi.com'
  },
  resolve: {
    alias: {
      '@vitepress': 'vitepress',
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocOutlineItem\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/VPDocOutlineItem.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/outline$/,
          replacement: fileURLToPath(
            new URL('./composables/outline.ts', import.meta.url)
          )
        },
      ]
    }
  },
  markdown: {
    theme: {
      light: 'light-plus',
      dark: 'slack-dark'
    },
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
    codeTransformers: [
      transformerLuaComment()
    ]
  },
  base: "/",
  title: "Stausi Docs",
  description: "Documentation's Stausi scripts",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      "link",
      { rel: "icon", href: "https://raw.githubusercontent.com/Stausi/Documentation/main/docs/public/logo.svg" },
    ],
  ],
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: 'deep',
      label: 'On this page',
    },
    outlineBadges: true,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search in the documentation...'
          }
        }
      }
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Store', link: 'https://shop.stausi.com', target: '_target', rel: 'external' }
    ],

    sidebar: [
      {
        text: 'Scripts',
        collapsed: false,
        items: [
          { text: "🏝️ Perico Heist", link: '/scripts/perico' },
          { text: "🚢 Yacht Heist", link: '/scripts/yacht' },
          { text: "📦 Container Robberies", link: '/scripts/container' },
          { text: "👚 Clothing Menu", link: '/scripts/clothing' },
          { text: "🎮 Minigames", link: '/scripts/minigames' },
          { text: "🤝 Teams", link: '/scripts/teams' },
        ]
      },
    
      {
        text: 'Developer Resources',
        collapsed: false,
        items: [
          {
            text: 'Stausi Libs',
            link: '/',
            base: '/st_libs',
            collapsed: true,
            items: [
              {
                text: 'Modules',
                base: '/st_libs/modules',
                collapsed: true,
                items: sideBarModules.items
              }
            ]
          },
          {
            text: 'Hooks',
            link: '/DeveloperResources/hooks',
            items: [
              { text: 'Actions', link: '/DeveloperResources/actions' },
              { text: 'Filters', link: '/DeveloperResources/filters' },
            ]
          }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stausi' },
      { icon: 'discord', link: 'https://discord.com/invite/nKsErtYmek' },
    ],

    footer: {
      copyright: 'Copyright © 2025 Stausi'
    },
    docFooter: {
      prev: false,
      next: false
    }
  }
})
