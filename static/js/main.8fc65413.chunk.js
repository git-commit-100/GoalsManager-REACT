(this["webpackJsonpgoal-tracker-with-react"]=this["webpackJsonpgoal-tracker-with-react"]||[]).push([[0],[,,function(e,t,n){e.exports={"error-backdrop":"ErrorModal_error-backdrop__wunhA","error-modal":"ErrorModal_error-modal__3-Ndq","error-body":"ErrorModal_error-body__1Kc1e","error-btn-close":"ErrorModal_error-btn-close__o_Vrq"}},,,,function(e,t,n){e.exports={"goal-form":"GoalForm_goal-form__3kmNN","goal-input":"GoalForm_goal-input__2IKHH",invalid:"GoalForm_invalid__1b68z","submit-btn":"GoalForm_submit-btn__B4uw7"}},,function(e,t,n){e.exports={"goals-list-section":"GoalsList_goals-list-section__nIzGz","goals-list":"GoalsList_goals-list__2Zf0E"}},function(e,t,n){e.exports={"goal-item":"GoalsListItem_goal-item__1OnyE","goal-info":"GoalsListItem_goal-info__3oVJY"}},,function(e,t,n){e.exports={card:"Card_card__UmlaP"}},function(e,t,n){e.exports={btn:"Button_btn__2kUe7"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(10),c=n.n(r),l=(n(18),n(13)),i=n(4),s=n(8),d=n.n(s),b=n(11),u=n.n(b),j=n(0),m=function(e){return Object(j.jsx)("div",{className:"".concat(u.a.card," ").concat(e.className),children:e.children})},f=n(9),h=n.n(f),_=function(e){return Object(j.jsx)("li",{className:h.a["goal-item"],onClick:function(){e.onDelete(e.id)},children:Object(j.jsx)("p",{className:h.a["goal-info"],children:e.body})})},g=function(e){return Object(j.jsx)(m,{className:d.a["goals-list-section"],children:Object(j.jsx)("ul",{className:d.a["goals-list"],children:e.goals.map((function(t){return Object(j.jsx)(_,{id:t.id,body:t.body,onDelete:e.onHandleDeleteGoal},t.id)}))})})},x=n(12),O=n.n(x),p=function(e){return Object(j.jsx)("button",{className:"".concat(O.a.btn," ").concat(e.className," ").concat(e.type||"button"),children:e.children})},y=n(6),N=n.n(y),G=n(2),v=n.n(G),k=function(e){return Object(j.jsx)("div",{className:v.a["error-backdrop"],onClick:e.hideModel,children:Object(j.jsxs)(m,{className:v.a["error-modal"],children:[Object(j.jsx)("header",{children:Object(j.jsx)("h3",{className:v.a["error-heading"],children:e.heading})}),Object(j.jsx)("p",{className:v.a["error-body"],children:e.body}),Object(j.jsx)("footer",{children:Object(j.jsx)(p,{className:v.a["error-btn-close"],onClick:e.hideModel,children:e["btn-text"]})})]})})},C=function(e){var t=Object(o.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],c=Object(o.useState)(),l=Object(i.a)(c,2),s=l[0],d=l[1];return Object(j.jsxs)("div",{children:[s&&Object(j.jsx)(k,{heading:s.heading,body:s.body,"btn-text":s.btnTxt,hideModel:function(){d(null)}}),Object(j.jsx)(m,{className:N.a["goal-form"],children:Object(j.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),0!==a.trim().length){var n={id:Math.random(),body:a};e.onGetObj(n),r("")}else d({heading:"Invalid Input !",body:"Input Cannot Be Empty. Try Again !",btnTxt:"Okay"})},children:[Object(j.jsx)("label",{children:"Add Your Goal Here"}),Object(j.jsx)("input",{type:"text",className:N.a["goal-input"],id:"goal-input-field",autoComplete:"off",spellCheck:"false",onChange:function(e){r(e.target.value)},value:a}),Object(j.jsx)(p,{className:N.a["submit-btn"],type:"submit",children:"Submit"})]})})]})};var M=function(){var e=Object(o.useState)([{id:1,body:"Learn React"},{id:2,body:"Go To Gym"},{id:3,body:"Eat Salad"}]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(j.jsx)("p",{className:"no-goals",style:{textAlign:"center",fontSize:"18px",fontStyle:"italic"},children:"No Goals Found. Maybe Add One ?"});return n.length>0&&(r=Object(j.jsx)(g,{goals:n,onHandleDeleteGoal:function(e){a((function(t){return t.filter((function(t){return t.id!=e}))}))}})),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(C,{onGetObj:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),r]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),S()}],[[20,1,2]]]);
//# sourceMappingURL=main.8fc65413.chunk.js.map