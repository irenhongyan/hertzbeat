"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[77132],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),y=n,u=m["".concat(i,".").concat(y)]||m[y]||g[y]||o;return r?a.createElement(u,l(l({ref:t},s),{},{components:r})):a.createElement(u,l({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={id:"postgresql-change",title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4f7f\u7528 PostgreSQL \u66ff\u6362\u4f9d\u8d56\u7684 H2 \u5b58\u50a8\u7cfb\u7edf\u5143\u6570\u636e",sidebar_label:"\u5143\u6570\u636e\u4f7f\u7528PostgreSQL\u5b58\u50a8(\u53ef\u9009)"},l=void 0,p={unversionedId:"start/postgresql-change",id:"start/postgresql-change",title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4f7f\u7528 PostgreSQL \u66ff\u6362\u4f9d\u8d56\u7684 H2 \u5b58\u50a8\u7cfb\u7edf\u5143\u6570\u636e",description:"PostgreSQL\u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\uff0c\u5f00\u6e90\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff08RDBMS\uff09\u3002Apache HertzBeat(Incubating) \u9664\u4e86\u652f\u6301\u4f7f\u7528\u9ed8\u8ba4\u5185\u7f6e\u7684H2\u6570\u636e\u5e93\u5916\uff0c\u8fd8\u53ef\u4ee5\u5207\u6362\u4e3a\u4f7f\u7528PostgreSQL\u5b58\u50a8\u76d1\u63a7\u4fe1\u606f\uff0c\u544a\u8b66\u4fe1\u606f\uff0c\u914d\u7f6e\u4fe1\u606f\u7b49\u7ed3\u6784\u5316\u5173\u7cfb\u6570\u636e\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/start/postgresql-change.md",sourceDirName:"start",slug:"/start/postgresql-change",permalink:"/zh-cn/docs/start/postgresql-change",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/start/postgresql-change.md",tags:[],version:"current",frontMatter:{id:"postgresql-change",title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4f7f\u7528 PostgreSQL \u66ff\u6362\u4f9d\u8d56\u7684 H2 \u5b58\u50a8\u7cfb\u7edf\u5143\u6570\u636e",sidebar_label:"\u5143\u6570\u636e\u4f7f\u7528PostgreSQL\u5b58\u50a8(\u53ef\u9009)"},sidebar:"docs",previous:{title:"\u5143\u6570\u636e\u4f7f\u7528Mysql\u5b58\u50a8(\u53ef\u9009)",permalink:"/zh-cn/docs/start/mysql-change"},next:{title:"\u66f4\u65b0\u8d26\u6237\u548c\u5bc6\u94a5",permalink:"/zh-cn/docs/start/account-modify"}},i={},c=[{value:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5PostgreSQL",id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5postgresql",level:3},{value:"\u6570\u636e\u5e93\u521b\u5efa",id:"\u6570\u636e\u5e93\u521b\u5efa",level:3},{value:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6application.yml\u5207\u6362\u6570\u636e\u6e90",id:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6applicationyml\u5207\u6362\u6570\u636e\u6e90",level:3}],s={toc:c};function g(e){let{components:t,...r}=e;return(0,n.yg)("wrapper",(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"PostgreSQL\u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\uff0c\u5f00\u6e90\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff08RDBMS\uff09\u3002Apache HertzBeat(Incubating) \u9664\u4e86\u652f\u6301\u4f7f\u7528\u9ed8\u8ba4\u5185\u7f6e\u7684H2\u6570\u636e\u5e93\u5916\uff0c\u8fd8\u53ef\u4ee5\u5207\u6362\u4e3a\u4f7f\u7528PostgreSQL\u5b58\u50a8\u76d1\u63a7\u4fe1\u606f\uff0c\u544a\u8b66\u4fe1\u606f\uff0c\u914d\u7f6e\u4fe1\u606f\u7b49\u7ed3\u6784\u5316\u5173\u7cfb\u6570\u636e\u3002  "),(0,n.yg)("p",null,"\u6ce8\u610f\u26a0\ufe0f \u4f7f\u7528\u5916\u7f6ePostgreSQL\u6570\u636e\u5e93\u66ff\u6362\u5185\u7f6eH2\u6570\u636e\u5e93\u4e3a\u53ef\u9009\u9879\uff0c\u4f46\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e\uff0c\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u5df2\u6709PostgreSQL\u73af\u5883\uff0c\u53ef\u76f4\u63a5\u8df3\u5230\u6570\u636e\u5e93\u521b\u5efa\u90a3\u4e00\u6b65\u3002  ")),(0,n.yg)("h3",{id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5postgresql"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5PostgreSQL"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Download and install the Docker environment",(0,n.yg)("br",{parentName:"p"}),"\n","Docker tools download refer to ",(0,n.yg)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker official document"),"\u3002\nAfter the installation you can check if the Docker version normally output at the terminal."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Docker\u5b89\u88c5 PostgreSQL"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"$ docker run -d --name postgresql -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=123456 -e TZ=Asia/Shanghai postgresql:15       \n")),(0,n.yg)("p",{parentName:"li"},"\u4f7f\u7528",(0,n.yg)("inlineCode",{parentName:"p"},"$ docker ps"),"\u67e5\u770b\u6570\u636e\u5e93\u662f\u5426\u542f\u52a8\u6210\u529f")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create database in container manually or with ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/tree/master/script/docker-compose/hertzbeat-postgresql-iotdb/conf/sql/schema.sql"},"script"),"."))),(0,n.yg)("h3",{id:"\u6570\u636e\u5e93\u521b\u5efa"},"\u6570\u636e\u5e93\u521b\u5efa"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u8fdb\u5165 PostgreSQL \u6216\u4f7f\u7528\u5ba2\u6237\u7aef\u8fde\u63a5 PostgreSQL \u670d\u52a1 "),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"su - postgres\npsql\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u521b\u5efa\u540d\u79f0\u4e3ahertzbeat\u7684\u6570\u636e\u5e93",(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("inlineCode",{parentName:"p"},"CREATE DATABASE hertzbeat;"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u67e5\u770bhertzbeat\u6570\u636e\u5e93\u662f\u5426\u521b\u5efa\u6210\u529f",(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("inlineCode",{parentName:"p"},"\\l")))),(0,n.yg)("h3",{id:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6applicationyml\u5207\u6362\u6570\u636e\u6e90"},"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6application.yml\u5207\u6362\u6570\u636e\u6e90"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u914d\u7f6eHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6\n\u4fee\u6539\u4f4d\u4e8e ",(0,n.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u7684\u914d\u7f6e\u6587\u4ef6",(0,n.yg)("br",{parentName:"li"}),"\u6ce8\u610f\u26a0\ufe0fdocker\u5bb9\u5668\u65b9\u5f0f\u9700\u8981\u5c06application.yml\u6587\u4ef6\u6302\u8f7d\u5230\u4e3b\u673a\u672c\u5730,\u5b89\u88c5\u5305\u65b9\u5f0f\u89e3\u538b\u4fee\u6539\u4f4d\u4e8e ",(0,n.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u5373\u53ef\n\u66ff\u6362\u91cc\u9762\u7684",(0,n.yg)("inlineCode",{parentName:"li"},"spring.database"),"\u6570\u636e\u6e90\u53c2\u6570\uff0cIP\u7aef\u53e3\u8d26\u6237\u5bc6\u7801\u9a71\u52a8",(0,n.yg)("br",{parentName:"li"}),"\u26a0\ufe0f\u6ce8\u610f",(0,n.yg)("inlineCode",{parentName:"li"},"application.yml"),"\u6587\u4ef6\u5185\u5bb9\u9700\u5b8c\u6574\uff0c\u9664\u4e0b\u65b9\u4fee\u6539\u5185\u5bb9\u5916\u5176\u4ed6\u53c2\u6570\u9700\u4fdd\u7559\uff0c\u5b8c\u6574\u5185\u5bb9\u89c1",(0,n.yg)("a",{parentName:"li",href:"https://gitee.com/hertzbeat/hertzbeat/raw/master/script/application.yml"},"/script/application.yml"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: org.h2.Driver\n    username: sa\n    password: 123456\n    url: jdbc:h2:./data/hertzbeat;MODE=MYSQL\n")),(0,n.yg)("p",null,"\u5177\u4f53\u66ff\u6362\u53c2\u6570\u5982\u4e0b,\u9700\u6839\u636e PostgreSQL \u73af\u5883\u914d\u7f6e\u8d26\u6237\u5bc6\u7801IP:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n   config:\n      activate:\n         on-profile: prod\n   datasource:\n      driver-class-name: org.postgresql.Driver\n      username: root\n      password: 123456\n      url: jdbc:postgresql://127.0.0.1:5432/hertzbeat\n      hikari:\n         max-lifetime: 120000\n\n   jpa:\n      database: postgresql\n      hibernate:\n         ddl-auto: update\n      properties:\n         hibernate:\n            dialect: org.hibernate.dialect.PostgreSQLDialect\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u542f\u52a8 HertzBeat \u6d4f\u89c8\u5668\u8bbf\u95ee http://ip:1157/ \u5f00\u59cb\u4f7f\u7528HertzBeat\u8fdb\u884c\u76d1\u63a7\u544a\u8b66\uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/hertzbeat")))}g.isMDXComponent=!0}}]);