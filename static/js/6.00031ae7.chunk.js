(this.webpackJsonppemi=this.webpackJsonppemi||[]).push([[6],{62:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(4),a=n(5),s=n.p+"static/media/contactPage-bg-img.8a956162.jpg";function o(){var e=Object(r.a)(["\n  p {\n    font-size: 24px;\n    font-weight: 600;\n    letter-spacing: 2px;\n    span {\n      font-size: 32px;\n      font-weight: 600;\n      margin-right: 10px;\n    }\n  }\n"]);return o=function(){return e},e}function c(){var e=Object(r.a)(["\n  width: 100%;\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  background-image: url(",");\n  background-size: cover;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n"]);return c=function(){return e},e}var l=a.a.div(c(),s),u=a.a.div(o()),p=n(41),f=n(42),d=n(60),h=n(59),j=n(0),b=n(43);function v(){var e=Object(r.a)(["\n  width: 90rem;\n  height: 25rem;\n  position: relative;\n"]);return v=function(){return e},e}var g=a.a.div(v()),y={mapStyle:[{featureType:"all",stylers:[{saturation:0},{hue:"#e7ecf0"}]},{featureType:"road",stylers:[{saturation:-70}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{visibility:"simplified"},{saturation:-60}]}]},O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},e.onMarkerClick=function(t,n,i){return e.setState({selectedPlace:t,activeMarker:n,showingInfoWindow:!0,name:"PEMI Service"})},e.onClose=function(t){e.state.showingInfoWindow&&e.setState({showingInfoWindow:!1,activeMarker:null})},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(i.jsx)(g,{children:Object(i.jsxs)(b.Map,{google:this.props.google,zoom:20,initialCenter:{lat:49.2993259613859,lng:21.314615285790136},defaultOptions:{disableDefaultUI:!0,draggable:!0,keyboardShortcuts:!1,scaleControl:!0,scrollwheel:!0,styles:y},children:[Object(i.jsx)(b.Marker,{onClick:this.onMarkerClick,name:"PEMI Service"}),Object(i.jsx)(b.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose,children:Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"PEMI Service"})})})]})})}}]),n}(j.Component),w=Object(b.GoogleApiWrapper)({apiKey:"AIzaSyBJv01T2m_u39H1Yk-OsPUTeu-0I4NVovQ"})(O);t.default=function(){return Object(i.jsxs)(l,{children:[Object(i.jsxs)(u,{children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Adresa:"}),"Pri \u0161tadi\xf3ne 11, 085 01"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Telef\xf3n:"}),"0903 914 821"]})]}),Object(i.jsx)(w,{})]})}}}]);
//# sourceMappingURL=6.00031ae7.chunk.js.map