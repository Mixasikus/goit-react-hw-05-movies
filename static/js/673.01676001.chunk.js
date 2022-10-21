"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[673],{5673:function(A,r,e){e.r(r),e.d(r,{default:function(){return x}});var t=e(885),i=e(4569),s=e.n(i),n=e(7596);e(5462);var a=e(8009),c=e(184);function u(A){var r=A.image,e=A.name,t=A.character,i=r?"https://image.tmdb.org/t/p/w300".concat(r):a;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{src:i,alt:e}),(0,c.jsx)("p",{children:e}),(0,c.jsxs)("p",{children:["Character:",t]})]})})}var f=e(2791),m=e(7689);function x(){var A=(0,m.UO)().moviesId,r=(0,f.useState)(null),e=(0,t.Z)(r,2),i=e[0],a=e[1];if((0,f.useEffect)((function(){var r;(r=A,s().get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=1")).catch((function(A){void 0===A.data&&n.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430... \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.")}))).then(a)}),[A]),!i)return null;var x=i.data.cast;return(0,c.jsx)("div",{children:x.map((function(A){var r=A.profile_path,e=A.original_name,t=A.id,i=A.character;return(0,c.jsx)("ul",{children:(0,c.jsx)(u,{image:r,name:e,character:i})},t)}))})}},8009:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=673.01676001.chunk.js.map