var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,c=f||a||Function("return this")(),l=Object.prototype.toString,d=Math.max,s=Math.min,p=function(){return c.Date.now()};function v(t,n,e){var i,o,r,u,f,a,c=0,l=!1,v=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(n){var e=i,r=o;return i=o=void 0,c=n,u=t.apply(r,e)}function j(t){return c=t,f=setTimeout(w,n),l?m(t):u}function h(t){var e=t-a;return void 0===a||e>=n||e<0||v&&t-c>=r}function w(){var t=p();if(h(t))return T(t);f=setTimeout(w,function(t){var e=n-(t-a);return v?s(e,r-(t-c)):e}(t))}function T(t){return f=void 0,g&&i?m(t):(i=o=void 0,u)}function S(){var t=p(),e=h(t);if(i=arguments,o=this,a=t,e){if(void 0===f)return j(a);if(v)return f=setTimeout(w,n),m(a)}return void 0===f&&(f=setTimeout(w,n)),u}return n=y(n)||0,b(e)&&(l=!!e.leading,r=(v="maxWait"in e)?d(y(e.maxWait)||0,n):r,g="trailing"in e?!!e.trailing:g),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=o=f=void 0},S.flush=function(){return void 0===f?u:T(p())},S}function b(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var f=o.test(t);return f||r.test(t)?u(t.slice(2),f?2:8):i.test(t)?NaN:+t}n=function(t,n,e){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return b(e)&&(i="leading"in e?!!e.leading:i,o="trailing"in e?!!e.trailing:o),v(t,n,{leading:i,maxWait:n,trailing:o})};const g={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};g.btnStart.addEventListener("click",n((function(){}),500)),g.btnStop.addEventListener("click",(function(){}));
//# sourceMappingURL=01-color-switcher.b7412436.js.map