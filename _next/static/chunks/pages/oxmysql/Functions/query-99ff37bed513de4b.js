(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3958],{2903:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oxmysql/Functions/query",function(){return l(3610)}])},3610:function(s,e,l){"use strict";l.r(e),l.d(e,{__toc:function(){return c}});var n=l(2676),r=l(4936),o=l(6037),i=l(9780);let c=[{depth:2,value:"Promise",id:"promise"},{depth:2,value:"Callback",id:"callback"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",strong:"strong",ul:"ul",li:"li"},(0,o.a)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Query"}),"\n",(0,n.jsx)(e.p,{children:"When selecting data, returns all matching rows and columns; otherwise, returns data like insertId, affectedRows, etc."}),"\n",(0,n.jsx)(e.h2,{id:"promise",children:"Promise"}),"\n",(0,n.jsxs)(i.mQ,{items:["Lua","JS"],children:[(0,n.jsx)(i.OK,{children:(0,n.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" response "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" MySQL.query."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    identifier"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" response "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"#"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"response "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" row "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" response[i]"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(row.firstname, row.lastname)"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})})}),(0,n.jsx)(i.OK,{children:(0,n.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".query"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  identifier"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"])"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (response) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".forEach"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"((row) "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"row"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".identifier"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"row"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".firstname"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"row"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".lastname)"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  })"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Aliases"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"MySQL.Sync.fetchAll"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"exports.ghmattimysql.execute"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"exports.oxmysql.query_async"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"callback",children:"Callback"}),"\n",(0,n.jsxs)(i.mQ,{items:["Lua","JS"],children:[(0,n.jsx)(i.OK,{children:(0,n.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"MySQL."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"query"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    identifier"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}, "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"response"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" response "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"#"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"response "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" row "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" response[i]"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(row.firstname, row.lastname)"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})}),(0,n.jsx)(i.OK,{children:(0,n.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".query"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  identifier"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (response) "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (response) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".forEach"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"((row) "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"row"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".firstname"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"row"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".lastname)"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    })"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Aliases"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"MySQL.Async.fetchAll"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"exports.ghmattimysql.execute"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"exports.oxmysql.query"})}),"\n"]})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/oxmysql/Functions/query.mdx",route:"/oxmysql/Functions/query",frontMatter:{title:"query"},timestamp:1730239145e3,title:"query",headings:c},pageNextRoute:"/oxmysql/Functions/query"})}},function(s){s.O(0,[4936,9774,2888,179],function(){return s(s.s=2903)}),_N_E=s.O()}]);