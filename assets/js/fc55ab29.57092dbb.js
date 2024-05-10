"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[16590],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,s=d["".concat(o,".").concat(u)]||d[u]||y[u]||l;return a?n.createElement(s,i(i({ref:t},m),{},{components:a})):n.createElement(s,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g.mdxType="string"==typeof e?e:r,i[1]=g;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},40091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={id:"openai",title:"Monitoring OpenAI Account Status",sidebar_label:"OpenAI Account Status",keywords:["open source monitoring system","open source network monitoring","OpenAI account monitoring"]},i=void 0,g={unversionedId:"help/openai",id:"help/openai",title:"Monitoring OpenAI Account Status",description:"Preparation",source:"@site/docs/help/openai.md",sourceDirName:"help",slug:"/help/openai",permalink:"/docs/help/openai",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/help/openai.md",tags:[],version:"current",frontMatter:{id:"openai",title:"Monitoring OpenAI Account Status",sidebar_label:"OpenAI Account Status",keywords:["open source monitoring system","open source network monitoring","OpenAI account monitoring"]},sidebar:"docs",previous:{title:"Kubernetes Monitor",permalink:"/docs/help/kubernetes"},next:{title:"Huawei switch",permalink:"/docs/help/huawei_switch"}},o={},p=[{value:"Preparation",id:"preparation",level:3},{value:"Obtain Session Key",id:"obtain-session-key",level:4},{value:"Notes",id:"notes",level:3},{value:"Configuration Parameters",id:"configuration-parameters",level:3},{value:"Collection Metrics",id:"collection-metrics",level:3},{value:"Metric Set: Credit Grants",id:"metric-set-credit-grants",level:4},{value:"Metric Set: Model Cost",id:"metric-set-model-cost",level:4},{value:"Metric Set: Billing Subscription",id:"metric-set-billing-subscription",level:4}],m={toc:p};function y(e){let{components:t,...a}=e;return(0,r.yg)("wrapper",(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"preparation"},"Preparation"),(0,r.yg)("h4",{id:"obtain-session-key"},"Obtain Session Key"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"Open Chrome browser's network request interface\n",(0,r.yg)("inlineCode",{parentName:"li"},"Mac: cmd + option + i"),(0,r.yg)("inlineCode",{parentName:"li"},"Windows: ctrl + shift + i")),(0,r.yg)("li",{parentName:"ol"},"Visit ",(0,r.yg)("a",{parentName:"li",href:"https://platform.openai.com/usage"},"https://platform.openai.com/usage")),(0,r.yg)("li",{parentName:"ol"},"Find the request to ",(0,r.yg)("a",{parentName:"li",href:"https://api.openai.com/dashboard/billing/usage"},"https://api.openai.com/dashboard/billing/usage")),(0,r.yg)("li",{parentName:"ol"},"Find the Authorization field in the request headers, and copy the content after ",(0,r.yg)("inlineCode",{parentName:"li"},"Bearer"),". For example: ",(0,r.yg)("inlineCode",{parentName:"li"},"sess-123456")))),(0,r.yg)("h3",{id:"notes"},"Notes"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"Please ensure that HertzBeat has external network access capability. If unsure, you can try detecting by creating HTTP API monitoring for openai.com in HertzBeat."),(0,r.yg)("li",{parentName:"ol"},"The monitoring period should be at least greater than 120 seconds to avoid sending requests too frequently, resulting in return status code 429 (Too Many Requests)."))),(0,r.yg)("h3",{id:"configuration-parameters"},"Configuration Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Parameter Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Monitoring Host"),(0,r.yg)("td",{parentName:"tr",align:null},"Fill in api.openai.com here.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Task Name"),(0,r.yg)("td",{parentName:"tr",align:null},"Identify the name of this monitoring, ensuring uniqueness.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Session Key"),(0,r.yg)("td",{parentName:"tr",align:null},"The session key obtained in the preparation step.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Collector"),(0,r.yg)("td",{parentName:"tr",align:null},"Configure which collector to use for scheduling collection for this monitoring.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Monitoring Period"),(0,r.yg)("td",{parentName:"tr",align:null},"Interval time for periodic data collection, in seconds, with a minimum interval of 30 seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Bound Tags"),(0,r.yg)("td",{parentName:"tr",align:null},"Tags for managing classification of monitoring resources.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Description"),(0,r.yg)("td",{parentName:"tr",align:null},"Additional identification and description for this monitoring, users can leave remarks here.")))),(0,r.yg)("h3",{id:"collection-metrics"},"Collection Metrics"),(0,r.yg)("h4",{id:"metric-set-credit-grants"},"Metric Set: Credit Grants"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total Granted"),(0,r.yg)("td",{parentName:"tr",align:null},"USD ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"Total granted credit limit")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total Used"),(0,r.yg)("td",{parentName:"tr",align:null},"USD ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"Total used credit limit")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total Available"),(0,r.yg)("td",{parentName:"tr",align:null},"USD ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"Total available credit limit")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total Paid Available"),(0,r.yg)("td",{parentName:"tr",align:null},"USD ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"Total payable available credit limit")))),(0,r.yg)("h4",{id:"metric-set-model-cost"},"Metric Set: Model Cost"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Model Name"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the model")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Cost"),(0,r.yg)("td",{parentName:"tr",align:null},"USD ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"Expenses for the model")))),(0,r.yg)("h4",{id:"metric-set-billing-subscription"},"Metric Set: Billing Subscription"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Has Payment Method"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether payment method is available")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Canceled"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether subscription is cancelled")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Canceled At"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Time of subscription cancellation")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Delinquent"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether subscription is overdue")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Soft Limit"),(0,r.yg)("td",{parentName:"tr",align:null},"Times"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum usage limit in a certain period")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Hard Limit"),(0,r.yg)("td",{parentName:"tr",align:null},"Times"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum usage limit")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"System Hard Limit"),(0,r.yg)("td",{parentName:"tr",align:null},"Times"),(0,r.yg)("td",{parentName:"tr",align:null},"System hard limit usage")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Soft Limit USD"),(0,r.yg)("td",{parentName:"tr",align:null},"USD ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"Soft limit charge")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Hard Limit USD"),(0,r.yg)("td",{parentName:"tr",align:null},"USD ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"Hard limit charge")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"System Hard Limit USD"),(0,r.yg)("td",{parentName:"tr",align:null},"USD ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"System hard limit charge")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Plan"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Subscription plan")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Primary"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether it's a primary subscription")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Billing Mechanism"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Settlement mechanism")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Is Arrears Eligible"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether eligible for overdue")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Max Balance"),(0,r.yg)("td",{parentName:"tr",align:null},"USD ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum balance")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Auto Recharge Eligible"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether eligible for auto recharge")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Auto Recharge Enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether auto recharge is enabled")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Auto Recharge Threshold"),(0,r.yg)("td",{parentName:"tr",align:null},"USD ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"Auto recharge threshold")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Auto Recharge To Balance"),(0,r.yg)("td",{parentName:"tr",align:null},"USD ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"Auto recharge amount")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Trust Tier"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Credit level")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Account Name"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Account name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Po Number"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Purchase order")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Billing Email"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Billing email")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Tax IDs"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Tax IDs")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Billing Address"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Billing address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Business Address"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Business address")))))}y.isMDXComponent=!0}}]);