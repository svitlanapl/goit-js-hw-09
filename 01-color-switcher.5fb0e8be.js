!function(){var t={bodyEl:document.querySelector("body"),btnStartEl:document.querySelector("[data-start]"),btnStopEl:document.querySelector("[data-stop]")},n=null;t.btnStopEl.disabled=!0,t.btnStartEl.addEventListener("click",(function(){n=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.btnStartEl.disabled=!0,t.btnStopEl.disabled=!1})),t.btnStopEl.addEventListener("click",(function(){clearInterval(n),t.btnStartEl.disabled=!1,t.btnStopEl.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.5fb0e8be.js.map