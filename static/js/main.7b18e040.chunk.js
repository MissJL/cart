(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),o=n(7),u=n(6),i=n(1),l=n(2),m=n(4),d=n(3),p=n(5),b=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onIncrement,n=e.onDecrement,a=e.onDelete,c=e.product;return r.a.createElement("div",{className:"container m-2"},r.a.createElement("span",{className:"row"},r.a.createElement("span",{className:"col-sm-1"}," ",r.a.createElement("span",{className:this.getBadgeClasses()},this.formatQuantity())),r.a.createElement("span",{className:"col"},r.a.createElement("button",{onClick:function(){return t(c)},className:"btn btn-secondary"},"+"),r.a.createElement("button",{onClick:function(){return n(c)},className:"btn btn-secondary ms-2"},"-"),r.a.createElement("button",{onClick:function(){return a(c.id)},className:"btn btn-danger ms-2"},"X"))))}},{key:"getBadgeClasses",value:function(){var e="badge me-2 bg-";return e+=0===this.props.product.quantity?"warning text-dark":"primary"}},{key:"formatQuantity",value:function(){return 0===this.props.product.quantity?"zero":this.props.product.quantity}}]),t}(a.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.onDecrement,a=e.onIncrement,c=e.onDelete,s=e.products;return r.a.createElement("div",{className:"container mt-4"},r.a.createElement("button",{onClick:t,className:"btn btn-primary"},"Reset"),s.map(function(e){return r.a.createElement(b,{key:e.id,product:e,onDelete:c,onIncrement:a,onDecrement:n})}))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light ms-2"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("span",{className:"navbar-brand h1"},"Navbar",r.a.createElement("span",{className:"badge rounded-pill bg-success ms-2"},this.props.productCount))))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={products:[{id:1,quantity:10},{id:2,quantity:9},{id:3,quantity:10},{id:4,quantity:10}]},n.handleReset=function(){var e=n.state.products.map(function(e){return Object(u.a)({},e,{quantity:0})});n.setState({products:e})},n.handleIncrement=function(e){var t=Object(o.a)(n.state.products),a=t.indexOf(e);t[a]=Object(u.a)({},e),t[a].quantity++,n.setState({products:t})},n.handleDecrement=function(e){var t=Object(o.a)(n.state.products),a=t.indexOf(e);t[a]=Object(u.a)({},e),t[a].quantity--,n.setState({products:t})},n.handleDelete=function(e){var t=n.state.products.filter(function(t){return t.id!==e});n.setState({products:t})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.products;return r.a.createElement("div",{className:"container"},r.a.createElement(f,{productCount:e.length}),r.a.createElement(h,{products:e,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete}))}}]),t}(a.Component);n(19);s.a.createRoot(document.getElementById("root")).render(r.a.createElement(y,null))}},[[10,2,1]]]);
//# sourceMappingURL=main.7b18e040.chunk.js.map