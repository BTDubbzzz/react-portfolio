(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"main":{"name":"Blake Wright final test","occupation":"Full Stack Developer","description":" who has a background in transportation/logistics and sales. I love to think logically and I am always looking for creative ways to solve problems. I am constantly learning new things and trying to improve my ever-growing skill-set. I can\'t wait to get together and create something amazing. Contact me below!","image":"profilepic.jpg","bio":"In my free time I am a casual gamer and I enjoy a very wide variety of games, from shooters to card games. If the weather is nicer than 50 degrees you can count on finding me on the slow-pitch softball field with one of several teams I coach and play for. I am also a proud husband and my wife and I are in love with our miniature golden doodle, Forrest.","contactmessage":"Get in touch with me!","email":"wright.blake.t@gmail.com","phone":"913-284-1670","address":{"city":"Kansas City"},"website":"https://blakewright.net","resumedownload":"./public/documents/Blake_Wright_Resume_PDF.pdf","social":[{"name":"facebook","url":"https://www.facebook.com/blake.wright.58/","className":"fa fa-facebook"},{"name":"linkedin","url":"https://www.linkedin.com/in/blake-wright-6409b818a/","className":"fa fa-linkedin"},{"name":"github","url":"https://github.com/BTDubbzzz","className":"fa fa-github"}]},"resume":{"skillmessage":"Here are some of my top skills","skills":[{"name":"Git","level":"85%"},{"name":"JavaScript","level":"90%"},{"name":"ReactJs","level":"65%"},{"name":"CSS","level":"85%"},{"name":"HTML5","level":"80%"},{"name":"MySQL","level":"70%"},{"name":"MongoDB","level":"60%"}]},"portfolio":{"projects":[{"title":"Athletics Admin (myTeam)","category":"myTeam is a permissions based athletic admin portal. Contact me for demo login!","image":"athletic_admin_screenshot.jpg","url":"https://abc-myteam.herokuapp.com/"},{"title":"Jeopardy Game","category":"A fully functioning single-player Jeopardy game using the Jeopardy API","image":"jeopardy_screenshot.jpg","url":"https://btdubbzzz.github.io/jeopardy-game/"},{"title":"Tech Blog","category":"Blog-type website using MVC paradigm, conditional rendering, and user authentication","image":"techblog_screenshot.jpg","url":"https://btw-tech-blog.herokuapp.com/"},{"title":"React Demo","category":"My first deployed React app. A practice in props, state, and JSX","image":"react_screenshot.jpg","url":"https://btdubbzzz.github.io/react-counter-app/"},{"title":"Weather Dashboard","category":"An app to get weather for user-searched cities. Using REST API to fetch data","image":"weather_screenshot.jpg","url":"https://btdubbzzz.github.io/Weather-Dashboard/"}]}}')},,,,,,,function(e,a,s){},function(e,a,s){},,function(e,a,s){"use strict";s.r(a);s(1);var t=s(4),c=s.n(t),i=(s(9),s(2)),l=(s(10),s(0));var n=function(e){return e.data.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:e.url,children:Object(l.jsx)("i",{className:e.className})})},e.name)}))};var r=function(e){var a=e.data,s=a.name,t=a.occupation,c=a.description,i=e.data.address.city;return Object(l.jsxs)("header",{id:"home",children:[Object(l.jsxs)("nav",{id:"nav-wrap",children:[Object(l.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(l.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(l.jsxs)("ul",{id:"nav",className:"nav",children:[Object(l.jsx)("li",{className:"current",children:Object(l.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Skills"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(l.jsx)("div",{className:"row banner",children:Object(l.jsxs)("div",{className:"banner-text",children:[Object(l.jsxs)("h1",{className:"responsive-headline",children:["I'm ",s,"."]}),Object(l.jsxs)("h3",{children:["I'm a ",i," based ",Object(l.jsx)("span",{children:t})," ",c,"."]}),Object(l.jsx)("hr",{}),Object(l.jsx)("ul",{className:"social",children:Object(l.jsx)(n,{data:e.data.social})})]})}),Object(l.jsx)("p",{className:"scrolldown",children:Object(l.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(l.jsx)("i",{className:"icon-down-circle"})})})]})};var o=function(e){return Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"twelve columns",children:[Object(l.jsx)("ul",{className:"social-links",children:Object(l.jsx)(n,{data:e.data.social})}),Object(l.jsx)("ul",{className:"copyright",children:Object(l.jsx)("li",{children:"\xa9 Copyright 2021 Blake Wright"})})]}),Object(l.jsx)("div",{id:"go-top",children:Object(l.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(l.jsx)("i",{className:"icon-up-open"})})})]})})},j=s.p+"static/media/Blake_Wright_Resume_PDF.c32df8af.pdf";var d=function(e){var a=e.data,s=a.name,t=a.image,c=a.bio,i=a.phone,n=a.email,r="images/"+t;return Object(l.jsx)("section",{id:"about",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"three columns",children:Object(l.jsx)("img",{className:"profile-pic",src:r,alt:"Blake Wright Profile Pic"})}),Object(l.jsxs)("div",{className:"nine columns main-col",children:[Object(l.jsx)("h2",{children:"About Me"}),Object(l.jsx)("p",{children:c}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"columns contact-details",children:[Object(l.jsx)("h2",{children:"Contact Details"}),Object(l.jsxs)("p",{className:"address",children:[Object(l.jsx)("span",{children:s}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:i}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:n})]})]}),Object(l.jsx)("div",{className:"columns download",children:Object(l.jsx)("p",{children:Object(l.jsxs)("a",{href:j,target:"blank",className:"button",children:[Object(l.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})};var m=function(e){var a=e.data.skillmessage,s=e.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{style:{width:e.level},className:a}),Object(l.jsx)("em",{children:e.name})]},e.name)}));return Object(l.jsx)("section",{id:"resume",children:Object(l.jsxs)("div",{className:"row skill",children:[Object(l.jsx)("div",{className:"three columns header-col",children:Object(l.jsx)("h1",{children:Object(l.jsx)("span",{children:"Skills"})})}),Object(l.jsxs)("div",{className:"nine columns main-col",children:[Object(l.jsx)("p",{children:a}),Object(l.jsx)("div",{className:"bars",children:Object(l.jsx)("ul",{className:"skills",children:s})})]})]})})};var h=function(e){var a=e.data,s=a.name,t=a.phone,c=a.email,i=a.contactmessage;return Object(l.jsxs)("section",{id:"contact",children:[Object(l.jsxs)("div",{className:"row section-head",children:[Object(l.jsx)("div",{className:"two columns header-col",children:Object(l.jsx)("h1",{children:Object(l.jsx)("span",{children:"Get In Touch."})})}),Object(l.jsx)("div",{className:"ten columns",children:Object(l.jsx)("p",{className:"lead",children:i})})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"eight columns",children:[Object(l.jsx)("form",{action:"mailto:wright.blake.t@gmail.com",encType:"multipart/form-data",method:"POST",id:"contactForm",name:"contactForm",children:Object(l.jsxs)("fieldset",{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(l.jsx)("span",{className:"required",children:"*"})]}),Object(l.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName"})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(l.jsx)("span",{className:"required",children:"*"})]}),Object(l.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(l.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject"})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(l.jsx)("span",{className:"required",children:"*"})]}),Object(l.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"submit",children:"Submit"}),Object(l.jsx)("span",{id:"image-loader",children:Object(l.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(l.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(l.jsxs)("div",{id:"message-success",children:[Object(l.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(l.jsx)("br",{})]})]}),Object(l.jsx)("aside",{className:"four columns footer-widgets",children:Object(l.jsxs)("div",{className:"widget widget_contact",children:[Object(l.jsx)("h4",{children:"Contact Me"}),Object(l.jsxs)("p",{className:"address",children:[s,Object(l.jsx)("br",{}),c,Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:t})]})]})})]})]})};var b=function(e){var a=e.data,s=a.title,t=a.category,c=a.image,i=a.url,n="images/portfolio/"+c;return Object(l.jsx)("div",{className:"columns portfolio-item",children:Object(l.jsx)("div",{className:"item-wrap",children:Object(l.jsxs)("a",{href:i,target:"_blank",rel:"noopener noreferrer",title:s,children:[Object(l.jsx)("img",{alt:s,src:n}),Object(l.jsx)("div",{className:"overlay",children:Object(l.jsxs)("div",{className:"portfolio-item-meta",children:[Object(l.jsx)("h5",{children:s}),Object(l.jsx)("p",{children:t})]})}),Object(l.jsx)("div",{className:"link-icon",children:Object(l.jsx)("i",{className:"fa fa-link"})})]})})},s)};var x=function(e){var a=e.data.projects.map((function(e){return Object(l.jsx)(b,{data:e})}));return Object(l.jsx)("section",{id:"portfolio",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"twelve columns collapsed",children:[Object(l.jsx)("h1",{children:"Check Out Some of My Projects."}),Object(l.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:a})]})})})};var O=function(){return i?Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(r,{data:i.main}),Object(l.jsx)(d,{data:i.main}),Object(l.jsx)(m,{data:i.resume}),Object(l.jsx)(x,{data:i.portfolio}),Object(l.jsx)(h,{data:i.main}),Object(l.jsx)(o,{data:i.main})]}):Object(l.jsx)("div",{children:"Loading..."})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.459343c2.chunk.js.map