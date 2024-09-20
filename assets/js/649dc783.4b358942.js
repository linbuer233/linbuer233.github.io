"use strict";(self.webpackChunkwebblog=self.webpackChunkwebblog||[]).push([[3983],{6804:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var i=s(4848),l=s(8453);const t={title:"IPythonShell \u547d\u4ee4\u548c Magic \u547d\u4ee4",date:new Date("2022-02-13T22:12:57.000Z"),authors:"lin",tags:["Python","\u5c0f\u6280\u5de7"]},r="shell \u547d\u4ee4",c={id:"Python/IPythonshellmagic",title:"IPythonShell \u547d\u4ee4\u548c Magic \u547d\u4ee4",description:"\u8bb0\u5f55\u5728 jupyter \u8fd9\u6837\u7684 Ipython \u73af\u5883\u4e2d\u80fd\u7528\u5230\u7684 shell \u547d\u4ee4\u548c magic \u547d\u4ee4",source:"@site/docs/Python/IPythonshellmagic.md",sourceDirName:"Python",slug:"/Python/IPythonshellmagic",permalink:"/docs/Python/IPythonshellmagic",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"},{inline:!0,label:"\u5c0f\u6280\u5de7",permalink:"/docs/tags/\u5c0f\u6280\u5de7"}],version:"current",frontMatter:{title:"IPythonShell \u547d\u4ee4\u548c Magic \u547d\u4ee4",date:"2022-02-13T22:12:57.000Z",authors:"lin",tags:["Python","\u5c0f\u6280\u5de7"]},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/category/python"},next:{title:"Pycharm \u4f7f\u7528\u548c\u63d2\u4ef6\u63a8\u8350",permalink:"/docs/Python/PycharmConsole"}},o={},h=[];function a(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u8bb0\u5f55\u5728 jupyter \u8fd9\u6837\u7684 Ipython \u73af\u5883\u4e2d\u80fd\u7528\u5230\u7684 shell \u547d\u4ee4\u548c magic \u547d\u4ee4"}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"shell-\u547d\u4ee4",children:"shell \u547d\u4ee4"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8fdb\u884c\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u65f6\uff0c\u901a\u5e38\u9700\u8981\u8bbf\u95ee\u5e95\u5c42 shell\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u611f\u53f9\u53f7\uff08\u6216\u7830\uff09\u6765\u5b9e\u73b0\u3002",(0,i.jsx)(n.code,{children:"!"})]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u5141\u8bb8\u5728\u884c\u5f00\u5934\u5b58\u5728\u65f6\u6267\u884c\u7b80\u5355\u7684\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"In[1]: !pwd\n/User/home/\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u66f4\u6539\u76ee\u5f55\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"In[1]: !cd /var/etc\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6216\u7f16\u8f91\u6587\u4ef6\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"In[1]: !mvim myfile.txt\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7830\u7684\u4e00\u884c\u53ef\u4ee5\u8c03\u7528\u4efb\u4f55\u5b89\u88c5\u5728\u5e95\u5c42 shell \u4e2d\u7684\u7a0b\u5e8f\uff0c\u5e76\u652f\u6301\u4ee5\u6216\u7684\u5f62\u5f0f\u8fdb\u884c\u53d8\u91cf\u6269\u5c55\u3002\u540e\u4e00\u79cd\u5f62\u5f0f\u7684\u6269\u5c55\u652f\u6301\u4efb\u610f python \u8868\u8fbe\u5f0f\uff1a",(0,i.jsx)(n.code,{children:"$variable``{variable}"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"In[1]: file = 'myfile.txt'\n\nIn[2]: !mv $file {file.upper()}\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7830\uff08\uff09\u4e5f\u53ef\u4ee5\u51fa\u73b0\u5728\u4f5c\u4e1a\u7684\u53f3\u4fa7\uff0c\u7d27\u8ddf\u5728\u7b49\u53f7\u4e4b\u540e\uff0c\u6216\u8005\u7528\u7a7a\u683c\u4e0e\u5b83\u9694\u5f00\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7206\u70b8\u540e\u547d\u4ee4\u7684\u6807\u51c6\u8f93\u51fa\u5c06\u5728\u7c7b\u4f3c\u5217\u8868\u7684\u5bf9\u8c61\u4e2d\u62c6\u5206\u6210\u884c\uff0c\u5e76\u5206\u914d\u7ed9\u5de6\u4fa7\u3002",(0,i.jsx)(n.code,{children:"!"})]}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u8fd9\u5141\u8bb8\u60a8\u5c06\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684\u6587\u4ef6\u5217\u8868\u653e\u5728\u53d8\u91cf\u4e2d\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"In[1]: my_files = !ls\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5c06\u4e0d\u540c\u7684\u53ef\u80fd\u6027\u7ec4\u5408\u5728 for \u5faa\u73af\u3001\u6761\u4ef6\u3001\u51fd\u6570\u4e2d..."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"my_files = !ls ~/\nfor i, file in enumerate(my_files):\n    raw = !echo $backup $file\n    !cp $file {file.split('.')[0] + '.bak'}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd8\u53ef\u4ee5\u67e5\u770b pip \u5b89\u88c5\u7684\u5305"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"!pip list\n"})}),"\n",(0,i.jsx)(n.h1,{id:"magic-\u547d\u4ee4",children:"magic \u547d\u4ee4"}),"\n",(0,i.jsx)(n.p,{children:"\u9b54\u672f\u51fd\u6570\uff08magics\uff09\u901a\u5e38\u4ee5\u7c7b\u4f3c shell \u7684\u8bed\u6cd5\u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u4f46\u5b83\u4eec\u662f\u5f15\u64ce\u76d6\u4e0b\u7684 python \u51fd\u6570\u3002\u8bed\u6cd5\u548c\u8d4b\u503c\u53ef\u80fd\u6027\u4e0e bang\uff08!\uff09\u8bed\u6cd5\u7c7b\u4f3c\uff0c\u4f46\u5177\u6709\u66f4\u5927\u7684\u7075\u6d3b\u6027\u548c\u529f\u80fd\u3002\u9b54\u672f\u51fd\u6570\u4ee5\u767e\u5206\u53f7\uff08%\uff09\u6216\u53cc\u767e\u5206\u53f7\uff08%%\uff09\u5f00\u5934\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5e26\u6709\u5355\u4e2a\u767e\u5206\u53f7\u7684\u9b54\u672f\u547c\u53eb\u5c06\u4ec5\u4f5c\u7528\u4e8e\u4e00\u884c\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"In[1]: %xmode\nException reporting mode: Verbose\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u9b54\u672f\u652f\u6301\u5206\u914d\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"In [1]: results = %timeit -r1 -n1 -o list(range(1000))\n1 loops, best of 1: 21.1 \xb5s per loop\n\nIn [2]: results\nOut[2]: <TimeitResult : 1 loops, best of 1: 21.1 \xb5s per loop>\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5e26\u6709\u53cc\u767e\u5206\u53f7\uff08%%\uff09\u7684\u9b54\u672f\u53ef\u4ee5\u5206\u5e03\u5728\u591a\u884c\u4e0a\uff0c\u4f46\u5b83\u4eec\u4e0d\u652f\u6301\u8d4b\u503c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'In[1]: %%bash\n...  : echo "My shell is:" $SHELL\n...  : echo "My disk usage is:"\n...  : df -h\nMy shell is: /usr/local/bin/bash\nMy disk usage is:\nFilesystem      Size   Used  Avail Capacity  iused   ifree %iused  Mounted on\n/dev/disk1     233Gi  216Gi   16Gi    94% 56788108 4190706   93%   /\ndevfs          190Ki  190Ki    0Bi   100%      656       0  100%   /dev\nmap -hosts       0Bi    0Bi    0Bi   100%        0       0  100%   /net\nmap auto_home    0Bi    0Bi    0Bi   100%        0       0  100%   /hom\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8be6\u7ec6\u53c2\u8003"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://ipython.readthedocs.io/en/stable/interactive/magics.html",children:"\u5185\u7f6e\u9b54\u672f\u547d\u4ee4 \u2014 IPython 8.0.1 \u6587\u6863"})}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u5e38\u7528\u7684"}),"\n",(0,i.jsx)(n.p,{children:"%time \u7528\u4e8e\u8ba1\u7b97\u8fd0\u884c\u65f6\u95f4"}),"\n",(0,i.jsx)(n.p,{children:"%timeit \u7528\u4e8e\u8ba1\u7b97\u591a\u6b21\u8fd0\u884c\u7684\u5e73\u5747\u65f6\u95f4"})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(6540);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);