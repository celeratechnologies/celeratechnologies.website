(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t){},101:function(e,t){},102:function(e,t){},150:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(30),i=a.n(r),s=(a(93),a(6)),o=a(7),l=a(9),p=a(8),m=a(12),u=a(157),h=a(158),d=a(159),f=a(162),v=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,this.props.data.map((function(e){return c.a.createElement("li",{align:"left"},e)})))}}]),a}(n.Component),E=a(41);E.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(E.pdfjs.version,"/pdf.worker.js");var b=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={numPages:null,pageNumber:1,file:"./".concat(e.props.chip,"/").concat(e.props.file,".pdf"),size:"thumbnail"},e.onDocumentLoadSuccess=function(t){var a=t.numPages;e.setState({numPages:a})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({size:this.props.size})}},{key:"render",value:function(){var e=this.state.pageNumber;return c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement(E.Document,{file:this.state.file,onLoadSuccess:this.onDocumentLoadSuccess},c.a.createElement(E.Page,{width:this.state.size,pageNumber:e,renderMode:"svg"})))}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("a",{href:"./".concat(this.props.chip,"/").concat(this.props.file,".pdf")},"Download pdf")}}]),a}(n.Component),j=a(80),O=a.n(j),_=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n.setState({isDataFetched:!1,count:0}),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(this.props.match.params.name,"/").concat(this.props.match.params.name,".json")).then((function(e){return e.json()})).then((function(t){e.setState({chip_image:t.chip_image,short_description:t.short_description,long_description:t.long_description,features:t.features,applications:t.applications,components:t.components,chip_name:e.props.match.params.name,path:null,isDataFetched:!0,sections:t.sections}),void 0!==e.props.match.params.view?e.setState({current_view:e.props.match.params.view}):e.setState({current_view:"MODULEtop"})}))}},{key:"componentDidUpdate",value:function(e,t){e.match.params.name===this.props.match.params.name&&e.match.params.view===this.props.match.params.view||(this.forceUpdate(),this.setState({name:this.props.match.params.name,view:this.props.match.params.view}))}},{key:"render",value:function(){var e=this;return this.state.isDataFetched?c.a.createElement(u.a,null,c.a.createElement("h1",null," ",this.state.chip_name," "),c.a.createElement(h.a,null,c.a.createElement(d.a,null,c.a.createElement("h2",null," ",this.state.short_description," "),c.a.createElement("p",{align:"left"}," ",this.state.long_description," ")),c.a.createElement(d.a,null,c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement(f.a,{title:"Show Larger"},c.a.createElement(m.b,{to:"/product/".concat(this.state.chip_name,"/MODULEtop"),className:"nav-link",onClick:function(){return e.setState({path:null})}},"Explore Schematic"))),c.a.createElement(b,{size:"400",chip:this.state.chip_name,file:"application"}),this.state.sections.map((function(t){return c.a.createElement("button",{onClick:function(){return O()(e[t],{offset:-100,align:"top",duration:500})}},"Go To ",t)})))),this.state.sections.map((function(t){return c.a.createElement("section",{className:t,ref:function(a){e[t]=a}},c.a.createElement(h.a,null,c.a.createElement(d.a,null,c.a.createElement("h2",{align:"left"}," ",t," "),c.a.createElement(v,{data:e.state[t.toLowerCase()]}))))})),c.a.createElement(w,{chip:this.state.chip_name,file:"datasheet"})):null}}]),a}(n.Component),k=a(161),g=a(160),y=a(54),D=a.n(y),S=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).state={};return n.state.products=["Tokyo","JUNO","Yokahama","Yokosuka"],n}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(k.a,{sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},c.a.createElement(k.a.Brand,{href:"/celeratechnologies.website"},c.a.createElement("img",{src:D.a,width:"80",height:"30",className:"d-inline-block align-top",alt:"logo"})),c.a.createElement(k.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),c.a.createElement(k.a.Collapse,{id:"responsive-navbar-nav"},c.a.createElement(f.a,{className:"mr-auto"},c.a.createElement(g.a,{title:"Products",id:"collasible-nav-dropdown"},this.state.products.map((function(e){return c.a.createElement(m.b,{to:"/product/".concat(e,"/"),className:"nav-link"},e)}))),c.a.createElement(m.b,{to:"/updates",className:"nav-link"},"Release Updates")),c.a.createElement(f.a,null,c.a.createElement(m.b,{to:"/contact",className:"nav-link"},"Contact Us"))))}}]),a}(n.Component),C=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={},e.setState({isDataFetched:!1}),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({isDataFetched:!0})}},{key:"render",value:function(){return this.state.isDataFetched?c.a.createElement("img",{src:D.a,alt:"Logo"}):null}}]),a}(n.Component),N=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return"MODULEtop"===this.props.current_view?null:c.a.createElement("div",null,c.a.createElement("p",{align:"center"}," ",this.props.data[this.props.current_view].description," "))}}]),a}(n.Component),U=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return"MODULEtop"===this.props.current_view?null:c.a.createElement(g.a,{title:"Go to simulation",id:"basic-nav-dropdown"},this.props.data[this.props.current_view].simulations.map((function(t){return c.a.createElement(m.b,{to:"/product/".concat(e.props.chip_name,"/").concat(e.props.current_view,"/").concat(t),className:"nav-link",onClick:function(){return e.setState({path:t})}},t)})))}}]),a}(n.Component),L=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n.setState({isDataFetched:!1,count:0}),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(this.props.match.params.name,"/").concat(this.props.match.params.name,".json")).then((function(e){return e.json()})).then((function(t){e.setState({current_view:e.props.match.params.view}),e.setState({chip_image:t.chip_image,short_description:t.short_description,long_description:t.long_description,features:t.features,applications:t.applications,components:t.components,chip_name:e.props.match.params.name,path:null,isDataFetched:!0})}))}},{key:"componentDidUpdate",value:function(e,t){e.match.params.name===this.props.match.params.name&&e.match.params.view===this.props.match.params.view||(this.forceUpdate(),this.setState({name:this.props.match.params.name,view:this.props.match.params.view}))}},{key:"render",value:function(){var e=this;return this.state.isDataFetched?c.a.createElement(u.a,null,c.a.createElement("h1",null," ",this.state.chip_name," Viewer "),c.a.createElement("p",null,"Currently at ",this.state.current_view),c.a.createElement(N,{data:this.state.components,current_view:this.state.current_view}),c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement(h.a,null,c.a.createElement(g.a,{title:"Go to different view",id:"basic-nav-dropdown"},c.a.createElement(m.b,{to:"/product/".concat(this.state.chip_name,"/MODULEtop"),className:"nav-link",onClick:function(){return e.setState({path:null})}},"top"),Object.keys(this.state.components).map((function(t){return c.a.createElement(m.b,{to:"/product/".concat(e.state.chip_name,"/").concat(t),className:"nav-link",onClick:function(){return e.setState({path:t})}},t)}))),c.a.createElement(m.b,{to:"/product/".concat(this.state.chip_name),className:"nav-link",onClick:function(){return e.setState({path:null})}},"Go back to datasheet"),c.a.createElement(U,{chip_name:this.state.chip_name,data:this.state.components,current_view:this.state.current_view}))),c.a.createElement(b,{size:this.props.windowWidth,chip:this.state.chip_name,file:this.state.current_view}),c.a.createElement(w,{chip:this.state.chip_name,file:"MODULEtop"})):null}}]),a}(n.Component),x=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n.setState({isDataFetched:!1,count:0}),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(this.props.match.params.name,"/").concat(this.props.match.params.name,".json")).then((function(e){return e.json()})).then((function(t){e.setState({chip_image:t.chip_image,short_description:t.short_description,long_description:t.long_description,features:t.features,applications:t.applications,components:t.components,chip_name:e.props.match.params.name,path:null,isDataFetched:!0,sections:t.sections}),void 0!==e.props.match.params.view?e.setState({current_view:e.props.match.params.view}):e.setState({current_view:"MODULEtop"})}))}},{key:"componentDidUpdate",value:function(e,t){e.match.params.name===this.props.match.params.name&&e.match.params.view===this.props.match.params.view||(this.forceUpdate(),this.setState({name:this.props.match.params.name,view:this.props.match.params.view}))}},{key:"render",value:function(){var e=this;return this.state.isDataFetched?c.a.createElement(u.a,null,c.a.createElement("h1",null," ",this.state.chip_name," Simulation "),c.a.createElement(h.a,null,c.a.createElement(d.a,null,c.a.createElement(f.a,{title:"Return to viewer"},c.a.createElement(m.b,{to:"/product/".concat(this.state.chip_name,"/").concat(this.state.current_view),className:"nav-link",onClick:function(){return e.setState({path:null})}},"Go back to viewer")))),c.a.createElement(b,{size:this.props.windowWidth,chip:this.state.chip_name,file:this.props.match.params.sim}),c.a.createElement(w,{chip:this.state.chip_name,file:this.props.match.params.sim})):null}}]),a}(n.Component),M=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("h3",null,"This is the updates page"),c.a.createElement("h6",null," Version 1"),c.a.createElement("p",null,"...."))}}]),a}(n.Component),F=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("h2",null,"Contact us"),c.a.createElement(h.a,null,c.a.createElement(d.a,null,c.a.createElement("h3",null,"Who"),c.a.createElement("p",null,"We are a team of accomplished technology professionals with deep experience in semiconductors, software, systems, development tools. A common desire to re-think and re-build methods of semiconductor R&D brought us together. We are driven by a passion to transform our own industry."))))}}]),a}(n.Component),W=a(10),z=(a(150),a(151),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(S,null),c.a.createElement(W.a,{exact:!0,path:"/",component:C}),c.a.createElement(W.a,{path:"/home",component:C}),c.a.createElement(W.a,{exact:!0,path:"/product/:name/",render:function(e){return c.a.createElement(_,Object.assign({key:e.match.params.name},e))}}),c.a.createElement(W.a,{exact:!0,path:"/product/:name/:view/",render:function(e){return c.a.createElement(L,Object.assign({key:e.match.params.view},e))}}),c.a.createElement(W.a,{exact:!0,path:"/product/:name/:view/:sim",render:function(e){return c.a.createElement(x,Object.assign({key:e.match.params.view},e))}}),c.a.createElement(W.a,{path:"/updates",component:M}),c.a.createElement(W.a,{path:"/contact",component:F})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=49},54:function(e,t,a){e.exports=a.p+"static/media/celeraLogo.791d60ce.jpg"},88:function(e,t,a){e.exports=a(152)},93:function(e,t,a){},97:function(e,t){},99:function(e,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.ae9dee78.chunk.js.map