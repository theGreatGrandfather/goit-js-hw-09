const e=document.querySelector(".form"),o=document.querySelector('input[name="amount"]'),t=document.querySelector('input[name="step"]'),n=document.querySelector('input[name="delay"]');function l(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{t?n({position:e,delay:o}):l({position:e,delay:o})}),o)}))}console.log("first",typeof o.value),console.log("first",n);e.addEventListener("submit",(e=>{console.log("e",e),e.preventDefault();const s=Number(o.value),u=Number(t.value),i=Number(n.value);console.log("first",s);for(let e=0;e<s;e+=1){l(e+1,i+u*e).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.9dfd35a6.js.map
