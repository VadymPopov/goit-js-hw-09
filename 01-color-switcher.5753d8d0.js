const t={buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let o=null;t.buttonStop.disabled=!0,t.buttonStart.addEventListener("click",(function(){o=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.buttonStart.disabled=!0,t.buttonStop.disabled=!1})),t.buttonStop.addEventListener("click",(function(){t.buttonStart.disabled=!1,t.buttonStop.disabled=!0,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.5753d8d0.js.map
