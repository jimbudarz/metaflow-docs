"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3697],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:e},c),{},{components:n})):r.createElement(m,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5873:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Installing Metaflow",p={unversionedId:"getting-started/install",id:"getting-started/install",title:"Installing Metaflow",description:"Metaflow is available as a Python package for MacOS and Linux. You can visit our GitHub repository or get the latest version from PyPI:",source:"@site/docs/getting-started/install.md",sourceDirName:"getting-started",slug:"/getting-started/install",permalink:"/getting-started/install",editUrl:"https://github.dev/Netflix/metaflow-docs/blob/new-docs/docs/getting-started/install.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Get in Touch",permalink:"/introduction/getting-in-touch"},next:{title:"Tutorials",permalink:"/getting-started/tutorials/"}},c=[{value:"Upgrading Metaflow",id:"upgrading-metaflow",children:[],level:2}],u={toc:c};function f(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-metaflow"},"Installing Metaflow"),(0,o.kt)("p",null,"Metaflow is available as a Python package for MacOS and Linux. You can visit our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow"},"GitHub repository")," or get the latest version from ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/"},"PyPI"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install metaflow\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We highly recommend using ",(0,o.kt)("strong",{parentName:"p"},"Python 3")," for new projects. Metaflow supports Python 2.7 for legacy applications, but Python 3 has fewer bugs and is better supported than ",(0,o.kt)("a",{parentName:"p",href:"http://pythonclock.org"},"the deprecated Python 2.7")))),(0,o.kt)("p",null,"Now you are ready to get your hands dirty with the ",(0,o.kt)("a",{parentName:"p",href:"tutorials/"},"Tutorials"),"."),(0,o.kt)("h2",{id:"upgrading-metaflow"},"Upgrading Metaflow"),(0,o.kt)("p",null,"If you have installed Metaflow previously, you can upgrade to the latest version with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade metaflow\n")))}f.isMDXComponent=!0}}]);