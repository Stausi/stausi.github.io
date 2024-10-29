(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4266],{2558:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_lib/Modules/ACL/Server",function(){return n(6284)}])},6284:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return o}});var l=n(2676),i=n(4936),r=n(6037),a=n(9780);let o=[{depth:2,value:"lib.addAce",id:"libaddace"},{depth:2,value:"lib.removeAce",id:"libremoveace"},{depth:2,value:"lib.addPrincipal",id:"libaddprincipal"},{depth:2,value:"lib.removePrincipal",id:"libremoveprincipal"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",p:"p",br:"br",a:"a",h2:"h2",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},(0,r.a)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"Server"}),"\n",(0,l.jsxs)(e.p,{children:["Wrapper around the built-in ACL system. Handles lib.addCommand and ox_groups permissions.",(0,l.jsx)(e.br,{}),"\n","Refer to ",(0,l.jsx)(e.a,{href:"https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917",children:"Basic Aces & Principals overview/guide"})," for more information."]}),"\n",(0,l.jsx)(e.h2,{id:"libaddace",children:"lib.addAce"}),"\n",(0,l.jsxs)(e.p,{children:["Assigns the ace permission to a principal. Third parameter defaults to 'allow', while passing ",(0,l.jsx)(e.code,{children:"false"})," sets the permission to 'deny'."]}),"\n",(0,l.jsxs)(a.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(a.OK,{children:(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addAce"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(principal, ace, allow)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addAce"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'group.admin'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'command.say'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})}),(0,l.jsx)(a.OK,{children:(0,l.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/server'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".addAce"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(principal"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ace"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" allow)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".addAce"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'group.admin'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'command.say'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["principal: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["ace: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["allow: ",(0,l.jsx)(e.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"libremoveace",children:"lib.removeAce"}),"\n",(0,l.jsxs)(e.p,{children:["Removes the ace permission from a principal. Third parameter defaults to 'allow', while passing ",(0,l.jsx)(e.code,{children:"false"})," sets the permission to 'deny'."]}),"\n",(0,l.jsxs)(a.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(a.OK,{children:(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"removeAce"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(principal, ace, allow)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"removeAce"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'group.admin'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'command.say'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})}),(0,l.jsx)(a.OK,{children:(0,l.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/server'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".removeAce"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(principal"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ace"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" allow)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".removeAce"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'group.admin'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'command.say'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["principal: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["ace: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["allow: ",(0,l.jsx)(e.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"libaddprincipal",children:"lib.addPrincipal"}),"\n",(0,l.jsx)(e.p,{children:"Assigns a principal to a parent principal. Children inherit permissions from the parent."}),"\n",(0,l.jsxs)(a.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(a.OK,{children:(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addPrincipal"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(child, parent)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addPrincipal"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'player.1'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'group.moderator'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})}),(0,l.jsx)(a.OK,{children:(0,l.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/server'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".addPrincipal"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(child"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" parent)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".addPrincipal"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'player.1'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'group.moderator'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["child: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["parent: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"libremoveprincipal",children:"lib.removePrincipal"}),"\n",(0,l.jsx)(e.p,{children:"Removes a principal from a parent principal."}),"\n",(0,l.jsxs)(a.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(a.OK,{children:(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"removePrincipal"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(child, parent)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"removePrincipal"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'player.1'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'group.moderator'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})}),(0,l.jsx)(a.OK,{children:(0,l.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/server'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".removePrincipal"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(child"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" parent)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".removePrincipal"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'player.1'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'group.moderator'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["child: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["parent: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n"]})]})}e.default=(0,i.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.a)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/ox_lib/Modules/ACL/Server.mdx",route:"/ox_lib/Modules/ACL/Server",timestamp:1730239145e3,title:"Server",headings:o},pageNextRoute:"/ox_lib/Modules/ACL/Server"})}},function(s){s.O(0,[4936,9774,2888,179],function(){return s(s.s=2558)}),_N_E=s.O()}]);