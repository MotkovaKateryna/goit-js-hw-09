!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var e={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,b=Math.min,y=function(){return s.Date.now()};function m(t,n,e){var i,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(r);function m(n){var e=i,r=o;return i=o=void 0,l=n,f=t.apply(r,e)}function h(t){return l=t,a=setTimeout(S,n),d?m(t):f}function w(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-l>=u}function S(){var t=y();if(w(t))return T(t);a=setTimeout(S,function(t){var e=n-(t-c);return s?b(e,u-(t-l)):e}(t))}function T(t){return a=void 0,v&&i?m(t):(i=o=void 0,f)}function O(){var t=y(),e=w(t);if(i=arguments,o=this,c=t,e){if(void 0===a)return h(c);if(s)return a=setTimeout(S,n),m(c)}return void 0===a&&(a=setTimeout(S,n)),f}return n=j(n)||0,g(e)&&(d=!!e.leading,u=(s="maxWait"in e)?p(j(e.maxWait)||0,n):u,v="trailing"in e?!!e.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},O.flush=function(){return void 0===a?f:T(y())},O}function g(t){var e=void 0===t?"undefined":n(i)(t);return!!t&&("object"==e||"function"==e)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(i)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=f.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}e=function(t,n,e){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(r);return g(e)&&(i="leading"in e?!!e.leading:i,o="trailing"in e?!!e.trailing:o),m(t,n,{leading:i,maxWait:n,trailing:o})};var h={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};h.btnStart.addEventListener("click",e((function(){}),500)),h.btnStop.addEventListener("click",(function(){}))}();
//# sourceMappingURL=01-color-switcher.0edd6390.js.map