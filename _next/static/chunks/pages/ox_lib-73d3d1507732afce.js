(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2619],{5850:function(e,s,n){"use strict";n.d(s,{Z:function(){return createReactComponent}});var i=n(5271),r=n(507),t=n.n(r),l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,s,n)=>s in e?o(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,__spreadValues=(e,s)=>{for(var n in s||(s={}))d.call(s,n)&&__defNormalProp(e,n,s[n]);if(h)for(var n of h(s))x.call(s,n)&&__defNormalProp(e,n,s[n]);return e},__spreadProps=(e,s)=>a(e,c(s)),__objRest=(e,s)=>{var n={};for(var i in e)d.call(e,i)&&0>s.indexOf(i)&&(n[i]=e[i]);if(null!=e&&h)for(var i of h(e))0>s.indexOf(i)&&x.call(e,i)&&(n[i]=e[i]);return n},createReactComponent=(e,s,n)=>{let r=(0,i.forwardRef)((s,r)=>{var{color:t="currentColor",size:o=24,stroke:a=2,children:c}=s,h=__objRest(s,["color","size","stroke","children"]);return(0,i.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:r},l),{width:o,height:o,stroke:t,strokeWidth:a,className:`tabler-icon tabler-icon-${e}`}),h),[...n.map(([e,s])=>(0,i.createElement)(e,s)),...c||[]])});return r.propTypes={color:t().string,size:t().oneOfType([t().string,t().number]),stroke:t().oneOfType([t().string,t().number])},r.displayName=`${s}`,r}},324:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_lib",function(){return n(5054)}])},5054:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a}});var i=n(2676),r=n(4936),t=n(6037),l=n(9780),o=n(9331);let a=[{depth:2,value:"Installation",id:"installation"},{depth:3,value:"Download a release or build the source code.",id:"download-a-release-or-build-the-source-code"},{depth:3,value:"Config",id:"config"},{depth:2,value:"Usage",id:"usage"},{depth:2,value:"Using icons for interface functions",id:"using-icons-for-interface-functions"},{depth:2,value:"Building the UI",id:"building-the-ui"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",a:"a",h3:"h3",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",br:"br",em:"em"},(0,t.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{children:"Ox Lib"}),"\n",(0,i.jsx)(s.p,{children:"A standalone library for providing easily reusable code as importable modules and exports."}),"\n",(0,i.jsx)(o.Z,{repo:"https://github.com/overextended/ox_lib"}),"\n",(0,i.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(l.UW,{type:"info",children:(0,i.jsxs)(s.p,{children:["We ",(0,i.jsx)(s.strong,{children:"strongly"})," recommend referring to ",(0,i.jsx)(s.a,{href:"../guides",children:"Guides"})," for setting up Git, Node.js, and pnpm."]})}),"\n",(0,i.jsxs)(l.Rg,{children:[(0,i.jsxs)(s.h3,{id:"download-a-release-or-build-the-source-code",children:["Download a ",(0,i.jsx)(s.a,{href:"https://github.com/overextended/ox_lib/releases",children:"release"})," or build the source code."]}),(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"https://github.com/overextended/ox_lib.git"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"ox_lib/web"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"i"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"build"})]})]})}),(0,i.jsx)(s.h3,{id:"config",children:"Config"}),(0,i.jsxs)(s.p,{children:["Resource configuration is handled using ",(0,i.jsx)(s.a,{href:"https://docs.fivem.net/docs/scripting-reference/convars/",children:"convars"}),"."]}),(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# https://v6.mantine.dev/theming/colors/#default-colors"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setr"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"ox:primaryColor"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"blue"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setr"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"ox:primaryShade"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"8"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setr"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"ox:userLocales"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Allow users to select their locales using /ox_lib"})]})]})}),(0,i.jsx)(s.p,{children:"You'll also need to grant ace permissions to the resource."}),(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"add_ace"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"resource.ox_lib"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"command.add_ace"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"allow"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"add_ace"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"resource.ox_lib"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"command.remove_ace"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"allow"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"add_ace"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"resource.ox_lib"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"command.add_principal"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"allow"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"add_ace"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"resource.ox_lib"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"command.remove_principal"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"allow"})]})]})})]}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(l.mQ,{items:["Lua","JS"],children:[(0,i.jsxs)(l.OK,{children:[(0,i.jsxs)(s.p,{children:["To enable the library inside of your resource just add ",(0,i.jsx)(s.code,{children:"@ox_lib/init.lua"})," as a shared_script in your ",(0,i.jsx)(s.code,{children:"fxmanifest.lua"})," file."]}),(0,i.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"shared_scripts"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@ox_lib/init.lua'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),(0,i.jsx)(s.p,{children:"Or if the library is the only shared script you use you can do:"}),(0,i.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"shared_script"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@ox_lib/init.lua'"})]})})}),(0,i.jsxs)(s.p,{children:["You can specify modules to import from inside your ",(0,i.jsx)(s.code,{children:"fxmanifest.lua"}),", or load them dynamically."]}),(0,i.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ox_libs"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'locale'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'math'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'table'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),(0,i.jsx)(s.p,{children:"When ox_lib has been imported into your script, it will make several new globals available:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"lib"})," for dynamically importing ox_lib modules into your script."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"require"})," for importing modules from your own script."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cache"})," see ",(0,i.jsx)(s.a,{href:"./ox_lib/Modules/Cache/Shared",children:"here"}),"."]}),"\n"]})]}),(0,i.jsxs)(l.OK,{children:[(0,i.jsxs)(l.UW,{children:[(0,i.jsxs)(s.p,{children:["Npm package for the lib does ",(0,i.jsx)(s.strong,{children:"not"})," support all the functions that are available for Lua."]}),(0,i.jsxs)(s.p,{children:["All supported functions are located inside the ",(0,i.jsx)(s.code,{children:"resource"})," folder in the lib."]})]}),(0,i.jsxs)(s.p,{children:["You can get the npm package ",(0,i.jsx)(s.a,{href:"https://npmjs.com/package/@overextended/ox_lib",children:"here"}),"."]}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Usage:"}),(0,i.jsx)(s.br,{}),"\n","You can either import the whole library object which contains all the functions for that scope (client/server/shared) or you can deconstruct it and import the functions you find needed at the time."]}),(0,i.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"ts","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" lib "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/server'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})}),(0,i.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"ts","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { versionCheck } "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/server'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})})]})]}),"\n",(0,i.jsx)(s.p,{children:"You can now use the library functions inside of your resource, check the rest of the documentation to see how to utilise them."}),"\n",(0,i.jsx)(s.h2,{id:"using-icons-for-interface-functions",children:"Using icons for interface functions"}),"\n",(0,i.jsxs)(s.p,{children:["The icon library used is Font Awesome 6.0, if for the icon you define only a string the default icon type will be ",(0,i.jsx)(s.code,{children:"solid"}),".",(0,i.jsx)(s.br,{}),"\n","If you want to use a different icon type, i.e apple as a brand, you need to define icon as a table (",(0,i.jsx)(s.code,{children:"array"}),") with the first value being the icon type (",(0,i.jsx)(s.code,{children:"fas"}),", ",(0,i.jsx)(s.code,{children:"far"}),", ",(0,i.jsx)(s.code,{children:"fab"}),") as a string, and the second being the icon name."]}),"\n",(0,i.jsxs)(l.mQ,{items:["Lua","JS"],children:[(0,i.jsx)(l.OK,{children:(0,i.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"icon "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'fab'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'apple'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]})})})}),(0,i.jsx)(l.OK,{children:(0,i.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"ts","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"icon"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'fab'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'apple'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]})})})})]}),"\n",(0,i.jsx)(s.h2,{id:"building-the-ui",children:"Building the UI"}),"\n",(0,i.jsxs)(s.p,{children:["If you wish to edit any of the UI elements you will need to download the ",(0,i.jsx)(s.em,{children:"source"})," code, edit what you need and then compile it."]}),"\n",(0,i.jsx)(l.UW,{type:"warning",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"DO NOT"})," de-bundle and un-minify the release CSS and JS files to edit them."]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Requirements:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://nodejs.org/",children:"Node.js (LTS)"})}),"\n",(0,i.jsx)(s.li,{children:"pnpm"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Installing Node.js:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Download the LTS version of Node.js."}),"\n",(0,i.jsx)(s.li,{children:"Go through the install and make sure you install all of the features."}),"\n",(0,i.jsx)(s.li,{children:"Run node --version in cmd and make sure that it gives you the version number. If it doesn't then you didn't install it correctly."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Installing pnpm:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["After installing NodeJS you can install pnpm by running ",(0,i.jsx)(s.code,{children:"npm install -g pnpm"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Building the UI:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"cd into the web directory."}),"\n",(0,i.jsxs)(s.li,{children:["run ",(0,i.jsx)(s.code,{children:"pnpm i"})," to install the dependencies."]}),"\n",(0,i.jsxs)(s.li,{children:["run ",(0,i.jsx)(s.code,{children:"pnpm build"})," to build the source files."]}),"\n"]}),"\n",(0,i.jsxs)(l.UW,{type:"info",children:[(0,i.jsxs)(s.p,{children:["When working in the browser you can run ",(0,i.jsx)(s.code,{children:"pnpm start"}),", which supports hot reloads meaning that\nyou will see your changes after saving your file."]}),(0,i.jsxs)(s.p,{children:["If you want to work in game you can run ",(0,i.jsx)(s.code,{children:"pnpm start:game"})," which writes changes to disk, so\nthe only thing you have to do is restart the resource for it take affect."]})]})]})}s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/ox_lib.mdx",route:"/ox_lib",timestamp:1730239145e3,title:"Ox Lib",headings:a},pageNextRoute:"/ox_lib"})},2947:function(e,s,n){"use strict";n.d(s,{WR:function(){return DocButton},o6:function(){return DownloadButton},eX:function(){return GhButton},aj:function(){return NpmButton},Vg:function(){return ReleaseButton}});var i=n(2676);n(5271);var r=n(5850),t=(0,r.Z)("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),l=(0,r.Z)("file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]]),o=(0,r.Z)("download","IconDownload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]),a=(0,r.Z)("tag","IconTag",[["path",{d:"M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",key:"svg-1"}]]),c=(0,r.Z)("brand-npm","IconBrandNpm",[["path",{d:"M1 8h22v7h-12v2h-4v-2h-6z",key:"svg-0"}],["path",{d:"M7 8v7",key:"svg-1"}],["path",{d:"M14 8v7",key:"svg-2"}],["path",{d:"M17 11v4",key:"svg-3"}],["path",{d:"M4 11v4",key:"svg-4"}],["path",{d:"M11 11v1",key:"svg-5"}],["path",{d:"M20 11v4",key:"svg-6"}]]);let Button=e=>{let{side:s="left",children:n,icon:r,link:t}=e;return(0,i.jsx)("div",{className:"h-fit w-fit",children:(0,i.jsx)("a",{href:t,children:(0,i.jsxs)("div",{className:"flex w-26 items-center justify-center gap-1.5 rounded-sm border border-black p-1.5 text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black mt-2",children:["left"===s&&(0,i.jsx)("div",{children:r}),n,"right"===s&&(0,i.jsx)("div",{children:r})]})})})};function GhButton(e){return(0,i.jsx)(Button,{icon:(0,i.jsx)(t,{}),side:e.side,link:e.link,children:e.label||"Github"})}function DocButton(e){return(0,i.jsx)(Button,{icon:(0,i.jsx)(l,{}),side:e.side,link:e.link,children:e.label||"Documentation"})}function DownloadButton(e){return(0,i.jsx)(Button,{icon:(0,i.jsx)(o,{}),side:e.side,link:e.link,children:e.label||"Download"})}function ReleaseButton(e){return(0,i.jsx)(Button,{icon:(0,i.jsx)(a,{}),side:e.side,link:e.link,children:e.label||"Releases"})}function NpmButton(e){return(0,i.jsx)(Button,{icon:(0,i.jsx)(c,{}),side:e.side,link:e.link,children:e.label||"Package"})}},9331:function(e,s,n){"use strict";var i=n(2676);n(5271);var r=n(2947);s.Z=e=>{let{repo:s,docs:n}=e;return(0,i.jsxs)("div",{className:"flex flex-wrap gap-1",children:[(0,i.jsx)(r.eX,{link:s}),(0,i.jsx)(r.Vg,{link:"".concat(s,"/releases")}),n&&(0,i.jsx)(r.WR,{link:n})]})}},4049:function(e,s,n){"use strict";var i=n(6257);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,s,n,r,t,l){if(l!==i){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},507:function(e,s,n){e.exports=n(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[4936,9774,2888,179],function(){return e(e.s=324)}),_N_E=e.O()}]);