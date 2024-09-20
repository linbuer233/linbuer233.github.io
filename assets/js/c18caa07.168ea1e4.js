"use strict";(self.webpackChunkwebblog=self.webpackChunkwebblog||[]).push([[797],{2645:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var t=n(4848),a=n(8453);const l={title:"\u4f7f\u7528 pysteps \u5bf9\u673a\u5668\u5b66\u4e60\u6a21\u578b\u8fdb\u884c\u57fa\u51c6\u6d4b\u8bd5",date:new Date("2022-09-06T20:38:53.000Z"),authors:"lin",tags:["ML&DL","\u6c14\u8c61"]},i="\u786e\u5b9a\u6027\u5373\u65f6\u9884\u62a5",r={id:"Python/pystepsandDL",title:"\u4f7f\u7528 pysteps \u5bf9\u673a\u5668\u5b66\u4e60\u6a21\u578b\u8fdb\u884c\u57fa\u51c6\u6d4b\u8bd5",description:"\u4f7f\u7528 pysteps \u5bf9\u673a\u5668\u5b66\u4e60\u6a21\u578b\u8fdb\u884c\u57fa\u51c6\u6d4b\u8bd5",source:"@site/docs/Python/pystepsandDL.md",sourceDirName:"Python",slug:"/Python/pystepsandDL",permalink:"/docs/Python/pystepsandDL",draft:!1,unlisted:!1,tags:[{inline:!0,label:"ML&DL",permalink:"/docs/tags/ml-dl"},{inline:!0,label:"\u6c14\u8c61",permalink:"/docs/tags/\u6c14\u8c61"}],version:"current",frontMatter:{title:"\u4f7f\u7528 pysteps \u5bf9\u673a\u5668\u5b66\u4e60\u6a21\u578b\u8fdb\u884c\u57fa\u51c6\u6d4b\u8bd5",date:"2022-09-06T20:38:53.000Z",authors:"lin",tags:["ML&DL","\u6c14\u8c61"]},sidebar:"tutorialSidebar",previous:{title:"pip \u66f4\u65b0\u6240\u6709\u5305",permalink:"/docs/Python/pipUpdateAllPackages"},next:{title:"Python \u7684\u4e0b\u8f7d\u548c\u5305\u955c\u50cf\u6e90\u7684\u66f4\u6362",permalink:"/docs/Python/pythondownload"}},c={},p=[];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,a.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://pysteps.readthedocs.io/en/stable/user_guide/machine_learning_pysteps.html",children:"\u4f7f\u7528 pysteps \u5bf9\u673a\u5668\u5b66\u4e60\u6a21\u578b\u8fdb\u884c\u57fa\u51c6\u6d4b\u8bd5"})}),"\n",(0,t.jsx)(e.p,{children:"\u786e\u5b9a\u4e34\u8fd1\u9884\u62a5\u7684\u76ee\u6807\u662f\u4ec0\u4e48\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u662f\u5426\u53ea\u60f3\u6700\u5927\u7a0b\u5ea6\u5730\u51cf\u5c11\u9884\u6d4b\u8bef\u5dee\uff1f"}),"\n",(0,t.jsx)(e.li,{children:"\u662f\u5426\u8fd8\u60f3\u8868\u793a\u9884\u6d4b\u4e0d\u786e\u5b9a\u6027\uff1f"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e3a\u4e86\u5b9e\u73b0\u76ee\u6807 1\uff0c\u53ea\u9700\u8981\u751f\u6210\u4e00\u4e2a\u786e\u5b9a\u6027\u5730 nowcast\uff0c\u5373\u53ef\u8fc7\u6ee4\u6389\u4e0d\u53ef\u9884\u6d4b\u5730\u5c0f\u89c4\u6a21\u964d\u6c34\u7279\u5f81\u3002\u4f46\u662f\uff0c\u8fd9\u5c06\u521b\u5efa\u4e00\u4e2a\u5373\u65f6\u9884\u62a5\uff0c\u968f\u7740\u65f6\u95f4\u63a8\u79fb\uff0c\u4ed6\u5c06\u53d8\u5f97\u8d8a\u6765\u8d8a\u5e73\u6ed1\uff08\u6a21\u7cca\uff09\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4e3a\u4e86\u5b9e\u73b0\u76ee\u6807 2\uff0c\u9700\u8981\u751f\u6210\u4e00\u4e2a\u6982\u7387\u7684\u6216\u96c6\u5408\u7684 nowcast(\u51e0\u4e2a\u96c6\u5408\u6210\u5458\u6216\u5b9e\u73b0)\u3010\u964d\u6c34\u6982\u7387\u6a21\u578b\u3011"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u5929\u6c14\u9884\u62a5\uff08\u548c\u5373\u65f6\u9884\u62a5\uff09\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u5e0c\u671b\u5b9e\u73b0\u8fd9\u4e24\u4e2a\u76ee\u6807\uff0c\u56e0\u4e3a\u4e0d\u53ef\u80fd\u4ee5 100% \u7684\u51c6\u786e\u5ea6\u9884\u6d4b\u6df7\u6c8c\u7cfb\u7edf\u7684\u6f14\u53d8\uff0c\u5c24\u5176\u662f\u65f6\u7a7a\u964d\u6c34\u573a\u548c\u96f7\u66b4\u3002"}),"\n",(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u786e\u5b9a\u6027\u5373\u65f6\u9884\u62a5",children:"\u786e\u5b9a\u6027\u5373\u65f6\u9884\u62a5"})}),"\n",(0,t.jsx)(e.p,{children:"a. \u65b9\u5dee\u4fdd\u6301\u7684 nowcast\uff0c\u4f8b\u5982\u6b27\u62c9\u548c\u62c9\u683c\u6717\u65e5\u6301\u4e45\u6027\u7684\u5916\u63a8 nowcast\u3002"}),"\n",(0,t.jsx)(e.p,{children:"b. \u9519\u8bef\u6700\u5c0f\u5316 nowcast\uff0c\u4f8b\u5982\u673a\u5668\u5b66\u4e60\u3001\u5085\u91cc\u53f6\u6ee4\u6ce2\u548c\u96c6\u6210\u5b66\u4e60 nowcast\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u975e\u5e38\u91cd\u8981"}),"\uff1a\u8fd9\u4e24\u79cd\u7c7b\u578b\u7684\u786e\u5b9a\u6027\u5373\u65f6\u9884\u62a5\u4e0d\u80fd\u76f4\u63a5\u6bd4\u8f83\uff0c\u56e0\u4e3a\u5b83\u4eec\u5177\u6709\u4e0d\u540c\u7684\u65b9\u5dee\uff01\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5747\u65b9\u8bef\u5dee\uff08MSE\uff09\u7684\u5206\u89e3\u6765\u6700\u597d\u5730\u89e3\u91ca\uff1a"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"M"}),(0,t.jsx)(e.mi,{children:"S"}),(0,t.jsx)(e.mi,{children:"E"}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mi,{children:"b"}),(0,t.jsx)(e.mi,{children:"i"}),(0,t.jsx)(e.mi,{children:"a"}),(0,t.jsxs)(e.msup,{children:[(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mn,{children:"2"})]}),(0,t.jsx)(e.mo,{children:"\u2212"}),(0,t.jsx)(e.mi,{children:"V"}),(0,t.jsx)(e.mi,{children:"a"}),(0,t.jsx)(e.mi,{children:"r"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"MSE=bias^2-Var"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"MSE"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"bia"}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsx)(e.span,{className:"vlist-t",children:(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,t.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"Va"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"})]})]})]})}),"\n",(0,t.jsx)(e.p,{children:"\u6240\u6709\u6700\u5c0f\u5316 MSE\uff08\u6216\u76f8\u5173\u5ea6\u91cf\u503c\uff09\u7684\u786e\u5b9a\u6027\u673a\u5668\u5b66\u4e60\u7b97\u6cd5\u4e5f\u5c06\u4e0d\u53ef\u907f\u514d\u5730\u6700\u5c0f\u5316 nowcast \u7684\u65b9\u5dee (\u5c31\u4f1a\u5bfc\u81f4\u8d8a\u6765\u8d8a\u6a21\u7cca)\u3002\u8fd9\u662f\u8fc7\u6ee4\u6389\u964d\u6c34\u7279\u5f81\u7684\u4e0d\u53ef\u9884\u6d4b\u7684\u6f14\u53d8\u7684\u81ea\u7136\u5c1d\u8bd5\uff0c\u5426\u5219\u4f1a\u589e\u52a0\u65b9\u5dee\uff08\u548c MSE\uff09\u3002\u540c\u6837\u7684\u539f\u5219\u4e5f\u9002\u7528\u4e8e\u5377\u79ef\u548c/\u6216\u6df1\u5ea6\u795e\u7ecf\u7f51\u7edc\u67b6\u6784\uff0c\u5b83\u4eec\u4e5f\u4f1a\u4ea7\u751f\u5e73\u6ed1\u7684 nowcast\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.strong,{children:["\u56e0\u6b64\uff0c\u6700\u597d\u907f\u514d\u5c06\u8bef\u5dee\u6700\u5c0f\u5316\u673a\u5668\u5b66\u4e60 nowcast \u4e0e\u7531",(0,t.jsx)(e.a,{href:"https://pysteps.readthedocs.io/en/stable/pysteps_reference/nowcasts.html#module-pysteps.nowcasts.extrapolation",children:(0,t.jsx)(e.code,{children:"\u6a21\u5757 pysteps.nowcasts.extrapolation"})})," \u751f\u6210\u7684\u65b9\u5dee\u4fdd\u6301\u96f7\u8fbe\u5916\u63a8\u8fdb\u884c\u6bd4\u8f83\u3002\u76f8\u53cd\uff0c\u60a8\u5e94\u8be5\u4f7f\u7528\u6bd4\u8f83\u4e0e\u8db3\u591f\u5927\u7684\u878d\u5408\u7684\u5e73\u5747\u503c\u8fdb\u884c\u6bd4\u8f83\u3002"]})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.strong,{children:["\u96c6\u6210\u5747\u503c\u7684\u786e\u5b9a\u6027\u7b49\u4ef7\u7269\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(e.a,{href:"https://pysteps.readthedocs.io/en/stable/pysteps_reference/nowcasts.html#module-pysteps.nowcasts.sprog",children:(0,t.jsx)(e.code,{children:"\u6a21\u5757 pysteps.nowcasts.sprog"})})," \u6216 ",(0,t.jsx)(e.a,{href:"https://pysteps.readthedocs.io/en/stable/pysteps_reference/nowcasts.html#module-pysteps.nowcasts.anvil",children:(0,t.jsx)(e.code,{children:"pysteps.nowcasts.anvil"})})," \u8fd1\u4f3c\u3002\u53e6\u4e00\u79cd\u53ef\u80fd\u6027\uff0c\u4f46\u8ba1\u7b97\u8981\u6c42\u66f4\u9ad8\uff0c\u662f\u5e73\u5747\u7531\u6a21\u5757",(0,t.jsx)(e.a,{href:"https://pysteps.readthedocs.io/en/stable/pysteps_reference/nowcasts.html#module-pysteps.nowcasts.steps",children:(0,t.jsx)(e.code,{children:"pysteps.nowcasts.steps \u6216 pysteps.nowcasts.linda"})}),"\u751f\u6210\u7684\u8bb8\u591a\u878d\u5408\u6210\u5458\u3002"]})}),"\n",(0,t.jsx)(e.p,{children:"\u5c3d\u7ba1\u5982\u6b64\uff0c\u5373\u4f7f\u4f7f\u7528 pysteps \u96c6\u5408\u5747\u503c\uff0c\u4e5f\u4e0d\u80fd\u5047\u8bbe\u5b83\u7684\u65b9\u5dee\u5c06\u4e0e\u673a\u5668\u5b66\u4e60\u9884\u6d4b\u7684\u65b9\u5dee\u76f8\u540c\u3002\u53ef\u80fd\u7684\u89e3\u51b3\u65b9\u6848\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u4f7f\u7528\u5f52\u4e00\u5316 MSE\uff08NMSE\uff09\u6216\u5176\u4ed6\u5206\u6570\u6765\u8ba1\u7b97\u9884\u6d4b\u548c\u89c2\u5bdf\u4e4b\u95f4\u7684\u65b9\u5dee\u5dee\u5f02\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u4f7f\u7528\u5085\u91cc\u53f6\uff08\u6216\u5c0f\u6ce2\uff09\u53d8\u6362\u5206\u89e3\u573a\uff0c\u4ee5\u6bd4\u8f83\u76f8\u540c\u7a7a\u95f4\u5c3a\u5ea6\u4e0b\u7684\u8981\u7d20\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["[",(0,t.jsx)(e.a,{href:"https://pysteps.readthedocs.io/en/stable/zz_bibliography.html#id11",children:"FNP+20"}),"] \u7ed9\u51fa\u4e86\u6df1\u5ea6\u5377\u79ef\u673a\u5668\u5b66\u4e60\u795e\u7ecf\u7f51\u7edc nowcast \u548c pysteps \u7684\u826f\u597d\u786e\u5b9a\u6027\u6bd4\u8f83\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"#\u6982\u7387\u5373\u65f6\u9884\u62a5"}),"\n",(0,t.jsx)(e.p,{children:"\u6982\u7387\u673a\u5668\u5b66\u4e60\u56de\u5f52\u65b9\u6cd5\u53ef\u4ee5\u5927\u81f4\u5206\u4e3a\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u57fa\u4e8e\u5206\u4f4d\u6570\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\u5206\u4f4d\u6570\u56de\u5f52\u3001\u5206\u4f4d\u6570\u968f\u673a\u68ee\u6797\u548c\u5206\u4f4d\u6570\u795e\u7ecf\u7f51\u7edc\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u57fa\u4e8e\u96c6\u6210\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\u751f\u6210\u5bf9\u6297\u7f51\u7edc\uff08GAN\uff09\u548c\u53d8\u5206\u81ea\u52a8\u7f16\u7801\u5668\uff08VAE\uff09\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u57fa\u4e8e\u5206\u4f4d\u6570\u7684\u673a\u5668\u5b66\u4e60\u5373\u65f6\u9884\u62a5\u5f88\u6709\u8da3\uff0c\u4f46\u53ea\u80fd\u4f30\u8ba1\u7ed9\u5b9a\u70b9\u7684\u8d85\u989d\u6982\u7387\uff08\u4f8b\u5982[",(0,t.jsx)(e.a,{href:"https://pysteps.readthedocs.io/en/stable/zz_bibliography.html#id10",children:"FSN+19"}),"]\uff09\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e3a\u4e86\u4f30\u8ba1\u9762\u8d85\u989d\u6982\u7387\uff0c\u4f8b\u5982\u5728\u96c6\u6c34\u533a\u4e0a\u65b9\uff0c\u6216\u5c06 nowcast \u4e0d\u786e\u5b9a\u6027\u4f20\u64ad\u5230\u6c34\u6587\u6a21\u578b\u4e2d\uff0c\u4ecd\u7136\u9700\u8981\u751f\u6210\u5b8c\u6574\u7684\u96c6\u5408\uff0c\u4f8b\u5982\u4f7f\u7528\u751f\u6210\u5f0f\u673a\u5668\u5b66\u4e60\u6a21\u578b\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u751f\u6210\u5f0f\u673a\u5668\u5b66\u4e60\u65b9\u6cd5\u7c7b\u4f3c\u4e8e pysteps \u96c6\u5408\u6210\u5458\u3002\u4e24\u8005\u90fd\u65e8\u5728\u4ea7\u751f\u4e00\u7cfb\u5217\u53ef\u80fd\u7684\u5b9e\u73b0\uff0c\u4ee5\u4fdd\u6301\u89c2\u6d4b\u5230\u7684\u96f7\u8fbe\u573a\u7684\u65b9\u5dee\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u9488\u5bf9 pysteps \u7684\u751f\u6210\u5f0f\u673a\u5668\u5b66\u4e60\u6a21\u578b\u7684\u6b63\u786e\u6982\u7387\u9a8c\u8bc1\u662f\u6700\u8fd1\u5728[",(0,t.jsx)(e.a,{href:"https://pysteps.readthedocs.io/en/stable/zz_bibliography.html#id25",children:"RLW+ 11"}),"] \u5de5\u4f5c\u4e2d\u8fdb\u884c\u7684\u4e00\u4e2a\u6709\u8da3\u7684\u7814\u7a76\u65b9\u5411\u3002"]})]})}function d(s={}){const{wrapper:e}={...(0,a.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(h,{...s})}):h(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>i,x:()=>r});var t=n(6540);const a={},l=t.createContext(a);function i(s){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(a):s.components||a:i(s.components),t.createElement(l.Provider,{value:e},s.children)}}}]);