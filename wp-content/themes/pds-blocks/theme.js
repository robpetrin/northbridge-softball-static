!function o(a,i,s){function n(t,e){if(!i[t]){if(!a[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=i[t]={exports:{}},a[t][0].call(r.exports,function(e){return n(a[t][1][e]||e)},r,r.exports,o,a,i,s)}return i[t].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)n(s[e]);return n}({1:[function(e,t,r){{let o={logoSelector:{header:'header a[href="/"]',footer:'footer a[href="/"]'},focusableElements:'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',skipLinkHTML:'<a href="#content" class="skip-to-content-link">Skip to content</a>',ariaLabels:{logo:"Return to Homepage",closeModal:"Close modal",menuToggle:"Toggle menu",searchToggle:"Toggle search",searchInput:"Search site"}};function a(){var e,t=document.querySelectorAll(o.logoSelector.header);t&&0<t.length&&t.forEach(e=>{e.setAttribute("aria-label",o.ariaLabels.logo)}),(t=document.querySelector(o.logoSelector.footer))&&t.setAttribute("aria-label",o.ariaLabels.logo),document.querySelector(".skip-to-content-link")||((t=document.createElement("div")).classList.add("skip-link-container"),Object.assign(t.style,{position:"fixed",top:"0",left:"0",width:"1px",height:"1px",margin:"0",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:"0",zIndex:"9999"}),(e=document.createElement("a")).classList.add("skip-to-content-link"),e.href="#content",e.textContent="Skip to content",e.addEventListener("focus",function(){Object.assign(this.style,{position:"fixed",top:"16px",left:"50%",transform:"translateX(-50%)",width:"auto",height:"auto",overflow:"visible",clip:"auto",whiteSpace:"normal",background:"#ffffff",color:"#000000",padding:"12px 20px",borderRadius:"4px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",textDecoration:"none",fontWeight:"500"})}),e.addEventListener("blur",function(){Object.assign(this.style,{position:"",top:"",left:"",transform:"",width:"",height:"",overflow:"",clip:"",whiteSpace:"",background:"",color:"",padding:"",borderRadius:"",boxShadow:"",textDecoration:"",fontWeight:""})}),t.appendChild(e),(e=document.body).firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),(e=document.querySelector("main"))&&!e.id&&(e.id="content")),document.querySelectorAll('dialog, .modal, [role="dialog"]').forEach(e=>{e.getAttribute("aria-labelledby")||e.getAttribute("aria-label")||e.setAttribute("aria-label","Dialog"),e.addEventListener("keydown",i)}),document.querySelectorAll("form").forEach(o=>{o.querySelectorAll("input, select, textarea").forEach(e=>{var t,r;"hidden"!==e.type&&"submit"!==e.type&&"button"!==e.type&&(e.id||(t="input-"+Math.random().toString(36).substring(2,10),e.id=t),o.querySelector(`label[for="${e.id}"]`)||(t=e.placeholder||e.name||e.id,(r=document.createElement("label")).setAttribute("for",e.id),r.textContent=t,e.parentNode.insertBefore(r,e)),e.required)&&e.setAttribute("aria-required","true")})})}function i(e){var t,r;(r=e.currentTarget)&&(0<r.offsetWidth||0<r.offsetHeight)&&"hidden"!==window.getComputedStyle(r).visibility&&"Tab"===e.key&&(t=(r=e.currentTarget.querySelectorAll(o.focusableElements))[0],r=r[r.length-1],e.shiftKey&&document.activeElement===t?(e.preventDefault(),r.focus()):e.shiftKey||document.activeElement!==r||(e.preventDefault(),t.focus()))}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",a):a()}document.addEventListener("DOMContentLoaded",()=>{let r=e=>{var t;e&&(t=(t=document.querySelector("header.header-wrap"))?t.offsetHeight:0,e=e.getBoundingClientRect().top+window.pageYOffset-t-20,window.scrollTo({top:e,behavior:"smooth"}))};document.addEventListener("click",e=>{var t=e.target.closest("a");t&&(t=t.getAttribute("href"))&&t.startsWith("#")&&(t=t.substring(1),t=document.getElementById(t))&&(e.preventDefault(),r(t))}),window.addEventListener("load",()=>{var e;window.location.hash&&(e=document.getElementById(window.location.hash.substring(1)),r(e))})});{let t={threshold:.1,rootMargin:"0px",animationClass:"has-animation",revealedClass:"has-been-revealed"},r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(t.revealedClass),r.unobserve(e.target))})},{threshold:t.threshold,rootMargin:t.rootMargin});function o(){document.querySelectorAll("."+t.animationClass).forEach(e=>{r.observe(e)}),document.querySelectorAll(".wp-block-button a").forEach(e=>{var t;e.querySelector("span")||((t=document.createElement("span")).textContent=e.textContent,e.textContent="",e.appendChild(t))})}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",o):o()}{class c{constructor(e,t,r){this.set(e,t,r)}toString(){return`rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`}set(e,t,r){this.r=this.clamp(e),this.g=this.clamp(t),this.b=this.clamp(r)}hueRotate(e=0){e=e/180*Math.PI;var t=Math.sin(e),e=Math.cos(e);this.multiply([.213+.787*e-.213*t,.715-.715*e-.715*t,.072-.072*e+.928*t,.213-.213*e+.143*t,.715+.285*e+.14*t,.072-.072*e-.283*t,.213-.213*e-.787*t,.715-.715*e+.715*t,.072+.928*e+.072*t])}grayscale(e=1){this.multiply([.2126+.7874*(1-e),.7152-.7152*(1-e),.0722-.0722*(1-e),.2126-.2126*(1-e),.7152+.2848*(1-e),.0722-.0722*(1-e),.2126-.2126*(1-e),.7152-.7152*(1-e),.0722+.9278*(1-e)])}sepia(e=1){this.multiply([.393+.607*(1-e),.769-.769*(1-e),.189-.189*(1-e),.349-.349*(1-e),.686+.314*(1-e),.168-.168*(1-e),.272-.272*(1-e),.534-.534*(1-e),.131+.869*(1-e)])}saturate(e=1){this.multiply([.213+.787*e,.715-.715*e,.072-.072*e,.213-.213*e,.715+.285*e,.072-.072*e,.213-.213*e,.715-.715*e,.072+.928*e])}multiply(e){var t=this.clamp(this.r*e[0]+this.g*e[1]+this.b*e[2]),r=this.clamp(this.r*e[3]+this.g*e[4]+this.b*e[5]),e=this.clamp(this.r*e[6]+this.g*e[7]+this.b*e[8]);this.r=t,this.g=r,this.b=e}brightness(e=1){this.linear(e)}contrast(e=1){this.linear(e,-.5*e+.5)}linear(e=1,t=0){this.r=this.clamp(this.r*e+255*t),this.g=this.clamp(this.g*e+255*t),this.b=this.clamp(this.b*e+255*t)}invert(e=1){this.r=this.clamp(255*(e+this.r/255*(1-2*e))),this.g=this.clamp(255*(e+this.g/255*(1-2*e))),this.b=this.clamp(255*(e+this.b/255*(1-2*e)))}hsl(){var e=this.r/255,t=this.g/255,r=this.b/255,o=Math.max(e,t,r),a=Math.min(e,t,r);let i,s,n=(o+a)/2;if(o===a)i=s=0;else{var l=o-a;switch(s=.5<n?l/(2-o-a):l/(o+a),o){case e:i=(t-r)/l+(t<r?6:0);break;case t:i=(r-e)/l+2;break;case r:i=(e-t)/l+4}i/=6}return{h:100*i,s:100*s,l:100*n}}clamp(e){return 255<e?e=255:e<0&&(e=0),e}}class d{constructor(e){this.target=e,this.targetHSL=e.hsl(),this.reusedColor=new c(0,0,0)}solve(){var e=this.solveNarrow(this.solveWide());return{values:e.values,loss:e.loss,filter:this.css(e.values)}}solveWide(){var t=[60,180,18e3,600,1.2,1.2];let r={loss:1/0};for(let e=0;25<r.loss&&e<3;e++){var o=this.spsa(5,t,15,[50,20,3750,50,100,100],1e3);o.loss<r.loss&&(r=o)}return r}solveNarrow(e){var t=e.loss,r=t+1;return this.spsa(t,[.25*r,.25*r,r,.25*r,.2*r,.2*r],2,e.values,500)}spsa(r,o,e,a,i){let s=null,n=1/0;var l=new Array(6),c=new Array(6),d=new Array(6);for(let t=0;t<i;t++){var h=e/Math.pow(t+1,.16666666666666666);for(let e=0;e<6;e++)l[e]=.5<Math.random()?1:-1,c[e]=a[e]+h*l[e],d[e]=a[e]-h*l[e];var u=this.loss(c)-this.loss(d);for(let e=0;e<6;e++){var p=u/(2*h)*l[e],g=o[e]/Math.pow(r+t+1,1);a[e]=this.fix(a[e]-g*p,e)}var m=this.loss(a);m<n&&(s=a.slice(0),n=m)}return{values:s,loss:n}}fix(e,t){let r=100;return 2===t?r=7500:4!==t&&5!==t||(r=200),3===t?e>r?e%=r:e<0&&(e=r+e%r):e<0?e=0:e>r&&(e=r),e}loss(e){var t=this.reusedColor,e=(t.set(0,0,0),t.invert(e[0]/100),t.sepia(e[1]/100),t.saturate(e[2]/100),t.hueRotate(3.6*e[3]),t.brightness(e[4]/100),t.contrast(e[5]/100),t.hsl());return Math.abs(t.r-this.target.r)+Math.abs(t.g-this.target.g)+Math.abs(t.b-this.target.b)+Math.abs(e.h-this.targetHSL.h)+Math.abs(e.s-this.targetHSL.s)+Math.abs(e.l-this.targetHSL.l)}css(r){function e(e,t=1){return Math.round(r[e]*t)}return`invert(${e(0)}%) sepia(${e(1)}%) saturate(${e(2)}%) hue-rotate(${e(3,3.6)}deg) brightness(${e(4)}%) contrast(${e(5)}%)`}}function s(e){e=window.getComputedStyle(e).color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return e?"#"+((1<<24)+(parseInt(e[1])<<16)+(parseInt(e[2])<<8)+parseInt(e[3])).toString(16).slice(1):null}class h{constructor(){this.targetClasses=["color-match-arrow","btn-with-arrow","dynamic-arrow","is-style-fancy-toggle"],this.filterCache=new Map}addTargetClass(e){this.targetClasses.includes(e)||this.targetClasses.push(e)}removeTargetClass(t){this.targetClasses=this.targetClasses.filter(e=>e!==t)}getFilterForColor(e){var t;return this.filterCache.has(e)?this.filterCache.get(e):(t=(t=e).replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,r,o)=>t+t+r+r+o+o),(t=(t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t))?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null)?(t=new c(t[0],t[1],t[2]),t=new d(t).solve(),this.filterCache.set(e,t.filter),t.filter):null)}applyColorMatching(){this.targetClasses.forEach(e=>{document.querySelectorAll("."+e).forEach(e=>{var t=s(e);t&&(t=this.getFilterForColor(t))&&e.style.setProperty("--arrow-filter",t)})})}updateElementArrow(e){var t=s(e);t&&(t=this.getFilterForColor(t))&&e.style.setProperty("--arrow-filter",t)}init(){this.applyColorMatching(),window.MutationObserver&&new MutationObserver(()=>{this.applyColorMatching()}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})}}let e=new h;"loading"===document.readyState?document.addEventListener("DOMContentLoaded",()=>e.init()):e.init(),window.SVGColorMatcher=e}var n,l;document.querySelector(".demo-blog")&&document.querySelectorAll(".demo-blog").forEach(function(e){e=e.querySelector(".permalink-wrapper-block");e&&(e.removeAttribute("data-link"),e.removeAttribute("data-target"),e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation()}))}),document.querySelector(".demo-icon")&&document.querySelectorAll(".demo-icon").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation()})}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".wp-block-details").forEach(t=>{let r=t.querySelector("summary");r&&(r.addEventListener("click",e=>{t.hasAttribute("open")&&(e.preventDefault(),t.classList.add("closing"))}),t.addEventListener("animationend",e=>{"close"===e.animationName&&(t.removeAttribute("open"),t.classList.remove("closing"))}),t.addEventListener("click",e=>{e.target===r||r.contains(e.target)||e.stopPropagation()}))})}),0<(l=document.querySelectorAll(".is-style-play-button a")).length&&(document.querySelector("#lightbox-styles")||((n=document.createElement("style")).id="lightbox-styles",n.textContent=`
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                opacity: 0;
                animation: fadeIn 0.3s ease forwards;
            }

            @keyframes fadeIn {
                to { opacity: 1; }
            }

            .lightbox-content {
                position: relative;
                width: 90vw;
                max-width: 1200px;
                background: #000;
                aspect-ratio: 16 / 9;
            }

            @media (max-width: 767px) {
                .lightbox-content {
                    width: 100vw;
                    max-width: none;
                }

                .lightbox-close {
                    top: 10px;
                    right: 10px;
                }
            }

            .lightbox-close {
                position: absolute;
                top: -60px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 50px;
                cursor: pointer;
                z-index: 10000;
                padding: 10px 15px;
                line-height: 1;
                font-weight: 300;
                transition: opacity 0.3s ease;
            }

            .lightbox-close:hover {
                opacity: 0.7;
            }

            .lightbox iframe {
                width: 100%;
                height: 100%;
            }

            /* Add styles for the cover image scaling */
            .wp-block-cover.has-scaled-image {
                overflow: hidden; /* Important to hide overflow during scale */
            }

            .wp-block-cover.has-scaled-image .wp-block-cover__image-background {
                transition: transform 0.3s ease;
                transform-origin: center center;
            }
        `,document.head.appendChild(n)),l.forEach(t=>{function e(e){e.preventDefault(),e.stopPropagation(),console.log("Play button clicked!",t.href);e=new URL(t.href),e=e.searchParams.get("v")||e.pathname.split("/").pop();if(e){console.log("Video ID:",e);let t=document.createElement("div"),r=(t.className="lightbox",t.innerHTML=`
                <div class="lightbox-content">
                    <button class="lightbox-close" aria-label="Close video">×</button>
                    <iframe width="100%" height="100%"
                        src="https://www.youtube.com/embed/${e}?autoplay=1"
                        frameborder="0" allowfullscreen>
                    </iframe>
                </div>
            `,t.addEventListener("click",e=>{e.target!==t&&"lightbox-close"!==e.target.className||t.remove()}),e=>{"Escape"===e.key&&(t.remove(),document.removeEventListener("keydown",r))});document.addEventListener("keydown",r),document.body.appendChild(t)}else console.error("No valid video ID found in:",t.href)}var r=t.closest(".wp-block-cover");if(r){r.style.cursor="pointer";let t=r.querySelector(".wp-block-cover__image-background");if(t&&r.classList.add("has-scaled-image"),r.addEventListener("click",e),!r.querySelector(".play-button-overlay")){var o=document.createElement("div");o.className="play-button-overlay",Object.assign(o.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"2",pointerEvents:"none"});o.innerHTML=`
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 53 62" fill="none" class="play-button-svg">
                        <path d="M53 31L0.499997 61.3109L0.5 0.689109L53 31Z" fill="#FFFDF7" fill-opacity="0.9"/>
                    </svg>
                `;let e=o.querySelector("svg");Object.assign(e.style,{filter:"drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",transition:"transform 0.3s ease, width 0.3s ease, height 0.3s ease",width:"clamp(30px, calc(30px + (70 - 30) * ((100vw - 320px) / (1200 - 320))), 70px)",height:"clamp(30px, calc(30px + (70 - 30) * ((100vw - 320px) / (1200 - 320))), 70px)"}),r.addEventListener("mouseenter",()=>{e.style.transform="scale(1.1)",t&&(t.style.transform="scale(1.05)")}),r.addEventListener("mouseleave",()=>{e.style.transform="scale(1)",t&&(t.style.transform="scale(1)")}),r.appendChild(o)}}t.addEventListener("click",e)}))},{}]},{},[1]);