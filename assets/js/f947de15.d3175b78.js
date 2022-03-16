"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2305],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),f=r,h=u["".concat(o,".").concat(f)]||u[f]||p[f]||i;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7823:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],l={},o="Effortless Task Inspection with Default Cards",c={unversionedId:"metaflow/visualizing-results/effortless-task-inspection-with-default-cards",id:"metaflow/visualizing-results/effortless-task-inspection-with-default-cards",title:"Effortless Task Inspection with Default Cards",description:"Metaflow comes with a built-in Default Card that shows all artifacts produced by a task. Let\u2019s create a simple flow to test it.",source:"@site/docs/metaflow/visualizing-results/effortless-task-inspection-with-default-cards.md",sourceDirName:"metaflow/visualizing-results",slug:"/metaflow/visualizing-results/effortless-task-inspection-with-default-cards",permalink:"/metaflow/visualizing-results/effortless-task-inspection-with-default-cards",editUrl:"https://github.dev/Netflix/metaflow-docs/blob/new-docs/docs/metaflow/visualizing-results/effortless-task-inspection-with-default-cards.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Visualizing Results",permalink:"/metaflow/visualizing-results/"},next:{title:"Easy Custom Reports with Card Components",permalink:"/metaflow/visualizing-results/easy-custom-reports-with-card-components"}},d=[{value:"<strong>Visualizing Artifacts with the Default Card</strong>",id:"visualizing-artifacts-with-the-default-card",children:[],level:2},{value:"Cards Are Stored And Versioned Automatically",id:"cards-are-stored-and-versioned-automatically",children:[],level:2},{value:"Accessing Cards via an API",id:"accessing-cards-via-an-api",children:[],level:2},{value:"Sharing Cards",id:"sharing-cards",children:[],level:2}],p={toc:d};function u(e){var t=e.components,l=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"effortless-task-inspection-with-default-cards"},"Effortless Task Inspection with Default Cards"),(0,i.kt)("p",null,"Metaflow comes with a built-in ",(0,i.kt)("em",{parentName:"p"},"Default Card")," that shows all artifacts produced by a task. Let\u2019s create a simple flow to test it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, Parameter, step, card\nfrom datetime import datetime\n\nclass DefaultCardFlow(FlowSpec):\n\n    alpha = Parameter('alpha', default=0.5)\n\n    @card\n    @step\n    def start(self):\n        self.example_dict = {'first_key': list(range(10)),\n                             'second_key': {'one', 'two'}}\n        self.timestamp = datetime.utcnow()\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == \"__main__\":\n    DefaultCardFlow()\n")),(0,i.kt)("p",null,"The only new feature introduced in this flow is the ",(0,i.kt)("inlineCode",{parentName:"p"},"@card")," decorator which attaches a card to the ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," step. Since no arguments are given to the decorator, the ",(0,i.kt)("em",{parentName:"p"},"Default Card")," is used. Save the example in ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultcard.py")," and execute the flow as usual:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"python defaultcard.py run")),(0,i.kt)("p",null,"After the run has finished, you can open a generated card on the command line:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"python defaultcard.py card view start")),(0,i.kt)("p",null,"The command will open the card in your local web browser. It will look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4774).Z,width:"1020",height:"949"})),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Default Card")," shows basic metadata about the task, parameters given for the flow, artifacts accessible in the task, as well as a visualization of the flow DAG. You can use this information to quickly observe and verify results of a task without making any changes in the code."),(0,i.kt)("h2",{id:"visualizing-artifacts-with-the-default-card"},(0,i.kt)("strong",{parentName:"h2"},"Visualizing Artifacts with the Default Card")),(0,i.kt)("p",null,"As shown in the screenshot above, the artifacts table shows all Metaflow artifacts related to the task. Large artifacts are truncated for display - you can access the originals using ",(0,i.kt)("a",{parentName:"p",href:"../client"},"the Client API"),"."),(0,i.kt)("p",null,"If an artifact contains an image or a dataframe, the artifact is visualized in a separate section in addition to its string representation. Take a look at the following example which contains an artifact, ",(0,i.kt)("inlineCode",{parentName:"p"},"self.image")," storing an animated GIF and another artifact, a Pandas ",(0,i.kt)("inlineCode",{parentName:"p"},"dataframe"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, Parameter, step\nimport requests, pandas, string\n\nURL = \"https://upload.wikimedia.org/wikipedia/commons/4/45/Blue_Marble_rotating.gif\"\n\nclass FancyDefaultCardFlow(FlowSpec):\n\n    image_url = Parameter('image_url', default=URL)\n\n    @step\n    def start(self):\n        self.image = requests.get(self.image_url,\n                                  headers={'user-agent': 'metaflow-example'}).content\n        self.dataframe = pandas.DataFrame({'lowercase': list(string.ascii_lowercase),\n                                           'uppercase': list(string.ascii_uppercase)})\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == \"__main__\":\n    FancyDefaultCardFlow()\n")),(0,i.kt)("p",null,"To demonstrate how cards can be attached to runs on the fly, this example doesn\u2019t include the ",(0,i.kt)("inlineCode",{parentName:"p"},"@card")," decorator in the code. Save the code to ",(0,i.kt)("inlineCode",{parentName:"p"},"fancydefaultcard.py")," and run it as follows:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"python fancydefaultcard.py run \u2013with card")),(0,i.kt)("p",null,"Note that the example expects that you have the ",(0,i.kt)("inlineCode",{parentName:"p"},"requests")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pandas")," libraries installed. The ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2013with card")," option attaches a ",(0,i.kt)("inlineCode",{parentName:"p"},"@card")," decorator to every step without changes in the code. You can execute any existing flow ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2013with card")," to inspect its results visually."),(0,i.kt)("p",null,"You can open the card as before:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"python fancydefaultcard.py card view start")),(0,i.kt)("p",null,"You will see additional sections in the card which visualize ",(0,i.kt)("inlineCode",{parentName:"p"},"dataframe")," as a table and show the image stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," artifact."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3377).Z,width:"1234",height:"857"})),(0,i.kt)("p",null,"Thanks to this feature, you can use any plotting library such as ",(0,i.kt)("a",{parentName:"p",href:"https://matplotlib.org"},"Matplotlib")," to create arbitrary visualizations in a Metaflow task, which are then shown in the ",(0,i.kt)("em",{parentName:"p"},"Default Card")," automatically without you having to write a line of additional code. You can use this feature during development to quickly debug flows."),(0,i.kt)("h2",{id:"cards-are-stored-and-versioned-automatically"},"Cards Are Stored And Versioned Automatically"),(0,i.kt)("p",null,"A major benefit of ",(0,i.kt)("inlineCode",{parentName:"p"},"@card")," is that reports produced by it are versioned and stored in the Metaflow datastore automatically, alongside their parent task. This way, you or your colleagues can easily access any historical card, e.g. a model scorecard associated with a particular version of the model."),(0,i.kt)("p",null,"You can access any historical card on the command line by using a run ID of a past run. For instance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"python fancydefaultcard.py card view 1638257165470922/start")),(0,i.kt)("p",null,"In the case of ",(0,i.kt)("a",{parentName:"p",href:"../basics#foreach"},"foreach"),", a single step can produce multiple tasks and cards. You can view an individual card by giving a full task ID (aka ",(0,i.kt)("em",{parentName:"p"},"pathspec"),") corresponding to a task:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"python fancydefaultcard.py card view 1638257165470922/start/1")),(0,i.kt)("p",null,"You can see all available cards in the latest run with the \u201c",(0,i.kt)("inlineCode",{parentName:"p"},"card list"),"\u201d command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"python fancydefaultcard.py card list")),(0,i.kt)("p",null,"It is possible to produce multiple separate cards from a single task by adding multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"@card")," decorators in a step, which are all shown by \u201c",(0,i.kt)("inlineCode",{parentName:"p"},"card list"),"\u201d. To make it easier to identify specific cards, you can also assign them a unique ID, as described in ",(0,i.kt)("a",{parentName:"p",href:"easy-custom-reports-with-card-components#multiple-cards-in-a-step"},"Multiple Cards In a Step"),"."),(0,i.kt)("h2",{id:"accessing-cards-via-an-api"},"Accessing Cards via an API"),(0,i.kt)("p",null,"Besides the command line interface, you can access and view cards programmatically trough an API. This is particularly convenient, if you want to access cards in a Jupyter notebook."),(0,i.kt)("p",null,"Given a Task ID (a ",(0,i.kt)("em",{parentName:"p"},"pathspec"),"), or ",(0,i.kt)("a",{parentName:"p",href:"../client"},"a Task object from the Client API"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"get_cards")," function lists all cards of the task. You can try this in a notebook cell. Replace the Task ID with an actual ID from a previous run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow.cards import get_cards\nget_cards('CountryModelFlow/1641937201798104/train_country_model/2')\n")),(0,i.kt)("p",null,"This will show the card in the output cell:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8614).Z,width:"1169",height:"444"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"get_cards")," function works well in conjunction with ",(0,i.kt)("a",{parentName:"p",href:"../client"},"the Client API"),". For instance, you can use the Client API to search for a task with a specific artifact and view its card:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"run = Run('CountryModelFlow/1641937201798104')\n[brazil] = [task for task in run['train_country_model']\n            if task['country'].data == 'Brazil']\nget_cards(brazil)\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2032).Z,width:"1127",height:"485"})),(0,i.kt)("h2",{id:"sharing-cards"},"Sharing Cards"),(0,i.kt)("p",null,"Since cards are self-contained HTML files, they can be easily shared and viewed by anyone without having to install additional software. To share a card, first save the desired card to a file:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"python fancydefaultcard.py card get start mycard.html")),(0,i.kt)("p",null,"Use the \u201c",(0,i.kt)("inlineCode",{parentName:"p"},"card get"),"\u201d command to save the HTML without opening it in a browser. You can attach the resulting card file, here ",(0,i.kt)("inlineCode",{parentName:"p"},"mycard.html"),", say, in an email or a Slack message. If you want to share reports automatically e.g. via email, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"get_cards")," API discussed above to obtain the HTML programmatically."),(0,i.kt)("p",null,"Some recipients may prefer a PDF file over HTML. In this case, you can simply choose \u201cPrint\u201d in your browser followed by \u201cSave as PDF\u201d."))}u.isMDXComponent=!0},2032:function(e,t,a){t.Z=a.p+"assets/images/card-docs-clientapi-2bc75c5febc429054290e5d17577e71c.png"},4774:function(e,t,a){t.Z=a.p+"assets/images/card-docs-defaultcard-c8b2f549e1fac6e9bd0422737d355011.png"},3377:function(e,t,a){t.Z=a.p+"assets/images/card-docs-fancydefaultcard-c2bfe6b1e8fb64a195188fb844d6eb7d.png"},8614:function(e,t,a){t.Z=a.p+"assets/images/card-docs-notebook-efdbb4e78e8dc80c3c53cb0a62aa914d.png"}}]);