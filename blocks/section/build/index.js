(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(t,e,n){}}]),function(t){function e(e){for(var r,u,i=e[0],a=e[1],l=e[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(s&&s(e);p.length;)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={0:0},c=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=a;c.push([16,1]),n()}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.blockEditor}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(11);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(12),o=n(13);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},,function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(5),o=n(1),c=(n(10),n(0)),u=n(2),i=n(3),a=n(6),l=n.n(a),s=n(7),f=n.n(s),p=n(8),b=n.n(p),y=n(9),h=n.n(y),d=n(4),v=n.n(d);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var o=v()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h()(this,n)}}var m=function(t){b()(n,t);var e=O(n);function n(){return l()(this,n),e.apply(this,arguments)}return f()(n,[{key:"render",value:function(){var t="uk-section ".concat(this.props.type);return Object(c.createElement)("div",{className:t,id:this.props.anchor},this.props.children)}}]),n}(c.Component);n(14),n(15);Object(r.registerBlockType)("sthm/section",{title:Object(o.__)("Section","sthm"),description:Object(o.__)("Page Section ","sthm"),category:"sthm",icon:"editor-insertmore",attributes:{background:{type:"string",default:"uk-section-default"},anchor:{type:"string"}},supports:{html:!1},edit:function(t){t.className,t.classList;var e=t.attributes,n=e.background,r=e.anchor,a=t.setAttributes;console.log("on edit: ",n);var l=[{label:Object(o.__)("Default"),value:"uk-section-default"},{label:Object(o.__)("Cherry"),value:"bg-cherry"},{label:Object(o.__)("Offwhite"),value:"bg-offwhite"},{label:Object(o.__)("Dark Grey"),value:"bg-dark"},{label:Object(o.__)("Black"),value:"bg-black"}];return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(m,{type:n,anchor:r},"Section #",r,Object(c.createElement)(u.InnerBlocks,null)),Object(c.createElement)(u.InspectorControls,null,Object(c.createElement)(i.PanelBody,{title:Object(o.__)("Section Options","sthmtwenty")},Object(c.createElement)(i.TextControl,{label:Object(o.__)("Anchor"),value:r,onChange:function(t){return a({anchor:t})}}),Object(c.createElement)(i.SelectControl,{label:Object(o.__)("Background"),value:n,options:l.map((function(t){return{value:t.value,label:t.label}})),onChange:function(t){return a({background:t})}}))))},save:function(t){var e=t.className,n=t.attributes,r=n.background,o=n.anchor;return t.setAttributes,console.log("on save: ",e,r),Object(c.createElement)(m,{type:r,anchor:o},Object(c.createElement)(u.InnerBlocks.Content,null))}})}]);