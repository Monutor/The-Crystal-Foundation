(()=>{var e={77:()=>{try{var e=new Swiper(".awards-slider",{direction:"vertical",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{spaceBetween:55,slidesPerView:1},640:{spaceBetween:55,slidesPerView:3}}}),t=document.querySelector(".awards-slider");document.querySelector(".awards-foundation__inner").addEventListener("click",(function(){t.setAttribute("style","pointer-events: auto")}));var n=function(){t.setAttribute("style","pointer-events: none")};e.on("reachEnd",(function(){e.slides.length-1&&n()})),e.on("reachBeginning",n);var r=document.querySelector(".awards-foundation__arrows .slider-arrows__arrow--left"),i=document.querySelector(".awards-foundation__arrows .slider-arrows__arrow--right");r.addEventListener("click",(function(){e.slidePrev()})),i.addEventListener("click",(function(){e.slideNext()}))}catch(e){}},994:()=>{try{var e=new Swiper(".how-help-slider--logos",{allowTouchMove:!1,controller:{control:t},breakpoints:{320:{slidesPerView:1,spaceBetween:30},640:{slidesPerView:2,spaceBetween:55},960:{slidesPerView:4,spaceBetween:55}}}),t=new Swiper(".how-help-slider--content",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},controller:{control:e},breakpoints:{320:{slidesPerView:1,spaceBetween:30},640:{slidesPerView:2,spaceBetween:55},960:{slidesPerView:4,spaceBetween:55}}}),n=document.querySelector(".how-help__arrows .slider-arrows__arrow--left"),r=document.querySelector(".how-help__arrows .slider-arrows__arrow--right");n.addEventListener("click",(function(){t.slidePrev()})),r.addEventListener("click",(function(){t.slideNext()}))}catch(e){}},591:()=>{try{var e=new Swiper(".media-slider",{autoHeight:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{spaceBetween:60},640:{spaceBetween:40},1200:{autoHeight:!1,spaceBetween:40}}}),t=document.querySelector(".media-slider__arrows .slider-arrows__arrow--left"),n=document.querySelector(".media-slider__arrows .slider-arrows__arrow--right");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))}catch(e){}},184:()=>{try{var e=new Swiper(".objectives-slider",{autoHeight:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:60}}}),t=document.querySelector(".objectives-slider__arrows .slider-arrows__arrow--left"),n=document.querySelector(".objectives-slider__arrows .slider-arrows__arrow--right");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))}catch(e){}},837:()=>{try{var e=new Swiper(".projects-slider",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:60}}}),t=document.querySelector(".projects-slider__arrows .slider-arrows__arrow--left"),n=document.querySelector(".projects-slider__arrows .slider-arrows__arrow--right");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))}catch(e){}},792:()=>{try{var e=new Swiper(".promotions-slider",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},640:{slidesPerView:1,spaceBetween:330},960:{slidesPerView:1,spaceBetween:100}}}),t=document.querySelector(".promotions-slider__arrows .slider-arrows__arrow--left"),n=document.querySelector(".promotions-slider__arrows .slider-arrows__arrow--right");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))}catch(e){}},436:()=>{try{var e=new Swiper(".sponsor-slider",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:60},640:{slidesPerView:2,spaceBetween:25},960:{slidesPerView:4,spaceBetween:30}}}),t=document.querySelector(".sponsor-slider__arrows .slider-arrows__arrow--left"),n=document.querySelector(".sponsor-slider__arrows .slider-arrows__arrow--right");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))}catch(e){}},598:()=>{function e(e){var t=!0,n=!1,r=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function d(e){t=!1}function a(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(o(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),a())}),!0),a(),e.addEventListener("focus",(function(e){var n,r,d;o(e.target)&&(t||(r=(n=e.target).type,"INPUT"===(d=n.tagName)&&i[r]&&!n.readOnly||"TEXTAREA"===d&&!n.readOnly||n.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;o(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(r),r=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{"use strict";n(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};var t,r,i;t=document.querySelector("[data-burger]"),r=document.querySelector("[data-burger-close]"),i=document.querySelector(".mobile-menu"),t.addEventListener("click",(function(){var t,n,o,s;i.classList.add("mobile-menu--active"),i.classList.contains("mobile-menu--active")&&(n=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),o=window.scrollY,s="".concat(window.innerWidth-e.bodyEl.offsetWidth,"px"),e.htmlEl.style.scrollBehavior="none",n.forEach((function(e){e.style.paddingRight=s})),e.bodyEl.style.paddingRight=s,e.bodyEl.classList.add("dis-scroll"),e.bodyEl.dataset.position=o,e.bodyEl.style.top="-".concat(o,"px")),r.addEventListener("click",(function(){i.classList.remove("mobile-menu--active"),function(){var t,n=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),r=(document.body,parseInt(e.bodyEl.dataset.position,10));n.forEach((function(e){e.style.paddingRight="0px"})),e.bodyEl.style.paddingRight="0px",e.bodyEl.style.top="auto",e.bodyEl.classList.remove("dis-scroll"),window.scroll({top:r,left:0}),e.bodyEl.removeAttribute("data-position"),e.htmlEl.style.scrollBehavior="smooth"}()}))})),n(792),n(837),n(436),n(184),n(591),n(994),n(77);try{Fancybox.bind("[data-fancybox]",{})}catch(e){}})()})();