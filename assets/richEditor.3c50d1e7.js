import{_ as e}from"./richEditor.b65e8793.js";import{d as a,r as l,k as t,e as d,c as s,g as o,s as n,q as r,I as i,p as u,f as c}from"./vendor.67cd59db.js";var p=a({components:{RichEditor:e},setup(){const e=l("默认数据"),a=l();setTimeout((()=>{e.value="3秒后的数据"}),3e3);return{handleUpdateValue:e=>{console.log(e),a.value=e},editorValue:e}}});const f=e=>(u("data-v-489a425e"),e=e(),c(),e),v={class:"editorWrapper"},m={class:"info"},_=i("富文本编辑器"),g=f((()=>o("span",{style:{"text-align":"left"}},"富文本编辑器编辑场景。",-1))),V={class:"grid-content bg-purple-dark"},h={style:{"text-align":"left"}},b=f((()=>o("span",null,"富文本编辑器",-1)));p.render=function(e,a,l,i,u,c){const p=t("el-divider"),f=t("RichEditor",!0),x=t("el-card"),U=t("el-col"),E=t("el-row");return d(),s("div",v,[o("div",m,[n(p,{"content-position":"left"},{default:r((()=>[_])),_:1}),g]),o("div",null,[n(E,null,{default:r((()=>[n(U,{offset:1,span:22},{default:r((()=>[o("div",V,[n(x,{class:"box-card"},{default:r((()=>[o("div",h,[b,n(p)]),n(f,{"model-value":e.editorValue,"onUpdate:modelValue":e.handleUpdateValue},null,8,["model-value","onUpdate:modelValue"])])),_:1})])])),_:1})])),_:1})])])},p.__scopeId="data-v-489a425e";export{p as default};