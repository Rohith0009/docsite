"use strict";(self.webpackChunkavdan_os_docs=self.webpackChunkavdan_os_docs||[]).push([[8325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),u=a,b=f["".concat(p,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="set",s={unversionedId:"libwin/Appbar/set",id:"libwin/Appbar/set",title:"set",description:"Appbar.set looks for an Object defined in Appbar.app_bar and fills it with app Objects. It gets a list of apps with generation configs for each one.",source:"@site/docs/demo/libwin/Appbar/set.mdx",sourceDirName:"libwin/Appbar",slug:"/libwin/Appbar/set",permalink:"/demo/libwin/Appbar/set",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"get",permalink:"/demo/libwin/Appbar/get"},next:{title:"Scrollbar Class",permalink:"/demo/category/scrollbar-class"}},p={},l=[],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set"},"set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"static set = list_l\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Appbar.set")," looks for an Object defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"Appbar.app_bar")," and fills it with app Objects. It gets a list of apps with generation configs for each one."),(0,a.kt)("p",null,"Example from demo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var apps_list = [\n    {\n        "title" : Filemanager.title, // window title\n        "src" : Filemanager.src, // appbar/window icon\n        "content" : Filemanager.content, // content for the window\n        "extraClass" : Filemanager.extraClass // extra classes for window (optional)\n    },\n    {\n        "content" : "hr"\n    },\n    {\n        "title" : Messages.title,\n        "src" : Messages.src,\n        "content" : Messages.content,\n        "listenerAdder" : Messages. // dynamic function for cloned apps\n    }\n}\n\nAppbar.set(apps_list);\n')),(0,a.kt)("p",null,"It sets ",(0,a.kt)("inlineCode",{parentName:"p"},"#list")," of apps with the given list to use it via ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," independent from the initial variable and origin."))}d.isMDXComponent=!0}}]);