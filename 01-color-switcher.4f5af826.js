!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body"),n=function(){console.log("start"),r(),t.disabled=!0,t.removeEventListener("click",n),e.addEventListener("click",c)},r=function(){timerId=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),console.log("backgroundColor: ",o.style.backgroundColor)}),1e3)},c=function(){console.log("stop"),clearInterval(timerId),t.disabled=!1,t.addEventListener("click",n),e.removeEventListener("click",c)};t.addEventListener("click",n)}();
//# sourceMappingURL=01-color-switcher.4f5af826.js.map