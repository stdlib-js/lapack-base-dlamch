"use strict";var O=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(f){throw (e=0, f)}};};var A=O(function(F,n){
var u=require('@stdlib/constants-float64-eps/dist'),i=require('@stdlib/constants-float64-smallest-normal/dist'),v=require('@stdlib/constants-float64-min-base2-exponent/dist'),L=require('@stdlib/constants-float64-max-base2-exponent/dist'),T=require('@stdlib/constants-float64-max/dist'),_=require('@stdlib/constants-float64-precision/dist'),q=require('@stdlib/string-base-lowercase/dist'),t=2;function s(r){return r=q(r.charAt(0)),r==="e"?u*.5:r==="s"?i:r==="b"?t:r==="p"?u*.5*t:r==="n"?_:r==="r"?1:r==="m"?v+1:r==="u"?i:r==="l"?L+1:r==="o"?T:0}n.exports=s
});var E=A();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
