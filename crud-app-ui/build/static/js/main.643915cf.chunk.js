(this["webpackJsonpcrud-app-ui"]=this["webpackJsonpcrud-app-ui"]||[]).push([[0],{45:function(e,t,r){},95:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(37),c=r.n(s),i=r(11),o=(r(45),r(2)),u=r(6),l=r.n(u),d=r(16),b=r(12),h=r(13),j=r(15),p=r(14),m=r(10),O=r(18),v=r.n(O);v.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(console.log("Logging the error",e),alert("An unexpected error occurred.")),Promise.reject(e)}));var f={get:v.a.get,post:v.a.post,put:v.a.put,delete:v.a.delete},x="https://jsonplaceholder.typicode.com/users";function g(e){return f.get(x+"/"+e)}function y(e){if(e._id){var t=Object(m.a)({},e);delete t._id,f.put(x+"/"+e._id,t)}return f.post(x,e)}var N=r(0),w=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){var e;return Object(b.a)(this,r),(e=t.call(this)).handleDelete=function(){var t=Object(d.a)(l.a.mark((function t(r){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.users,n=a.filter((function(e){return e.id!==r.id})),e.setState({users:n}),t.prev=3,t.next=6,s=r.id,f.delete(x+"/"+s);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&alert("this student has already been deleted"),e.setState({users:a});case 12:case"end":return t.stop()}var s}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.state={users:[]},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(x);case 2:t=e.sent,r=t.data,this.setState({users:r});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"container-md",children:[Object(N.jsx)("h1",{children:"User List"}),Object(N.jsx)(i.b,{to:"/users/new",className:"btn btn-primary my-3",children:"Create User"}),Object(N.jsxs)("table",{className:"table table-hover border",children:[Object(N.jsx)("thead",{className:"table-dark",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{scope:"col",children:"Id"}),Object(N.jsx)("th",{scope:"col",children:"User Name"}),Object(N.jsx)("th",{scope:"col"}),Object(N.jsx)("th",{scope:"col"})]})}),Object(N.jsx)("tbody",{children:this.state.users.map((function(t){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{scope:"row",children:t.id}),Object(N.jsx)("td",{children:t.name}),Object(N.jsx)("td",{children:Object(N.jsx)(i.b,{to:"/users/".concat(t.id),className:"btn btn-primary btn-sm ",children:"View"})}),Object(N.jsx)("td",{children:Object(N.jsx)("button",{onClick:function(){return e.handleDelete(t)},className:"btn btn-danger btn-sm ",children:"Delete"})})]},t.id)}))})]})]})})}}]),r}(a.Component),k="https://jsonplaceholder.typicode.com/posts";var S=function(e){return Object(N.jsxs)("div",{className:"card my-4",children:[Object(N.jsx)("h5",{className:"card-header",children:e.title}),Object(N.jsx)("div",{className:"card-body",children:Object(N.jsx)("p",{className:"card-text",children:e.body})})]})},C=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){var e;return Object(b.a)(this,r),(e=t.call(this)).state={user:{},posts:[]},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,r,a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g(t);case 3:return r=e.sent,a=r.data,this.setState({user:a}),e.next=8,f.get(k);case 8:n=e.sent,s=n.data,this.setState({posts:s}),console.log(this.state.posts);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"p-5 mb-4 bg-light rounded-3",children:Object(N.jsxs)("div",{className:"container-fluid py-5",children:[Object(N.jsx)("h1",{className:"display-5 fw-bold",children:this.state.user.name}),Object(N.jsx)("p",{className:"col-md-8 fs-4",children:this.state.user.email}),Object(N.jsx)(i.b,{to:"/users/".concat(this.state.user.id,"/edit"),className:"btn btn-primary btn-sm",children:"Change Profile Name"})]})}),Object(N.jsx)("h1",{children:"User Posts"}),this.state.posts.map((function(e){return Object(N.jsx)(S,{title:e.title,body:e.body},e.id)}))]})}}]),r}(a.Component),P=function(){return Object(N.jsx)("nav",{className:"navbar sticky-top navbar-light bg-light shadow",children:Object(N.jsx)("div",{className:"container-fluid",children:Object(N.jsx)(i.b,{to:"/users",className:"navbar-brand",children:"Crud-UI"})})})},D=r(4),F=r.n(D),I=r(20),U=r(39),M=r(40),T=["name","label","error"],B=function(e){var t=e.name,r=e.label,a=e.error,n=Object(M.a)(e,T);return Object(N.jsxs)("div",{className:"form-group mb-3",children:[Object(N.jsx)("label",{htmlFor:t,children:r}),Object(N.jsx)("input",Object(m.a)(Object(m.a)({},n),{},{id:t,name:t,className:"form-control"})),a&&Object(N.jsx)("div",{className:"alert alert-danger",role:"alert",children:a})]})},L=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){var e;return Object(b.a)(this,r),(e=t.call(this)).schema={id:F.a.number(),name:F.a.string().required().label("Student Name"),username:F.a.string(),email:F.a.string(),address:{street:F.a.string(),suite:F.a.string(),city:F.a.string(),zipcode:F.a.string(),geo:{lat:F.a.string(),lng:F.a.string()}},phone:F.a.string(),website:F.a.string(),company:{name:F.a.string(),catchPhrase:F.a.string(),bs:F.a.string()}},e.doSubmit=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e.state.data);case 2:e.props.history.push("/users");case 3:case"end":return t.stop()}}),t)}))),e.state={data:{name:""},errors:{}},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,g(t);case 6:r=e.sent,a=r.data,this.setState({data:this.mapToViewModel(a)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.respose&&404===e.t0.respose.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{name:e.name}}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("h1",{children:"User Form"}),Object(N.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("name","Profile Name"),this.renderButton("Save")]})]})}}]),r}(function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(b.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{},errors:{}},e.validate=function(){var t=F.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var r,a={},n=Object(U.a)(t.details);try{for(n.s();!(r=n.n()).done;){var s=r.value;a[s.path[0]]=s.message}}catch(c){n.e(c)}finally{n.f()}return a},e.validateProperty=function(t){var r=t.name,a=t.value,n=Object(I.a)({},r,a),s=Object(I.a)({},r,e.schema[r]),c=F.a.validate(n,s).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var r=e.validate();e.setState({errors:r||{}}),r||e.doSubmit()},e.handleChange=function(t){var r=t.currentTarget,a=Object(m.a)({},e.state.errors),n=e.validateProperty(r);n?a[r.name]=n:delete a[r.name];var s=Object(m.a)({},e.state.data);s[r.name]=r.value,e.setState({data:s,errors:a})},e}return Object(h.a)(r,[{key:"renderButton",value:function(e){return Object(N.jsx)("button",{disabled:this.validate(),className:"btn btn-primary",children:e})}},{key:"renderInput",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",a=this.state,n=a.data,s=a.errors;return Object(N.jsx)(B,{name:e,label:t,value:n[e],error:s[e],type:r,onChange:this.handleChange})}}]),r}(a.Component));var V=function(){return Object(N.jsxs)(n.a.Fragment,{children:[Object(N.jsx)(P,{}),Object(N.jsx)("main",{className:"container",children:Object(N.jsxs)(o.d,{children:[Object(N.jsx)(o.b,{path:"/users/new",component:L}),Object(N.jsx)(o.b,{path:"/users/:id/edit",component:L}),Object(N.jsx)(o.b,{path:"/users/:id",component:C}),Object(N.jsx)(o.b,{path:"/users",component:w}),Object(N.jsx)(o.a,{from:"/",exact:!0,to:"/users"})]})})]})},_=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,96)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))};r(71),r(72),r(94);c.a.render(Object(N.jsx)(i.a,{children:Object(N.jsx)(V,{})}),document.getElementById("root")),_()}},[[95,1,2]]]);
//# sourceMappingURL=main.643915cf.chunk.js.map