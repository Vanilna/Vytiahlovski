(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{186:function(s,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o}));var i=function(s,e){return"right"===s?6!==e?e+1:0:0!==e?e-1:6},o=function(s,e,t){"right"===e?(t.classList.add("js-position-left"),t.classList.remove("slideshow__slide--active"),s.classList.add("slideshow__slide--active")):(t.classList.remove("slideshow__slide--active"),s.classList.add("slideshow__slide--active"),s.classList.remove("js-position-left"))}},190:function(s,e,t){"use strict";t.r(e);var i=t(186),o=document.querySelectorAll("img.slideshow__slide"),a=document.querySelector(".slideshow__slide--active"),n=parseFloat(a.dataset.index),d=function(s){s.classList.add("js-transition-off"),s.classList.remove("js-position-left"),setTimeout((function(){s.classList.remove("js-transition-off")}),100)};e.default=function(s){var e=s?parseFloat(s.target.dataset.index):Object(i.a)("right",n),t=o[e];!function(s){var e=document.querySelectorAll(".slideshow-nav-desktop__link");e[n].classList.remove("slideshow-nav-desktop__link--active"),e[s].classList.add("slideshow-nav-desktop__link--active")}(e),Object(i.b)(t,"right",a),setTimeout(d.bind(void 0,a),2e3),n=e,a=t}}}]);