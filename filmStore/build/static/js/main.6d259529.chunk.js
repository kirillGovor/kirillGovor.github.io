(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(e,t,a){e.exports=a.p+"static/media/empty-cart.5abf459d.jpg"},204:function(e,t,a){e.exports=a(405)},209:function(e,t,a){},395:function(e,t,a){},405:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setFilms",function(){return d});var r={};a.r(r),a.d(r,"setSort",function(){return Q}),a.d(r,"setSeatchQuery",function(){return U}),a.d(r,"addToCart",function(){return P}),a.d(r,"removeFromCart",function(){return V});var l={};a.r(l),a.d(l,"addToCart",function(){return q}),a.d(l,"removeFromCart",function(){return z}),a.d(l,"NewUser",function(){return K});var c=a(0),i=a.n(c),o=a(42),m=a.n(o),u=(a(209),a(17)),s=a(26),d=function(e){return{type:"SET_FILMS",payload:e}},E=a(49),p=a(50),f=a(53),v=a(51),b=a(52),h=a(20),g=a(172),y=a.n(g),O={isReady:!1,items:null},C={seachQuery:"",SortBy:"all"},j=a(192),k={items:[],userName:""},w=a(81),_=Object(h.c)({routing:w.routerReducer,films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILMS":return Object(u.a)({},e,{items:t.payload,isReady:!0});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return Object(u.a)({},e,{searchQuery:t.payload});case"SET_SORT":return Object(u.a)({},e,{SortBy:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FILMS_TO_CART":return Object(u.a)({},e,{items:Object(j.a)(e.items).concat([t.payload])});case"REMOVE_FILM_FROM_CART":return Object(u.a)({},e,{items:e.items.filter(function(e){return e.id!==t.payload})});case"NEW_USER":return Object(u.a)({},e,{userName:t.payload});default:return e}}}),S=(a(55),a(82)),I=a.n(S),M=a(411),R=a(414),T=a(406),F=a(108),L=a(415),N=a(14),x=function(e){var t=e.title,a=e.author,n=e.price,r=e.image,l=e.addToCart,c=e.addedCount,o=e.id;return i.a.createElement(R.a,null,i.a.createElement(T.a,{src:r}),i.a.createElement(R.a.Content,null,i.a.createElement(R.a.Header,null,i.a.createElement(N.a,{to:"/film".concat(o)},t," ")),i.a.createElement(R.a.Meta,null,i.a.createElement("span",{className:"date"},a))),i.a.createElement(R.a.Content,{extra:!0},i.a.createElement(F.a,{name:"dollar"}),n),i.a.createElement(L.a,{onClick:l.bind(void 0,e),primary:!0},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 ",c>0&&"(${addedCount})"," "))},B=a(416),A=a(410),D=function(e){var t=e.setSort,a=e.SortBy,n=e.searchQuery,r=e.setSeatchQuery;return i.a.createElement("div",null,i.a.createElement(B.a,{secondary:!0},i.a.createElement(B.a.Item,{name:"all",active:"all"===a,onClick:t.bind(void 0,"all")},"\u0412\u0441\u0435"),i.a.createElement(B.a.Item,{name:"price_expensive",active:"price_expensive"===a,onClick:t.bind(void 0,"price_expensive")},"\u0426\u0435\u043d\u0430(\u0441 \u0441\u0430\u043c\u044b\u0445 \u0434\u0435\u0448\u0435\u0432\u044b\u0445)"),i.a.createElement(B.a.Item,{name:"price_cheap",active:"price_cheap"===a,onClick:t.bind(void 0,"price_cheap")},"\u0426\u0435\u043d\u0430(\u0441 \u0441\u0430\u043c\u044b\u0445 \u0434\u043e\u0440\u043e\u0433\u0438\u0445)"),i.a.createElement(B.a.Item,{name:"author",active:"author"===a,onClick:t.bind(void 0,"author")},"\u041f\u043e \u0430\u0432\u0442\u043e\u0440\u0443"),i.a.createElement(B.a.Item,null,i.a.createElement(A.a,{onChange:function(e){return r(e.target.value)},value:n,icon:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a..."}))),i.a.createElement(A.a,{className:"seachMobile",onChange:function(e){return r(e.target.value)},value:n,icon:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a..."}))},Q=function(e){return{type:"SET_SORT",payload:e}},U=function(e){return{type:"SET_QUERY",payload:e}},P=function(e){return{type:"ADD_FILMS_TO_CART",payload:e}},V=function(e){return{type:"REMOVE_FILM_FROM_CART",payload:e}},W=Object(s.b)(function(e){e.films;return{SortBy:e.filter.SortBy}},function(e){return Object(u.a)({},Object(h.b)(r,e))})(D),G=function(e){var t=e.setSort,a=e.SortBy;return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(B.a.Item,null,i.a.createElement("a",null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"))),i.a.createElement(N.a,{to:"/basketMobile"},i.a.createElement("li",null,i.a.createElement(B.a.Item,null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"))),i.a.createElement("br",null),i.a.createElement("p",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"),i.a.createElement("li",null,i.a.createElement(B.a.Item,{name:"all",active:"all"===a,onClick:t.bind(void 0,"all")},"\u0412\u0441\u0435")),i.a.createElement("li",null,i.a.createElement(B.a.Item,{name:"price_expensive",active:"price_expensive"===a,onClick:t.bind(void 0,"price_expensive")},"\u0426\u0435\u043d\u0430(\u0441 \u0441\u0430\u043c\u044b\u0445 \u0434\u0435\u0448\u0435\u0432\u044b\u0445)")),i.a.createElement("li",null,i.a.createElement(B.a.Item,{name:"price_cheap",active:"price_cheap"===a,onClick:t.bind(void 0,"price_cheap")},"\u0426\u0435\u043d\u0430(\u0441 \u0441\u0430\u043c\u044b\u0445 \u0434\u043e\u0440\u043e\u0433\u0438\u0445)")),i.a.createElement("li",null,i.a.createElement(B.a.Item,{name:"author",active:"author"===a,onClick:t.bind(void 0,"author")},"\u041f\u043e \u0430\u0432\u0442\u043e\u0440\u0443")),i.a.createElement("br",null),i.a.createElement("p",null,"\u0410\u043a\u043a\u0430\u0443\u043d\u0442:"),i.a.createElement("li",null,i.a.createElement(N.a,{to:"/login"},i.a.createElement(B.a.Item,null,i.a.createElement(L.a,null,"\u0412\u043e\u0439\u0442\u0438")))))},H=a(413),Y=a(418),$=function(e){var t=e.title,a=e.id,n=e.image,r=e.removeFromCart;return i.a.createElement(H.a,{selection:!0,divided:!0,verticalAlign:"middle"},i.a.createElement(H.a.Item,null,i.a.createElement(H.a.Content,{floated:"right"},i.a.createElement(L.a,{onClick:r.bind(void 0,a),color:"red"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),i.a.createElement(T.a,{avatar:!0,src:n}),i.a.createElement(N.a,{to:"/film".concat(a)},i.a.createElement(H.a.Content,null,t))))},J=function(e){var t=e.totalPrice,a=e.inBasket,n=e.items,r=e.user,l=e.NewUser;e.userName;return i.a.createElement(B.a,null,i.a.createElement(B.a.Item,{name:"browse"},i.a.createElement(N.a,{to:"/"},"  \u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0444\u0438\u043b\u044c\u043c\u043e\u0432")),i.a.createElement(B.a.Menu,{position:"right"},i.a.createElement(N.a,{to:"/login"},i.a.createElement(B.a.Item,null,i.a.createElement(L.a,{onClick:l.bind(r)},function(e){return void 0!=e?e:void 0}(r)||"\u0412\u043e\u0439\u0442\u0438"))),i.a.createElement(B.a.Item,{name:"signup"},"\u0418\u0442\u043e\u0433\u043e: \xa0 ",i.a.createElement("i",null,t)," $"),i.a.createElement(Y.a,{trigger:i.a.createElement(B.a.Item,{name:"basket"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 ",i.a.createElement("i",null,"(",a||"0",")")),content:n.map(function(e){return i.a.createElement($,Object.assign({key:e.id},e))}),on:"click",hideOnScroll:!0})))},q=function(e){return{type:"ADD_FILMS_TO_CART",payload:e}},z=function(e){return{type:"REMOVE_FILM_FROM_CART",payload:e}},K=function(e){return{type:"NEW_USER",payload:e}},X=a(86),Z=a.n(X),ee=Object(s.b)(function(e){var t=e.cart,a=e.user;return{totalPrice:t.items.reduce(function(e,t){return e+t.price},0),inBasket:t.items.length,items:Z()(t.items,function(e){return e.id}),userName:a}},function(e){return Object(u.a)({},Object(h.b)(l,e))})(J),te=a(187),ae=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.setFilms;I.a.get("./films.json").then(function(t){e(t.data)})}},{key:"render",value:function(){var e=this.props,t=e.films,a=e.isReady,n=e.setSort,r=e.addToCart,l=e.removeFromCart,c=e.user;return i.a.createElement("div",null,i.a.createElement(te.slide,{className:"bm-menu"},i.a.createElement(G,{setSort:n})),i.a.createElement(M.a,null,i.a.createElement("div",null,i.a.createElement(ee,c),i.a.createElement(W,{setSort:n})),i.a.createElement(R.a.Group,{centered:!0},a?t.map(function(e){return i.a.createElement(x,Object.assign({},e,{addToCart:r,removeFromCart:l,key:e.id}))}):"loading...")))}}]),t}(c.Component),ne=a(87),re=a.n(ne),le=a(412),ce=function(e){var t=e.title,a=e.author,n=e.image,r=e.addToCart,l=e.text;return i.a.createElement("div",{style:{marginTop:"25px"}},i.a.createElement(le.a.Group,null,i.a.createElement(le.a,null,i.a.createElement(le.a.Image,{src:n}),i.a.createElement(le.a.Content,null,i.a.createElement(le.a.Header,null,t),i.a.createElement(le.a.Extra,null,a),i.a.createElement(le.a.Meta,null,i.a.createElement("p",null,l),i.a.createElement(N.a,{to:"/"},i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(L.a,{primary:!0},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f "))))),i.a.createElement(L.a,{onClick:r.bind(void 0,e),primary:!0},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 "," ")))},ie=Object(s.b)(function(e,t){var a=e.cart,n=t.id;return{addedCount:a.items.reduce(function(e,t){return e+(t.id===n?1:0)},0)}},function(e){return Object(u.a)({},Object(h.b)(l,e))})(ce),oe=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=d;I.a.get("./films.json").then(function(a){var n=t(a.data).payload;e.setState({films:n})})}},{key:"render",value:function(){var e,a=this.props,n=(a.k,a.films,a.isReady,a.setSort,a.addToCart),r=a.removeFromCart,l=this.state||null,c=this.props.location.pathname.slice();if(c=c.replace(/[^-0-9]/gim,""),null!=l)for(var o=0;o<l.films.length;o++)l.films[o].id==c&&(e=l.films[o]);return i.a.createElement(M.a,null,i.a.createElement("div",null,i.a.createElement(ee,null)),i.a.createElement(R.a.Group,{itemsPerRow:4},i.a.createElement(ie,Object.assign({},e,{addToCart:n,removeFromCart:r,key:t.id}))))}}]),t}(c.Component),me=function(e,t,a){return function(e,t){switch(t){case"price_expensive":return re()(e,"price","asc");case"price_cheap":return re()(e,"price","desc");case"author":return re()(e,"author","asc");default:return e}}(function(e,t){return e.filter(function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>=0||e.author.toLowerCase().indexOf(t.toLowerCase())>=0})}(e,a||""),t)},ue=Object(s.b)(function(e){var t=e.films,a=e.filter;return{films:t.items&&me(t.items,a.SortBy,a.searchQuery),isReady:t.isReady}},function(e){return Object(u.a)({},Object(h.b)(n,e),Object(h.b)(r,e))})(ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(392),a(395);var se=function(e){var t=e.title,a=(e.id,e.image);e.removeFromCart;return i.a.createElement(H.a,{selection:!0,divided:!0,verticalAlign:"middle"},i.a.createElement(H.a.Item,null,i.a.createElement(H.a.Content,{floated:"right"}),i.a.createElement(T.a,{avatar:!0,src:a}),i.a.createElement(H.a.Content,null,t)))},de=a(189),Ee=function(e){return Object(de.a)(e),i.a.createElement("div",null,i.a.createElement(M.a,null,i.a.createElement(B.a,null,i.a.createElement(B.a.Item,{name:"browse"},i.a.createElement(N.a,{to:"/"},"  \u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0444\u0438\u043b\u044c\u043c\u043e\u0432")),i.a.createElement(B.a.Menu,{position:"right"})),i.a.createElement("div",{className:"login"},i.a.createElement("h1",null,"\u0412\u0445\u043e\u0434"),i.a.createElement("label",null,"\u041b\u043e\u0433\u0438\u043d "),i.a.createElement("br",null),i.a.createElement(A.a,{type:"email",iconPosition:"left",placeholder:"Email"},i.a.createElement(F.a,{name:"at"}),i.a.createElement("input",null)),i.a.createElement("br",null),i.a.createElement("label",null,"\u041f\u0430\u0440\u043e\u043b\u044c "),i.a.createElement("br",null),i.a.createElement(A.a,{type:"password",iconPosition:"left",placeholder:"Password"},i.a.createElement(F.a,{name:"lock"}),i.a.createElement("input",null)),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(B.a.Item,null,i.a.createElement(L.a,{primary:!0,type:"submit"},"\u0412\u0445\u043e\u0434"),i.a.createElement(N.a,{to:"/registration"},i.a.createElement(L.a,{primary:!0},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))))},pe=a(43),fe=a(190),ve=a.n(fe),be=a(399),he=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(f.a)(this,Object(v.a)(t).call(this))).state={user:null},e.widget=new be({baseUrl:"https://dev-326071.oktapreview.com",clientId:"0oaiiv2utlEBiY21D0h7",redirectUri:"http://localhost:3000"}),e.showLogin=e.showLogin.bind(Object(pe.a)(Object(pe.a)(e))),e.logout=e.logout.bind(Object(pe.a)(Object(pe.a)(e))),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount..."),this.widget.session.get(function(t){"INACTIVE"!==t.status?e.setState({user:t.login}):e.showLogin()})}},{key:"showLogin",value:function(){var e=this;console.log("showLogin..."),ve.a.history.stop(),this.widget.renderEl({el:this.loginContainer},function(t){e.setState({user:t.claims.email}),e.widget.remove()},function(e){console.log(e)})}},{key:"logout",value:function(){var e=this;console.log("logout..."),this.widget.signOut(function(){e.setState({user:null}),e.showLogin()})}},{key:"render",value:function(){var e=this;return console.log("rendering..."),i.a.createElement("div",null,i.a.createElement("div",null,this.state.user?i.a.createElement("div",null,i.a.createElement(ee,this.state),i.a.createElement("p",null," \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435,",this.state.user),i.a.createElement("p",null,"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0412\u043e\u0448\u043b\u0438"),i.a.createElement(L.a,{primary:!0,onClick:this.logout},"  \u0412\u044b\u0439\u0442\u0438"),i.a.createElement(N.a,{to:"/"}," ",i.a.createElement(L.a,{primary:!0}," \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0432  \u043a\u0430\u0442\u0430\u043b\u043e\u0433"))):null,this.state.user?null:i.a.createElement("div",null,"  ",i.a.createElement("div",{ref:function(t){e.loginContainer=t}}," "),"  ",i.a.createElement("a",{className:"RegrLink",href:"https://dev-326071.oktapreview.com/signin/register"},"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")," ")))}}]),t}(i.a.Component),ge=a(191),ye=a.n(ge),Oe=function(e){var t=e.title,a=e.id,n=e.image,r=e.removeFromCart;return i.a.createElement(H.a,{selection:!0,divided:!0,verticalAlign:"middle"},i.a.createElement(H.a.Item,null,i.a.createElement(H.a.Content,{floated:"right"},i.a.createElement(L.a,{onClick:r.bind(void 0,a),color:"red"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),i.a.createElement(T.a,{avatar:!0,src:n}),i.a.createElement(N.a,{to:"/film".concat(a)},i.a.createElement(H.a.Content,null,t))))},Ce=function(e){var t=e.items;return i.a.createElement("div",null,i.a.createElement("h3",null,"\u0412\u0430\u0448\u0430 \u041a\u043e\u0440\u0437\u0438\u043d\u0430:"),0==t?i.a.createElement("div",{className:"blockVAsketMobile"},i.a.createElement("h4",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430 :("),i.a.createElement("img",{className:"basketImg",src:ye.a})):t.map(function(e){return i.a.createElement(Oe,Object.assign({key:e.id},e))}),i.a.createElement("br",null),i.a.createElement(N.a,{to:"/"},i.a.createElement(L.a,{primary:!0,className:"BasketMobileButton"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 ")))},je=Object(s.b)(function(e){var t=e.cart;return{totalPrice:t.items.reduce(function(e,t){return e+t.price},0),inBasket:t.items.length,items:Z()(t.items,function(e){return e.id})}},function(e){return Object(u.a)({},Object(h.b)(l,e))})(Ce),ke=Object(h.d)(_,Object(h.a)(y.a));Object(w.syncHistoryWithStore)(N.e,ke);m.a.render(i.a.createElement(s.a,{store:ke},i.a.createElement(N.c,{history:N.d},i.a.createElement(N.b,{path:"/",component:ue}),i.a.createElement(N.b,{path:"/basket",component:se}),i.a.createElement(N.b,{path:"/film:id",component:oe}),i.a.createElement(N.b,{path:"/login",component:he}),i.a.createElement(N.b,{path:"/registration",component:Ee}),i.a.createElement(N.b,{path:"/basketMobile",component:je}))),document.getElementById("root"))},55:function(e,t,a){}},[[204,2,1]]]);
//# sourceMappingURL=main.6d259529.chunk.js.map