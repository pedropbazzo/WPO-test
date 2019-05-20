allDescriptors.push(...[{"skip_compilation":["AppcacheTestRunner.js","CacheStorageTestRunner.js","IndexedDBTestRunner.js","ResourceTreeTestRunner.js","ResourcesTestRunner.js","ServiceWorkersTestRunner.js"],"dependencies":["test_runner","resources","console_test_runner","sources","sources_test_runner"],"name":"application_test_runner","scripts":["application_test_runner_module.js"]},{"dependencies":["heap_snapshot_model","platform","common"],"name":"heap_snapshot_worker","scripts":["heap_snapshot_worker_module.js"]},{"skip_compilation":["ElementsTestRunner.js","EditDOMTestRunner.js","SetOuterHTMLTestRunner.js","ElementsPanelShadowSelectionOnRefreshTestRunner.js","StylesUpdateLinksTestRunner.js"],"dependencies":["test_runner","elements","event_listeners","animation"],"name":"elements_test_runner","scripts":["elements_test_runner_module.js"]},{"skip_compilation":["ExtensionsNetworkTestRunner.js","ExtensionsTestRunner.js"],"dependencies":["test_runner","extensions"],"name":"extensions_test_runner","scripts":["extensions_test_runner_module.js"]},{"skip_compilation":["CoverageTestRunner.js"],"dependencies":["test_runner","coverage","sources_test_runner"],"name":"coverage_test_runner","scripts":["coverage_test_runner_module.js"]},{"dependencies":["sdk","workspace","ui","host","main"],"name":"test_runner"},{"skip_compilation":["LayersTestRunner.js"],"dependencies":["test_runner","layers","elements","components"],"name":"layers_test_runner","scripts":["layers_test_runner_module.js"]},{"dependencies":["test_runner","audits2"],"name":"audits2_test_runner","scripts":["audits2_test_runner_module.js"]},{"skip_compilation":["AccessibilityPaneTestRunner.js"],"dependencies":["test_runner","accessibility","elements_test_runner"],"name":"accessibility_test_runner","scripts":["accessibility_test_runner_module.js"]},{"skip_compilation":["NetworkTestRunner.js","ProductRegistryTestRunner.js"],"dependencies":["test_runner","product_registry_impl","console_test_runner"],"name":"network_test_runner","scripts":["network_test_runner_module.js"]},{"skip_compilation":["DeviceModeTestRunner.js"],"dependencies":["test_runner","emulation"],"name":"device_mode_test_runner","scripts":["device_mode_test_runner_module.js"]},{"skip_compilation":["DataGridTestRunner.js"],"dependencies":["test_runner","data_grid"],"name":"data_grid_test_runner","scripts":["data_grid_test_runner_module.js"]},{"skip_compilation":["HeapProfilerTestRunner.js"],"dependencies":["heap_snapshot_worker","test_runner","profiler","data_grid"],"name":"heap_profiler_test_runner","scripts":["heap_profiler_test_runner_module.js"]},{"skip_compilation":["ProfilerTestRunner.js"],"dependencies":["profiler","test_runner"],"name":"cpu_profiler_test_runner","scripts":["cpu_profiler_test_runner_module.js"]},{"skip_compilation":["TimelineTestRunner.js","TimelineDataTestRunner.js"],"dependencies":["test_runner","timeline_model","timeline"],"name":"performance_test_runner","scripts":["performance_test_runner_module.js"]},{"skip_compilation":["DebuggerTestRunner.js","LiveEditTestRunner.js","SearchTestRunner.js","SourcesTestRunner.js","EditorTestRunner.js","AutocompleteTestRunner.js"],"dependencies":["test_runner","sources","workspace","source_frame","text_utils","browser_debugger"],"name":"sources_test_runner","scripts":["sources_test_runner_module.js"]},{"skip_compilation":["BindingsTestRunner.js","IsolatedFilesystemTestRunner.js","AutomappingTestRunner.js","PersistenceTestRunner.js","OverridesTestRunner.js"],"dependencies":["test_runner","workspace","diff","bindings","persistence"],"name":"bindings_test_runner","scripts":["bindings_test_runner_module.js"]},{"skip_compilation":["PageMockTestRunner.js"],"dependencies":["sdk","test_runner"],"name":"sdk_test_runner","scripts":["sdk_test_runner_module.js"]},{"dependencies":["test_runner","console","console_counters"],"name":"console_test_runner","scripts":["console_test_runner_module.js"]},{"skip_compilation":["SecurityTestRunner.js"],"dependencies":["test_runner","security"],"name":"security_test_runner","scripts":["security_test_runner_module.js"]}]);applicationDescriptor.modules.push(...[{"name":"application_test_runner"},{"name":"heap_snapshot_worker"},{"name":"elements_test_runner"},{"name":"extensions_test_runner"},{"name":"coverage_test_runner"},{"type":"autostart","name":"test_runner"},{"name":"layers_test_runner"},{"name":"audits2_test_runner"},{"name":"network_test_runner"},{"name":"device_mode_test_runner"},{"name":"sources_test_runner"},{"name":"data_grid_test_runner"},{"name":"heap_profiler_test_runner"},{"name":"cpu_profiler_test_runner"},{"name":"performance_test_runner"},{"name":"accessibility_test_runner"},{"name":"bindings_test_runner"},{"name":"sdk_test_runner"},{"name":"console_test_runner"},{"name":"security_test_runner"}])
self['TestRunner']=self['TestRunner']||{};self.testRunner;TestRunner.setupStartupTest=function(path){const absoluteURL=TestRunner.url(path);self.testRunner.navigateSecondaryWindow(absoluteURL);return new Promise(f=>TestRunner._startupTestSetupFinished=()=>{TestRunner._initializeTargetForStartupTest();delete TestRunner._startupTestSetupFinished;f();});};TestRunner._executeTestScript=function(){const testScriptURL=(Runtime.queryParam('test'));fetch(testScriptURL).then(data=>data.text()).then(testScript=>{if(TestRunner._isDebugTest()){TestRunner.addResult=console.log;TestRunner.completeTest=()=>console.log('Test completed');if(!self.testRunner)
eval(`(function test(){${testScript}})()\n//# sourceURL=${testScriptURL}`);else
self.eval(`function test(){${testScript}}\n//# sourceURL=${testScriptURL}`);return;}
testScript=testScript.trimRight();if(testScript.endsWith(';'))
testScript=testScript.slice(0,testScript.length-1);(async function(){try{await eval(testScript+`\n//# sourceURL=${testScriptURL}`);}catch(err){TestRunner.addResult('TEST ENDED EARLY DUE TO UNCAUGHT ERROR:');TestRunner.addResult(err&&err.stack||err);TestRunner.addResult('=== DO NOT COMMIT THIS INTO -expected.txt ===');TestRunner.completeTest();}})();}).catch(error=>{TestRunner.addResult(`Unable to execute test script because of error: ${error}`);TestRunner.completeTest();});};TestRunner._results=[];TestRunner.completeTest=function(){TestRunner.flushResults();self.testRunner.notifyDone();};TestRunner.flushResults=function(){Array.prototype.forEach.call(document.documentElement.childNodes,x=>x.remove());const outputElement=document.createElement('div');if(outputElement.style){outputElement.style.whiteSpace='pre';outputElement.style.height='10px';outputElement.style.overflow='hidden';}
document.documentElement.appendChild(outputElement);for(let i=0;i<TestRunner._results.length;i++){outputElement.appendChild(document.createTextNode(TestRunner._results[i]));outputElement.appendChild(document.createElement('br'));}
TestRunner._results=[];};TestRunner.addResult=function(text){TestRunner._results.push(String(text));};TestRunner.addResults=function(textArray){if(!textArray)
return;for(let i=0,size=textArray.length;i<size;++i)
TestRunner.addResult(textArray[i]);};TestRunner.runTests=function(tests){nextTest();function nextTest(){const test=tests.shift();if(!test){TestRunner.completeTest();return;}
TestRunner.addResult('\ntest: '+test.name);let testPromise=test();if(!(testPromise instanceof Promise))
testPromise=Promise.resolve();testPromise.then(nextTest);}};TestRunner.addSniffer=function(receiver,methodName,override,opt_sticky){override=TestRunner.safeWrap(override);const original=receiver[methodName];if(typeof original!=='function')
throw new Error('Cannot find method to override: '+methodName);receiver[methodName]=function(var_args){let result;try{result=original.apply(this,arguments);}finally{if(!opt_sticky)
receiver[methodName]=original;}
try{Array.prototype.push.call(arguments,result);override.apply(this,arguments);}catch(e){throw new Error('Exception in overriden method \''+methodName+'\': '+e);}
return result;};};TestRunner.addSnifferPromise=function(receiver,methodName){return new Promise(function(resolve,reject){const original=receiver[methodName];if(typeof original!=='function'){reject('Cannot find method to override: '+methodName);return;}
receiver[methodName]=function(var_args){let result;try{result=original.apply(this,arguments);}finally{receiver[methodName]=original;}
try{Array.prototype.push.call(arguments,result);resolve.apply(this,arguments);}catch(e){reject('Exception in overridden method \''+methodName+'\': '+e);TestRunner.completeTest();}
return result;};});};TestRunner._resolveOnFinishInits;TestRunner.loadModule=async function(module){const promise=new Promise(resolve=>TestRunner._resolveOnFinishInits=resolve);await self.runtime.loadModulePromise(module);if(!TestRunner._pendingInits)
return;return promise;};TestRunner.showPanel=function(panel){return UI.viewManager.showView(panel);};TestRunner.createKeyEvent=function(key,ctrlKey,altKey,shiftKey,metaKey){return new KeyboardEvent('keydown',{key:key,bubbles:true,cancelable:true,ctrlKey:!!ctrlKey,altKey:!!altKey,shiftKey:!!shiftKey,metaKey:!!metaKey});};TestRunner.safeWrap=function(func,onexception){function result(){if(!func)
return;const wrapThis=this;try{return func.apply(wrapThis,arguments);}catch(e){TestRunner.addResult('Exception while running: '+func+'\n'+(e.stack||e));if(onexception)
TestRunner.safeWrap(onexception)();else
TestRunner.completeTest();}}
return result;};TestRunner.textContentWithLineBreaks=function(node){function padding(currentNode){let result=0;while(currentNode&&currentNode!==node){if(currentNode.nodeName==='OL'&&!(currentNode.classList&&currentNode.classList.contains('object-properties-section')))
++result;currentNode=currentNode.parentNode;}
return Array(result*4+1).join(' ');}
let buffer='';let currentNode=node;let ignoreFirst=false;while(currentNode.traverseNextNode(node)){currentNode=currentNode.traverseNextNode(node);if(currentNode.nodeType===Node.TEXT_NODE){buffer+=currentNode.nodeValue;}else if(currentNode.nodeName==='LI'||currentNode.nodeName==='TR'){if(!ignoreFirst)
buffer+='\n'+padding(currentNode);else
ignoreFirst=false;}else if(currentNode.nodeName==='STYLE'){currentNode=currentNode.traverseNextNode(node);continue;}else if(currentNode.classList&&currentNode.classList.contains('object-properties-section')){ignoreFirst=true;}}
return buffer;};TestRunner.textContentWithoutStyles=function(node){let buffer='';let currentNode=node;while(currentNode.traverseNextNode(node)){currentNode=currentNode.traverseNextNode(node);if(currentNode.nodeType===Node.TEXT_NODE)
buffer+=currentNode.nodeValue;else if(currentNode.nodeName==='STYLE')
currentNode=currentNode.traverseNextNode(node);}
return buffer;};TestRunner._setupTestHelpers=function(target){TestRunner.BrowserAgent=target.browserAgent();TestRunner.CSSAgent=target.cssAgent();TestRunner.DeviceOrientationAgent=target.deviceOrientationAgent();TestRunner.DOMAgent=target.domAgent();TestRunner.DOMDebuggerAgent=target.domdebuggerAgent();TestRunner.DebuggerAgent=target.debuggerAgent();TestRunner.EmulationAgent=target.emulationAgent();TestRunner.HeapProfilerAgent=target.heapProfilerAgent();TestRunner.InspectorAgent=target.inspectorAgent();TestRunner.NetworkAgent=target.networkAgent();TestRunner.OverlayAgent=target.overlayAgent();TestRunner.PageAgent=target.pageAgent();TestRunner.ProfilerAgent=target.profilerAgent();TestRunner.RuntimeAgent=target.runtimeAgent();TestRunner.TargetAgent=target.targetAgent();TestRunner.networkManager=target.model(SDK.NetworkManager);TestRunner.securityOriginManager=target.model(SDK.SecurityOriginManager);TestRunner.resourceTreeModel=target.model(SDK.ResourceTreeModel);TestRunner.debuggerModel=target.model(SDK.DebuggerModel);TestRunner.runtimeModel=target.model(SDK.RuntimeModel);TestRunner.domModel=target.model(SDK.DOMModel);TestRunner.domDebuggerModel=target.model(SDK.DOMDebuggerModel);TestRunner.cssModel=target.model(SDK.CSSModel);TestRunner.cpuProfilerModel=target.model(SDK.CPUProfilerModel);TestRunner.overlayModel=target.model(SDK.OverlayModel);TestRunner.serviceWorkerManager=target.model(SDK.ServiceWorkerManager);TestRunner.tracingManager=target.model(SDK.TracingManager);TestRunner.mainTarget=target;};TestRunner.evaluateInPageRemoteObject=async function(code){const response=await TestRunner._evaluateInPage(code);return TestRunner.runtimeModel.createRemoteObject(response.result);};TestRunner.evaluateInPage=async function(code,callback){const response=await TestRunner._evaluateInPage(code);TestRunner.safeWrap(callback)(response.result.value,response.exceptionDetails);};TestRunner._evaluateInPageCounter=0;TestRunner._evaluateInPage=async function(code){const lines=new Error().stack.split('at ');const testScriptURL=(Runtime.queryParam('test'));const functionLine=lines.reduce((acc,line)=>line.includes(testScriptURL)?line:acc,lines[lines.length-2]);const components=functionLine.trim().split('/');const source=components[components.length-1].slice(0,-1).split(':');const fileName=source[0];const sourceURL=`test://evaluations/${TestRunner._evaluateInPageCounter++}/`+fileName;const lineOffset=parseInt(source[1],10);code='\n'.repeat(lineOffset-1)+code;if(code.indexOf('sourceURL=')===-1)
code+=`//# sourceURL=${sourceURL}`;const response=await TestRunner.RuntimeAgent.invoke_evaluate({expression:code,objectGroup:'console'});const error=response[Protocol.Error];if(error){TestRunner.addResult('Error: '+error);TestRunner.completeTest();return;}
return response;};TestRunner.evaluateInPageAnonymously=async function(code,userGesture){const response=await TestRunner.RuntimeAgent.invoke_evaluate({expression:code,objectGroup:'console',userGesture});if(!response[Protocol.Error])
return response.result.value;TestRunner.addResult('Error: '+
(response.exceptionDetails&&response.exceptionDetails.text||'exception from evaluateInPageAnonymously.'));TestRunner.completeTest();};TestRunner.evaluateInPagePromise=function(code){return new Promise(success=>TestRunner.evaluateInPage(code,success));};TestRunner.evaluateInPageAsync=async function(code){const response=await TestRunner.RuntimeAgent.invoke_evaluate({expression:code,objectGroup:'console',includeCommandLineAPI:false,awaitPromise:true});const error=response[Protocol.Error];if(!error&&!response.exceptionDetails)
return response.result.value;TestRunner.addResult('Error: '+
(error||response.exceptionDetails&&response.exceptionDetails.text||'exception while evaluation in page.'));TestRunner.completeTest();};TestRunner.callFunctionInPageAsync=function(name,args){args=args||[];return TestRunner.evaluateInPageAsync(name+'('+args.map(a=>JSON.stringify(a)).join(',')+')');};TestRunner.evaluateInPageWithTimeout=function(code,userGesture){TestRunner.evaluateInPageAnonymously('setTimeout(unescape(\''+escape(code)+'\'), 1)',userGesture);};TestRunner.evaluateFunctionInOverlay=function(func,callback){const expression='internals.evaluateInInspectorOverlay("(" + '+func+' + ")()")';const mainContext=TestRunner.runtimeModel.executionContexts()[0];mainContext.evaluate({expression:expression,objectGroup:'',includeCommandLineAPI:false,silent:false,returnByValue:true,generatePreview:false},false,false).then(result=>void callback(result.object.value));};TestRunner.check=function(passCondition,failureText){if(!passCondition)
TestRunner.addResult('FAIL: '+failureText);};TestRunner.deprecatedRunAfterPendingDispatches=function(callback){const targets=SDK.targetManager.targets();const promises=targets.map(target=>new Promise(resolve=>target._deprecatedRunAfterPendingDispatches(resolve)));Promise.all(promises).then(TestRunner.safeWrap(callback));};TestRunner.loadHTML=function(html){if(!html.includes('<base')){const doctypeRegex=/(<!DOCTYPE.*?>)/i;const baseTag=`<base href="${TestRunner.url()}">`;if(html.match(doctypeRegex))
html=html.replace(doctypeRegex,'$1'+baseTag);else
html=baseTag+html;}
html=html.replace(/'/g,'\\\'').replace(/\n/g,'\\n');return TestRunner.evaluateInPageAnonymously(`document.write(\`${html}\`);document.close();`);};TestRunner.addScriptTag=function(path){return TestRunner.evaluateInPageAsync(`
    (function(){
      let script = document.createElement('script');
      script.src = '${path}';
      document.head.append(script);
      return new Promise(f => script.onload = f);
    })();
  `);};TestRunner.addStylesheetTag=function(path){return TestRunner.evaluateInPageAsync(`
    (function(){
      let link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = '${path}';
      link.onload = onload;
      document.head.append(link);
      let resolve;
      let promise = new Promise(r => resolve = r);
      function onload() {
        // TODO(chenwilliam): It shouldn't be necessary to force
        // style recalc here but some tests rely on it.
        window.getComputedStyle(document.body).color;
        resolve();
      }
      return promise;
    })();
  `);};TestRunner.addHTMLImport=function(path){return TestRunner.evaluateInPageAsync(`
    (function(){
      let link = document.createElement('link');
      link.rel = 'import';
      link.href = '${path}';
      let promise = new Promise(r => link.onload = r);
      document.body.append(link);
      return promise;
    })();
  `);};TestRunner.addIframe=function(path,options={}){options.id=options.id||'';options.name=options.name||'';return TestRunner.evaluateInPageAsync(`
    (function(){
      let iframe = document.createElement('iframe');
      iframe.src = '${path}';
      iframe.id = '${options.id}';
      iframe.name = '${options.name}';
      document.body.appendChild(iframe);
      return new Promise(f => iframe.onload = f);
    })();
  `);};TestRunner._pendingInits=0;TestRunner.deprecatedInitAsync=async function(code){TestRunner._pendingInits++;await TestRunner.RuntimeAgent.invoke_evaluate({expression:code,objectGroup:'console'});TestRunner._pendingInits--;if(!TestRunner._pendingInits)
TestRunner._resolveOnFinishInits();};TestRunner.markStep=function(title){TestRunner.addResult('\nRunning: '+title);};TestRunner.startDumpingProtocolMessages=function(){const untypedConnection=(Protocol.InspectorBackend.Connection);untypedConnection.prototype._dumpProtocolMessage=self.testRunner.logToStderr.bind(self.testRunner);Protocol.InspectorBackend.Options.dumpInspectorProtocolMessages=1;};TestRunner.addScriptForFrame=function(url,content,frame){content+='\n//# sourceURL='+url;const executionContext=TestRunner.runtimeModel.executionContexts().find(context=>context.frameId===frame.id);TestRunner.RuntimeAgent.evaluate(content,'console',false,false,executionContext.id);};TestRunner.formatters={};TestRunner.formatters.formatAsTypeName=function(value){return'<'+typeof value+'>';};TestRunner.formatters.formatAsTypeNameOrNull=function(value){if(value===null)
return'null';return TestRunner.formatters.formatAsTypeName(value);};TestRunner.formatters.formatAsRecentTime=function(value){if(typeof value!=='object'||!(value instanceof Date))
return TestRunner.formatters.formatAsTypeName(value);const delta=Date.now()-value;return 0<=delta&&delta<30*60*1000?'<plausible>':value;};TestRunner.formatters.formatAsURL=function(value){if(!value)
return value;const lastIndex=value.lastIndexOf('devtools/');if(lastIndex<0)
return value;return'.../'+value.substr(lastIndex);};TestRunner.formatters.formatAsDescription=function(value){if(!value)
return value;return'"'+value.replace(/^function [gs]et /,'function ')+'"';};TestRunner.CustomFormatters;TestRunner.addObject=function(object,customFormatters,prefix,firstLinePrefix){prefix=prefix||'';firstLinePrefix=firstLinePrefix||prefix;TestRunner.addResult(firstLinePrefix+'{');const propertyNames=Object.keys(object);propertyNames.sort();for(let i=0;i<propertyNames.length;++i){const prop=propertyNames[i];if(!object.hasOwnProperty(prop))
continue;const prefixWithName='    '+prefix+prop+' : ';const propValue=object[prop];if(customFormatters&&customFormatters[prop]){const formatterName=customFormatters[prop];if(formatterName!=='skip'){const formatter=TestRunner.formatters[formatterName];TestRunner.addResult(prefixWithName+formatter(propValue));}}else{TestRunner.dump(propValue,customFormatters,'    '+prefix,prefixWithName);}}
TestRunner.addResult(prefix+'}');};TestRunner.addArray=function(array,customFormatters,prefix,firstLinePrefix){prefix=prefix||'';firstLinePrefix=firstLinePrefix||prefix;TestRunner.addResult(firstLinePrefix+'[');for(let i=0;i<array.length;++i)
TestRunner.dump(array[i],customFormatters,prefix+'    ');TestRunner.addResult(prefix+']');};TestRunner.dumpDeepInnerHTML=function(node){function innerHTML(prefix,node){const openTag=[];if(node.nodeType===Node.TEXT_NODE){if(!node.parentElement||node.parentElement.nodeName!=='STYLE')
TestRunner.addResult(node.nodeValue);return;}
openTag.push('<'+node.nodeName);const attrs=node.attributes;for(let i=0;attrs&&i<attrs.length;++i)
openTag.push(attrs[i].name+'='+attrs[i].value);openTag.push('>');TestRunner.addResult(prefix+openTag.join(' '));for(let child=node.firstChild;child;child=child.nextSibling)
innerHTML(prefix+'    ',child);if(node.shadowRoot)
innerHTML(prefix+'    ',node.shadowRoot);TestRunner.addResult(prefix+'</'+node.nodeName+'>');}
innerHTML('',node);};TestRunner.deepTextContent=function(node){if(!node)
return'';if(node.nodeType===Node.TEXT_NODE&&node.nodeValue)
return!node.parentElement||node.parentElement.nodeName!=='STYLE'?node.nodeValue:'';let res='';const children=node.childNodes;for(let i=0;i<children.length;++i)
res+=TestRunner.deepTextContent(children[i]);if(node.shadowRoot)
res+=TestRunner.deepTextContent(node.shadowRoot);return res;};TestRunner.dump=function(value,customFormatters,prefix,prefixWithName){prefixWithName=prefixWithName||prefix;if(prefixWithName&&prefixWithName.length>80){TestRunner.addResult(prefixWithName+'was skipped due to prefix length limit');return;}
if(value===null)
TestRunner.addResult(prefixWithName+'null');else if(value&&value.constructor&&value.constructor.name==='Array')
TestRunner.addArray((value),customFormatters,prefix,prefixWithName);else if(typeof value==='object')
TestRunner.addObject((value),customFormatters,prefix,prefixWithName);else if(typeof value==='string')
TestRunner.addResult(prefixWithName+'"'+value+'"');else
TestRunner.addResult(prefixWithName+value);};TestRunner.dumpObjectPropertyTreeElement=function(treeElement){const expandedSubstring=treeElement.expanded?'[expanded]':'[collapsed]';TestRunner.addResult(expandedSubstring+' '+treeElement.listItemElement.deepTextContent());for(let i=0;i<treeElement.childCount();++i){const property=treeElement.childAt(i).property;const key=property.name;const value=property.value._description;TestRunner.addResult('    '+key+': '+value);}};TestRunner.waitForEvent=function(event,obj,condition){condition=condition||function(){return true;};return new Promise(resolve=>{obj.addEventListener(event,onEventFired);function onEventFired(event){if(!condition(event.data))
return;obj.removeEventListener(event,onEventFired);resolve(event.data);}});};TestRunner.waitForTarget=function(filter){filter=filter||(target=>true);for(const target of SDK.targetManager.targets()){if(filter(target))
return Promise.resolve(target);}
return new Promise(fulfill=>{const observer=({targetAdded:function(target){if(filter(target)){SDK.targetManager.unobserveTargets(observer);fulfill(target);}},targetRemoved:function(){},});SDK.targetManager.observeTargets(observer);});};TestRunner.waitForExecutionContext=function(runtimeModel){if(runtimeModel.executionContexts().length)
return Promise.resolve(runtimeModel.executionContexts()[0]);return runtimeModel.once(SDK.RuntimeModel.Events.ExecutionContextCreated);};TestRunner.waitForExecutionContextDestroyed=function(context){const runtimeModel=context.runtimeModel;if(runtimeModel.executionContexts().indexOf(context)===-1)
return Promise.resolve();return TestRunner.waitForEvent(SDK.RuntimeModel.Events.ExecutionContextDestroyed,runtimeModel,destroyedContext=>destroyedContext===context);};TestRunner.assertGreaterOrEqual=function(a,b,message){if(a<b)
TestRunner.addResult('FAILED: '+(message?message+': ':'')+a+' < '+b);};TestRunner.navigate=function(url,callback){TestRunner._pageLoadedCallback=TestRunner.safeWrap(callback);TestRunner.resourceTreeModel.addEventListener(SDK.ResourceTreeModel.Events.Load,TestRunner._pageNavigated);TestRunner.evaluateInPageAnonymously('window.location.replace(\''+url+'\')');};TestRunner.navigatePromise=function(url){return new Promise(fulfill=>TestRunner.navigate(url,fulfill));};TestRunner._pageNavigated=function(){TestRunner.resourceTreeModel.removeEventListener(SDK.ResourceTreeModel.Events.Load,TestRunner._pageNavigated);TestRunner._handlePageLoaded();};TestRunner.hardReloadPage=function(callback){TestRunner._innerReloadPage(true,undefined,callback);};TestRunner.reloadPage=function(callback){TestRunner._innerReloadPage(false,undefined,callback);};TestRunner.reloadPageWithInjectedScript=function(injectedScript,callback){TestRunner._innerReloadPage(false,injectedScript,callback);};TestRunner.reloadPagePromise=function(){return new Promise(fulfill=>TestRunner.reloadPage(fulfill));};TestRunner._innerReloadPage=function(hardReload,injectedScript,callback){TestRunner._pageLoadedCallback=TestRunner.safeWrap(callback);TestRunner.resourceTreeModel.addEventListener(SDK.ResourceTreeModel.Events.Load,TestRunner.pageLoaded);TestRunner.resourceTreeModel.reloadPage(hardReload,injectedScript);};TestRunner.pageLoaded=function(){TestRunner.resourceTreeModel.removeEventListener(SDK.ResourceTreeModel.Events.Load,TestRunner.pageLoaded);TestRunner.addResult('Page reloaded.');TestRunner._handlePageLoaded();};TestRunner._handlePageLoaded=async function(){await TestRunner.waitForExecutionContext((TestRunner.runtimeModel));if(TestRunner._pageLoadedCallback){const callback=TestRunner._pageLoadedCallback;delete TestRunner._pageLoadedCallback;callback();}};TestRunner.waitForPageLoad=function(callback){TestRunner.resourceTreeModel.addEventListener(SDK.ResourceTreeModel.Events.Load,onLoaded);function onLoaded(){TestRunner.resourceTreeModel.removeEventListener(SDK.ResourceTreeModel.Events.Load,onLoaded);callback();}};TestRunner.runWhenPageLoads=function(callback){const oldCallback=TestRunner._pageLoadedCallback;function chainedCallback(){if(oldCallback)
oldCallback();callback();}
TestRunner._pageLoadedCallback=TestRunner.safeWrap(chainedCallback);};TestRunner.runTestSuite=function(testSuite){const testSuiteTests=testSuite.slice();function runner(){if(!testSuiteTests.length){TestRunner.completeTest();return;}
const nextTest=testSuiteTests.shift();TestRunner.addResult('');TestRunner.addResult('Running: '+/function\s([^(]*)/.exec(nextTest)[1]);TestRunner.safeWrap(nextTest)(runner);}
runner();};TestRunner.assertEquals=function(expected,found,message){if(expected===found)
return;let error;if(message)
error='Failure ('+message+'):';else
error='Failure:';throw new Error(error+' expected <'+expected+'> found <'+found+'>');};TestRunner.assertTrue=function(found,message){TestRunner.assertEquals(true,!!found,message);};TestRunner.override=function(receiver,methodName,override,opt_sticky){override=TestRunner.safeWrap(override);const original=receiver[methodName];if(typeof original!=='function')
throw new Error('Cannot find method to override: '+methodName);receiver[methodName]=function(var_args){try{return override.apply(this,arguments);}catch(e){throw new Error('Exception in overriden method \''+methodName+'\': '+e);}finally{if(!opt_sticky)
receiver[methodName]=original;}};return original;};TestRunner.clearSpecificInfoFromStackFrames=function(text){let buffer=text.replace(/\(file:\/\/\/(?:[^)]+\)|[\w\/:-]+)/g,'(...)');buffer=buffer.replace(/\(http:\/\/(?:[^)]+\)|[\w\/:-]+)/g,'(...)');buffer=buffer.replace(/\(test:\/\/(?:[^)]+\)|[\w\/:-]+)/g,'(...)');buffer=buffer.replace(/\(<anonymous>:[^)]+\)/g,'(...)');buffer=buffer.replace(/VM\d+/g,'VM');return buffer.replace(/\s*at[^()]+\(native\)/g,'');};TestRunner.hideInspectorView=function(){UI.inspectorView.element.setAttribute('style','display:none !important');};TestRunner.mainFrame=function(){return TestRunner.resourceTreeModel.mainFrame;};TestRunner.StringOutputStream=class{constructor(callback){this._callback=callback;this._buffer='';}
async open(fileName){return true;}
async write(chunk){this._buffer+=chunk;}
async close(){this._callback(this._buffer);}};TestRunner.MockSetting=class{constructor(value){this._value=value;}
get(){return this._value;}
set(value){this._value=value;}};TestRunner.loadedModules=function(){return self.runtime._modules.filter(module=>module._loadedForTest).filter(module=>module.name().indexOf('test_runner')===-1);};TestRunner.dumpLoadedModules=function(relativeTo){const previous=new Set(relativeTo||[]);function moduleSorter(left,right){return String.naturalOrderComparator(left._descriptor.name,right._descriptor.name);}
TestRunner.addResult('Loaded modules:');const loadedModules=TestRunner.loadedModules().sort(moduleSorter);for(const module of loadedModules){if(previous.has(module))
continue;TestRunner.addResult('    '+module._descriptor.name);}
return loadedModules;};TestRunner.waitForUISourceCode=function(urlSuffix,projectType){function matches(uiSourceCode){if(projectType&&uiSourceCode.project().type()!==projectType)
return false;if(!projectType&&uiSourceCode.project().type()===Workspace.projectTypes.Service)
return false;if(urlSuffix&&!uiSourceCode.url().endsWith(urlSuffix))
return false;return true;}
for(const uiSourceCode of Workspace.workspace.uiSourceCodes()){if(urlSuffix&&matches(uiSourceCode))
return Promise.resolve(uiSourceCode);}
return TestRunner.waitForEvent(Workspace.Workspace.Events.UISourceCodeAdded,Workspace.workspace,matches);};TestRunner.waitForUISourceCodeRemoved=function(callback){Workspace.workspace.once(Workspace.Workspace.Events.UISourceCodeRemoved).then(callback);};TestRunner.url=function(url=''){const testScriptURL=(Runtime.queryParam('test'));return new URL(url,testScriptURL+'/../').href;};TestRunner.dumpSyntaxHighlight=function(str,mimeType){const node=document.createElement('span');node.textContent=str;const javascriptSyntaxHighlighter=new UI.SyntaxHighlighter(mimeType,false);return javascriptSyntaxHighlighter.syntaxHighlightNode(node).then(dumpSyntax);function dumpSyntax(){const node_parts=[];for(let i=0;i<node.childNodes.length;i++){if(node.childNodes[i].getAttribute)
node_parts.push(node.childNodes[i].getAttribute('class'));else
node_parts.push('*');}
TestRunner.addResult(str+': '+node_parts.join(', '));}};TestRunner._consoleOutputHook=function(messageType){TestRunner.addResult(messageType+': '+Array.prototype.slice.call(arguments,1));};TestRunner._printDevToolsConsole=function(){if(TestRunner._isDebugTest())
return;console.log=TestRunner._consoleOutputHook.bind(TestRunner,'log');console.error=TestRunner._consoleOutputHook.bind(TestRunner,'error');console.info=TestRunner._consoleOutputHook.bind(TestRunner,'info');};TestRunner.dumpInspectedPageElementText=async function(querySelector){const value=await TestRunner.evaluateInPageAsync(`document.querySelector('${querySelector}').innerText`);TestRunner.addResult(value);};TestRunner._startedTest=false;TestRunner._TestObserver=class{targetAdded(target){if(TestRunner._startedTest)
return;TestRunner._startedTest=true;TestRunner._setupTestHelpers(target);if(TestRunner._isStartupTest())
return;TestRunner.loadHTML(`
      <head>
        <base href="${TestRunner.url()}">
      </head>
      <body>
      </body>
    `).then(()=>TestRunner._executeTestScript());}
targetRemoved(target){}};TestRunner._isDebugTest=function(){return!self.testRunner||!!Runtime.queryParam('debugFrontend');};TestRunner._isStartupTest=function(){return Runtime.queryParam('test').includes('/startup/');};(async function(){function completeTestOnError(message,source,lineno,colno,error){TestRunner.addResult('TEST ENDED IN ERROR: '+error.stack);TestRunner.completeTest();}
self['onerror']=completeTestOnError;TestRunner._printDevToolsConsole();SDK.targetManager.observeTargets(new TestRunner._TestObserver());if(!TestRunner._isStartupTest())
return;TestRunner._initializeTargetForStartupTest=TestRunner.override(Main.Main._instanceForTest,'_initializeTarget',()=>undefined).bind(Main.Main._instanceForTest);await TestRunner.addSnifferPromise(Main.Main._instanceForTest,'_showAppUI');TestRunner._executeTestScript();})();;;