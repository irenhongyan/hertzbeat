"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[42216],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>d});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),i=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),u=i(a),d=n,c=u["".concat(o,".").concat(d)]||u[d]||y[d]||l;return a?r.createElement(c,p(p({ref:t},m),{},{components:a})):r.createElement(c,p({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=u;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g.mdxType="string"==typeof e?e:n,p[1]=g;for(var i=2;i<l;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85090:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>g,toc:()=>i});var r=a(58168),n=(a(96540),a(15680));const l={id:"kafka_promql",title:"\u76d1\u63a7\uff1aKafka-PromQL",sidebar_label:"Kafka-PromQL",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u4e2d\u95f4\u4ef6\u76d1\u63a7","Kafka\u76d1\u63a7","Kafka-PromQL\u76d1\u63a7"]},p=void 0,g={unversionedId:"help/kafka_promql",id:"help/kafka_promql",title:"\u76d1\u63a7\uff1aKafka-PromQL",description:"\u4f7f\u7528 Prometheus PromQL \u4ece Prometheus \u670d\u52a1\u5668\u4e2d\u67e5\u8be2\u5230 Kafka \u7684\u901a\u7528\u6307\u6807\u6570\u636e\u6765\u8fdb\u884c\u76d1\u63a7\u3002\u6b64\u65b9\u6848\u9002\u7528\u4e8e Prometheus \u5df2\u76d1\u63a7 Kafka\uff0c\u9700\u8981\u4ece Prometheus \u670d\u52a1\u5668\u6293\u53d6 Kafka \u7684\u76d1\u63a7\u6570\u636e\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/kafka_promql.md",sourceDirName:"help",slug:"/help/kafka_promql",permalink:"/zh-cn/docs/help/kafka_promql",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/kafka_promql.md",tags:[],version:"current",frontMatter:{id:"kafka_promql",title:"\u76d1\u63a7\uff1aKafka-PromQL",sidebar_label:"Kafka-PromQL",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u4e2d\u95f4\u4ef6\u76d1\u63a7","Kafka\u76d1\u63a7","Kafka-PromQL\u76d1\u63a7"]},sidebar:"docs",previous:{title:"OpenAI \u8d26\u6237\u60c5\u51b5",permalink:"/zh-cn/docs/help/openai"},next:{title:"InfluxDB-PromQL",permalink:"/zh-cn/docs/help/influxdb_promql"}},o={},i=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:3},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1akafka_brokers",id:"\u6307\u6807\u96c6\u5408kafka_brokers",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1a kafka_topic_partitions",id:"\u6307\u6807\u96c6\u5408-kafka_topic_partitions",level:4},{value:"HertzBeat\u652f\u6301\u7684\u5176\u4ed6Kafka\u76d1\u63a7\u65b9\u5f0f",id:"hertzbeat\u652f\u6301\u7684\u5176\u4ed6kafka\u76d1\u63a7\u65b9\u5f0f",level:3}],m={toc:i};function y(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u4f7f\u7528 Prometheus PromQL \u4ece Prometheus \u670d\u52a1\u5668\u4e2d\u67e5\u8be2\u5230 Kafka \u7684\u901a\u7528\u6307\u6807\u6570\u636e\u6765\u8fdb\u884c\u76d1\u63a7\u3002\u6b64\u65b9\u6848\u9002\u7528\u4e8e Prometheus \u5df2\u76d1\u63a7 Kafka\uff0c\u9700\u8981\u4ece Prometheus \u670d\u52a1\u5668\u6293\u53d6 Kafka \u7684\u76d1\u63a7\u6570\u636e\u3002")),(0,n.yg)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u90e8\u7f72 kafka\uff1b"),(0,n.yg)("li",{parentName:"ol"},"\u90e8\u7f72 kafka_exporter\uff1b"),(0,n.yg)("li",{parentName:"ol"},"\u901a\u8fc7 prometheus \u91c7\u96c6 kafka_exporter\u66b4\u9732\u7684\u76d1\u63a7\u6307\u6807\uff1b")),(0,n.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,n.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,n.yg)("td",{parentName:"tr",align:null},"Prometheus api \u7aef\u53e3\uff0c\u9ed8\u8ba4\u503c\uff1a9090\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u76f8\u5bf9\u8def\u5f84"),(0,n.yg)("td",{parentName:"tr",align:null},"Prometheus\u67e5\u8be2PromQL\u7684URL\uff0c\u9ed8\u8ba4\u503c\uff1a/api/v1/query\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u65b9\u5f0f"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u63a5\u53e3\u8c03\u7528\u7684\u8bf7\u6c42\u65b9\u5f0f\uff1aGET,POST,PUT,DELETE\uff0c\u9ed8\u8ba4\u503c\uff1aGET\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u542f\u7528HTTPS"),(0,n.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u901a\u8fc7HTTPS\u8bbf\u95ee\u7f51\u7ad9\uff0c\u6ce8\u610f\u26a0\ufe0f\u5f00\u542fHTTPS\u4e00\u822c\u9ed8\u8ba4\u5bf9\u5e94\u7aef\u53e3\u9700\u8981\u6539\u4e3a443\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,n.yg)("td",{parentName:"tr",align:null},"\u63a5\u53e3Basic\u8ba4\u8bc1\u6216Digest\u8ba4\u8bc1\u65f6\u4f7f\u7528\u7684\u7528\u6237\u540d\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,n.yg)("td",{parentName:"tr",align:null},"\u63a5\u53e3Basic\u8ba4\u8bc1\u6216Digest\u8ba4\u8bc1\u65f6\u4f7f\u7528\u7684\u5bc6\u7801\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Content-Type"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u643a\u5e26BODY\u8bf7\u6c42\u4f53\u6570\u636e\u8bf7\u6c42\u65f6\u7684\u8d44\u6e90\u7c7b\u578b\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42BODY"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u643a\u5e26BODY\u8bf7\u6c42\u4f53\u6570\u636e\uff0cPUT POST\u8bf7\u6c42\u65b9\u5f0f\u65f6\u6709\u6548\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,n.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,n.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f\u3002")))),(0,n.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,n.yg)("h4",{id:"\u6307\u6807\u96c6\u5408kafka_brokers"},"\u6307\u6807\u96c6\u5408\uff1akafka_brokers"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"_","_","name__"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"instance"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6307\u6807\u6240\u5c5e\u5b9e\u4f8b")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"timestamp"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u6307\u6807\u65f6\u95f4\u6233")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"value"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6307\u6807\u503c")))),(0,n.yg)("h4",{id:"\u6307\u6807\u96c6\u5408-kafka_topic_partitions"},"\u6307\u6807\u96c6\u5408\uff1a kafka_topic_partitions"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"_","_","name__"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"instance"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6307\u6807\u6240\u5c5e\u5b9e\u4f8b")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"timestamp"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u6307\u6807\u65f6\u95f4\u6233")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"value"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6307\u6807\u503c")))),(0,n.yg)("h3",{id:"hertzbeat\u652f\u6301\u7684\u5176\u4ed6kafka\u76d1\u63a7\u65b9\u5f0f"},"HertzBeat\u652f\u6301\u7684\u5176\u4ed6Kafka\u76d1\u63a7\u65b9\u5f0f"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"kafka\u542f\u7528\u4e86JMX\u76d1\u63a7\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"li",href:"kafka"},"Kafka")," \u76d1\u63a7\uff1b"),(0,n.yg)("li",{parentName:"ol"},"kafka\u96c6\u7fa4\u90e8\u7f72kafka_exporter\u66b4\u9732\u7684\u76d1\u63a7\u6307\u6807\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,n.yg)("a",{parentName:"li",href:"prometheus"},"Prometheus\u4efb\u52a1")," \u914d\u7f6ePrometheus\u91c7\u96c6\u4efb\u52a1\u76d1\u63a7kafka\u3002")))}y.isMDXComponent=!0}}]);