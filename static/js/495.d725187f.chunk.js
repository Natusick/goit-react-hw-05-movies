"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[495],{4495:function(t,n,e){e.r(n),e.d(n,{Cast:function(){return p},default:function(){return f}});var r=e(885),a=e(2791),c=e(6871),u=e(1933),i="Cast_listCast__8y4N6",s="Cast_itemCast__-uNHV",o=e(184),p=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],p=n[1],f=(0,c.UO)().movieId;return(0,a.useEffect)((function(){u.y(f).then((function(t){return p(t)})).catch(console.log)}),[f]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{className:i,children:e&&e.map((function(t){var n=t.id,e=t.name,r=t.profile_path,a=t.character;return(0,o.jsxs)("li",{className:s,children:[(0,o.jsx)("img",{src:u.UB+r,alt:e,width:"200"}),(0,o.jsx)("p",{children:e}),(0,o.jsx)("p",{children:a})]},n)}))})})},f=p},1933:function(t,n,e){e.d(n,{Bt:function(){return d},Tg:function(){return p},UB:function(){return o},Y5:function(){return h},qF:function(){return f},y:function(){return l}});var r=e(8214),a=e(5861),c=e(4569),u=e.n(c),i="https://api.themoviedb.org/3/",s="cd663ecb08f749a7c516ed1131752030",o="https://image.tmdb.org/t/p/w500",p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(i,"trending/movie/day?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(i,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=495.d725187f.chunk.js.map