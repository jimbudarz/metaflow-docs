"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8349],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9973:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),r=["components"],o={},s="Inspecting Flows and Results",p={unversionedId:"metaflow/client",id:"metaflow/client",title:"Inspecting Flows and Results",description:"Metaflow provides a client API that is used to inspect results of past runs. It is particularly well suited to being used in notebooks.",source:"@site/docs/metaflow/client.md",sourceDirName:"metaflow",slug:"/metaflow/client",permalink:"/metaflow/client",editUrl:"https://github.dev/Netflix/metaflow-docs/blob/new-docs/docs/metaflow/client.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Basics of Metaflow",permalink:"/metaflow/basics"},next:{title:"Visualizing Results",permalink:"/metaflow/visualizing-results/"}},c=[{value:"Object hierarchy",id:"object-hierarchy",children:[],level:2},{value:"Navigating the object hierarchy",id:"navigating-the-object-hierarchy",children:[{value:"Listing children",id:"listing-children",children:[],level:3},{value:"Accessing a specific child",id:"accessing-a-specific-child",children:[],level:3},{value:"Accessing a specific object by its address",id:"accessing-a-specific-object-by-its-address",children:[],level:3},{value:"Accessing data",id:"accessing-data",children:[],level:3},{value:"Common properties",id:"common-properties",children:[],level:3},{value:"Properties related to flows",id:"properties-related-to-flows",children:[],level:3},{value:"Properties related to runs",id:"properties-related-to-runs",children:[],level:3},{value:"Properties related to steps",id:"properties-related-to-steps",children:[],level:3},{value:"Properties related to tasks",id:"properties-related-to-tasks",children:[],level:3}],level:2},{value:"Metadata provider",id:"metadata-provider",children:[],level:2}],d={toc:c};function u(e){var t=e.components,o=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"inspecting-flows-and-results"},"Inspecting Flows and Results"),(0,l.kt)("p",null,"Metaflow provides a client API that is used to inspect results of past runs. It is particularly well suited to being used in notebooks."),(0,l.kt)("p",null,"This document provides an overview of the client API."),(0,l.kt)("h2",{id:"object-hierarchy"},"Object hierarchy"),(0,l.kt)("p",null,"Note that all operations in the Client API are filtered by the current namespace, as explained in ",(0,l.kt)("a",{parentName:"p",href:"/metaflow/tagging"},"Organizing Results"),". If you do not get the results you expect, make sure you are in the correct namespace. The Client API consults the metadata service to gather results, so make sure that the client is properly configured to use the correct ",(0,l.kt)("a",{parentName:"p",href:"/metaflow/client#metadata-provider"},"metadata provider"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Object hierarchy",src:a(69).Z,width:"565",height:"1391"})),(0,l.kt)("p",null,"You can import any of the objects shown above directly from the metaflow package as follows (for example):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Run\n")),(0,l.kt)("p",null,"The root object, ",(0,l.kt)("inlineCode",{parentName:"p"},"Metaflow"),", can be instantiated simply with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Metaflow\nmf = Metaflow()\n")),(0,l.kt)("p",null,"This is the entry point to all other objects. For instance, you can list all flows that have been run in the past with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Metaflow\nprint(Metaflow().flows)\n")),(0,l.kt)("h2",{id:"navigating-the-object-hierarchy"},"Navigating the object hierarchy"),(0,l.kt)("p",null,"Every object listed above follows a consistent interface. All the operations below are available in all objects, not just the ones demonstrated."),(0,l.kt)("h3",{id:"listing-children"},"Listing children"),(0,l.kt)("p",null,"You can list child objects of any parent object simply by iterating over the parent:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\nflow = Flow('HelloFlow')\nruns = list(flow)\n")),(0,l.kt)("p",null,"Expectedly, this works too:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\nflow = Flow('HelloFlow')\nfor run in flow:\n    print(run)\n")),(0,l.kt)("h3",{id:"accessing-a-specific-child"},"Accessing a specific child"),(0,l.kt)("p",null,"You can access a specific child with square brackets, similar to a key lookup in a dictionary. Note that keys are always strings (even if they are numerical IDs):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\nflow = Flow('HelloFlow')\nrun = flow['2']\n")),(0,l.kt)("h3",{id:"accessing-a-specific-object-by-its-address"},"Accessing a specific object by its address"),(0,l.kt)("p",null,"Besides navigating from the root downwards, you can instantiate every object directly with its fully qualified name, called ",(0,l.kt)("inlineCode",{parentName:"p"},"pathspec"),". Note that also this operation is subject to the current namespace, as explained in ",(0,l.kt)("a",{parentName:"p",href:"/metaflow/tagging"},"Organizing Results"),"; in short, you will not be able to access a Flow that is not the current namespace; the error message returned will make it clear whether an object exists and is not in the namespace or does not exist at all."),(0,l.kt)("p",null,"You can instantiate, for example, a particular flow by its name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\nflow = Flow('HelloFlow')\n")),(0,l.kt)("p",null,"You can instantiate a particular run of a flow by its run id:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Run\nrun = Run('HelloFlow/2')\n")),(0,l.kt)("p",null,"And every step in a run by its name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Step\nstep = Step('HelloFlow/2/start')\n")),(0,l.kt)("h3",{id:"accessing-data"},"Accessing data"),(0,l.kt)("p",null,"One of the most typical use cases of the client API is to access data artifacts produced by runs. Each data artifact is represented by a ",(0,l.kt)("inlineCode",{parentName:"p"},"DataArtifact")," object whose parent is a ",(0,l.kt)("inlineCode",{parentName:"p"},"Task"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DataArtifact")," is a container object for the actual value. Besides the value, ",(0,l.kt)("inlineCode",{parentName:"p"},"DataArtifact")," includes metadata about the artifact, such as its time of creation."),(0,l.kt)("p",null,"Often you are only interested in the value of an artifact. For this typical use case we provide a convenience property ",(0,l.kt)("inlineCode",{parentName:"p"},".data")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," object. The ",(0,l.kt)("inlineCode",{parentName:"p"},".data")," property returns a container which has all artifacts produced by the task as attributes."),(0,l.kt)("p",null,"For instance, this the shortest way to access a value produced by a step in a run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Step\nprint(Step('DebugFlow/2/a').task.data.x)\n")),(0,l.kt)("p",null,"Here, we print the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"self.x")," in the step ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," of the run ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," of the flow ",(0,l.kt)("inlineCode",{parentName:"p"},"DebugFlow"),"."),(0,l.kt)("h3",{id:"common-properties"},"Common properties"),(0,l.kt)("p",null,"Every object has the following properties available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tags"),": tags assigned to the object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"created_at"),": creation timestamp"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parent"),": parent object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pathspec"),": object fully qualified name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path_components"),": list containing the elements in ",(0,l.kt)("inlineCode",{parentName:"li"},"pathspec"))),(0,l.kt)("h3",{id:"properties-related-to-flows"},"Properties related to flows"),(0,l.kt)("p",null,"To access an iterator over runs and filter by tags, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"runs()")," method. See ",(0,l.kt)("a",{parentName:"p",href:"/metaflow/tagging#tagging"},"Tagging")," for more detail."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," has two additional properties related to determining the latest run for the flow. Note that any ",(0,l.kt)("inlineCode",{parentName:"p"},"Run")," returned will be in the current namespace."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"latest_run"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Run")," of the latest run whether or not it has completed or has been successful"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"latest_successful_run"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Run")," of the latest successful (and therefore completed) run.")),(0,l.kt)("h3",{id:"properties-related-to-runs"},"Properties related to runs"),(0,l.kt)("p",null,"To access an iterator over the steps of a run and filter by tags, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"steps()")," method. See ",(0,l.kt)("a",{parentName:"p",href:"/metaflow/tagging#tagging"},"Tagging")," for more detail."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Run")," also has a few additional properties to make it easy to access commonly used information:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data"),": A quick way to access the ",(0,l.kt)("inlineCode",{parentName:"li"},"data")," object of the end task of this run. In other words, this is the quickest way to access the data produced at the end of the flow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"successful"),": A boolean indicating whether or not the run completed successfully. Note that this will return ",(0,l.kt)("inlineCode",{parentName:"li"},"False")," if the run has not completed (ie: is still in progress)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"finished"),": A boolean indicating whether or not the run completed. The returned value will be ",(0,l.kt)("inlineCode",{parentName:"li"},"True")," whether or not the run was successful."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"finished_at"),": A datetime object indicating the completion time of the run. This will be ",(0,l.kt)("inlineCode",{parentName:"li"},"None")," if the run has not completed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"code"),": In certain circumstances, the code used for this run is saved and persisted; this allows you to access this code."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"end_task"),": A quick access to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Task")," object of the last step in the run.")),(0,l.kt)("h3",{id:"properties-related-to-steps"},"Properties related to steps"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Step")," typically has a single ",(0,l.kt)("inlineCode",{parentName:"p"},"Task"),". A Step will have multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," objects as its children if it is a ",(0,l.kt)("inlineCode",{parentName:"p"},"foreach")," step; each ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," will correspond to a single execution of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Step"),"."),(0,l.kt)("p",null,"To access an iterator over the tasks of a step and filter by tags, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"tasks()")," method. See ",(0,l.kt)("a",{parentName:"p",href:"/metaflow/tagging#tagging"},"Tagging")," for more detail."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Step")," has a few additional properties as well:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"task"),": Convenience method to return the unique ",(0,l.kt)("inlineCode",{parentName:"li"},"Task")," associated with this ",(0,l.kt)("inlineCode",{parentName:"li"},"Step"),". If a ",(0,l.kt)("inlineCode",{parentName:"li"},"Step")," has more than one ",(0,l.kt)("inlineCode",{parentName:"li"},"Task"),", this will return any of them (no order guaranteed)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"finished_at"),": A datetime object indicating the completion time of the step. A step is complete when all its tasks are complete."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"environment_info"),": A dict object containing metadata for the execution environment. See ",(0,l.kt)("a",{parentName:"li",href:"/metaflow/dependencies"},"Dependencies")," for more detail.")),(0,l.kt)("h3",{id:"properties-related-to-tasks"},"Properties related to tasks"),(0,l.kt)("p",null,"Since a ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," is the actual unit of execution in Metaflow, these objects contain the richest set of properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data"),": A convenience method to access all data produced by this ",(0,l.kt)("inlineCode",{parentName:"li"},"Task"),". See ",(0,l.kt)("a",{parentName:"li",href:"/metaflow/client#accessing-data"},"Accessing data"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"artifacts"),": A convenience method to access all ",(0,l.kt)("inlineCode",{parentName:"li"},"DataArtifact")," objects produced by this ",(0,l.kt)("inlineCode",{parentName:"li"},"Task"),". See ",(0,l.kt)("a",{parentName:"li",href:"/metaflow/client#accessing-data"},"Accessing data"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"successful"),": A boolean indicating whether or not this ",(0,l.kt)("inlineCode",{parentName:"li"},"Task")," completed successfully."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"finished"),": A boolean indicating whether or not this ",(0,l.kt)("inlineCode",{parentName:"li"},"Task")," completed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exception"),": If an exception was raised by this ",(0,l.kt)("inlineCode",{parentName:"li"},"Task")," (ie: it did not complete successfully), it will be contained here."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"finished_at"),": A datetime object indicating the completion time of this ",(0,l.kt)("inlineCode",{parentName:"li"},"Task"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stdout"),": A string containing the standard output of this ",(0,l.kt)("inlineCode",{parentName:"li"},"Task"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stderr"),": A string containing the standard error of this ",(0,l.kt)("inlineCode",{parentName:"li"},"Task"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"code"),": The code used to execute this ",(0,l.kt)("inlineCode",{parentName:"li"},"Task"),", if available."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"environment_info"),": A dict object containing metadata for the execution environment. See ",(0,l.kt)("a",{parentName:"li",href:"/metaflow/dependencies"},"Dependencies")," for more detail.")),(0,l.kt)("p",null,"Here is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Step\nstep = Step('DebugFlow/2/a')\nif step.task.successful:\n    print(step.task.finished_at)\n")),(0,l.kt)("h2",{id:"metadata-provider"},"Metadata provider"),(0,l.kt)("p",null,"The Client API relies on a metadata service to gather results appropriately. Metaflow supports a local mode (",(0,l.kt)("inlineCode",{parentName:"p"},".metaflow")," directory on your filesystem) and a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow-service"},"remote mode"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import get_metadata, metadata\n\n# Fetch currently configured metadata provider\nget_metadata()\n\n# Configure Client to use local metadata provider globally\nmetadata('/Users/bob/metaflow')\n\n# Configure Client to use remote metadata provider globally\nmetadata('https://localhost:5000/mymetaflowservice')\n")),(0,l.kt)("p",null,"Note that changing the metadata provider is a global operation and all subsequent client operations will use the metadata provider specified."))}u.isMDXComponent=!0},69:function(e,t,a){t.Z=a.p+"assets/images/hierarchy-9b82c7ae254a8c89f221bebd4512b45d.png"}}]);