(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{192:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.section=document.querySelector(t)}var t,n,i;return t=e,(n=[{key:"openMailForm",value:function(){var e=this.section.querySelector(".button--email-toggler"),t=this.section.querySelector(".email-form"),n=this.section.querySelector(".overlay"),o=document.querySelector(".menu-toggler"),i=t.querySelector(".button--close"),r=t.querySelector(".button--submit"),c=function(e){var o=e.target.className.includes("menu"),i=t.className.includes("active");o&&!i||(t.classList.toggle("email-form--active"),n.classList.toggle("overlay--active"))};[e,o,i,r,n].forEach((function(e){e.addEventListener("click",c)}))}},{key:"init",value:function(){window.innerWidth>600||this.openMailForm()}}])&&o(t.prototype,n),i&&o(t,i),e}();t.default=i}}]);