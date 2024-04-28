"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[78421],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),m=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(r),y=a,u=d["".concat(g,".").concat(y)]||d[y]||s[y]||l;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=r(58168),a=(r(96540),r(15680));const l={id:"hbase_master",title:"Monitoring Hbase Master",sidebar_label:"HbaseMaster Monitoring",keywords:["Open Source Monitoring System","Open Source Database Monitoring","HbaseMaster Monitoring"]},i=void 0,o={unversionedId:"help/hbase_master",id:"help/hbase_master",title:"Monitoring Hbase Master",description:"Collect monitoring data for general performance metrics of Hbase Master.",source:"@site/docs/help/hbase_master.md",sourceDirName:"help",slug:"/help/hbase_master",permalink:"/docs/help/hbase_master",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/help/hbase_master.md",tags:[],version:"current",frontMatter:{id:"hbase_master",title:"Monitoring Hbase Master",sidebar_label:"HbaseMaster Monitoring",keywords:["Open Source Monitoring System","Open Source Database Monitoring","HbaseMaster Monitoring"]},sidebar:"docs",previous:{title:"Hadoop",permalink:"/docs/help/hadoop"},next:{title:"HBase RegionServer Monitoring",permalink:"/docs/help/hbase_regionserver"}},g={},m=[{value:"Pre-monitoring steps",id:"pre-monitoring-steps",level:2},{value:"Configuration Parameters",id:"configuration-parameters",level:2},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Metric Set: server",id:"metric-set-server",level:4},{value:"Metric Set: Rit",id:"metric-set-rit",level:4},{value:"Metric Set: basic",id:"metric-set-basic",level:4}],p={toc:m};function s(e){let{components:t,...r}=e;return(0,a.yg)("wrapper",(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Collect monitoring data for general performance metrics of Hbase Master.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Protocol: HTTP")),(0,a.yg)("h2",{id:"pre-monitoring-steps"},"Pre-monitoring steps"),(0,a.yg)("p",null,"Check the ",(0,a.yg)("inlineCode",{parentName:"p"},"hbase-site.xml")," file to obtain the value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"hbase.master.info.port")," configuration item, which is used for monitoring."),(0,a.yg)("h2",{id:"configuration-parameters"},"Configuration Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Parameter Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Target Host"),(0,a.yg)("td",{parentName:"tr",align:null},"The IPv4, IPv6, or domain name of the monitored peer. Note: without protocol header (e.g., https://, http://).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Port"),(0,a.yg)("td",{parentName:"tr",align:null},"The port number of the Hbase master, default is 16010. That is, the value of the",(0,a.yg)("inlineCode",{parentName:"td"},"hbase.master.info.port")," parameter.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Task Name"),(0,a.yg)("td",{parentName:"tr",align:null},"The name identifying this monitoring, which needs to be unique.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Query Timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"The timeout setting for Kafka connection, in milliseconds, with a default of 3000 milliseconds.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Collection Interval"),(0,a.yg)("td",{parentName:"tr",align:null},"The periodic collection interval for monitoring data, in seconds, with the minimum allowable interval being 30 seconds.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Probe"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to probe and check the availability of monitoring before adding new monitoring, and proceed with the addition or modification operation only if the probe is successful.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Description"),(0,a.yg)("td",{parentName:"tr",align:null},"Additional notes and descriptions for this monitoring, users can add notes here.")))),(0,a.yg)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.yg)("h4",{id:"metric-set-server"},"Metric Set: server"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"numRegionServers"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Number of currently alive RegionServers")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"numDeadRegionServers"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Number of currently dead RegionServers")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"averageLoad"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Cluster average load")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clusterRequests"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Total number of cluster requests")))),(0,a.yg)("h4",{id:"metric-set-rit"},"Metric Set: Rit"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ritnone"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Current number of RIT")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ritnoneOverThreshold"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Number of RIT over the threshold")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ritOldestAge"),(0,a.yg)("td",{parentName:"tr",align:null},"ms"),(0,a.yg)("td",{parentName:"tr",align:null},"Duration of the oldest RIT")))),(0,a.yg)("h4",{id:"metric-set-basic"},"Metric Set: basic"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"liveRegionServers"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"List of currently active RegionServers")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"deadRegionServers"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"List of currently offline RegionServers")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"zookeeperQuorum"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Zookeeper list")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"masterHostName"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Master node")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"BalancerCluster_num_ops"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Number of cluster load balancing operations")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"numActiveHandler"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Number of RPC handlers")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"receivedBytes"),(0,a.yg)("td",{parentName:"tr",align:null},"MB"),(0,a.yg)("td",{parentName:"tr",align:null},"Cluster received data volume")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sentBytes"),(0,a.yg)("td",{parentName:"tr",align:null},"MB"),(0,a.yg)("td",{parentName:"tr",align:null},"Cluster sent data volume (MB)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clusterRequests"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"Total number of cluster requests")))))}s.isMDXComponent=!0}}]);