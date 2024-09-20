"use strict";(self.webpackChunkwebblog=self.webpackChunkwebblog||[]).push([[4191],{8370:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var o=t(4848),r=t(8453);const i={title:"wordCount \u6587\u672c\u8ba1\u7b97\u5de5\u5177",date:new Date("2022-01-18T00:29:42.000Z"),authors:"lin",tags:["\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f","\u5c0f\u5de5\u5177"]},l=void 0,d={id:"\u5c0f\u7a0b\u5e8f/wordCount",title:"wordCount \u6587\u672c\u8ba1\u7b97\u5de5\u5177",description:"\u7a81\u53d1\u5947\u60f3\uff0c\u505a\u7684\u4e00\u4e2a\u6587\u4ef6\u4e2d\u7684\u8ba1\u6570\u5de5\u5177\u3002",source:"@site/docs/\u5c0f\u7a0b\u5e8f/wordCount.md",sourceDirName:"\u5c0f\u7a0b\u5e8f",slug:"/\u5c0f\u7a0b\u5e8f/wordCount",permalink:"/docs/\u5c0f\u7a0b\u5e8f/wordCount",draft:!1,unlisted:!1,tags:[{inline:!0,label:"\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f",permalink:"/docs/tags/\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f"},{inline:!0,label:"\u5c0f\u5de5\u5177",permalink:"/docs/tags/\u5c0f\u5de5\u5177"}],version:"current",frontMatter:{title:"wordCount \u6587\u672c\u8ba1\u7b97\u5de5\u5177",date:"2022-01-18T00:29:42.000Z",authors:"lin",tags:["\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f","\u5c0f\u5de5\u5177"]},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u52a8\u722c\u53d6\u4e2d\u592e\u6c14\u8c61\u53f0\u4e0a\u7684\u5929\u6c14\u56fe",permalink:"/docs/\u5c0f\u7a0b\u5e8f/paqutianqi"},next:{title:"\u7f16\u7a0b\u76f8\u5173",permalink:"/docs/category/\u7f16\u7a0b\u76f8\u5173"}},s={},a=[];function c(n){const e={code:"code",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"\u7a81\u53d1\u5947\u60f3\uff0c\u505a\u7684\u4e00\u4e2a\u6587\u4ef6\u4e2d\u7684\u8ba1\u6570\u5de5\u5177\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'\'\'\'\n2022/1/18\n\u5b9e\u73b0\u8ba1\u7b97\u6587\u4ef6\u91cc\uff08\u7eaf\u6587\u672c\u6587\u4ef6\uff09\u7684\u5b57\u6bcd\u4e2a\u6570\n\'\'\'\n\n\ndef word_count(path):\n    import numpy as np\n\n    f = open(path, "r")\n    a = f.read()\n    word = list(np.arange(65, 91, 1))\n    bigcount = np.zeros(26)\n    smallcount = np.zeros(26)\n    allcount = np.zeros(26)\n    for i in a:\n        for j in word:\n            if ord(i) == j:\n                bigcount[word.index(j)] = bigcount[word.index(j)] + 1\n\n            if ord(i) == j + 32:\n                smallcount[word.index(j)] = smallcount[word.index(j)] + 1\n    allcount = bigcount + smallcount\n    print("\u5b57\u6bcd   \u6570\u91cf    \u5b57\u6bcd   \u6570\u91cf")\n    print("---------------------------------------------")\n    for i in word:\n        print(chr(i), ":", " ", str(bigcount[word.index(i)]), " | ", chr(i + 32), ":", " ",\n              str(smallcount[word.index(i)]),\n              " | ", "\u603b\u5171\uff1a", allcount[word.index(i)])\n        print("---------------------------------------------")\n\n\nword_count("D:\\\\WORKcode\\\\1.txt")\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6d4b\u8bd5\u6587\u4ef6"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-txt",children:"hello world \nmy friend.\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u6d4b\u8bd5\u7ed3\u679c"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-txt",children:"\u5b57\u6bcd   \u6570\u91cf   \u5b57\u6bcd   \u6570\u91cf\n---------------------------------------------\nA :   0.0  |  a :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nB :   0.0  |  b :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nC :   0.0  |  c :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nD :   0.0  |  d :   2.0  |  \u603b\u5171\uff1a2.0\n---------------------------------------------\nE :   0.0  |  e :   2.0  |  \u603b\u5171\uff1a2.0\n---------------------------------------------\nF :   0.0  |  f :   1.0  |  \u603b\u5171\uff1a1.0\n---------------------------------------------\nG :   0.0  |  g :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nH :   0.0  |  h :   1.0  |  \u603b\u5171\uff1a1.0\n---------------------------------------------\nI :   0.0  |  i :   1.0  |  \u603b\u5171\uff1a1.0\n---------------------------------------------\nJ :   0.0  |  j :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nK :   0.0  |  k :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nL :   0.0  |  l :   3.0  |  \u603b\u5171\uff1a3.0\n---------------------------------------------\nM :   0.0  |  m :   1.0  |  \u603b\u5171\uff1a1.0\n---------------------------------------------\nN :   0.0  |  n :   1.0  |  \u603b\u5171\uff1a1.0\n---------------------------------------------\nO :   0.0  |  o :   2.0  |  \u603b\u5171\uff1a2.0\n---------------------------------------------\nP :   0.0  |  p :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nQ :   0.0  |  q :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nR :   0.0  |  r :   2.0  |  \u603b\u5171\uff1a2.0\n---------------------------------------------\nS :   0.0  |  s :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nT :   0.0  |  t :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nU :   0.0  |  u :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nV :   0.0  |  v :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nW :   0.0  |  w :   1.0  |  \u603b\u5171\uff1a1.0\n---------------------------------------------\nX :   0.0  |  x :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\nY :   0.0  |  y :   1.0  |  \u603b\u5171\uff1a1.0\n---------------------------------------------\nZ :   0.0  |  z :   0.0  |  \u603b\u5171\uff1a0.0\n---------------------------------------------\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u540e\u7eed\u6709\u53ef\u80fd\u8fd8\u4f1a\u5b8c\u5584\uff0c\u6dfb\u52a0\u66f4\u591a\u7684\u529f\u80fd"}),"\n",(0,o.jsx)(e.p,{children:"\u6301\u7eed\u66f4\u65b0\xb7\xb7\xb7\xb7\xb7"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;"><iframe \nsrc="//player.bilibili.com/player.html?aid=39807850&cid=69927212&page=1" scrolling="no" border="0" \nframeborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; \nheight: 100%; left: 0; top: 0;"> </iframe></div>\n\n\n<div class="dplayer-video-container">\n\n{% dplayer "url=https://www.bilibili.com/video/BV1Et411s7MW?t=1.9" %}\n\n<div>\n'})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>d});var o=t(6540);const r={},i=o.createContext(r);function l(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);