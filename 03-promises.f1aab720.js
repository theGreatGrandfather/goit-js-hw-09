!function(){function e(e){return e&&e.__esModule?e.default:e}var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var n=document.querySelector(".form"),t=document.querySelector('input[name="amount"]'),u=document.querySelector('input[name="step"]'),r=document.querySelector('input[name="delay"]');function c(e,o){var n=Math.random()>.3;return new Promise((function(t,u){setTimeout((function(){n?t({position:e,delay:o}):u({position:e,delay:o})}),o)}))}console.log("first",e(o)(t.value)),console.log("first",r);n.addEventListener("submit",(function(e){console.log("e",e),e.preventDefault();var o=Number(t.value),n=Number(u.value),l=Number(r.value);console.log("first",o);for(var i=0;i<o;i+=1){c(i+1,l+n*i).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.f1aab720.js.map