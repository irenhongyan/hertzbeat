"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[57481],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>h});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,g=m(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,d=c["".concat(s,".").concat(h)]||c[h]||l[h]||i;return r?a.createElement(d,o(o({ref:t},g),{},{components:r})):a.createElement(d,o({ref:t},g))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:n,o[1]=m;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const i={id:"introduce",title:"HertzBeat",sidebar_label:"Introduce",slug:"/"},o=void 0,m={unversionedId:"introduce",id:"version-v1.1.x/introduce",title:"HertzBeat",description:"An open source, real-time monitoring tool with custom-monitor and agentless.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/introduce.md",sourceDirName:".",slug:"/",permalink:"/docs/v1.1.x/",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/introduce.md",tags:[],version:"v1.1.x",frontMatter:{id:"introduce",title:"HertzBeat",sidebar_label:"Introduce",slug:"/"},sidebar:"docs",next:{title:"Quick Start",permalink:"/docs/v1.1.x/start/quickstart"}},s={},p=[{value:'\ud83c\udfa1 <font color="green">Introduction</font>',id:"-introduction",level:2},{value:"\ud83e\udd50 Architecture",id:"-architecture",level:2},{value:"\u26c4 Supported",id:"-supported",level:2}],g={toc:p};function l(e){let{components:t,...i}=e;return(0,n.yg)("wrapper",(0,a.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"An open source, real-time monitoring tool with custom-monitor and agentless.  ")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://discord.gg/Fb6M73htGr"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/chat-on%20discord-brightgreen",alt:"discord"})),"\n",(0,n.yg)("a",{parentName:"p",href:"https://qm.qq.com/q/FltGGGIX2m"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/qq-630061200-orange",alt:"QQ"})),"\n",(0,n.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/web-monitor.svg",alt:"hertzbeat"}),"\n",(0,n.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/ping-connect.svg",alt:"hertzbeat"}),"\n",(0,n.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/port-available.svg",alt:"hertzbeat"}),"\n",(0,n.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/database-monitor.svg",alt:"hertzbeat"}),"\n",(0,n.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/os-monitor.svg",alt:"hertzbeat"}),"\n",(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/monitor-cloud%20native-brightgreen",alt:"hertzbeat"}),"\n",(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/monitor-middleware-blueviolet",alt:"hertzbeat"}),"\n",(0,n.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/custom-monitor.svg",alt:"hertzbeat"}),"\n",(0,n.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/threshold.svg",alt:"hertzbeat"}),"\n",(0,n.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/badge/alert.svg",alt:"hertzbeat"})),(0,n.yg)("h2",{id:"-introduction"},"\ud83c\udfa1 ",(0,n.yg)("font",{color:"green"},"Introduction")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat")," is an open source, real-time monitoring tool with custom-monitor and agentless. Support web service, database, os, middleware and more.",(0,n.yg)("br",{parentName:"p"}),"\n","HertzBeat supports more liberal threshold alarm configuration (calculation expression), supports alarm notification, alarm template, ",(0,n.yg)("inlineCode",{parentName:"p"},"Discord")," ",(0,n.yg)("inlineCode",{parentName:"p"},"Slack")," ",(0,n.yg)("inlineCode",{parentName:"p"},"Telegram")," ",(0,n.yg)("inlineCode",{parentName:"p"},"Email")," ",(0,n.yg)("inlineCode",{parentName:"p"},"DingDing")," ",(0,n.yg)("inlineCode",{parentName:"p"},"WeChat")," ",(0,n.yg)("inlineCode",{parentName:"p"},"FeiShu")," ",(0,n.yg)("inlineCode",{parentName:"p"},"Webhook")," ",(0,n.yg)("inlineCode",{parentName:"p"},"SMS")," and more.",(0,n.yg)("br",{parentName:"p"}),"\n","Most important is HertzBeat supports ",(0,n.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/advanced/extend-point"},"Custom Monitoring"),", just by configuring the YML file, we can customize the monitoring types and metrics what we need.",(0,n.yg)("br",{parentName:"p"}),"\n","HertzBeat is modular, ",(0,n.yg)("inlineCode",{parentName:"p"},"manager, collector, scheduler, warehouse, alerter")," modules are decoupled for easy understanding and custom development.",(0,n.yg)("br",{parentName:"p"}),"\n","Welcome to join us to build hertzbeat together.  ")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"HertzBeat"),"'s multi-type support, easy expansion, low coupling, hope to help developers and micro teams to quickly build their own monitoring tool.")),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"hertzbeat",src:r(54715).A,width:"4064",height:"2166"})),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"hertzbeat",src:r(47075).A,width:"4064",height:"2166"})),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"-architecture"},"\ud83e\udd50 Architecture"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/manager"},"manager"))," Provide monitoring management, system management basic services.",(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"Provides monitoring management, monitoring configuration management, system user management, etc."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/collector"},"collector"))," Provide metrics data collection services.",(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"Use common protocols to remotely collect and obtain peer-to-peer metrics data."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/scheduler"},"scheduler"))," Provide monitoring task scheduling service.",(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"Collection task management, scheduling and distribution of one-time tasks and periodic tasks."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/warehouse"},"warehouse"))," Provide monitoring data warehousing services.",(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"Metrics data management, data query, calculation and statistics."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/alerter"},"alerter"))," Provide alert service.",(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"Alarm calculation trigger, monitoring status linkage, alarm configuration, and alarm notification."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/web-app"},"web-app"))," Provide web ui.",(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"Angular Web UI.   ")))),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"hertzBeat",src:r(72428).A,width:"2814",height:"1772"}),"  "),(0,n.yg)("h2",{id:"-supported"},"\u26c4 Supported"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-website.yml"},"Website"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-port.yml"},"Port Telnet"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-api.yml"},"Http Api"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-ping.yml"},"Ping Connect"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-jvm.yml"},"Jvm"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-fullsite.yml"},"SiteMap"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-ssl_cert.yml"},"Ssl Certificate"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-springboot2.yml"},"SpringBoot"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-ftp.yml"},"FTP Server")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-mysql.yml"},"Mysql"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-postgresql.yml"},"PostgreSQL"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-mariadb.yml"},"MariaDB"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-redis.yml"},"Redis"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-elasticsearch.yml"},"ElasticSearch"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-sqlserver.yml"},"SqlServer"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-oracle.yml"},"Oracle"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-mongodb.yml"},"MongoDB"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-dm.yml"},"DM"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-opengauss.yml"},"OpenGauss"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-clickhouse.yml"},"ClickHouse"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-iotdb.yml"},"IoTDB")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-linux.yml"},"Linux"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-ubuntu.yml"},"Ubuntu"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-centos.yml"},"CentOS"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-windows.yml"},"Windows")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-tomcat.yml"},"Tomcat"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-nacos.yml"},"Nacos"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-zookeeper.yml"},"Zookeeper"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-rabbitmq.yml"},"RabbitMQ"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-flink.yml"},"Flink"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-kafka.yml"},"Kafka"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-shenyu.yml"},"ShenYu"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-dynamic_tp.yml"},"DynamicTp"),",\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-jetty.yml"},"Jetty"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-activemq.yml"},"ActiveMQ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-kubernetes.yml"},"Kubernetes"),", ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/manager/src/main/resources/define/app-docker.yml"},"Docker")),(0,n.yg)("li",{parentName:"ul"},"And More Your Custom Define."),(0,n.yg)("li",{parentName:"ul"},"Notified Support ",(0,n.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Email")," ",(0,n.yg)("inlineCode",{parentName:"li"},"DingDing")," ",(0,n.yg)("inlineCode",{parentName:"li"},"WeChat")," ",(0,n.yg)("inlineCode",{parentName:"li"},"FeiShu")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Webhook")," ",(0,n.yg)("inlineCode",{parentName:"li"},"SMS"),".")))}l.isMDXComponent=!0},72428:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/hertzbeat-arch-758b3f08da56310b5f1fe1d1bfd99d82.png"},54715:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/1-9a3130cc082ba6455e02c4fa214c0532.png"},47075:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/9-26398db908550bf2e874d1e325215e46.png"}}]);