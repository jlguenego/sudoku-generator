!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(t){const e=[],r=t.getSolutionStructure();let n=0,o=0,i=t.universe,a=JSON.parse(JSON.stringify(t.universe));for(;;){if(n++,t.maxIteration>0&&n>t.maxIteration)throw new Error("maxIteration reached.");if(-1===o){if("find-all"===t.strategy)break;throw new Error("it seems that the backtracking cannot find a solution.")}const c=t.getPossibilities(i,o);if(0===c.length){t.resetSolution(r,o),t.resetPossibilities(c,o,a),o--;continue}let l=t.pop(c);if(t.setSolution(r,o,l),t.checkSolution(r,o)&&++o===t.length){if("find-first"===t.strategy)break;if("find-all"===t.strategy){const n=JSON.parse(JSON.stringify(r));if(e.push(n),e.length>=t.max)break;o--;continue}}}return"find-first"===t.strategy?r:"find-all"===t.strategy?e:void 0}r.r(e);class o{static getLevel(t){return t.map(t=>t.map(t=>t.length).reduce((t,e)=>t+e,0)).reduce((t,e)=>t+e,0)}static removeRowDuplicate(t){t.forEach(t=>{const e=t.reduce((t,e)=>(1===e.length&&t.push(e[0]),t),[]);t.forEach(t=>{t.length>1&&e.forEach(e=>{const r=t.indexOf(e);-1!==r&&t.splice(r,1)})})})}static removeColDuplicate(t){const e=function(t){const e=[];for(let r=0;r<9;r++){const n=[];for(let e=0;e<9;e++)n.push(t[e][r]);e.push(n)}return e}(t);o.removeRowDuplicate(e)}static removeSquareDuplicate(t){const e=function(t){const e=[];for(let r=0;r<9;r++){const n=[],o=Math.floor(r/3),i=r%3;[0,1,2].forEach(e=>[0,1,2].forEach(r=>n.push(t[o+e][i+r]))),e.push(n)}return e}(t);o.removeRowDuplicate(e)}}const i=()=>new Array(9).fill(0).map((t,e)=>e+1);function a(t){if(0===t.length)throw new Error("cannot pop from an empty array");const e=Math.floor(Math.random()*t.length),r=t[e];return t.splice(e,1),r}function c(t){return{x:Math.floor(t/9),y:t%9}}function l(t,e,r){return function(t,e,r){return t[e].indexOf(t[e][r])===r}(t,e,r)&&function(t,e,r){return t.map(t=>t[r]).indexOf(t[e][r])===e}(t,e,r)&&function(t,e,r){const n=t[e][r],o=Math.floor(e/3),i=Math.floor(r/3),a=t.slice(3*o,3*o+3).map(t=>t.slice(3*i,3*i+3));return a[e%3][r%3]=0,-1===a.reduce((t,e)=>t.concat(e),[]).indexOf(n)}(t,e,r)}const s={getSolutionStructure:function(){return new Array(9).fill(0).map(()=>new Array(9).fill(0))},universe:new Array(9).fill(0).map(()=>new Array(9).fill(0).map(i)),getPossibilities:(t,e)=>{const{x:r,y:n}=c(e);return t[r][n]},resetPossibilities:(t,e,r)=>{const{x:n,y:o}=c(e);r[n][o].forEach(e=>t.push(e))},resetSolution:(t,e)=>{const{x:r,y:n}=c(e);t[r][n]=0},setSolution:(t,e,r)=>{const{x:n,y:o}=c(e);t[n][o]=r},checkSolution:(t,e)=>{const{x:r,y:n}=c(e);return l(t,r,n)},pop:t=>a(t),strategy:"find-first",max:2,length:81};class u{static generate(){return s.universe=new Array(9).fill(0).map(()=>new Array(9).fill(0).map(i)),n(s)}static naiveCarve(t,e){let r,n=0;for(;;){r=JSON.parse(JSON.stringify(t));const o=new Array(81).fill(0).map((t,e)=>({r:Math.floor(e/9),c:e%9}));for(let t=0;t<e;t++){const{r:t,c:e}=a(o);r[t][e]=0}if(u.checkOneSolution(r))break;n++}return console.log("found in %d iterations",n),r}static checkOneSolution(t){const e=t.map(t=>t.map(t=>0===t?new Array(9).fill(0).map((t,e)=>e+1):[t]));return u.humanSolve(e),u.humanSolve(e),u.humanSolve(e),u.humanSolve(e),1===n({...s,universe:e,strategy:"find-all",max:2,length:81}).length}static humanSolve(t){o.removeRowDuplicate(t),o.removeColDuplicate(t),o.removeSquareDuplicate(t)}static carve(t,e){return u.btcarve(t,e)}static btcarve(t,e){for(;;)try{let r;n({getSolutionStructure:()=>[],universe:new Array(e).fill(0).map(()=>new Array(81).fill(0).map((t,e)=>({row:Math.floor(e/9),col:e%9}))),getPossibilities:(t,e)=>t[e],resetPossibilities:(t,e,r)=>{r[e].forEach(e=>t.push(e))},resetSolution:(t,e)=>{t.pop()},setSolution:(t,e,r)=>{t.length!==e?t.length!==e-1||t.push(r):t[e-1]=r},checkSolution:(e,n)=>{const o=e[n-1];return e.findIndex(t=>t.row===o.row&&t.col===o.col)===n-1&&(r=JSON.parse(JSON.stringify(t)),e.forEach(t=>{r[t.row][t.col]=0}),u.checkOneSolution(r))},pop:t=>{return a(t)},strategy:"find-first",maxIteration:500,length:e});return r}catch(t){console.log("e",t.message)}}}window.SudokuSolver=u}]);
//# sourceMappingURL=sudoku-generator.web.js.map