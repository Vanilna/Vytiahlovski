(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{183:function(s,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));const i=(s,t)=>{let e;return e="right"===s?7!==t?t+1:0:0!==t?t-1:6,e},o=(s,t,e)=>{"right"===t?(e.classList.add("js-position-left"),e.classList.remove("slideshow__slide--active"),s.classList.add("slideshow__slide--active")):(e.classList.remove("slideshow__slide--active"),s.classList.add("slideshow__slide--active"),s.classList.remove("js-position-left"))}},186:function(s,t,e){"use strict";e.r(t);var i=e(183);const o=document.querySelectorAll(".slideshow__slide");let a=document.querySelector(".slideshow__slide--active"),l=parseFloat(a.dataset.index);t.default=s=>{const t=s?s.target.dataset.direction:"right",e=Object(i.a)(t,l),c=o[e];Object(i.b)(c,t,a),(s=>{const t=s-1<0?7:s-1,e=o[s+1>7?0:s+1],i=o[t];e.className.includes("js-position-left")&&(e.classList.add("js-transition-off"),e.classList.remove("js-position-left")),i.className.includes("js-position-left")||(i.classList.add("js-transition-off"),i.classList.add("js-position-left")),setTimeout(()=>{e.classList.remove("js-transition-off"),i.classList.remove("js-transition-off")},100)})(e),l=parseFloat(c.dataset.index),a=c}}}]);