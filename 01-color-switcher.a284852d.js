!function(){var t={buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},o=null;t.buttonStop.disabled=!0,t.buttonStart.addEventListener("click",(function(){o=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.buttonStart.disabled=!0,t.buttonStop.disabled=!1})),t.buttonStop.addEventListener("click",(function(){t.buttonStart.disabled=!1,t.buttonStop.disabled=!0,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.a284852d.js.map