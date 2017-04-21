/*
 Nielsen SDK package v5.1.0.5-9 
 (c) 2017 The Nielsen Company 
*/
/* GGCMB build v5.1.0.41-3*/
!function(e,t){function n(e){return"undefined"!=typeof s&&"undefined"!=typeof c&&"undefined"!=typeof u?s+"//cdn-gl"+c:"https://cdn-gl.imrworldwide.com/"}function r(e){e&&e.hasOwnProperty("target")&&(L="true"===String(e.target).toLowerCase())}function a(){b=Date.now(),E=Math.ceil((b-O)/1e3)}function i(e){if(e&&e.hasOwnProperty("target")&&!isNaN(e.target))for(var t in h)!function(t){var n=h[t];if(void 0!==n&&n.hasOwnProperty("staticPage")&&n.staticPage.hasOwnProperty("evtParams")){var r=n.staticPage.evtParams;"static"===r.param1.type&&n.ggPM("48",e.target,"","","")}}(t)}function o(o){function l(e){F.staticPage.hasOwnProperty("evtParams")&&F.ggPM("56",F.staticPage.evtParams.param1,F.staticPage.evtParams.param2,F.staticPage.evtParams.param3,F.staticPage.evtParams.param4)}function g(e,t){if("string"==typeof e&&(e={type:e}),e.target||(e.target=t),!e.type)throw new Error("Event object missing 'type' property.");if(_[e.type]instanceof Array)for(var n=_[e.type],r=0,a=n.length;r<a;r++)n[r].call(F,t)}function v(e){try{if(!e||!e.hasOwnProperty("cmsMap"))return[];var t=[];for(var n in e.cmsMap)e.cmsMap.hasOwnProperty(n)&&e.cmsMap[n].indexOf("nol_")!==-1&&t.push(e.cmsMap[n].replace(/[{(\[\])}]/g,""));return t}catch(e){}}function y(t){try{var n="Error in retrieveMeta";if(t&&t.hasOwnProperty("fData")&&t.hasOwnProperty("ad")&&t.hasOwnProperty("content")&&t.hasOwnProperty("plid")){var r=v({cmsMap:e.GLCFG.PLDPR.getCmsMap(t.plid)});for(var a in t.fData)if(t.fData.hasOwnProperty(a)){var i=t.fData[a][Object.keys(t.fData[a]).splice(-1,1)];if("undefined"!=typeof i)for(var o in i){var s=String(o);s.indexOf("nol_")!==-1&&r.indexOf(s)===-1||(t[a][o]=i[o])}}return t}return t&&t.hasOwnProperty("err")?(t.err=n+": Missing passedFdata, Ad, content or static properties",t):{err:n}}catch(e){}}function h(t){t&&(t.registerListener("ggPM",F),t._listeners&&(t._listeners.addListener("updateCmbStaticPage",F.handleUpdateOfStatic),t._listeners.addListener("removeCmbAssetId",F.removeAsset),t._listeners.addListener("tick",function(){a(),g("globalTick",{time:b,seconds:E})}),t._listeners.addListener("dcrHeartbeat",i),t._listeners.addListener("flushQueue",F.emptyQueue),t._listeners.addListener("handleSessionReset",F.handleSessionReset),t._listeners.addListener("flushPauseEventQueue",F.flushPauseEventQueue),t._listeners.addListener("sendOptOutStatus",r)),e.GLCFG=t)}function P(e){if("undefined"!=typeof e&&(!e||e.hasOwnProperty("url")&&0!==e.url.length)&&e.hasOwnProperty("retryDelay")&&e.hasOwnProperty("currRetry")&&e.hasOwnProperty("maxRetry")){var n={requestUrl:function(){var t=this;try{return++e.currRetry>e.maxRetry?t.logErr("maxRetry reached"):t.sendUrlRequest(e.url)}catch(e){t.logErr("Error in fireToUrl requestUrl: "+e)}},sendUrlRequest:function(n){var r=this;try{if("undefined"==typeof n)return;var a=new Image;a.onerror=function(n){t.setTimeout(function(){r.requestUrl()},e.retryDelay)},a.onload=function(e){},a.src=n+"&retry="+e.currRetry}catch(e){r.logErr("Error in fireToUrl sendUrlRequest: "+e)}},logErr:function(e){e&&t.console&&t.console.log&&console.log("Error: ",e)}};n.requestUrl()}}var w,O,_={},C=[],S={},M=String(Date.now())+Math.round(1e4*Math.random()),I,N=5,T=-1,F={};F.id=M,F.name=o,F.initialized=!1,F.staticPage={},F.modules={allModInit:!1},F.configLoaded=!1,F.apid="",F.sdkv=f,F.sdkvForConfig=k;var B={_queueEventLog:!1,_eventLog:[],init:function(){try{var t=e.controllers.util.queryParam("nol_eventHookDelay");if(B._queueEventLog=!1,t){var n=parseInt(t);"NaN"!==n.toString()&&(B._queueEventLog=!0,setTimeout(function(){B._queueEventLog=!1},1e3*(n<=20?n:20)))}}catch(e){B._queueEventLog=!1}},trigger:function(t,n){try{if(n){var r=JSON.parse(JSON.stringify(n));r.name=t.name,B._queueEventLog?B._eventLog.push(r):(B._eventLog&&B._eventLog.length>0&&(e.controllers.util.fireCustomEvent("NSDK_EventHook",B._eventLog),B._eventLog=[]),e.controllers.util.fireCustomEvent("NSDK_EventHook",[r]))}}catch(e){}}},j=function(e,n){return function(r,a){try{n.browserSafeAddEventListener({element:t,eventType:"NSDK_Initialized",func:function(t){try{t.detail.instanceName===e&&r(t.detail.instance)}catch(e){a&&a(e.message)}}})}catch(e){a&&a(e.message)}}}(F.name,e);return F.getOptOutStatus=function(){return L},F.getId=function(){return M},F.GetName=function(){return F.name},F.Initialized=function(e){return"undefined"==typeof e?F.initialized:void(F.initialized=e)},F.getPauseQueueCount=function(){return Object&&Object.keys?Object.keys(S).length:0},F.removeAsset=function(e){"undefined"!=typeof e&&e.target.param1.hasOwnProperty("assetid")&&(F.staticPage={})},F.handleUpdateOfStatic=function(t){if(t&&t.target){var n=t.target.evtInfo;if(e.GLCFG&&e.GLCFG.PLDCR&&"undefined"!=typeof n&&n.param1.hasOwnProperty("assetid")&&F.getId()===t.target.plid){var r=e.GLCFG.PLDCR.latestDcrTick();0!==Object.keys(F.staticPage).length&&F.staticPage.hasOwnProperty("id")&&F.staticPage.id===n.param1.assetid&&F.staticPage.hasOwnProperty("lastTimeStamp")?F.staticPage.lastTimeStamp=r:F.staticPage={id:n.param1.assetid,evtParams:n,startTimeStamp:r,lastTimeStamp:r}}}},F.addListener=function(e,t){t&&("undefined"==typeof _[e]&&(_[e]=[]),_[e].push(t))},F.removeListener=function(e,t){if(F._listeners[e]instanceof Array)for(var n=_[e],r=0,a=n.length;r<a;r++)if(n[r]===t){n.splice(r,1);break}},F.handleSessionReset=function(e){if(e&&e.target&&e.target.hasOwnProperty("plid")&&M===e.target.plid&&e.target.hasOwnProperty("passedFdata")&&e.target.passedFdata.hasOwnProperty("_dataArrObj")&&e.target.passedFdata._dataArrObj){var t={plid:e.target.plid,fData:e.target.passedFdata._dataArrObj,content:{},ad:{},err:0};if(0===y(t).err&&e.target.passedFdata.hasOwnProperty("_currVidType")){var n=e.target.passedFdata._currVidType,r=Object.keys(t.content).length>0,a=Object.keys(t.ad).length>0;(r||a)&&(F.ggPM("57","1","","",""),r&&!S.hasOwnProperty("content")&&(S.content={evt:"pauseloadmeta",meta:t.content,plid:e.target.plid}))}}F._listeners&&F._listeners.fireEvent&&F._listeners.fireEvent("debug",{type:"debug",msg:"Fired handleSessionReset from ggcmb."})},F.flushPauseEventQueue=function(){if(!(Object.keys(S).length<=0)){if(F.modules.PLDPR){var e;for(e in S)g("ggPM",{evtInfo:{eventType:S[e].evt,param1:S[e].meta},id:M});S={}}F._listeners&&F._listeners.fireEvent&&F._listeners.fireEvent("debug",{type:"debug",msg:"Fired flushPauseEventQueue from ggcmb."})}},F.cloneObj=function(e){return e&&"object"==typeof e?JSON.parse(JSON.stringify(e)):e},F.ggPM=function(e,t,n,r,a){if(F.initialized&&void 0!==e&&null!==e&&""!==e){var i={};i.eventType=e,i.param1=F.cloneObj(t),i.param2=F.cloneObj(n),i.param3=F.cloneObj(r),i.param4=F.cloneObj(a),!F.modules.allModInit||2!=F.modules.PLCMB&&2!=F.modules.PLDPR?C.push(i):(F.emptyQueue(),g("ggPM",{evtInfo:i,id:M}),B.trigger(F,i))}},F.getConfigParams=function(){return O},F.emptyQueue=function(){if(!(C.length<=0)&&F.modules.allModInit&&(F.modules.PLCMB||F.modules.PLDPR)){for(var e=0,t=C.length;e<t;e+=1)g("ggPM",{evtInfo:C[e],id:M}),B.trigger(F,C[e]);C=[]}},F.getContainer=function(){return I},F.ggInitialize=function(t,r,a,i,o,l){if(F.initialized)return D.Promise(function(e,t){e(F)});B.init();var g,v,y,P="us",w="cdn-gl";if(I=l,O={ggParams:t,uid:a,oldFlashDetect:i,detectBrowser:o,nol_playerId:M},typeof t==typeof String()){for(g=e.loadXmlString("<vi>"+t+"</vi>"),v=g.firstChild.firstChild,y=0,t={};v&&"undefined"!=typeof v&&y<20;)null!==v.firstChild&&(t[v.nodeName]=v.firstChild.nodeValue),v=v.nextSibling,y++;O.ggParams=t}return O.ggParams.nol_sdkDebug=e.controllers.util.queryParam("nol_sdkDebug")||O.ggParams.nol_sdkDebug,F.Initialized(!0),f=t.nsdkv||f,P=t.sfcode||P,m=s+u+P+c,p=t.coreaddress?s+"//"+t.coreaddress+"/":n(t),k=t.sdkconfigver||k,F.apid=O.ggParams.apid,F.sdkv=f,e.loadLib("GLCFG",p+"novms/js/2/configs/"+d,e,h),D.Promise(j)},F.isViewable=function(){return!1},e.browserSafeAddEventListener({element:t,eventType:"beforeunload",useCapture:!1,func:function(e){F&&F.staticPage&&l(F.staticPage)}}),F}if(!e.isBuilt||!e.isBuilt()){var s=t.location.protocol.indexOf("https")!==-1?"https:":"http:",u="//secure-",l="https:"===t.location.protocol?"//sec":"//",c=".imrworldwide.com/",d="glcfg510.js",f="510",g={head:document.getElementsByTagName("head")[0].getElementsByTagName("script"),body:document.getElementsByTagName("script")},p=n(),m=s+"//secure-us.imrworldwide.com/",v="imrworldwide.com",y=864e5,h=e.getInstances?e.getInstances():{},P=1,w=5,O=0,b=0,E=0,_=!1,L=!1,C="//secure-gl.imrworldwide.com/cgi-bin/gn?prd=session&c9=devid,&c13=asid,",k="bj.5.0.0",S="5.1.0.41-3";Date.now=Date.now||function(){return+new Date};var D={Promise:function(e){try{var t=new Promise(function(e,t){});return new Promise(e)}catch(e){}var n=function(e){var t=function(e){r&&r(e)},n=function(e){a&&a(e)},r=null,a=null;return{then:function(i,o){r=i,a=o,e(t,n)}}};return new n(e)}};if(e.sdkvForConfig=function(){return k},e.isBuilt=function(){return _},e.getInstance=function(e){var t="undefined"!=typeof e&&("string"==typeof e||"object"==typeof e&&e.constructor===String)?e:"default";return h.hasOwnProperty(t)||(h[t]=o(t)),h[t]},e.setTotalNumAssetsAllowed=function(e){P=isNaN(e)?e:parseInt(e,10)},e.getAddress=function(){return p},e.getConfigAddress=function(){return m},e.getInstances=function(){return h},e.loadXmlString=function(e){var t=null;try{return t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e),t}catch(r){try{var n=new DOMParser;return t=n.parseFromString(e,"text/xml")}catch(e){}}return null},e.isNielsenTag=function(e){var t=!1;if("undefined"!=typeof e){var n=e.indexOf("?"),r=e.indexOf(v);r>-1&&r<n&&(t=!0)}return t},e.getVersion=function(){return f},e.send=function(e){e&&t.console&&t.console.log&&console.log(e.parentNode)},e.browserSafeAddEventListener=function(e){"undefined"!=typeof e.element&&(e.element.addEventListener?e.element.addEventListener(e.eventType,e.func,e.useCapture):e.element.attachEvent&&e.element.attachEvent("on"+e.eventType,e.func))},e.browserSafeRemoveEventListener=function(e){void 0!==e&&null!==e&&null!==e.element&&void 0!==e.element&&(e.element.removeEventListener?e.element.removeEventListener(e.eventType,e.func,e.useCapture):e.element.detachEvent&&e.element.detachEvent("on"+e.eventType,e.func))},e.controllers={util:function(e){!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}return"function"!=typeof t.CustomEvent&&(e.prototype=t.Event.prototype,void(t.CustomEvent=e))}();var n={fireCustomEvent:function(n,r,a){try{a=a||t,n&&a&&a.dispatchEvent(new CustomEvent(n,{detail:r}))}catch(t){e&&e._listeners&&e._listeners.fireEvent("error",{type:"error",msg:"Browser error attempting to call element.dispatchEvent()."})}}},r={queryParam:function(n){try{n=n.toString().toLowerCase();var r=t.location.search.substr(1).split("&"),a="";if(r.find)a=r.find(function(e){return 0===e.toLowerCase().indexOf(n+"=")});else for(var i=0,o=r.length;i<o;i++)if(0===r[i].toLowerCase().indexOf(n+"=")){a=r[i];break}if(a){var s=a.split("=");if(s&&s.length>1)return s[1]}}catch(t){e&&e._listeners&&e._listeners.fireEvent("error",{type:"error",msg:"Browser error attempting to retrieve query string parameter."})}return""}};return{fireCustomEvent:n.fireCustomEvent,queryParam:r.queryParam}}(e)},function(){var n={};e.loadLib=function(e,r,a,i){if(void 0!==e&&null!==e&&"string"==typeof e&&void 0!==r&&null!==r&&"string"==typeof r)if(n[e]){if(n[e].body)return void i(n[e].body(a));n[e].callbacks.push({func:i,arg:a})}else{n[e]={callbacks:[]},n[e].callbacks.push({func:i,arg:a});var o=t.document.createElement("script");o.async=!0,o.src=r,t.document.getElementsByTagName("head")[0].appendChild(o)}},e.registerLib=function(e,t){try{if(n){var r=n[e];r.body=t;for(var a=r.callbacks.shift();a;)a.func(r.body(a.arg)),a=r.callbacks.shift()}}catch(e){}}}(),t.gg_nol_FlashCallBack){for(var M=0,I,N=t.gg_nol_FlashCallBack.length;M<N;M+=1)t.gg_nol_FlashCallBack[M].hasOwnProperty("callBack")&&(I=document.getElementById(t.gg_nol_FlashCallBack[M].swfId),I&&I[t.gg_nol_FlashCallBack[M].callBack]());t.gg_nol_FlashCallBack=void 0}return _||(_=!0,O=b=Date.now(),e.BUILDVERSION=S),e}}(window.NOLCMB=window.NOLCMB||{},window);