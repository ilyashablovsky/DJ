"use strict";function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var o=document.querySelectorAll(".is-paid"),a=document.querySelectorAll(".is-not-paid"),i=document.querySelector(".brackets__bracket_paid"),u=document.querySelector(".brackets__bracket_not-paid"),l=document.querySelectorAll(".js-nav-button"),t=document.querySelector(".sidebar");function e(){for(var t=0,e=0,n=0;n<o.length;n++)t+=o[n].parentElement.offsetHeight+13;for(var r=0;r<a.length;r++)e+=o[r].parentElement.offsetHeight+13;i.style.height=t+"px",u.style.height=e+"px"}window.addEventListener("resize",e),document.addEventListener("DOMContentLoaded",function(){e(),t.addEventListener("click",function(t){var e=t.target;e.classList.contains("js-nav-button")&&function(t){var e,n=r(l);try{for(n.s();!(e=n.n()).done;){e.value.classList.remove("js-nav-button_active")}}catch(t){n.e(t)}finally{n.f()}t.classList.add("js-nav-button_active")}(e)})});