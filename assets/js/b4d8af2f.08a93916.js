"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[809],{8508:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var o=a(7462),n=a(3366),i=(a(7294),a(3905)),l=(a(2004),["components"]),r={},s="Metaflow Sandbox",d={unversionedId:"metaflow-on-aws/metaflow-sandbox",id:"metaflow-on-aws/metaflow-sandbox",title:"Metaflow Sandbox",description:"As described in Metaflow on AWS, Metaflow comes with built-in integrations to various services on AWS. The seamless integration to the cloud is a key benefit of Metaflow.",source:"@site/docs/metaflow-on-aws/metaflow-sandbox.md",sourceDirName:"metaflow-on-aws",slug:"/metaflow-on-aws/metaflow-sandbox",permalink:"/metaflow-on-aws/metaflow-sandbox",editUrl:"https://github.dev/Netflix/metaflow-docs/blob/new-docs/docs/metaflow-on-aws/metaflow-sandbox.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Metaflow on AWS",permalink:"/metaflow-on-aws/"},next:{title:"Deploying to AWS",permalink:"/metaflow-on-aws/deploy-to-aws"}},u=[{value:"Choose Your Own Sandbox Adventure",id:"choose-your-own-sandbox-adventure",children:[],level:3},{value:"Sandbox Rules",id:"sandbox-rules",children:[],level:3},{value:"Sign up for a Sandbox",id:"sign-up-for-a-sandbox",children:[],level:3},{value:"After Sandbox Expires",id:"after-sandbox-expires",children:[],level:3}],c={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metaflow-sandbox"},"Metaflow Sandbox"),(0,i.kt)("p",null,"As described in ",(0,i.kt)("a",{parentName:"p",href:"../metaflow-on-aws"},"Metaflow on AWS"),", Metaflow comes with built-in integrations to various services on AWS. The seamless integration to the cloud is a key benefit of Metaflow."),(0,i.kt)("p",null,"We know that ",(0,i.kt)("a",{parentName:"p",href:"deploy-to-aws"},"setting up all the required components in AWS")," is not trivial. To make it easier to evaluate Metaflow on AWS, we provide a hosted sandbox environment at no cost where you can test Metaflow with your own code and data."),(0,i.kt)("p",null,"Only a limited number of sandboxes are available. When you sign up, you are added to a waitlist for a private sandbox. It may take anywhere between days to weeks to get access to the sandbox. We will notify you by email once your sandbox is ready. Please ",(0,i.kt)("a",{parentName:"p",href:"../introduction/getting-in-touch"},"contact us")," if you have any questions about signing up or using the sandbox."),(0,i.kt)("h3",{id:"choose-your-own-sandbox-adventure"},"Choose Your Own Sandbox Adventure"),(0,i.kt)("p",null,"Here are some ideas that you can try with the sandbox:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../getting-started/tutorials/#season-2-scaling-out-and-up"},"The season 2 of tutorials")," focuses on scaling out. This is a good way to get started. Note that the Season 1 tutorials work with the Sandbox too, when executed ",(0,i.kt)("inlineCode",{parentName:"li"},"--with batch"),"."),(0,i.kt)("li",{parentName:"ul"},"You have up to 64 CPU cores at your disposal using ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/scaling"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"@batch")," decorator"),". Test some number crunching! You can run everything in the cloud simply by using ",(0,i.kt)("inlineCode",{parentName:"li"},"--with batch")," or you can mix local and remote steps by adding ",(0,i.kt)("inlineCode",{parentName:"li"},"@batch")," to select steps."),(0,i.kt)("li",{parentName:"ul"},"Test your code with your own data in the cloud using ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/data#data-in-local-files"},(0,i.kt)("inlineCode",{parentName:"a"},"IncludeFile")),". You can also upload data to your private S3 bucket using ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/data#data-in-s-3-metaflow-s3"},"Metaflow's high-performance S3 client"),"."),(0,i.kt)("li",{parentName:"ul"},"Test your favorite ML libraries in the cloud using ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/scaling"},(0,i.kt)("inlineCode",{parentName:"a"},"@batch"))," and the ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/dependencies"},(0,i.kt)("inlineCode",{parentName:"a"},"@conda"))," decorator. For instance, try a basic hyperparameter search using ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/basics#foreach"},"a custom parameter grid and foreach"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../going-to-production-with-metaflow/scheduling-metaflow-flows"},"Schedule your flows")," on AWS Step Functions and execute them using a time-based trigger."),(0,i.kt)("li",{parentName:"ul"},"Evaluate Metaflow's ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/tagging"},"experiment tracking and versioning")," using local runs and the ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/client"},"Client API")," in a local notebook. In contrast to the local mode, all runs are registered globally in the Metaflow Service regardless of the directory where you run them."),(0,i.kt)("li",{parentName:"ul"},"Test how you can ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/debugging#how-to-use-the-resume-command"},(0,i.kt)("inlineCode",{parentName:"a"},"resume")," tasks locally")," which were originally run remotely using ",(0,i.kt)("inlineCode",{parentName:"li"},"--with batch"),".")),(0,i.kt)("h3",{id:"sandbox-rules"},"Sandbox Rules"),(0,i.kt)("p",null,"Sandbox is a limited test environment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is solely intended for testing and evaluating Metaflow for data science use cases. ",(0,i.kt)("strong",{parentName:"li"},"It is not a production environment.")," It is also not a general-purpose computation platform."),(0,i.kt)("li",{parentName:"ul"},"While you can test your code with your own datasets, ",(0,i.kt)("strong",{parentName:"li"},"make sure you don\u2019t use any data that contains confidential information, personal information, or any sensitive information.")),(0,i.kt)("li",{parentName:"ul"},"By default, ",(0,i.kt)("strong",{parentName:"li"},"your access to the sandbox will expire in 7 days"),", after which all data in the sandbox will be permanently deleted. You may contact us by email if you need more time for evaluation."),(0,i.kt)("li",{parentName:"ul"},"There is no internet connectivity in the Sandbox. However, you can still use 3rd party libraries through ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/dependencies"},"Metaflow's ",(0,i.kt)("inlineCode",{parentName:"a"},"@conda")," decorator"),". You can include your own ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/data#data-in-local-files"},"data sets using ",(0,i.kt)("inlineCode",{parentName:"a"},"IncludeFile")),"."),(0,i.kt)("li",{parentName:"ul"},"You can use up to 8 concurrent instances with ",(0,i.kt)("inlineCode",{parentName:"li"},"cpu=8")," ","(","8 cores",")"," and ",(0,i.kt)("inlineCode",{parentName:"li"},"memory=30000")," ","(","30GB of RAM",")"," using ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/scaling"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"@batch")," decorator"),".")),(0,i.kt)("p",null,"It is important that you read and agree to the ",(0,i.kt)("a",{parentName:"p",href:"https://metaflow.org/sandbox-tos.html"},"Metaflow Sandbox terms of use")," and ",(0,i.kt)("a",{parentName:"p",href:"https://metaflow.org/sandbox-privacy.html"},"privacy policy")," before signing up."),(0,i.kt)("h3",{id:"sign-up-for-a-sandbox"},"Sign up for a Sandbox"),(0,i.kt)("p",null,"You can sign up for a sandbox at ",(0,i.kt)("a",{parentName:"p",href:"https://metaflow.org/sandbox"},"metaflow.org/sandbox"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"After agreeing to the Terms of Use and Privacy Policy, you will need to sign up with your GitHub account. This is required so we can verify your identify to prevent abuse."),(0,i.kt)("li",{parentName:"ol"},"You will be added to a waitlist. You can log in to ",(0,i.kt)("a",{parentName:"li",href:"https://metaflow.org/sandbox"},"metaflow.org/sandbox"),' to see the status of your process. You can expect that the status will remain at "Waiting for the next available sandbox" for many days.'),(0,i.kt)("li",{parentName:"ol"},"You will receive an email to the address specified in your GitHub profile after your sandbox is ready for use. Note that by default the sandbox will remain active only for three days. You can ",(0,i.kt)("a",{parentName:"li",href:"../introduction/getting-in-touch"},"contact us")," if you need more time for evaluation."),(0,i.kt)("li",{parentName:"ol"},'Once the sandbox is active, you will see a long configuration token in the "Sandbox active" box. Clicking "Click to copy" will copy the text to the clipboard.'),(0,i.kt)("li",{parentName:"ol"},"In your terminal, run ",(0,i.kt)("inlineCode",{parentName:"li"},"metaflow configure sandbox")," which configures Metaflow to use your personal sandbox. Paste the copied string to terminal when prompted and click enter."),(0,i.kt)("li",{parentName:"ol"},"Write ",(0,i.kt)("inlineCode",{parentName:"li"},"metaflow status"),' to confirm that "metadata provider" is a long URL pointing at ',(0,i.kt)("inlineCode",{parentName:"li"},"amazonaws.com"),". Metaflow is now integrated with AWS!"),(0,i.kt)("li",{parentName:"ol"},"In the screencast, a test artifact called ",(0,i.kt)("inlineCode",{parentName:"li"},"self.models")," is added to demonstrate how artifacts are stored in S3."),(0,i.kt)("li",{parentName:"ol"},"Run your Metaflow workflow locally as usual. All Metaflow runs will now registered to the remote Metadata service by default. All artifacts are also written to S3 by default. You may notice that execution latency is slightly higher due to this."),(0,i.kt)("li",{parentName:"ol"},"The Sandbox also includes a private ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/sagemaker/latest/dg/nbi.html"},"Sagemaker notebook instance"),'. Log in to it by click "My Sagemaker notebook" at ',(0,i.kt)("a",{parentName:"li",href:"https://metaflow.org/sandbox"},"metaflow.org/sandbox"),"."),(0,i.kt)("li",{parentName:"ol"},"The notebook includes the ",(0,i.kt)("inlineCode",{parentName:"li"},"metaflow")," package by default. However, the notebook is not tied to a specific user, so you will need to ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/tagging#switching-namespaces"},"set the namespace explicitly")," to match your username."),(0,i.kt)("li",{parentName:"ol"},"Since your local run was registered with the Metadata service and artifacts were automatically copied to S3, you can access the locally generated artifact, ",(0,i.kt)("inlineCode",{parentName:"li"},"models"),", in a remote notebook! This demonstrates how Metaflow enables multiple people share results via S3 and the ",(0,i.kt)("a",{parentName:"li",href:"../metaflow/client"},"Client API"),".")),(0,i.kt)("h3",{id:"after-sandbox-expires"},"After Sandbox Expires"),(0,i.kt)("p",null,"All good things come to an end. After your sandbox expires, all computation is stopped automatically and data is deleted permanently. Reset your Metaflow back to the local mode with ",(0,i.kt)("inlineCode",{parentName:"p"},"metaflow configure reset"),"."),(0,i.kt)("p",null,"Hopefully the sandbox convinced you that you want to keep using Metaflow with AWS. If so, a good next step is to ",(0,i.kt)("a",{parentName:"p",href:"deploy-to-aws"},"set up Metaflow to your own AWS account")," which you can use without any limitations."))}m.isMDXComponent=!0}}]);