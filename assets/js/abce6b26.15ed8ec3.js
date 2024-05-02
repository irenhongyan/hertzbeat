"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[89190],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,g=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=l;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},41852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const i={id:"account-modify",title:"Modify Account Username Password And Secret",sidebar_label:"Update Account Secret"},s=void 0,o={unversionedId:"start/account-modify",id:"start/account-modify",title:"Modify Account Username Password And Secret",description:"Update Account",source:"@site/docs/start/account-modify.md",sourceDirName:"start",slug:"/start/account-modify",permalink:"/docs/start/account-modify",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/start/account-modify.md",tags:[],version:"current",frontMatter:{id:"account-modify",title:"Modify Account Username Password And Secret",sidebar_label:"Update Account Secret"},sidebar:"docs",previous:{title:"Install via Rainbond",permalink:"/docs/start/rainbond-deploy"},next:{title:"Version Upgrade Guide",permalink:"/docs/start/upgrade"}},c={},u=[{value:"Update Account",id:"update-account",level:2},{value:"Update Security Secret",id:"update-security-secret",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"update-account"},"Update Account"),(0,a.yg)("p",null,"Apache HertzBeat (incubating) default built-in three user accounts, respectively admin/hertzbeat tom/hertzbeat guest/hertzbeat",(0,a.yg)("br",{parentName:"p"}),"\n","If you need add, delete or modify account or password, configure ",(0,a.yg)("inlineCode",{parentName:"p"},"sureness.yml"),". Ignore this step without this demand.\nThe configuration file content refer to project repository",(0,a.yg)("a",{parentName:"p",href:"https://github.com/hertzbeat/hertzbeat/blob/master/script/sureness.yml"},"/script/sureness.yml"),(0,a.yg)("br",{parentName:"p"}),"\n","Modify the following ",(0,a.yg)("strong",{parentName:"p"},"part parameters")," in sureness.yml\uff1a",(0,a.yg)("strong",{parentName:"p"},"[Note\u26a0\ufe0fOther default sureness configuration parameters should be retained]")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"\nresourceRole:\n   - /api/account/auth/refresh===post===[admin,user,guest]\n   - /api/apps/**===get===[admin,user,guest]\n   - /api/monitor/**===get===[admin,user,guest]\n   - /api/monitor/**===post===[admin,user]\n   - /api/monitor/**===put===[admin,user]\n   - /api/monitor/**===delete==[admin]\n   - /api/monitors/**===get===[admin,user,guest]\n   - /api/monitors/**===post===[admin,user]\n   - /api/monitors/**===put===[admin,user]\n   - /api/monitors/**===delete===[admin]\n   - /api/alert/**===get===[admin,user,guest]\n   - /api/alert/**===post===[admin,user]\n   - /api/alert/**===put===[admin,user]\n   - /api/alert/**===delete===[admin]\n   - /api/alerts/**===get===[admin,user,guest]\n   - /api/alerts/**===post===[admin,user]\n   - /api/alerts/**===put===[admin,user]\n   - /api/alerts/**===delete===[admin]\n   - /api/notice/**===get===[admin,user,guest]\n   - /api/notice/**===post===[admin,user]\n   - /api/notice/**===put===[admin,user]\n   - /api/notice/**===delete===[admin]\n   - /api/tag/**===get===[admin,user,guest]\n   - /api/tag/**===post===[admin,user]\n   - /api/tag/**===put===[admin,user]\n   - /api/tag/**===delete===[admin]\n   - /api/summary/**===get===[admin,user,guest]\n   - /api/summary/**===post===[admin,user]\n   - /api/summary/**===put===[admin,user]\n   - /api/summary/**===delete===[admin]\n\n# Resources that need to be filtered and protected can be accessed directly without authentication\n# /api/v1/source3===get means /api/v1/source3===get it can be accessed by anyone. Don't need to authentication\nexcludedResource:\n   - /api/account/auth/**===*\n   - /api/i18n/**===get\n   - /api/apps/hierarchy===get\n   # web ui  the front-end static resource\n   - /===get\n   - /dashboard/**===get\n   - /monitors/**===get\n   - /alert/**===get\n   - /account/**===get\n   - /setting/**===get\n   - /passport/**===get\n   - /**/*.html===get\n   - /**/*.js===get\n   - /**/*.css===get\n   - /**/*.ico===get\n   - /**/*.ttf===get\n   - /**/*.png===get\n   - /**/*.gif===get\n   - /**/*.jpg===get\n   - /**/*.svg===get\n   - /**/*.json===get\n   # swagger ui resource\n   - /swagger-resources/**===get\n   - /v2/api-docs===get\n   - /v3/api-docs===get\n\n# user account information\n# Here is admin tom lili three accounts\n# eg: admin includes[admin,user]roles, password is hertzbeat \n# eg: tom includes[user], password is hertzbeat\n# eg: lili includes[guest],text password is lili, salt password is 1A676730B0C7F54654B0E09184448289\naccount:\n   - appId: admin\n     credential: hertzbeat\n     role: [admin,user]\n   - appId: tom\n     credential: hertzbeat\n     role: [user]\n   - appId: guest\n     credential: hertzbeat\n     role: [guest]\n")),(0,a.yg)("p",null,"Modify the following ",(0,a.yg)("strong",{parentName:"p"},"part parameters")," in sureness.yml ",(0,a.yg)("strong",{parentName:"p"},"[Note\u26a0\ufe0fOther default sureness configuration parameters should be retained]"),"\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"\n# user account information\n# Here is admin tom lili three accounts\n# eg: admin includes[admin,user]roles, password is hertzbeat \n# eg: tom includes[user], password is hertzbeat\n# eg: lili includes[guest], text password is lili, salt password is 1A676730B0C7F54654B0E09184448289\naccount:\n  - appId: admin\n    credential: hertzbeat\n    role: [admin,user]\n  - appId: tom\n    credential: hertzbeat\n    role: [user]\n  - appId: guest\n    credential: hertzbeat\n    role: [guest]\n")),(0,a.yg)("h2",{id:"update-security-secret"},"Update Security Secret"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"This secret is the key for account security encryption management and needs to be updated to your custom key string of the same length. ")),(0,a.yg)("p",null,"Update the ",(0,a.yg)("inlineCode",{parentName:"p"},"application.yml")," file in the ",(0,a.yg)("inlineCode",{parentName:"p"},"config")," directory, modify the ",(0,a.yg)("inlineCode",{parentName:"p"},"sureness.jwt.secret")," parameter to your custom key string of the same length.  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"sureness:\n  jwt:\n    secret: 'CyaFv0bwq2Eik0jdrKUtsA6bx3sDJeFV643R\n             LnfKefTjsIfJLBa2YkhEqEGtcHDTNe4CU6+9\n             8tVt4bisXQ13rbN0oxhUZR73M6EByXIO+SV5\n             dKhaX0csgOCTlCxq20yhmUea6H6JIpSE2Rwp'\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Restart HertzBeat, access http://ip:1157/ to explore")))}d.isMDXComponent=!0}}]);