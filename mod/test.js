(()=>{var _={},f=new Proxy({},{get:(n,r)=>_[r]||(_[r]=window[r])||(_[r]=(()=>{let c=r.split("_"),l=c.length,o=globalThis;for(let t=0;t<l;t++)o=o[c[t]];return o})())});var{crypto:M,Math_floor:h,Uint8Array:x}=f,g=(()=>{let n=(()=>{let o=new x(1024),t=1024;return()=>{t===1024&&(M.getRandomValues(o),t=0);let s=o[t];return t++,s/256}})(),r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",c=r.length;return l=>{let o="";for(let t=0;t<l;t++)o+=r[h(n()*c)];return o}})();var{RegExp:F}=f,L=16,m=`sthtml${g(L)}`,R=new F(m),u=n=>{let r=n.join(m),c=[];for(;!R.test(r);)c.push()};var S=(n,r,c,l)=>r.get(n)||(()=>{let o=n.length,t=c;for(let e=0;e<o;e++){let i=n[e],A=t[i];if(!A){let p=u(n);for(let E=e;E<o;E++){let T=n[E];t[T]={},t=t[T]}return l.set(t,p),r.set(n,p),p}t=A}let s=l.get(t);return r.set(n,s),s})();var{Array_isArray:d}=f,K=(n,r,c,l,o,t)=>{let s=[n],e=0;for(null;e<3;e++){let a=s[e](r);if(s.push(a),d(a))break}let i="raw"in s[e];if(e!==0&&!i)return;let A=e===1?i?"fragment":"instance":e===2?"transformer":e===3?"component":void 0,[p,E]=i?[s[e],s[e-1]()]:[s[e-1](),s[e]],T=S(p,c,l,o),G=s[e];return{type:A,refresh(){return G(!i)}}};})();
