"use strict";(self.webpackChunkwebblog=self.webpackChunkwebblog||[]).push([[3925],{7752:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>x,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var n=a(4848),l=a(8453);const t={title:"CNN \u5b66\u4e60\u7b14\u8bb0",date:new Date("2022-06-05T15:00:46.000Z"),authors:"lin",tags:["ML&DL"]},i="\u8bb0\u5f55 CNN \u5b66\u4e60\u8fc7\u7a0b\u4e2d\u4e00\u4e9b\u77e5\u8bc6\u70b9",c={id:"ML&DL/ACNN-bj",title:"CNN \u5b66\u4e60\u7b14\u8bb0",description:"\u5377\u79ef\u53c2\u6570\u4e0e\u5377\u79ef\u7ed3\u679c\u7684\u8ba1\u7b97\u89c4\u5219",source:"@site/docs/ML&DL/ACNN-bj.md",sourceDirName:"ML&DL",slug:"/ML&DL/ACNN-bj",permalink:"/docs/ML&DL/ACNN-bj",draft:!1,unlisted:!1,tags:[{inline:!0,label:"ML&DL",permalink:"/docs/tags/ml-dl"}],version:"current",frontMatter:{title:"CNN \u5b66\u4e60\u7b14\u8bb0",date:"2022-06-05T15:00:46.000Z",authors:"lin",tags:["ML&DL"]},sidebar:"tutorialSidebar",previous:{title:"ML&DL",permalink:"/docs/category/mldl"},next:{title:"RNN \u5b66\u4e60\u7b14\u8bb0",permalink:"/docs/ML&DL/ARNNbiji"}},m={},r=[{value:"\u5377\u79ef\u53c2\u6570\u4e0e\u5377\u79ef\u7ed3\u679c\u7684\u8ba1\u7b97\u89c4\u5219",id:"\u5377\u79ef\u53c2\u6570\u4e0e\u5377\u79ef\u7ed3\u679c\u7684\u8ba1\u7b97\u89c4\u5219",level:2},{value:"\u6b8b\u5dee\u7f51\u7edc",id:"\u6b8b\u5dee\u7f51\u7edc",level:2}];function h(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",math:"math",mi:"mi",mo:"mo",mrow:"mrow",mtext:"mtext",munder:"munder",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"\u8bb0\u5f55-cnn-\u5b66\u4e60\u8fc7\u7a0b\u4e2d\u4e00\u4e9b\u77e5\u8bc6\u70b9",children:"\u8bb0\u5f55 CNN \u5b66\u4e60\u8fc7\u7a0b\u4e2d\u4e00\u4e9b\u77e5\u8bc6\u70b9"})}),"\n",(0,n.jsx)(e.h2,{id:"\u5377\u79ef\u53c2\u6570\u4e0e\u5377\u79ef\u7ed3\u679c\u7684\u8ba1\u7b97\u89c4\u5219",children:"\u5377\u79ef\u53c2\u6570\u4e0e\u5377\u79ef\u7ed3\u679c\u7684\u8ba1\u7b97\u89c4\u5219"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"# \u8f93\u5165\u6570\u636e\u7684\u5f62\u72b6\uff08N\uff0cCin\uff0cHin\uff0cWin\uff09\uff0c\u8f93\u51fa\u7684\u5f62\u72b6\uff08N\uff0cCout\uff0cHout\uff0cWout\uff09\u4f9d\u6b21\u4e3a\uff0c\u6279\u6b21||\u901a\u9053||\u9ad8||\u5bbd\nHin = 81\nWin = 81\npad = [0,0]  # \u8865 0 \u64cd\u4f5c\uff0c\u9ed8\u8ba4\u4e3a 0\ndilation = [1,1]  # \u5377\u79ef\u6838\u4e2d\u6bcf\u4e2a\u5143\u7d20\u7684 \u95f4\u9694\uff0c\u9ed8\u8ba4\u4e3a 1\nkernel_size = [3, 3]  # \u5377\u79ef\u6838\u5927\u5c0f\uff0ch*w\nstride = [1,1]  # \u5377\u79ef\u6838\u6b65\u957f \u9ed8\u8ba4\u4e3a 1\n\nHout=(Hin+2*pad[0]-dilation[0]*(kernel_size[0]-1)-1)/(stride[0])+1\nWout=(Win+2*pad[1]-dilation[1]*(kernel_size[1]-1)-1)/(stride[1])+1\n\nprint(Hout,Wout)\n"})}),"\n",(0,n.jsx)(e.p,{children:"\u5728\u5377\u79ef\u7f51\u7edc\u4e2d\uff0c\u5982\u4f55\u8bbe\u7f6e\u5377\u79ef\u5c42\u7684\u5377\u79ef\u5927\u5c0f\u662f\u4e00\u4e2a\u5173\u952e\u7684\u95ee\u9898\uff0c\u5728 Inception \u7f51\u7edc\u4e2d\u5377\u79ef\u5c42\u5305\u548c\u591a\u4e2a\u4e0d\u540c\u5927\u5c0f\u7684\u5377\u79ef\u64cd\u4f5c\uff0c\u79f0\u4e3a Inception \u6a21\u5757\u3002Inception \u7f51\u7edc\u662f\u7531\u6709\u591a\u4e2a Inception \u6a21\u5757\u6838\u5c11\u91cf\u7684\u6c47\u805a\u5c42\u5806\u53e0\u800c\u6210\u3002"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Inception",src:a(2535).A+"",width:"1145",height:"499"})}),"\n",(0,n.jsx)(e.p,{children:"V1 \u7248\u672c\u7684 Inception \u6a21\u5757\u7ed3\u6784\uff0c\u91c7\u7528\u4e86 4 \u7ec4\u5e73\u884c\u7684\u7279\u5f81\u62bd\u53d6\u65b9\u5f0f\uff0c\u5206\u522b\u4e3a 1x1 , 3x3 , 5x5 \u7684\u5377\u79ef\u6838 3x3 \u7684\u6700\u5927\u6c47\u805a\u3002\u540c\u65f6\u4e3a\u4e86\u63d0\u9ad8\u8ba1\u7b97\u6548\u7387\uff0c\u51cf\u5c11\u53c2\u6570\u6570\u91cf\uff0cInception \u6a21\u5757\u5728\u8fdb\u884c 3x3\uff0c5x5 \u7684\u5377\u79ef\u4e4b\u524d\u30013x3 \u7684\u6700\u5927\u6c47\u805a\u4e4b\u540e\uff0c\u8fdb\u884c\u4e00\u6b21 1x1 \u7684\u5377\u79ef\u6765\u51cf\u5c11\u7279\u5f81\u7684\u6620\u5c04\u7684\u6df1\u5ea6\u3002\u5982\u679c\u8f93\u5165\u7279\u5f81\u6620\u5c04\u4e4b\u95f4\u5b58\u5728\u5197\u4f59\u4fe1\u606f\uff0c1x1 \u7684\u5377\u79ef\u76f8\u5f53\u4e8e\u5148\u8fdb\u884c\u4e00\u6b21\u7279\u5f81\u63d0\u53d6\u3002"}),"\n",(0,n.jsx)(e.h2,{id:"\u6b8b\u5dee\u7f51\u7edc",children:"\u6b8b\u5dee\u7f51\u7edc"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"\u6b8b\u5dee\u7f51\u7edc"})," \uff08Residual Network\uff0cResNet\uff09\u901a\u8fc7\u7ed9\u975e\u7ebf\u6027\u7684\u5377\u79ef\u5c42\u589e\u52a0\u76f4\u8fde\u8fb9\uff08Shortcut COnnection\uff09\u7684\u65b9\u5f0f\u6765\u63d0\u9ad8\u4fe1\u606f\u7684\u4f20\u64ad\u6548\u7387\u3002\n\u5047\u8bbe\u5728\u4e00\u4e2a\u6df1\u5ea6\u7f51\u7edc\u4e2d\uff0c\u6211\u4eec\u671f\u671b\u4e00\u4e2a\u975e\u7ebf\u6027\u5355\u5143\uff08\u53ef\u4ee5\u4e3a\u4e00\u5c42\u6216\u591a\u5c42\u7684\u5377\u79ef\u5c42\uff09",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:";"}),(0,n.jsx)(e.mi,{children:"\u03b8"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x;\\theta)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:";"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"\u03b8"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," \u53bb\u903c\u8fd1\u4e00\u4e2a\u76ee\u6807\u51fd\u6570\u4e3a h(x) \uff0c\u5982\u679c\u5c06\u76ee\u6807\u51fd\u6570\u62c6\u5206\u6210\u4e24\u90e8\u5206\uff1a ",(0,n.jsx)(e.strong,{children:"\u6052\u7b49\u51fd\u6570"}),"x \u548c ",(0,n.jsx)(e.strong,{children:"\u6b8b\u5dee\u51fd\u6570"}),"  h(x)-x"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"h"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:(0,n.jsxs)(e.munder,{children:[(0,n.jsx)(e.mo,{children:(0,n.jsx)(e.mi,{children:"x"})}),(0,n.jsx)(e.mtext,{children:"\u6052\u7b49\u51fd\u6570"})]})}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:(0,n.jsxs)(e.munder,{children:[(0,n.jsxs)(e.mo,{children:[(0,n.jsx)(e.mi,{children:"h"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsx)(e.mtext,{children:"\u6b8b\u5dee\u51fd\u6570"})]})})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"h(x)=\\underset{\u6052\u7b49\u51fd\u6570}{x} + \\underset{\u6b8b\u5dee\u51fd\u6570}{h(x)-x}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.3277em",verticalAlign:"-0.7443em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.4306em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.3557em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord cjk_fallback mtight",children:"\u6052\u7b49\u51fd\u6570"})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop mathnormal",children:"x"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7443em"},children:(0,n.jsx)(e.span,{})})})]})})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.7443em",verticalAlign:"-0.9943em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.75em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.1057em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord cjk_fallback mtight",children:"\u6b8b\u5dee\u51fd\u6570"})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{children:(0,n.jsxs)(e.span,{className:"mop",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.9943em"},children:(0,n.jsx)(e.span,{})})})]})})})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["\u7528\u795e\u7ecf\u7f51\u7edc\u53bb\u903c\u8fd1\u6b8b\u5dee\u51fd\u6570\uff0c\u7f51\u7edc\u66f4\u5bb9\u6613\u5b66\u4e60\u3002\u56e0\u6b64\uff0c\u4f18\u5316\u95ee\u9898\u53ef\u4ee5\u8f6c\u6362\u4e3a\uff1a\u8ba9\u975e\u7ebf\u6027\u5355\u5143 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:";"}),(0,n.jsx)(e.mi,{children:"\u03b8"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x;\\theta)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:";"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"\u03b8"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," \u53bb\u8fd1\u4f3c\u6b8b\u5dee\u51fd\u6570 h(x)-x ,\u5e76\u7528 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:";"}),(0,n.jsx)(e.mi,{children:"\u03b8"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x;\\theta)+x"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:";"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"\u03b8"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]})," \u53bb\u903c\u8fd1 x\u3002"]})]})}function x(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},2535:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/Inception-ce337882284957277844c26e72bc4338.jpg"},8453:(s,e,a)=>{a.d(e,{R:()=>i,x:()=>c});var n=a(6540);const l={},t=n.createContext(l);function i(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);