start=function(){function a(a,b,c){var d=new Date;d.setTime(d.getTime()+24*c*60*60*1e3);var e="expires="+d.toUTCString();document.cookie=a+"="+b+"; "+e}function b(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return""}function c(){var c=b("visited");if(0==c){var d=document.createElement("section");d.classList.add("first-time-modal"),document.getElementById("main").insertBefore(d,document.getElementById("main").firstChild);var e=document.createElement("div");e.classList.add("first-time__inner"),d.appendChild(e);var f=document.createElement("h1");f.innerHTML="On Design";var g=document.createElement("p");g.innerHTML="Brilliant articles, written by brilliant people, with the care and detail that they deserve. The articles found on this website were written by various other designers or studios; all credit for the content should go to them, and each page includes a link to the original article.",e.appendChild(f),e.appendChild(g);var h=document.createElement("button");h.classList.add("first-time__close"),h.innerHTML="close",h.addEventListener("click",function(){a("visited",!0,365),d.classList.add("first-time--closed")}),e.appendChild(h)}}var d=document.querySelector(".nav__wrapper"),e=window.pageYOffset;if(d){window.onscroll=function(){var a=window.pageYOffset;a>e?d.classList.add("js--site-header--hidden"):d.classList.remove("js--site-header--hidden"),e=a};var f=document.getElementById("js--gridButton");f.addEventListener("click",function(){document.body.classList.toggle("grid")})}orphanCrippler=function(a){var b=[],c=[];b=a.length?a:b.concat(a),Array.prototype.map.call(b,function(a){var b=String(a.innerHTML);b=b.replace(/\s+/g," ").replace(/^\s|\s$/g,""),c.push(b?a.innerHTML=b.replace(new RegExp("((?:[^ ]* ){"+((b.match(/\s/g)||0).length-1)+"}[^ ]*) "),"$1&nbsp;"):void 0)})},objs=document.querySelectorAll(".post__content p"),orphanCrippler(objs),c()},$(document).ready(function(){start()}),$(function(){"use strict";var a=($("html, body"),{prefetch:!0,cacheLength:2,onStart:{duration:500,render:function(a){a.addClass("is-exiting"),b.restartCSSAnimations()}},onReady:{duration:0,render:function(a,b){a.removeClass("is-exiting"),a.html(b)}},onAfter:function(a){start(),ga("set",{page:document.location.pathname,title:document.title}),ga("send","pageview")}}),b=$("#main").smoothState(a).data("smoothState")}),function(a,b,c,d){"use strict";if(!b.history.pushState)return a.fn.smoothState=function(){return this},void(a.fn.smoothState.options={});if(!a.fn.smoothState){var e=a("html, body"),f=b.console,g={debug:!1,anchors:"a",forms:"form",allowFormCaching:!1,repeatDelay:500,blacklist:".no-smoothState",prefetch:!1,prefetchOn:"mouseover touchstart",cacheLength:0,loadingClass:"is-loading",alterRequest:function(a){return a},onBefore:function(a,b){},onStart:{duration:0,render:function(a){}},onProgress:{duration:0,render:function(a){}},onReady:{duration:0,render:function(a,b){a.html(b)}},onAfter:function(a,b){}},h={isExternal:function(a){var c=a.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof c[1]&&c[1].length>0&&c[1].toLowerCase()!==b.location.protocol?!0:"string"==typeof c[2]&&c[2].length>0&&c[2].replace(new RegExp(":("+{"http:":80,"https:":443}[b.location.protocol]+")?$"),"")!==b.location.host},stripHash:function(a){return a.replace(/#.*/,"")},isHash:function(a,c){c=c||b.location.href;var d=a.indexOf("#")>-1,e=h.stripHash(a)===h.stripHash(c);return d&&e},translate:function(b){var c={dataType:"html",type:"GET"};return b="string"==typeof b?a.extend({},c,{url:b}):a.extend({},c,b)},shouldLoadAnchor:function(a,b){var c=a.prop("href");return!(h.isExternal(c)||h.isHash(c)||a.is(b)||a.prop("target"))},clearIfOverCapacity:function(a,b){return Object.keys||(Object.keys=function(a){var b,c=[];for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&c.push(b);return c}),Object.keys(a).length>b&&(a={}),a},storePageIn:function(b,c,d,e){var f=a("<html></html>").append(a(d));return b[c]={status:"loaded",title:f.find("title").first().text(),html:f.find("#"+e)},b},triggerAllAnimationEndEvent:function(b,c){c=" "+c||"";var d=0,e="animationstart webkitAnimationStart oanimationstart MSAnimationStart",f="animationend webkitAnimationEnd oanimationend MSAnimationEnd",g="allanimationend",i=function(c){a(c.delegateTarget).is(b)&&(c.stopPropagation(),d++)},j=function(c){a(c.delegateTarget).is(b)&&(c.stopPropagation(),d--,0===d&&b.trigger(g))};b.on(e,i),b.on(f,j),b.on("allanimationend"+c,function(){d=0,h.redraw(b)})},redraw:function(a){a.height()}},i=function(c){if(null!==c.state){var d=b.location.href,e=a("#"+c.state.id),f=e.data("smoothState");f.href===d||h.isHash(d,f.href)||f.load(d,!1)}},j=function(g,i){var j=a(g),k=j.prop("id"),l=null,m=!1,n={},o=b.location.href,p=function(a){a=a||!1,a&&n.hasOwnProperty(a)?delete n[a]:n={},j.data("smoothState").cache=n},q=function(b,c){c=c||a.noop;var d=h.translate(b);if(n=h.clearIfOverCapacity(n,i.cacheLength),!n.hasOwnProperty(d.url)||"undefined"!=typeof d.data){n[d.url]={status:"fetching"};var e=a.ajax(d);e.success(function(a){h.storePageIn(n,d.url,a,k),j.data("smoothState").cache=n}),e.error(function(){n[d.url].status="error"}),c&&e.complete(c)}},r=function(){if(l){var b=a(l,j);if(b.length){var c=b.offset().top;e.scrollTop(c)}l=null}},s=function(d){var g="#"+k,h=n[d]?a(n[d].html.html()):null;h.length?(c.title=n[d].title,j.data("smoothState").href=d,i.loadingClass&&e.removeClass(i.loadingClass),i.onReady.render(j,h),j.one("ss.onReadyEnd",function(){m=!1,i.onAfter(j,h),r()}),b.setTimeout(function(){j.trigger("ss.onReadyEnd")},i.onReady.duration)):!h&&i.debug&&f?f.warn("No element with an id of "+g+" in response from "+d+" in "+n):b.location=d},t=function(a,c,d){var g=h.translate(a);"undefined"==typeof c&&(c=!0),"undefined"==typeof d&&(d=!0);var l=!1,m=!1,o={loaded:function(){var a=l?"ss.onProgressEnd":"ss.onStartEnd";m&&l?m&&s(g.url):j.one(a,function(){s(g.url),d||p(g.url)}),c&&b.history.pushState({id:k},n[g.url].title,g.url),m&&!d&&p(g.url)},fetching:function(){l||(l=!0,j.one("ss.onStartEnd",function(){i.loadingClass&&e.addClass(i.loadingClass),i.onProgress.render(j),b.setTimeout(function(){j.trigger("ss.onProgressEnd"),m=!0},i.onProgress.duration)})),b.setTimeout(function(){n.hasOwnProperty(g.url)&&o[n[g.url].status]()},10)},error:function(){i.debug&&f?f.log("There was an error loading: "+g.url):b.location=g.url}};n.hasOwnProperty(g.url)||q(g),i.onStart.render(j),b.setTimeout(function(){e.scrollTop(0),j.trigger("ss.onStartEnd")},i.onStart.duration),o[n[g.url].status]()},u=function(b){var c,d=a(b.currentTarget);h.shouldLoadAnchor(d,i.blacklist)&&!m&&(b.stopPropagation(),c=h.translate(d.prop("href")),c=i.alterRequest(c),q(c))},v=function(b){var c=a(b.currentTarget);if(!b.metaKey&&!b.ctrlKey&&h.shouldLoadAnchor(c,i.blacklist)&&(b.stopPropagation(),b.preventDefault(),!y())){z();var d=h.translate(c.prop("href"));m=!0,l=c.prop("hash"),d=i.alterRequest(d),i.onBefore(c,j),t(d)}},w=function(b){var c=a(b.currentTarget);if(!c.is(i.blacklist)&&(b.preventDefault(),b.stopPropagation(),!y())){z();var e={url:c.prop("action"),data:c.serialize(),type:c.prop("method")};m=!0,e=i.alterRequest(e),"get"===e.type.toLowerCase()&&(e.url=e.url+"?"+e.data),i.onBefore(c,j),t(e,d,i.allowFormCaching)}},x=0,y=function(){var a=null===i.repeatDelay,b=parseInt(Date.now())>x;return!(a||b)},z=function(){x=parseInt(Date.now())+parseInt(i.repeatDelay)},A=function(a){i.anchors&&(a.on("click",i.anchors,v),i.prefetch&&a.on(i.prefetchOn,i.anchors,u)),i.forms&&a.on("submit",i.forms,w)},B=function(){var a=j.prop("class");j.removeClass(a),h.redraw(j),j.addClass(a)};return i=a.extend({},a.fn.smoothState.options,i),null===b.history.state&&b.history.replaceState({id:k},c.title,o),h.storePageIn(n,o,c.documentElement.outerHTML,k),h.triggerAllAnimationEndEvent(j,"ss.onStartEnd ss.onProgressEnd ss.onEndEnd"),A(j),{href:o,cache:n,clear:p,load:t,fetch:q,restartCSSAnimations:B}},k=function(b){return this.each(function(){var c=this.tagName.toLowerCase();this.id&&"body"!==c&&"html"!==c&&!a.data(this,"smoothState")?a.data(this,"smoothState",new j(this,b)):!this.id&&f?f.warn("Every smoothState container needs an id but the following one does not have one:",this):"body"!==c&&"html"!==c||!f||f.warn("The smoothstate container cannot be the "+this.tagName+" tag")})};b.onpopstate=i,a.smoothStateUtility=h,a.fn.smoothState=k,a.fn.smoothState.options=g}}(jQuery,window,document);