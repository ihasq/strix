(()=>{var i=t=>typeof t;var{Promise:s,Proxy:a,WeakMap:T,Uint8Array:p,requestAnimationFrame:l,cancelAnimationFrame:m,BigInt:L}=window,M="join";var u="toString",S=`strix${L(crypto.getRandomValues(new p(16))[M](""))[u](36)}`,x=new T;var H=new a(({raw:t},...e)=>new a(new s(n=>{}),{}),{}),F={function(t){let e=t(H)},object(t){}},y=t=>(F[i(t)]?.(t),[()=>{}]);var g=(t,e,n,o)=>{let c=-1,r=()=>{c=n(r),t()};return r(),[()=>o(c)]},A=(t,e)=>{let[n]=y(e),[o]=g(n,t,l,m);return{close(){o(),this.close=()=>{}}}};})();