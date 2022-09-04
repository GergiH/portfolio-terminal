(function(){"use strict";var e={7389:function(e,a,n){var i=n(9242),r=n(3396),s=n.p+"img/portrait.7405734b.jpg";const o={key:0,class:"portrait-image-container"},t=(0,r._)("img",{class:"portrait-image",src:s},null,-1),l=[t],c={class:"button-wrapper","data-tooltip":"Switch layout"},u=["onclick","innerHTML"];function m(e,a,n,s,t,m){const p=(0,r.up)("HeaderPart"),d=(0,r.up)("TerminalView"),v=(0,r.up)("GraphicalView");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(p),(0,r.Wm)(i.uT,null,{default:(0,r.w5)((()=>[s.isTerminalView?((0,r.wg)(),(0,r.iD)("div",o,l)):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(i.uT,null,{default:(0,r.w5)((()=>[s.isTerminalView?((0,r.wg)(),(0,r.j4)(d,{key:0,commands:s.commands,"command-names":s.COMMANDNAMES},null,8,["commands","command-names"])):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(i.uT,null,{default:(0,r.w5)((()=>[s.isTerminalView?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(v,{key:0,commands:s.commands},null,8,["commands"]))])),_:1}),(0,r._)("div",c,[(0,r._)("button",{class:"layout-switcher",onclick:s.toggleView,innerHTML:s.buttonIcon},null,8,u)])],64)}var p=n(4870);const d={class:"header-background"};function v(e,a,n,i,s,o){return(0,r.wg)(),(0,r.iD)("div",d)}var _={name:"HeaderPart",props:{},setup(){return{}}},h=n(89);const g=(0,h.Z)(_,[["render",v],["__scopeId","data-v-3199c280"]]);var f=g,w=n(7139);const k=e=>((0,r.dD)("data-v-16ae93ca"),e=e(),(0,r.Cn)(),e),b={id:"panels"},y={class:"accordion"},H={id:"about"},M=["onclick"],T={class:"section-content"},V={key:0,class:"inline-block"},D=k((()=>(0,r._)("img",{class:"portrait-image portrait-image--small",src:s},null,-1))),C=[D],S={class:"p-l-2 inline-block"},I=k((()=>(0,r._)("h3",{class:"section-header"},"Horváth Gergely Zsolt",-1))),L=["innerHTML"],O={id:"career"},F=["onclick"],$={class:"section-content"},j=["innerHTML"],G={id:"links"},N=["onclick"],P={class:"section-content"},A={key:0,class:"graphical-ul"},x=["href"];function z(e,a,n,i,s,o){return(0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("div",y,[(0,r._)("section",H,[(0,r._)("h2",null,[(0,r._)("a",{ref:"aboutLink",href:"#about",onclick:i.showImage},"About",8,M)]),(0,r._)("div",T,[i.isVisible?((0,r.wg)(),(0,r.iD)("div",V,C)):(0,r.kq)("",!0),(0,r._)("div",S,[I,i.props.commands?((0,r.wg)(),(0,r.iD)("div",{key:0,innerHTML:i.props.commands.about},null,8,L)):(0,r.kq)("",!0)])])]),(0,r._)("section",O,[(0,r._)("h2",null,[(0,r._)("a",{href:"#career",onclick:i.hideImage},"Career",8,F)]),(0,r._)("div",$,[i.props.commands?((0,r.wg)(),(0,r.iD)("div",{key:0,innerHTML:i.props.commands.career},null,8,j)):(0,r.kq)("",!0)])]),(0,r._)("section",G,[(0,r._)("h2",null,[(0,r._)("a",{href:"#links",onclick:i.hideImage},"Links",8,N)]),(0,r._)("div",P,[(0,r._)("div",null,[i.props.commands?((0,r.wg)(),(0,r.iD)("ul",A,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.props.commands.links,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e[0]},[(0,r.Uk)((0,w.zw)(e[0])+" - ",1),(0,r._)("a",{href:e[1],target:"_blank"},(0,w.zw)(e[1]),9,x)])))),128))])):(0,r.kq)("",!0)])])])])])}var q={name:"GraphicalView",props:{commands:{}},setup(e){const a=(0,p.iH)(null),n=(0,p.iH)(!0),i=()=>{n.value=!1},s=()=>{n.value=!0};return(0,r.bv)((()=>{setTimeout((()=>a.value.click()),500)})),{aboutLink:a,hideImage:i,isVisible:n,props:e,showImage:s}}};const R=(0,h.Z)(q,[["render",z],["__scopeId","data-v-16ae93ca"]]);var B=R;const E={id:"terminal-window"},W=(0,r.uE)('<div class="top" data-v-58819c6c><div class="btns" data-v-58819c6c><span class="circle red" data-v-58819c6c></span><span class="circle yellow" data-v-58819c6c></span><span class="circle green" data-v-58819c6c></span></div><div class="title" data-v-58819c6c><strong data-v-58819c6c>Terminal</strong></div></div>',1),Z={class:"body",ref:"terminalBody"},U={class:"terminal-ul"},Y=["innerHTML"],K={class:"command-line-container"},J={id:"prompt",class:"keep-spaces"};function Q(e,a,n,s,o,t){return(0,r.wg)(),(0,r.iD)("div",E,[W,(0,r._)("div",Z,[(0,r._)("ul",U,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.lines,((e,a)=>((0,r.wg)(),(0,r.iD)("li",{key:e+a,innerHTML:e},null,8,Y)))),128))]),(0,r._)("div",K,[(0,r._)("div",J,(0,w.zw)(s.prompt),1),(0,r.wy)((0,r._)("input",{id:"command-line","onUpdate:modelValue":a[0]||(a[0]=e=>s.command=e),onKeyup:a[1]||(a[1]=(0,i.D2)(((...e)=>s.handleCommand&&s.handleCommand(...e)),["enter"])),autofocus:"",autocomplete:"off"},null,544),[[i.nr,s.command]])])],512)])}const X="[visitor@gergih-portfolio] ",ee=e=>e.toISOString().slice(0,19).replace("T"," ");var ae={name:"TerminalView",props:{commands:{},commandNames:{}},setup(e){const a=(0,p.iH)(""),n=(0,p.iH)([]),i=(0,p.iH)(`${ee(new Date)} ${X}`),s=(0,p.iH)(null),o=()=>`${ee(new Date)} ${X}`,t=()=>{n.value.push("Interactive terminal, made by"),n.value.push(String.raw`<span class="keep-spaces">_  _ ____ ____ _  _ ____ ___ _  _    ____ ____ ____ ____ ____ _    _   _ </span>`),n.value.push(String.raw`<span class="keep-spaces">|__| |  | |__/ |  | |__|  |  |__|    | __ |___ |__/ | __ |___ |     \_/  </span>`),n.value.push(String.raw`<span class="keep-spaces">|  | |__| |  \  \/  |  |  |  |  |    |__] |___ |  \ |__] |___ |___   |   </span>`),n.value.push("For available commands use '<span class=\"help-command\">help</span>'"),n.value.push("<br/>")},l=async()=>{await u(),i.value=o(),a.value="",s.value.scrollTop=s.value.scrollHeight},c=()=>`'${a.value}' is an invalid command, use ${e.commandNames.help} to get all valid commmands.`,u=async()=>{switch(n.value.push(`<span class="keep-spaces">${o()}</span><span>${a.value}</span>`),a.value){case e.commandNames.about:n.value.push(e.commands.about);break;case e.commandNames.career:n.value.push(e.commands.career);break;case e.commandNames.clear:n.value=[];break;case e.commandNames.help:for(const a of e.commands.help)n.value.push(`<li><span class="help-command">${a[0]}</span> - ${a[1]}</li>`);break;case e.commandNames.links:for(const a of e.commands.links)n.value.push(`<li>${a[0]} - <a href="${a[1]}" target="_blank">${a[1]}</a></li>`);break;case"":case void 0:break;default:n.value.push(c(a));break}};return(0,r.bv)((()=>{t()})),{command:a,getPrompt:o,handleCommand:l,lines:n,prompt:i,terminalBody:s}}};const ne=(0,h.Z)(ae,[["render",Q],["__scopeId","data-v-58819c6c"]]);var ie=ne;const re={about:"about",career:"career",clear:"clear",help:"help",links:"links"},se={github:"GitHub",linkedin:"LinkedIn"},oe=e=>{const a=new Date,n=a-e,i=new Date(n);return Math.abs(i.getUTCFullYear()-1970)},te=()=>oe(new Date(1990,1,1)),le=()=>oe(new Date(2016,1,1));var ce={name:"App",components:{HeaderPart:f,GraphicalView:B,TerminalView:ie},setup(){const e=(0,p.iH)(!0),a=(0,p.iH)(""),n={about:`A ${te()} years old software developer from Hungary. Basically interested in any topic, ranging from programming through cooking to psychology. When not coding, he's either watching random animal videos, gaming, having a drink with friends, or watching sports.`,career:`\n        <div>${le()} years of IT experience (in order) - in <strong>languages</strong>: C#, JavaScript, Python, MSSQL, PostgreSQL; in <strong>frameworks</strong>: ASP .NET, React, Django, (minimal) Vue. Mainly have worked with REST APIs, SOAP services, GitHub/GitLab, Jenkins pipelines, MVC pattern, xUnit, Visual Studio, VSCode, Vim, Windows, Linux. <i>(For more information, visit my Links)</i></div>\n        <br/>\n        <div>Open source projects:</div>\n        <ul class="graphical-ul">\n          <li><a href="https://github.com/IFRCGo/go-api/" target="_blank">IFRC GO Backend (Django)</a></li>\n          <li><a href="https://github.com/IFRCGo/go-frontend/" target="_blank">IFRC GO Frontend (React)</a></li>\n        </ul>`,clear:"",help:[[re.about,"Short and personal bio"],[re.career,"High level overview of career path"],[re.clear,"Clears the terminal"],[re.help,"Lists all available commands"],[re.links,"List of personal profiles"]],links:[[se.github,"https://github.com/GergiH/"],[se.linkedin,"https://www.linkedin.com/in/gergi-hrv/"]]},i=()=>{e.value=!e.value,r()},r=()=>{e.value?a.value='<svg class="svg-icon" viewBox="0 0 20 20" style="width:80%;height:80%;"><path fill="#F7F7F7" d="M18.555,15.354V4.592c0-0.248-0.202-0.451-0.45-0.451H1.888c-0.248,0-0.451,0.203-0.451,0.451v10.808c0,0.559,0.751,0.451,0.451,0.451h16.217h0.005C18.793,15.851,18.478,14.814,18.555,15.354 M2.8,14.949l4.944-6.464l4.144,5.419c0.003,0.003,0.003,0.003,0.003,0.005l0.797,1.04H2.8z M13.822,14.949l-1.006-1.317l1.689-2.218l2.688,3.535H13.822z M17.654,14.064l-2.791-3.666c-0.181-0.237-0.535-0.237-0.716,0l-1.899,2.493l-4.146-5.42c-0.18-0.237-0.536-0.237-0.716,0l-5.047,6.598V5.042h15.316V14.064z M12.474,6.393c-0.869,0-1.577,0.707-1.577,1.576s0.708,1.576,1.577,1.576s1.577-0.707,1.577-1.576S13.343,6.393,12.474,6.393 M12.474,8.645c-0.371,0-0.676-0.304-0.676-0.676s0.305-0.676,0.676-0.676c0.372,0,0.676,0.304,0.676,0.676S12.846,8.645,12.474,8.645"></path></svg>':a.value='<svg class="svg-icon" viewBox="0 0 20 20" style="width:80%;height:80%;"><path fill="#F7F7F7" d="M17.701,3.919H2.299c-0.223,0-0.405,0.183-0.405,0.405v11.349c0,0.223,0.183,0.406,0.405,0.406h15.402c0.224,0,0.405-0.184,0.405-0.406V4.325C18.106,4.102,17.925,3.919,17.701,3.919 M17.296,15.268H2.704V7.162h14.592V15.268zM17.296,6.352H2.704V4.73h14.592V6.352z M5.947,5.541c0,0.223-0.183,0.405-0.405,0.405H3.515c-0.223,0-0.405-0.182-0.405-0.405c0-0.223,0.183-0.405,0.405-0.405h2.027C5.764,5.135,5.947,5.318,5.947,5.541"></path></svg>'};return r(),{buttonIcon:a,commands:n,COMMANDNAMES:re,isTerminalView:e,toggleView:i}}};const ue=(0,h.Z)(ce,[["render",m]]);var me=ue;(0,i.ri)(me).mount("#app")}},a={};function n(i){var r=a[i];if(void 0!==r)return r.exports;var s=a[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(a,i,r,s){if(!i){var o=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],s=e[u][2];for(var t=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(t=!1,s<o&&(o=s));if(t){e.splice(u--,1);var c=r();void 0!==c&&(a=c)}}return a}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[i,r,s]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var i in a)n.o(a,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.p="/portfolio-terminal/"}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,i){var r,s,o=i[0],t=i[1],l=i[2],c=0;if(o.some((function(a){return 0!==e[a]}))){for(r in t)n.o(t,r)&&(n.m[r]=t[r]);if(l)var u=l(n)}for(a&&a(i);c<o.length;c++)s=o[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},i=self["webpackChunkterminal_portfolio"]=self["webpackChunkterminal_portfolio"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7389)}));i=n.O(i)})();
//# sourceMappingURL=app.146e97a9.js.map