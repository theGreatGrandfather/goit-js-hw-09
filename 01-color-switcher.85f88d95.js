const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),o=document.querySelector("body");let l=null;const n=()=>{console.log("start"),r(),e.disabled=!0,e.removeEventListener("click",n),t.addEventListener("click",c)},r=()=>{l=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,console.log("backgroundColor: ",o.style.backgroundColor)}),1e3)},c=o=>{console.log("e",o.target),console.log("stop"),clearInterval(l),e.disabled=!1,e.addEventListener("click",n),t.removeEventListener("click",c)};e.addEventListener("click",n);
//# sourceMappingURL=01-color-switcher.85f88d95.js.map
