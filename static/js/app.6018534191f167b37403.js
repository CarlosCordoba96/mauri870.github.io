webpackJsonp([0],[,,,,,function(t,e,s){t.exports=s.p+"static/img/artesaos-package.7165a98.png"},,,,,,,,,,function(t,e,s){t.exports=s.p+"static/img/assembly.e9e6001.png"},function(t,e,s){t.exports=s.p+"static/img/security-padlock.6664588.png"},function(t,e,s){"use strict";var i=s(4);i.a.filter("uppercase",function(t){return t.toUpperCase()}),i.a.filter("shuffleArray",function(t){for(var e=t.length-1;e>0;e--){var s=Math.floor(Math.random()*(e+1)),i=t[e];t[e]=t[s],t[s]=i}return t})},function(t,e,s){"use strict";(function(t){var i=s(4),a=s(103),n=s(92),r=s.n(n),o=s(91),c=s.n(o);i.a.use(a.a);var l=new a.a({base:t,routes:[{path:"/",name:"index",component:r.a},{path:"*",name:"notfound",component:c.a}]});e.a=l}).call(e,"/")},function(t,e,s){"use strict";var i=s(4),a=s(2),n=s(28),r=s(29),o=s(30);i.a.use(a.b),e.a=new a.b.Store({modules:{info:n.a,projects:r.a,social:o.a}})},function(t,e,s){"use strict";function i(t){!function(t,e,s,i,a,n,r){t.GoogleAnalyticsObject=a,t[a]=t[a]||function(){(t[a].q=t[a].q||[]).push(arguments)},t[a].l=1*new Date,n=e.createElement(s),r=e.getElementsByTagName(s)[0],n.async=1,n.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(n,r)}(window,document,"script",0,"ga"),ga("create",t,"auto"),ga("send","pageview")}e.a=i},,function(t,e){},function(t,e){},function(t,e,s){s(74);var i=s(0)(s(40),s(98),null,null);t.exports=i.exports},function(t,e,s){(function(t){!function(t){function e(){var e=t(window).width(),s=t(window).height(),i=t(".fl").outerWidth(),a=t(".fl").outerHeight();t(".fl").css({position:"absolute",left:e/2-i/2,top:s/2-a/2})}t.fn.fakeLoader=function(s){var i=t.extend({timeToHide:1200,pos:"fixed",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:"999",bgColor:"#2ecc71",spinner:"spinner7",imagePath:""},s),a='<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',n=t(this),r={position:i.pos,width:i.width,height:i.height,top:i.top,left:i.left};return n.css(r),n.each(function(){switch(i.spinner){case"spinner1":n.html(a);break;case"spinner2":n.html('<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>');break;case"spinner3":n.html('<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>');break;case"spinner4":n.html('<div class="fl spinner4"></div>');break;case"spinner5":n.html('<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>');break;case"spinner6":n.html('<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');break;case"spinner7":n.html('<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>');break;default:n.html(a)}""!=i.imagePath&&n.html('<div class="fl"><img src="'+i.imagePath+'"></div>'),e()}),setTimeout(function(){t(n).fadeOut()},i.timeToHide),this.css({backgroundColor:i.bgColor,zIndex:i.zIndex})},t(window).load(function(){e(),t(window).resize(function(){e()})})}(t)}).call(e,s(1))},function(t,e,s){(function(t){!function(t,e,s){"use strict";var i=function(t,e){var i=this;this.el=t,this.options={},Object.keys(a).forEach(function(t){i.options[t]=a[t]}),Object.keys(e).forEach(function(t){i.options[t]=e[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,s&&this.options.stringsElement instanceof s?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};i.prototype={constructor:i,init:function(){var t=this;t.timeout=setTimeout(function(){for(var e=0;e<t.strings.length;++e)t.sequence[e]=e;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var t=this;if(!0===this.showCursor&&(this.cursor=e.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";Array.prototype.slice.apply(this.stringsElement.children).forEach(function(e){t.strings.push(e.innerHTML)})}this.init()},typewrite:function(t,e){if(!0!==this.stop){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor.classList.remove(this.fadeOutClass));var s=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var s=0,a=t.substr(e);if("^"===a.charAt(0)){var n=1;/^\^\d+/.test(a)&&(a=/\d+/.exec(a)[0],n+=a.length,s=parseInt(a)),t=t.substring(0,e)+t.substring(e+n)}if("html"===i.contentType){var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var o="",c="";for(c="<"===r?">":";";t.substr(e+1).charAt(0)!==c&&(o+=t.substr(e).charAt(0),!(++e+1>t.length)););e++,o+=c}}i.timeout=setTimeout(function(){if(e===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,!1===i.loop||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,e)},i.backDelay)}else{0===e&&i.options.preStringTyped(i.arrayPos);var s=t.substr(0,e+1);i.attr?i.el.setAttribute(i.attr,s):i.isInput?i.el.value=s:"html"===i.contentType?i.el.innerHTML=s:i.el.textContent=s,e++,i.typewrite(t,e)}},s)},s)}},backspace:function(t,e){var s=this;if(!0!==this.stop){if(this.fadeOut)return void this.initFadeOut();var i=Math.round(70*Math.random())+this.backSpeed;s.timeout=setTimeout(function(){if("html"===s.contentType&&">"===t.substr(e).charAt(0)){for(var i="";"<"!==t.substr(e-1).charAt(0)&&(i-=t.substr(e).charAt(0),!(--e<0)););e--,i+="<"}var a=t.substr(0,e);s.replaceText(a),e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.shuffle&&(s.sequence=s.shuffleArray(s.sequence)),s.init()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},i)}},initFadeOut:function(){return self=this,this.el.className+=" "+this.fadeOutClass,this.cursor.className+=" "+this.fadeOutClass,setTimeout(function(){self.arrayPos++,self.replaceText(""),self.typewrite(self.strings[self.sequence[self.arrayPos]],0)},self.fadeOutDelay)},replaceText:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},shuffleArray:function(t){var e,s,i=t.length;if(i)for(;--i;)s=Math.floor(Math.random()*(i+1)),e=t[s],t[s]=t[i],t[i]=e;return t},reset:function(){var t=this;clearInterval(t.timeout);this.el.getAttribute("id");this.el.textContent="",void 0!==this.cursor&&void 0!==this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},i.new=function(t,s){Array.prototype.slice.apply(e.querySelectorAll(t)).forEach(function(t){var e=t._typed,a="object"==typeof s&&s;e&&e.reset(),t._typed=e=new i(t,a),"string"==typeof s&&e[s]()})},s&&(s.fn.typed=function(t){return this.each(function(){var e=s(this),a=e.data("typed"),n="object"==typeof t&&t;a&&a.reset(),e.data("typed",a=new i(this,n)),"string"==typeof t&&a[t]()})}),t.Typed=i;var a={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,t)}).call(e,s(1))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(22),a=(s.n(i),s(21)),n=(s.n(a),s(23)),r=(s.n(n),s(4)),o=s(24),c=s.n(o),l=s(19),u=s(18),d=(s(17),s(20));r.a.config.productionTip=!1,s.i(d.a)("UA-79904458-1"),new r.a({store:l.a,router:u.a,render:function(t){return t(c.a)}}).$mount("site")},function(t,e,s){"use strict";e.a={state:{phrase:"Software Engineer, Developer, Gamer, History, Science and astronomy lover",email:"mauri870@gmail.com",phone:"+55 54 8118-9792",skills:["LARAVEL","VUEJS","LUMEN","GO","REDIS","GIT","JWT","LUA","NGINX","PHP","ʕ◔ϖ◔ʔ","WEBPACK","ELECTRON","MYSQL","SOLID","REST API'S","HTML","CSS","BOOTSTRAP","BOWER","COMPOSER","NPM","LINUX","GULP","AWS","DOCKER","KERAS","TENSORFLOW","ZEPHIR","GRPC","PROTOBUF","BAZEL","GCLOUD","KUBERNETES","GITLAB","BASH"]},mutations:{},getters:{infoPhrase:function(t){return t.phrase},infoEmail:function(t){return t.email},infoSkills:function(t){return t.skills}}}},function(t,e,s){"use strict";e.a={state:{projects:[{name:"Ransomware",link:"https://github.com/mauri870/ransomware",description:"A crypto-ransomware written in pure go (Academic)",techs:["Go","Malware","Security","Cryptography"],image:s(16)},{name:"Baking Pi",link:"https://github.com/mauri870/baking-pi",description:"Operating Systems development",techs:["Assembly","ARM","OS"],image:s(15)},{name:"Assembly Fun",link:"https://github.com/mauri870/problems-assembly",description:"Some fun in assembly linux x64",techs:["Assembly","x64","Syscalls","Linux"],image:s(15)},{name:"Kaggle Cats vs Dogs Redux",link:"https://github.com/mauri870/kaggle-cats-vs-dogs-redux",description:"Solution for the 51st place on the Kaggle Cats vs Dogs Redux competition",techs:["Go","Deep Learning","Kaggle","Tensorflow"],image:s(83)},{name:"Cryptofile",link:"https://github.com/mauri870/cryptofile",description:"Encrypt or decrypt files using AES-256 or AES-128",techs:["Go","Security","Cryptography"],image:s(16)},{name:"Powershell Reverse Http",link:"https://github.com/mauri870/powershell-reverse-http",description:"A Powershell exploit, windows native service with no virus signature that open a reverse http connection via meterpreter",techs:["Go","Exploit","Metasploit Framework"],image:s(81)},{name:"Cloudradioo App",link:"http://github.com/devfake/cloudradioo-app",description:"Cloudradioo App is a desktop application builded with Electron, VueJs and Vuex that plays randomly all top 50 songs from the soundcloud charts",techs:["Electron","Vuejs","Vuex"],image:s(80)},{name:"Laravel Skeleton Api",link:"https://github.com/mauri870/api-skeleton-laravel",description:"An API Skeleton for Laravel 5.1 with JWT",techs:["Laravel","JWT","REST"],image:s(82)},{name:"Laravel Docs",link:"https://github.com/artesaos/laravel-docs",description:"Translation of Laravel 5 docs to PT-BR",techs:["Laravel","Documentation"],image:s(5)},{name:"Laravel Installer",link:"https://github.com/artesaos/laravel-installer",description:"Install laravel framework with any version you want",techs:["Laravel"],image:s(5)},{name:"Defender",link:"https://github.com/artesaos/defender",description:"Roles & Permissions for Laravel 5",techs:["Laravel","Package"],image:s(5)},{name:"Laravel Linkedin Client",link:"https://github.com/artesaos/laravel-linkedin",description:"Linkedin API integration for Laravel and Lumen 5",techs:["Laravel","Package"],image:s(5)}]},mutations:{},getters:{projects:function(t){return t.projects}}}},function(t,e,s){"use strict";e.a={state:{networks:[{name:"github",link:"http://github.com/mauri870",icon:"fa fa-github"},{name:"linkedin",link:"https://br.linkedin.com/in/mauri-de-souza-nunes-0b223090",icon:"fa fa-linkedin"},{name:"steam",link:"http://steamcommunity.com/id/mauri870",icon:"fa fa-steam"}]},mutations:{},getters:{networks:function(t){return t.networks}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(1),a=s.n(i),n=s(25);s.n(n);e.default={name:"Fakeloader",mounted:function(){a()(document).ready(function(){a()("#fakeLoader").fakeLoader({spinner:"spinner1",bgColor:"#1ABC9C"})})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),a=s.n(i),n=s(2);e.default={name:"Footer",computed:a()({},s.i(n.a)({phrase:"infoPhrase",email:"infoEmail"}),{mailto:function(){return"mailto:"+this.email}})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),a=s.n(i),n=s(1),r=s.n(n),o=s(2),c=s(26);s.n(c);e.default={name:"Header",mounted:function(){var t=this;r()(function(){r()(".typed").typed({strings:t.$options.filters.shuffleArray(t.skills),typeSpeed:0,loop:!0})})},computed:a()({},s.i(o.a)({skills:"infoSkills"}))}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),a=s.n(i),n=s(2),r=s(1),o=s.n(r);e.default={name:"Navbar",computed:a()({},s.i(n.a)({email:"infoEmail"})),methods:{clickHireMe:function(){window.location.href="mailto:"+this.email}},mounted:function(){o()(window).on("scroll",function(){var t=o()("#navbar-menu");o()(this).scrollTop()>=o()("#control-navbar").position().top?t.addClass("nav-second-color"):t.removeClass("nav-second-color")})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["item"]}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),a=s.n(i),n=s(88),r=s.n(n),o=s(2);e.default={name:"Portfolio",computed:a()({},s.i(o.a)({projects:"projects"})),components:{Project:r.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),a=s.n(i),n=s(2);e.default={name:"Social",computed:a()({},s.i(n.a)({networks:"networks"}))}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(86),a=s.n(i),n=s(89),r=s.n(n);e.default={name:"Index",components:{HeaderWrap:a.a,MyPortfolio:r.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(84),a=s.n(i),n=s(87),r=s.n(n),o=s(90),c=s.n(o),l=s(85),u=s.n(l);e.default={name:"Site",components:{FakeLoader:a.a,NavbarSite:r.a,SocialSection:c.a,FooterSite:u.a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){t.exports=s.p+"static/img/gopher.51cf84c.png"},function(t,e,s){t.exports=s.p+"static/img/gophersworking.24b3b75.png"},function(t,e,s){t.exports=s.p+"static/img/cloudradioo-app.71c7cad.png"},function(t,e,s){t.exports=s.p+"static/img/exploit.9cd5160.png"},function(t,e,s){t.exports=s.p+"static/img/laravel-package.6d924d9.png"},function(t,e,s){t.exports=s.p+"static/img/machine-learning.cd6e006.png"},function(t,e,s){s(73);var i=s(0)(s(31),s(97),null,null);t.exports=i.exports},function(t,e,s){s(75);var i=s(0)(s(32),s(99),"data-v-8252cbb8",null);t.exports=i.exports},function(t,e,s){s(71);var i=s(0)(s(33),s(95),null,null);t.exports=i.exports},function(t,e,s){s(72);var i=s(0)(s(34),s(96),"data-v-5d88be19",null);t.exports=i.exports},function(t,e,s){s(76);var i=s(0)(s(35),s(100),null,null);t.exports=i.exports},function(t,e,s){s(70);var i=s(0)(s(36),s(94),"data-v-35105acf",null);t.exports=i.exports},function(t,e,s){s(69);var i=s(0)(s(37),s(93),null,null);t.exports=i.exports},function(t,e,s){s(77);var i=s(0)(s(38),s(102),null,null);t.exports=i.exports},function(t,e,s){var i=s(0)(s(39),s(101),null,null);t.exports=i.exports},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"social"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row centered"},[t._m(0),t._l(t.networks,function(t){return s("div",{staticClass:"col-lg-4 networks"},[s("a",{attrs:{href:t.link,target:"_blank"}},[s("i",{class:t.icon})])])}),t._m(1)],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-12"},[s("h2",[t._v("Stay connected!")]),s("br")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-lg-12"},[i("img",{staticClass:"center-block gopher",attrs:{src:s(78)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"works"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row centered mt mb"},[t._m(0),s("p",[t._v("Some projects that I have worked on:")]),t._l(t.projects,function(t){return s("project",{key:t.id,attrs:{item:t}})})],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[t._v("I "),s("i",{staticClass:"fa fa-heart heart fa-pulse"}),t._v("open source")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"headerwrap"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-lg-offset-3"},[s("h3",[t._v("My skills")]),s("h1",[s("span",{staticClass:"typed"})])])]),s("div",{staticClass:"row curriculum"},[s("div",{staticClass:"col-md-8 col-md-offset-2"},[s("div",{staticClass:"btn-group btn-group-justified"},[s("a",{staticClass:"btn btn-site-color",attrs:{href:"static/docs/curricula/curriculum-en.pdf",target:"_blank"}},[s("i",{staticClass:"fa fa-file-text"}),t._v(" Curriculum EN")]),s("a",{staticClass:"btn btn-site-color",attrs:{href:"https://github.com/mauri870/certificates",target:"_blank"}},[s("i",{staticClass:"fa fa-file-text"}),t._v(" Certificates")])])])])])]),s("div",{staticClass:"span",attrs:{id:"control-navbar"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar navbar-default navbar-fixed-top",attrs:{id:"navbar-menu",role:"navigation"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-header"},[t._m(0),s("a",{staticClass:"navbar-brand logo",attrs:{href:"/"}},[t._v("M")]),s("a",{attrs:{id:"hiring",href:"#"},on:{click:function(e){e.preventDefault(),t.clickHireMe(e)}}},[t._v("Contact Me!")])]),s("div",{staticClass:"navbar-collapse collapse"},[s("ul",{staticClass:"nav navbar-nav navbar-right"},[t._m(1),s("li",[s("a",{attrs:{href:"https://www.kaggle.com/mauri870",target:"_blank"}},[s("svg",{attrs:{viewBox:"0 0 16 16",width:"30",height:"30"}},[s("path",{attrs:{d:"M12.55 15.906c-.015.062-.078.094-.187.094H10.27c-.124 0-.234-.055-.328-.165L6.49 11.442l-.965.916v3.407c0 .157-.078.235-.235.235H3.67c-.158 0-.236-.078-.236-.235V.235C3.434.08 3.512 0 3.67 0h1.62c.157 0 .235.08.235.235v9.562L9.66 5.615c.11-.11.22-.164.33-.164h2.16c.095 0 .157.04.19.12.03.1.023.17-.024.21l-4.37 4.23 4.557 5.67c.063.07.078.14.047.24",fill:"#1abc9c"}})])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapse"}},[s("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),s("span",{staticClass:"icon-bar"}),s("span",{staticClass:"icon-bar"}),s("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"http://github.com/mauri870",target:"_blank"}},[s("i",{staticClass:"fa fa-github fa-2x"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"fakeLoader"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("fake-loader"),s("navbar-site"),s("router-view"),s("social-section"),s("footer-site")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"footerwrap"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row centered"},[t._m(0),s("div",{staticClass:"col-lg-4"},[s("p",[s("b",[t._v(t._s(t._f("uppercase")(t.phrase)))])])]),s("div",{staticClass:"col-lg-4"}),s("div",{staticClass:"col-lg-4"},[s("p",[s("a",{attrs:{href:t.mailto}},[t._v(t._s(t.email))])])])]),t._m(1),t._m(2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-12"},[s("h2",[s("sup",[s("i",{staticClass:"fa fa-quote-left"})]),t._v(" Work hard to make things happen"),s("sup",[s("i",{staticClass:"fa fa-quote-right"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-12 text-center"},[s("p",[t._v("Find the "),s("i",{staticClass:"fa fa-code"}),t._v(" of this project on "),s("a",{attrs:{href:"http://github.com/mauri870/mauri870.github.io",target:"_blank"}},[s("i",{staticClass:"fa fa-github fa-2x"})])]),s("p",[t._v("Built with "),s("i",{staticClass:"fa fa-heart heart"}),t._v(" on top of Vue 2, Vuex, SCSS, Pug and Webpack 2")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-12 text-center"},[s("img",{attrs:{src:"https://api.travis-ci.org/mauri870/mauri870.github.io.svg?branch=develop"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-4 project"},[s("h3",[t._v(t._s(t.item.name))]),s("a",{attrs:{href:t.item.link,target:"_blank"}},[s("img",{staticClass:"img-responsive img-responsive",attrs:{src:t.item.image}})]),t._l(t.item.techs,function(e){return s("span",{staticClass:"label label"},[t._v(t._s(e))])}),s("p",{staticClass:"description"},[t._v(t._s(t.item.description))])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header-wrap"),s("my-portfolio")],1)},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"content"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6 col-lg-offset-3"},[t._m(0),i("router-link",{attrs:{to:{name:"index"}}},[i("button",{staticClass:"btn btn-default btn-lg"},[i("i",{staticClass:"fa fa-home"}),t._v(" Take me home")])]),i("img",{staticClass:"center-block img-responsive",attrs:{src:s(79)}})],1)])])]),i("div",{staticClass:"span",attrs:{id:"control-navbar"}})])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("i",{staticClass:"fa fa-warning fa-2x"}),s("br"),t._v(" Sorry but the page you are looking for could not be found")])}]}}],[27]);
//# sourceMappingURL=app.6018534191f167b37403.js.map