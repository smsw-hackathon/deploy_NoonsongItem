(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{141:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"URL",(function(){return U}));var c,r,s,i=a(0),l=a(28),o=a.n(l),j=a(57),u=(a(141),a(20)),b=a(43),d=a(240),O=a(243),h=a(44),m=a.p+"static/media/mark.208cf855.png",p=a(49),x=a.n(p),g=a(6),f=d.a.Header,w=d.a.Footer,y=d.a.Content,v=Object(h.a)(f)(c||(c=Object(b.a)(["\n    color: #012F48;\n"]))),C=Object(h.a)(O.a)(r||(r=Object(b.a)(["\n    float : right;\n    padding : 0px;\n"]))),E=Object(h.a)(O.a.Item)(s||(s=Object(b.a)(["\n    margin : 30px;\n    float : right;\n"]))),S=function(){return Object(g.jsxs)(d.a,{className:"layout",children:[Object(g.jsxs)(v,{children:[Object(g.jsx)("img",{src:m,width:"30px"}),Object(g.jsxs)(C,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[""],children:[Object(g.jsx)(E,{children:"Home"}),Object(g.jsx)(E,{children:"MyPage"}),Object(g.jsx)(E,{children:"Create"})]})]}),Object(g.jsx)(y,{style:{padding:"0 50px"}}),Object(g.jsx)(w,{style:{textAlign:"center"},children:"Ant Design ?2018 Created by Ant UED"})]})},k=a(60),I=a(45),_=a(84),P="login_user";var T,D,F,N=a(241),L=a(242),q=a(134),U="http://3.35.139.141:3000",z=(a(231),function(e){var t;Object(i.useEffect)((function(){x.a.post(n).then((function(e){return console.log(e.data)}))}),[]);var a=Object(_.b)(),c=Object(i.useState)(""),r=Object(I.a)(c,2),s=r[0],l=r[1],o=Object(i.useState)(""),j=Object(I.a)(o,2),u=j[0],b=j[1];return Object(g.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:"#011F48",fontColor:"white"},children:[Object(g.jsx)("img",{src:m,width:"250",height:"300","mx-auto":!0}),Object(g.jsxs)(N.a,{name:"basic",font:{color:"white"},labelCol:{span:10},wrapperCol:{span:20},initialValues:{remember:!0},autoComplete:"off",children:[Object(g.jsx)(N.a.Item,{label:"Email",name:"Email",rules:[{required:!0,message:"Please input your Email!"}],children:Object(g.jsx)(L.a,{type:"email",value:s,onChange:function(e){l(e.currentTarget.value)},size:50})}),Object(g.jsx)(N.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(g.jsx)(L.a.Password,(t={type:"password",size:"large",value:u},Object(k.a)(t,"size",50),Object(k.a)(t,"onChange",(function(e){b(e.currentTarget.value)})),t))}),Object(g.jsx)(N.a.Item,{wrapperCol:{offset:12,span:16},children:Object(g.jsx)(q.a,{type:"text",htmlType:"submit",onClick:function(e){var t;e.preventDefault(),a((t={email:s,pw:u},{type:"LOGIN_USER",payload:x.a.post("/api/users/login",t).then((function(e){return e.data}))})).then((function(e){console.log(e)}))},children:Object(g.jsx)("p",{style:{color:"white"},children:"Login"})})})]})]})});var R=Object(h.a)(N.a.Item)(T||(T=Object(b.a)(["\n    color: white;\n"]))),X=(Object(h.a)(N.a.Item.name)(D||(D=Object(b.a)(["\n    color: white;\n"]))),Object(h.a)(q.a)(F||(F=Object(b.a)(["\n    color: white;\n"]))),function(){var e=N.a.useForm(),t=Object(I.a)(e,1)[0],a=Object(i.useState)(""),n=Object(I.a)(a,2),c=n[0],r=n[1],s=Object(i.useState)(""),l=Object(I.a)(s,2),o=l[0],j=l[1],u=Object(i.useState)(""),b=Object(I.a)(u,2),d=b[0],O=b[1];return Object(g.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",background:"#011F48",flexDirection:"column"},children:[Object(g.jsx)("img",{src:m,width:"250",height:"300","mx-auto":!0}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)(N.a,{form:t,name:"register",children:[Object(g.jsx)(R,{Sname:"email",label:"E-mail",rules:[{type:"email",message:"@sm.ac.kr"},{required:!0,message:"Please input your E-mail!"}],children:Object(g.jsx)(L.a,{value:o,onChange:function(e){j(e.currentTarget.value)}})}),Object(g.jsx)(R,{Sname:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(g.jsx)(L.a.Password,{value:d,onChange:function(e){O(e.currentTarget.value)}})}),Object(g.jsx)(R,{Sname:"nickname",label:"Nickname",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}],children:Object(g.jsx)(L.a,{value:c,onChange:function(e){r(e.currentTarget.value)}})}),Object(g.jsx)(N.a.Item,{wrapperCol:{offset:8,span:16},children:Object(g.jsx)(q.a,{type:"text",htmlType:"submit",onClick:function(e){e.preventDefault(),console.log("Nickname",c),console.log("Email",o),console.log("Password",d)},children:Object(g.jsx)("p",{style:{color:"white"},children:"Submit"})})})]})]})}),A=function(){return Object(g.jsx)(j.b,{children:Object(g.jsxs)(u.c,{children:[Object(g.jsx)(u.a,{exact:!0,path:"/landing",component:S}),Object(g.jsx)(u.a,{exact:!0,path:"/",component:z}),Object(g.jsx)(u.a,{exact:!0,path:"/register",component:X})]})})};var V=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(A,{})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,244)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},H=(a(233),a(61)),J=a(132),G=a(131),K=a.n(G),M=a(99),W=Object(H.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(M.a)(Object(M.a)({},e),{},{loginSuccess:t.payload});default:return e}}}),Q=Object(H.a)(K.a,J.a)(H.c);o.a.render(Object(g.jsx)(_.a,{store:Q(W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),children:Object(g.jsx)(j.a,{children:Object(g.jsx)(V,{})})}),document.getElementById("root")),B()}},[[238,1,2]]]);
//# sourceMappingURL=main.e10357b9.chunk.js.map