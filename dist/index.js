"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var A=f(function(N,n){
var u=require('@stdlib/constants-float64-eps/dist'),i=require('@stdlib/constants-float64-smallest-normal/dist'),O=require('@stdlib/constants-float64-min-base2-exponent/dist'),v=require('@stdlib/constants-float64-max-base2-exponent/dist'),L=require('@stdlib/constants-float64-max/dist'),T=require('@stdlib/constants-float64-precision/dist'),_=require('@stdlib/string-base-lowercase/dist'),t=2;function q(r){return r=_(r.charAt(0)),r==="e"?u*.5:r==="s"?i:r==="b"?t:r==="p"?u*.5*t:r==="n"?T:r==="r"?1:r==="m"?O+1:r==="u"?i:r==="l"?v+1:r==="o"?L:0}n.exports=q
});var s=A();module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
