const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),o=document.querySelector("body"),r=()=>{console.log("start"),n(),e.disabled=!0,e.removeEventListener("click",r),t.addEventListener("click",l)},n=()=>{setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,console.log("backgroundColor: ",o.style.backgroundColor)}),1e3)},l=()=>{console.log("stop"),clearInterval(timerId),e.disabled=!1,e.addEventListener("click",r),t.removeEventListener("click",l)};e.addEventListener("click",r);
//# sourceMappingURL=01-color-switcher.4cf3f54c.js.map
