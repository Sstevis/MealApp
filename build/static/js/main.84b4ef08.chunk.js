(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3eexF",total:"Cart_total__12oso",actions:"Cart_actions__1MZsa","button--alt":"Cart_button--alt__2P26x",button:"Cart_button__1YkWA"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2Rgov",summary:"CartItem_summary__2mbxj",price:"CartItem_price__3raWY",amount:"CartItem_amount__1dbHt",actions:"CartItem_actions__3Ex6m"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2LuS7",icon:"HeaderCartButton_icon__2_Q7y",badge:"HeaderCartButton_badge__RlOrF",bump:"HeaderCartButton_bump__1pIBV"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__38o-p",modal:"Modal_modal__1a1u7","slide-down":"Modal_slide-down__1wRxo"}},function(e,t,n){e.exports={meal:"MealItem_meal__24V1G",description:"MealItem_description__9WnuV",price:"MealItem_price__cMCeb"}},,function(e,t,n){e.exports={header:"Header_header__3Z6zW","main-image":"Header_main-image__2QOL2"}},,function(e,t,n){e.exports={card:"Card_card__3g8SJ"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2r3tw","meals-appear":"AvailableMeals_meals-appear__3XXLR"}},function(e,t,n){e.exports={input:"Input_input__3x1YO"}},function(e,t,n){e.exports={form:"MealItemForm_form__3zjIU"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1BVFr"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),o=n.n(r),s=n(2),l=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(10),u=n.n(d),m=n(0),j=function(e){return Object(m.jsx)("div",{className:u.a.backdrop,onClick:e.onClick})},b=function(e){return Object(m.jsx)("div",{className:u.a.modal,children:Object(m.jsx)("div",{className:u.a.content,children:e.children})})},p=document.getElementById("overlays"),x=function(e){return Object(m.jsxs)(m.Fragment,{children:[c.a.createPortal(Object(m.jsx)(j,{onClick:e.onClose}),p),c.a.createPortal(Object(m.jsxs)(b,{children:[" ",e.children]}),p)]})},O=n(4),h=n.n(O),_=n(5),f=n.n(_),v=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:f.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:f.a.summary,children:[Object(m.jsx)("span",{className:f.a.price,children:t}),Object(m.jsxs)("span",{className:f.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:f.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"-"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},C=function(e){var t=Object(r.useContext)(l),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(s.a)(Object(s.a)({},e),{},{amount:1}))},o=Object(m.jsx)("ul",{className:h.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(v,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)},e.id)}))});return Object(m.jsxs)(x,{onClose:e.onClose,children:[o,Object(m.jsxs)("div",{className:h.a.total,children:[Object(m.jsx)("span",{children:"Total Amount "}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:h.a.actions,children:[Object(m.jsx)("button",{className:h.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(m.jsx)("button",{className:h.a.button,children:"Order"})]})]})},y=n(13),g=n.n(y),A=n.p+"static/media/meals.2971f633.jpg",N=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},I=n(8),M=n.n(I),w=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(l).items,s=o.reduce((function(e,t){return e+t.amount}),0),d="".concat(M.a.button," ").concat(a?M.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(m.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(m.jsx)("span",{className:M.a.icon,children:Object(m.jsx)(N,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsxs)("span",{className:M.a.badge,children:[" ",s]})]})},k=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{className:g.a.header,children:[Object(m.jsx)("h1",{children:"React Meals"}),Object(m.jsx)(w,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:g.a["main-image"],children:Object(m.jsx)("img",{src:A,alt:"meals pic"})})]})},F=n(15),H=n.n(F),B=function(e){return Object(m.jsx)("div",{className:H.a.card,children:e.children})},R=n(16),S=n.n(R),E=n(11),D=n.n(E),V=n(17),z=n.n(V),T=o.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:z.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(s.a)({ref:t,id:e.input.id},e.input))]})})),P=n(18),Y=n.n(P),W=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)();return Object(m.jsxs)("form",{className:Y.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(m.jsx)(T,{ref:o,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"Add +"}),!a&&Object(m.jsx)("p",{children:"Please a valid Amount (1-5)"})]})},J=function(e){var t=Object(r.useContext)(l),n="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:D.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:D.a.description,children:e.description}),Object(m.jsx)("div",{className:D.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(W,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price}),console.log(t)}})})]})},L=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],$=function(){var e=L.map((function(e){var t=e.name,n=e.price,a=e.description,c=e.id;return Object(m.jsx)(J,{id:c,name:t,price:n,description:a},c)}));return Object(m.jsx)("section",{className:S.a.meals,children:Object(m.jsx)(B,{children:Object(m.jsx)("ul",{children:e})})})},G=n(19),Q=n.n(G),X=function(){return Object(m.jsxs)("section",{className:Q.a.summary,children:[Object(m.jsx)("h2",{children:"Deliciuos Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},Z=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(X,{}),Object(m.jsx)($,{})]})},q=n(14),U={items:[],totalAmount:0},K=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.payload.price*t.payload.amount,c=e.items.findIndex((function(e){return e.id===t.payload.id})),i=e.items[c];if(i){var r=Object(s.a)(Object(s.a)({},i),{},{amount:i.amount+t.payload.amount});(n=Object(q.a)(e.items))[c]=r}else n=e.items.concat(t.payload);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,l=e.items.findIndex((function(e){return e.id===t.payload})),d=e.items[l],u=e.totalAmount-d.price;if(1===d.amount)o=e.items.filter((function(e){return e.id!==t.payload}));else{var m=Object(s.a)(Object(s.a)({},d),{},{amount:d.amount-1});(o=Object(q.a)(e.items))[l]=m}return{items:o,totalAmount:u}}return U},ee=function(e){var t=Object(r.useReducer)(K,U),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",payload:e})},removeItem:function(e){c({type:"REMOVE",payload:e})}};return Object(m.jsx)(l.Provider,{value:o,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ee,{children:[n&&Object(m.jsx)(C,{onClose:function(){a(!1)}}),Object(m.jsx)(k,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(Z,{})})]})};c.a.render(Object(m.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.84b4ef08.chunk.js.map