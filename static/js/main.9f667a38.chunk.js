(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={movie:"Movie_movie__2hWhs",movie__img:"Movie_movie__img__3KNb7",movie__title:"Movie_movie__title__2nSV9",movie__year:"Movie_movie__year__OcxVr",movie__genres:"Movie_movie__genres__1zV5l"}},,function(e,t,n){e.exports={container:"Home_container__BnSLY",slide__box:"Home_slide__box__2nZbd",title:"Home_title__3hjMQ"}},function(e,t,n){e.exports={bg:"Point_bg__2VsjM",show:"Point_show__11ntq",img:"Point_img__3UJEW",textbox:"Point_textbox__1xlZM",title:"Point_title__1DGQ4"}},function(e,t,n){e.exports={container:"Slide_container__jWOL6",slide__show:"Slide_slide__show__2bDMM",slide:"Slide_slide__1ai46",left:"Slide_left__1gi0t",right:"Slide_right__3HX6w"}},function(e,t,n){e.exports={container:"Nav_container__1WT4L",title:"Nav_title__3dTk1",option__list:"Nav_option__list__pzeUi",icon__list:"Nav_icon__list__2mIpC",null:"Nav_null__3XYc8"}},,function(e,t,n){e.exports={container:"List_container__fGWYl",loader:"List_loader__2_PmQ",movies:"List_movies__2cCAa",footer:"List_footer__10aTI",focusing:"List_focusing__2yQVL"}},,,,,,function(e,t,n){e.exports={loader:"Loading_loader__3Vwl_"}},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(19),s=n.n(a),r=n(7),o=n(4),l=n(2),j=n(14),_=n.n(j),u=n(1);var b=function(e){var t=e.background_image_original,n=e.medium_cover_image,c=e.url,i=e.title_long,a=e.rating,s=e.runtime,r=e.genres,o=e.download_count;return Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:_.a.bg,src:t}),Object(u.jsxs)("div",{className:_.a.show,children:[Object(u.jsx)("img",{className:_.a.img,src:n}),Object(u.jsxs)("div",{className:_.a.textbox,children:[Object(u.jsx)("h1",{className:_.a.title,children:Object(u.jsx)("a",{href:c,target:"_blank",children:i})}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Rating ",a]}),Object(u.jsxs)("li",{children:["Runtime ",s]}),Object(u.jsxs)("li",{children:["Download ",o]}),Object(u.jsxs)("li",{children:["Genres",Object(u.jsx)("ul",{children:r.map((function(e){return Object(u.jsx)("li",{children:e})}))})]})]})]})]})]})},d=n(13),m=n.n(d),x=n(24),O=n.n(x);var h=function(){return Object(u.jsx)("div",{className:O.a.loader,children:Object(u.jsx)("span",{children:"Loading..."})})};var v=function(){var e=Object(o.g)().id,t=Object(c.useState)(!0),n=Object(l.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)({}),r=Object(l.a)(s,2),j=r[0],_=r[1];return Object(c.useEffect)((function(){fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e)).then((function(e){return e.json()})).then((function(e){_(e.data.movie),a(!1)}))}),[]),console.log(j),Object(u.jsx)("div",{className:m.a.container,children:i?Object(u.jsx)(h,{}):Object(u.jsx)(b,{background_image_original:j.background_image_original,medium_cover_image:j.medium_cover_image,url:j.url,title_long:j.title_long,rating:j.rating,runtime:j.runtime,genres:j.genres,download_count:j.download_count})})},f=n(11),g=n.n(f);var p=function(e){var t=e.id,n=e.coverImg,c=e.title,i=e.year,a=e.summary,s=e.genres,o=e.movie_style;return""==n?null:Object(u.jsxs)("div",{className:g.a.movie,style:o,children:[Object(u.jsx)("img",{src:n,alt:c,className:g.a.movie__img}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:g.a.movie__title,children:Object(u.jsx)(r.b,{to:"/movie/".concat(t),children:c.length>50?"".concat(c.slice(0,50),"..."):c})}),Object(u.jsx)("h3",{className:g.a.movie__year,children:i}),Object(u.jsx)("p",{className:g.a.movie__summary,children:a.length>235?"".concat(a.slice(0,235),"..."):a}),Object(u.jsx)("ul",{className:g.a.movie__genres,children:s.map((function(e){return Object(u.jsx)("li",{children:e},e)}))})]})]})},y=n(5),N=n.n(y),w=n(12),k=n(15),S=n.n(k);var L=function(e){var t=e.ytsApi,n=Object(c.useState)(!0),i=Object(l.a)(n,2),a=i[0],s=i[1],r=Object(c.useState)([]),o=Object(l.a)(r,2),j=o[0],_=o[1],b=Object(c.useState)(0),d=Object(l.a)(b,2),m=d[0],x=d[1],O=function(){var e=Object(w.a)(N.a.mark((function e(){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.json();case 4:n=e.sent,_(n.data.movies),s(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){O()}),[]),Object(u.jsxs)("div",{className:S.a.container,children:[a?Object(u.jsx)(h,{}):Object(u.jsx)("div",{className:S.a.slide__show,children:Object(u.jsx)("div",{className:S.a.slide,style:{transform:"translateX(".concat(m,"px)")},children:j.map((function(e){return Object(u.jsx)(p,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:"",genres:e.genres,movie_style:{minWidth:"350px",height:"300px"}},e.id)}))})}),a?null:Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{class:S.a.left,onClick:function(){m>=0||x((function(e){return e+350}))},children:Object(u.jsx)("i",{class:"fas fa-caret-square-left"})}),Object(u.jsx)("button",{class:S.a.right,onClick:function(){m<=-2450||x((function(e){return e-350}))},children:Object(u.jsx)("i",{class:"fas fa-caret-square-right"})})]})]})},M=[{title:"High Rating",path:"minimum_rating=7"},{title:"Romance",path:"genre=romance"},{title:"Thriller",path:"genre=thriller"},{title:"Animation",path:"genre=animation"}];var C=function(){return Object(u.jsx)("div",{className:m.a.container,children:M.map((function(e){return Object(u.jsxs)("div",{className:m.a.slide__box,children:[Object(u.jsx)("h3",{className:m.a.title,children:Object(u.jsxs)(r.b,{to:"/page/".concat(e.path,"/1"),children:[Object(u.jsx)("i",{class:"fas fa-external-link-alt"}),Object(u.jsxs)("span",{children:[e.title," Movie"]})]})}),Object(u.jsx)(L,{ytsApi:"https://yts.mx/api/v2/list_movies.json?limit=10&".concat(e.path,"&sort_by=year")})]})}))})},E=n(10),P=n(18),A=n.n(P),I=n(8),V=Object(I.b)({key:"listPageReLoading",default:!1}),W=Object(I.b)({key:"focusNav",default:""}),q=Object(E.a)(Array(10)).map((function(e,t){return t+1}));var H=function(){var e=Object(o.g)(),t=e.num,n=e.detail,i=Object(c.useState)(!0),a=Object(l.a)(i,2),s=a[0],j=a[1],_=Object(c.useState)([]),b=Object(l.a)(_,2),d=b[0],m=b[1],x=Object(I.c)(V),O=Object(l.a)(x,2),v=O[0],f=O[1],g=Object(I.d)(W),y=function(){var e=Object(w.a)(N.a.mark((function e(){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?page=".concat(t,"&").concat(n,"&sort_by=year"));case 2:return e.next=4,e.sent.json();case 4:c=e.sent,m(c.data.movies),j(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){f(!1),j(!0),g(n),y()}),[v]),Object(u.jsxs)("div",{className:A.a.container,children:[s?Object(u.jsx)(h,{}):Object(u.jsx)("div",{className:A.a.movies,children:d.map((function(e){return Object(u.jsx)(p,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))}),Object(u.jsx)("ul",{className:A.a.footer,children:s?null:q.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/page/".concat(n,"/").concat(e),onClick:function(){return f(!0)},className:e==t?A.a.focusing:null,children:e})})}))})]})},R=n(16),T=n.n(R);var Q=function(){var e=0,t=!1,n=Object(c.useState)(!1),i=Object(l.a)(n,2),a=i[0],s=i[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),_=j[0],b=j[1],d=Object(I.d)(V),m=Object(I.c)(W),x=Object(l.a)(m,2),O=x[0],h=x[1];window.addEventListener("scroll",(function(n){e=window.scrollY,t||(window.requestAnimationFrame((function(){e>=10?(s(!0),b(!0)):(s(!1),b(!1)),t=!1})),t=!0)}));var v=function(){_||s((function(e){return!e}))},f=function(){d(!0)};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("nav",{onMouseOver:v,onMouseOut:v,style:a?{backgroundColor:"#845EC2",boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}:{backgroundColor:"transparent"},className:T.a.container,children:[Object(u.jsx)("div",{className:T.a.title,children:Object(u.jsxs)(r.b,{to:"/react-movie",onClick:function(){return h("")},children:[Object(u.jsx)("i",{class:"fab fa-neos"}),Object(u.jsx)("strong",{children:"ETFLEX"})]})}),Object(u.jsx)("ul",{className:T.a.option__list,children:M.map((function(e){var t=e.title,n=e.path;return Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/page/".concat(n,"/1"),onClick:O!==n?f:null,style:O!==n?null:{color:"#dcb0ff"},children:t})})}))}),Object(u.jsxs)("ul",{className:T.a.icon__list,children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://twitter.com/?lang=ko",target:"_blank",children:Object(u.jsx)("i",{class:"fab fa-twitter-square"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",children:Object(u.jsx)("i",{class:"fab fa-instagram"})})})]})]}),Object(u.jsx)("div",{className:T.a.null})]})};var X=function(){return Object(u.jsx)(I.a,{children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(Q,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/page/:detail/:num",element:Object(u.jsx)(H,{})}),Object(u.jsx)(o.a,{path:"/movie/:id",element:Object(u.jsx)(v,{})}),Object(u.jsx)(o.a,{path:"/react-movie/",element:Object(u.jsx)(C,{})})]})]})})};n(31);s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.9f667a38.chunk.js.map