(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(9),s=n.n(i),a=n(5),j=n(1),o=n(2);var u=function(){var e=Object(j.g)().id;return Object(c.useEffect)((function(){fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e)).then((function(e){return e.json()})).then(console.log)}),[]),Object(o.jsx)("h1",{children:"Detail"})},d=n(8),m=n.n(d),b=n(10),h=n(4);var O=function(e){var t=e.id,n=e.medium_cover_image,c=e.title,r=e.summary,i=e.genres;return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:n}),Object(o.jsx)("h2",{children:Object(o.jsx)(a.b,{to:"/movie/".concat(t),children:c})}),Object(o.jsx)("p",{children:r}),Object(o.jsx)("ul",{children:i.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]})};var l=function(){var e=Object(c.useState)(!0),t=Object(h.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(h.a)(i,2),a=s[0],j=s[1],u=function(){var e=Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,j(t.data.movies),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[]),Object(o.jsx)("div",{children:n?Object(o.jsx)("h1",{children:"Loading..."}):Object(o.jsx)("div",{children:a.map((function(e){return Object(o.jsx)(O,{id:e.id,medium_cover_image:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var v=function(){return Object(o.jsx)(a.a,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/movie/:id",element:Object(o.jsx)(u,{})}),Object(o.jsx)(j.a,{path:"/",element:Object(o.jsx)(l,{})})]})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0d52b449.chunk.js.map