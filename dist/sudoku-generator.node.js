!function(r,n){for(var t in n)r[t]=n[t]}(exports,function(r){var n={};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=n,t.d=function(r,n,e){t.o(r,n)||Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:e})},t.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},t.p="",t(t.s=4)}([function(r,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function(){function r(){}return r.deepClone=function(r){return JSON.parse(JSON.stringify(r))},r.popRand=function(r){if(0===r.length)throw new Error("cannot pop from an empty array");var n=Math.floor(Math.random()*r.length),t=r[n];return r.splice(n,1),t},r.initGrid=function(){return new Array(9).fill(0).map(function(){return new Array(9).fill(0)})},r.makeGridFromString=function(r){return new Array(9).fill(0).map(function(n,t){return new Array(9).fill(0).map(function(n,e){return+r.charAt(9*t+e)})})},r.getUniverseFromGrid=function(r){return r.map(function(r){return r.map(function(r){return 0===r?new Array(9).fill(0).map(function(r,n){return n+1}):[r]})})},r.getUniverseFromEmptyGrid=function(){return new Array(9).fill(0).map(function(){return new Array(9).fill(0).map(r.MakeNewA19)})},r.getUniverseSize=function(n){return r.sum(n.map(function(r){return r.map(function(r){return r.length})}).map(function(n){return r.sum(n)}))},r.sum=function(r){return r.reduce(function(r,n){return r+n},0)},r.getSquareList=function(r){for(var n=[],t=function(t){var e=[],o=Math.floor(t/3),i=t%3;[0,1,2].forEach(function(n){return[0,1,2].forEach(function(t){return e.push(r[3*o+n][3*i+t])})}),n.push(e)},e=0;e<9;e++)t(e);return n},r.MakeNewA19=function(){return new Array(9).fill(0).map(function(r,n){return n+1})},r}();n.Util=e},function(r,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t(0);var o=function(){function r(){}return r.getLevel=function(r){return r.map(function(r){return r.map(function(r){return r.length}).reduce(function(r,n){return r+n},0)}).reduce(function(r,n){return r+n},0)},r.removeRowDuplicate=function(r){r.forEach(function(r){var n=r.reduce(function(r,n){return 1===n.length&&r.push(n[0]),r},[]);r.forEach(function(r){r.length>1&&n.forEach(function(n){var t=r.indexOf(n);-1!==t&&r.splice(t,1)})})})},r.removeColDuplicate=function(n){var t=function(r){for(var n=[],t=0;t<9;t++){for(var e=[],o=0;o<9;o++)e.push(r[o][t]);n.push(e)}return n}(n);r.removeRowDuplicate(t)},r.removeSquareDuplicate=function(n){var t=e.Util.getSquareList(n);r.removeRowDuplicate(t)},r}();n.HumanSolver=o},function(r,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.backtracker=function(r){for(var n=[],t=r.getSolutionStructure(),e=0,o=0,i=r.universe,u=JSON.parse(JSON.stringify(r.universe));;){if(e++,r.maxIteration>0&&e>r.maxIteration)throw new Error("maxIteration reached.");if(-1===o){if("find-all"===r.strategy)break;throw new Error("it seems that the backtracking cannot find a solution.")}var a=r.getPossibilities(i,o);if(0!==a.length){var c=r.pop(a);if(r.setSolution(t,o,c),r.checkSolution(t,o)&&++o===r.length){if("find-first"===r.strategy)break;if("find-all"===r.strategy){var f=JSON.parse(JSON.stringify(t));if(n.push(f),n.length>=r.max)break;o--;continue}}}else r.resetSolution(t,o),r.resetPossibilities(a,o,u),o--}return"find-first"===r.strategy?t:"find-all"===r.strategy?n:void 0}},function(r,n,t){"use strict";var e=this&&this.__assign||Object.assign||function(r){for(var n,t=1,e=arguments.length;t<e;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o]);return r};Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),i=t(1),u=t(0);function a(r){return{x:Math.floor(r/9),y:r%9}}function c(r,n,t){return function(r,n,t){return r[n].indexOf(r[n][t])===t}(r,n,t)&&function(r,n,t){return r.map(function(r){return r[t]}).indexOf(r[n][t])===n}(r,n,t)&&function(r,n,t){var e=r[n][t],o=Math.floor(n/3),i=Math.floor(t/3),u=r.slice(3*o,3*o+3).map(function(r){return r.slice(3*i,3*i+3)});return u[n%3][t%3]=0,-1===u.reduce(function(r,n){return r.concat(n)},[]).indexOf(e)}(r,n,t)}var f={getSolutionStructure:u.Util.initGrid,universe:new Array(9).fill(0).map(function(){return new Array(9).fill(0).map(u.Util.MakeNewA19)}),getPossibilities:function(r,n){var t=a(n),e=t.x,o=t.y;return r[e][o]},resetPossibilities:function(r,n,t){var e=a(n),o=e.x,i=e.y;t[o][i].forEach(function(n){return r.push(n)})},resetSolution:function(r,n){var t=a(n),e=t.x,o=t.y;r[e][o]=0},setSolution:function(r,n,t){var e=a(n),o=e.x,i=e.y;r[o][i]=t},checkSolution:function(r,n){var t=a(n);return c(r,t.x,t.y)},pop:function(r){return u.Util.popRand(r)},strategy:"find-first",max:2,length:81},l=function(){function r(){}return r.from=function(r){return u.Util.makeGridFromString(r)},r.generate=function(){return f.universe=u.Util.getUniverseFromEmptyGrid(),o.backtracker(f)},r.naiveCarve=function(n,t){for(var e,o=0;;){e=JSON.parse(JSON.stringify(n));for(var i=new Array(81).fill(0).map(function(r,n){return{r:Math.floor(n/9),c:n%9}}),a=0;a<t;a++){var c=u.Util.popRand(i),f=c.r,l=c.c;e[f][l]=0}if(r.checkOneSolution(e))break;o++}return console.log("found in %d iterations",o),e},r.checkOneSolution=function(n){return 1===r.getAllSolution(n).length},r.getAllSolution=function(n){var t=u.Util.getUniverseFromGrid(n);t=r.humanSolve(t);var i=e({},f,{universe:t,strategy:"find-all",max:2,length:81});return o.backtracker(i)},r.humanSolve=function(r){var n,t=u.Util.deepClone(r),e=u.Util.getUniverseSize(t);do{n=e,i.HumanSolver.removeRowDuplicate(t),i.HumanSolver.removeColDuplicate(t),i.HumanSolver.removeSquareDuplicate(t),e=u.Util.getUniverseSize(t)}while(e<n);return t},r.carve=function(n,t){return r.btcarve(n,t)},r.btcarve=function(n,t){for(var e=function(){try{var e,i={getSolutionStructure:function(){return[]},universe:new Array(t).fill(0).map(function(){return new Array(81).fill(0).map(function(r,n){return{row:Math.floor(n/9),col:n%9}})}),getPossibilities:function(r,n){return r[n]},resetPossibilities:function(r,n,t){t[n].forEach(function(n){return r.push(n)})},resetSolution:function(r,n){r.pop()},setSolution:function(r,n,t){r.length!==n?r.length!==n-1||r.push(t):r[n-1]=t},checkSolution:function(t,o){var i=t[o-1];return t.findIndex(function(r){return r.row===i.row&&r.col===i.col})===o-1&&(e=JSON.parse(JSON.stringify(n)),t.forEach(function(r){e[r.row][r.col]=0}),r.checkOneSolution(e))},pop:function(r){return u.Util.popRand(r)},strategy:"find-first",maxIteration:500,length:t},a=o.backtracker(i);if(e=JSON.parse(JSON.stringify(n)),a.forEach(function(r){e[r.row][r.col]=0}),!r.checkOneSolution(e))throw new Error("I am buggy");return{value:e}}catch(r){console.log("e",r.message)}};;){var i=e();if("object"==typeof i)return i.value}},r}();n.SudokuSolver=l},function(r,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t(3);n.SudokuSolver=e.SudokuSolver}]));
//# sourceMappingURL=sudoku-generator.node.js.map