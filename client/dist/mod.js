var l=crypto.getRandomValues(new Uint8Array(1024)),u=0,A=o=>l[u==1024?(crypto.getRandomValues(l),u=0):u++]/255,F=(o=16,n="0123457689abcdefghijklmnopqrstuvwxyz",s=n.length)=>Array(o).fill(0).map(r=>n[Math.floor(A(r)*s)]).join("");var T=document.createDocumentFragment(),_=([o,n,s],r)=>{n.forEach((e,i)=>{Array.isArray(e)&&e[2]===s?(r.push([void 0,e[0][0]]),_(e,r),r.push([void 0,o[i+1]])):r.push(typeof e=="object"?[e,o[i+1]]:[void 0,e])}),r.push([void 0,o[o.length-1]])},d=o=>{let n=[[void 0,o[0][0]]];return _(o,n),n},R=o=>{let n=d(o),s=document.createElement("div"),r=`strix-${F(32)}`,e=`${r}-attr`,i=`${r}-ptr`,p=n.map(([c,E],t)=>(typeof c=="object"?c[Symbol.for("PTR_IDENTIFIER")]?`<span ${i}="${t}"></span>`:` ${e}="${t}"`:"")+E).join("");return T.appendChild(s),s.innerHTML=p,s.querySelectorAll(`[${e}], [${i}]`).forEach(c=>{if(c.hasAttribute(e)){let E=n[Number(c.getAttribute(e))][0];Reflect.ownKeys(E).forEach(t=>{typeof t=="symbol"?window[t.toString()](t)(E[t],c):c[t]=E[t]}),c.removeAttribute(e)}else{let E=n[Number(c.getAttribute(i))][0],t=new Text;E.watch(h=>t.textContent=h),c.replaceWith(t)}}),s.childNodes};export{R as createElement};
