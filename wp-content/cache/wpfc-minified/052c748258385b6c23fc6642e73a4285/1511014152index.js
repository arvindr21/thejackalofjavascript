// source --> http://thejackalofjavascript.com/wp-content/plugins/crayon-syntax-highlighter/js/min/crayon.min.js 
var jQueryCrayon=jQuery;(function(a){CrayonUtil=new function(){var c=this;var b=null;c.init=function(){b=CrayonSyntaxSettings;c.initGET()};c.addPrefixToID=function(d){return d.replace(/^([#.])?(.*)$/,"$1"+b.prefix+"$2")};c.removePrefixFromID=function(e){var d=new RegExp("^[#.]?"+b.prefix,"i");return e.replace(d,"")};c.cssElem=function(d){return a(c.addPrefixToID(d))};c.setDefault=function(e,f){return(typeof e=="undefined")?f:e};c.setMax=function(e,d){return e<=d?e:d};c.setMin=function(d,e){return d>=e?d:e};c.setRange=function(e,f,d){return c.setMax(c.setMin(e,f),d)};c.getExt=function(e){if(e.indexOf(".")==-1){return undefined}var d=e.split(".");if(d.length){d=d[d.length-1]}else{d=""}return d};c.initGET=function(){window.currentURL=window.location.protocol+"//"+window.location.host+window.location.pathname;window.currentDir=window.currentURL.substring(0,window.currentURL.lastIndexOf("/"));function d(e){e=e.split("+").join(" ");var h={},g,f=/[?&]?([^=]+)=([^&]*)/g;while(g=f.exec(e)){h[decodeURIComponent(g[1])]=decodeURIComponent(g[2])}return h}window.GET=d(document.location.search)};c.getAJAX=function(d,e){d.version=b.version;a.get(b.ajaxurl,d,e)};c.postAJAX=function(d,e){d.version=b.version;a.post(b.ajaxurl,d,e)};c.reload=function(){var d="?";for(var e in window.GET){d+=e+"="+window.GET[e]+"&"}window.location=window.currentURL+d};c.escape=function(d){if(typeof encodeURIComponent=="function"){return encodeURIComponent(d)}else{if(typeof escape!="function"){return escape(d)}else{return d}}};c.log=function(d){if(typeof console!="undefined"&&b.debug){console.log(d)}};c.decode_html=function(d){return String(d).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")};c.encode_html=function(d){return String(d).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};c.getReadableColor=function(g,f){f=a.extend({amount:0.5,xMulti:1,yMulti:1.5,normalizeHue:[20,180],normalizeHueXMulti:1/2.5,normalizeHueYMulti:1},f);var d=tinycolor(g);var e=d.toHsv();var i={x:e.s,y:1-e.v};i.x*=f.xMulti;i.y*=f.yMulti;if(f.normalizeHue&&e.h>f.normalizeHue[0]&&e.h<f.normalizeHue[1]){i.x*=f.normalizeHueXMulti;i.y*=f.normalizeHueYMulti}var h=Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2));if(h<f.amount){e.v=0}else{e.v=1}e.s=0;return tinycolor(e).toHexString()};c.removeChars=function(e,f){var d=new RegExp("["+e+"]","gmi");return f.replace(d,"")}};a(document).ready(function(){CrayonUtil.init()});a.fn.bindFirst=function(c,e){this.bind(c,e);var b=this.data("events")[c.split(".")[0]];var d=b.pop();b.splice(0,0,d)};a.keys=function(d){var c=[];for(var b in d){c.push(b)}return c};RegExp.prototype.execAll=function(c){var f=[];var b=null;while((b=this.exec(c))!=null){var e=[];for(var d in b){if(parseInt(d)==d){e.push(b[d])}}f.push(e)}return f};RegExp.prototype.escape=function(b){return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};String.prototype.sliceReplace=function(d,b,c){return this.substring(0,d)+c+this.substring(b)};String.prototype.escape=function(){var b={"&":"&amp;","<":"&lt;",">":"&gt;"};return this.replace(/[&<>]/g,function(c){return b[c]||c})};String.prototype.linkify=function(b){b=typeof b!="undefined"?b:"";return this.replace(/(http(s)?:\/\/(\S)+)/gmi,'<a href="$1" target="'+b+'">$1</a>')};String.prototype.toTitleCase=function(){var b=this.split(/\s+/);var c="";a.each(b,function(e,d){if(d!=""){c+=d.slice(0,1).toUpperCase()+d.slice(1,d.length);if(e!=b.length-1&&b[e+1]!=""){c+=" "}}});return c}})(jQueryCrayon);jqueryPopup=Object();jqueryPopup.defaultSettings={centerBrowser:0,centerScreen:0,height:500,left:0,location:0,menubar:0,resizable:0,scrollbars:0,status:0,width:500,windowName:null,windowURL:null,top:0,toolbar:0,data:null,event:"click"};(function(a){popupWindow=function(d,c,f,b){f=typeof f!=="undefined"?f:null;b=typeof b!=="undefined"?b:null;if(typeof d=="string"){d=jQuery(d)}if(!(d instanceof jQuery)){return false}var e=jQuery.extend({},jqueryPopup.defaultSettings,c||{});d.handler=jQuery(d).bind(e.event,function(){if(f){f()}var g="height="+e.height+",width="+e.width+",toolbar="+e.toolbar+",scrollbars="+e.scrollbars+",status="+e.status+",resizable="+e.resizable+",location="+e.location+",menuBar="+e.menubar;e.windowName=e.windowName||jQuery(this).attr("name");var h=jQuery(this).attr("href");if(!e.windowURL&&!(h=="#")&&!(h=="")){e.windowURL=jQuery(this).attr("href")}var i,j;var k=null;if(e.centerBrowser){if(typeof window.screenY=="undefined"){i=(window.screenTop-120)+((((document.documentElement.clientHeight+120)/2)-(e.height/2)));j=window.screenLeft+((((document.body.offsetWidth+20)/2)-(e.width/2)))}else{i=window.screenY+(((window.outerHeight/2)-(e.height/2)));j=window.screenX+(((window.outerWidth/2)-(e.width/2)))}k=window.open(e.windowURL,e.windowName,g+",left="+j+",top="+i)}else{if(e.centerScreen){i=(screen.height-e.height)/2;j=(screen.width-e.width)/2;k=window.open(e.windowURL,e.windowName,g+",left="+j+",top="+i)}else{k=window.open(e.windowURL,e.windowName,g+",left="+e.left+",top="+e.top)}}if(k!=null){k.focus();if(e.data){k.document.write(e.data)}}if(b){b()}});return e};popdownWindow=function(b,c){if(typeof c=="undefined"){c="click"}b=jQuery(b);if(!(b instanceof jQuery)){return false}b.unbind(c,b.handler)}})(jQueryCrayon);(function(f){f.fn.exists=function(){return this.length!==0};f.fn.style=function(B,E,A){var D=this.get(0);if(typeof D=="undefined"){return}var C=D.style;if(typeof B!="undefined"){if(typeof E!="undefined"){A=typeof A!="undefined"?A:"";if(typeof C.setProperty!="undefined"){C.setProperty(B,E,A)}else{C[B]=E}}else{return C[B]}}else{return C}};var d="crayon-pressed";var a="";var n="div.crayon-syntax";var e=".crayon-toolbar";var c=".crayon-info";var w=".crayon-plain";var o=".crayon-main";var m=".crayon-table";var v=".crayon-loading";var h=".crayon-code";var p=".crayon-title";var l=".crayon-tools";var b=".crayon-nums";var j=".crayon-num";var q=".crayon-line";var g="crayon-wrapped";var s=".crayon-nums-content";var u=".crayon-nums-button";var k=".crayon-wrap-button";var i=".crayon-expand-button";var t="crayon-expanded crayon-toolbar-visible";var y="crayon-placeholder";var x=".crayon-popup-button";var r=".crayon-copy-button";var z=".crayon-plain-button";CrayonSyntax=new function(){var I=this;var N=new Object();var ag;var H;var G=0;var Z;I.init=function(){if(typeof N=="undefined"){N=new Object()}ag=CrayonSyntaxSettings;H=CrayonSyntaxStrings;f(n).each(function(){I.process(this)})};I.process=function(aD,aE){aD=f(aD);var ar=aD.attr("id");if(ar=="crayon-"){ar+=X()}aD.attr("id",ar);CrayonUtil.log(ar);if(typeof aE=="undefined"){aE=false}if(!aE&&!aa(ar)){return}var au=aD.find(e);var aC=aD.find(c);var ap=aD.find(w);var aq=aD.find(o);var aB=aD.find(m);var aj=aD.find(h);var aG=aD.find(p);var aA=aD.find(l);var ay=aD.find(b);var av=aD.find(s);var az=aD.find(u);var am=aD.find(k);var ao=aD.find(i);var aF=aD.find(x);var at=aD.find(r);var al=aD.find(z);N[ar]=aD;N[ar].toolbar=au;N[ar].plain=ap;N[ar].info=aC;N[ar].main=aq;N[ar].table=aB;N[ar].code=aj;N[ar].title=aG;N[ar].tools=aA;N[ar].nums=ay;N[ar].nums_content=av;N[ar].numsButton=az;N[ar].wrapButton=am;N[ar].expandButton=ao;N[ar].popup_button=aF;N[ar].copy_button=at;N[ar].plainButton=al;N[ar].numsVisible=true;N[ar].wrapped=false;N[ar].plainVisible=false;N[ar].toolbar_delay=0;N[ar].time=1;f(w).css("z-index",0);var aw=aq.style();N[ar].mainStyle={height:aw&&aw.height||"","max-height":aw&&aw.maxHeight||"","min-height":aw&&aw.minHeight||"",width:aw&&aw.width||"","max-width":aw&&aw.maxWidth||"","min-width":aw&&aw.minWidth||""};N[ar].mainHeightAuto=N[ar].mainStyle.height==""&&N[ar].mainStyle["max-height"]=="";var ak;var ax=0;N[ar].loading=true;N[ar].scrollBlockFix=false;az.click(function(){CrayonSyntax.toggleNums(ar)});am.click(function(){CrayonSyntax.toggleWrap(ar)});ao.click(function(){CrayonSyntax.toggleExpand(ar)});al.click(function(){CrayonSyntax.togglePlain(ar)});at.click(function(){CrayonSyntax.copyPlain(ar)});B(ar);var an=function(){if(ay.filter('[data-settings~="hide"]').length!=0){av.ready(function(){CrayonUtil.log("function"+ar);CrayonSyntax.toggleNums(ar,true,true)})}else{ac(ar)}if(typeof N[ar].expanded=="undefined"){if(Math.abs(N[ar].main.outerWidth()-N[ar].table.outerWidth())<10){N[ar].expandButton.hide()}else{N[ar].expandButton.show()}}if(ax==5){clearInterval(ak);N[ar].loading=false}ax++};ak=setInterval(an,300);C(ar);f(j,N[ar]).each(function(){var aJ=f(this).attr("data-line");var aI=f("#"+aJ);var aH=aI.style("height");if(aH){aI.attr("data-height",aH)}});aq.css("position","relative");aq.css("z-index",1);Z=(aD.filter('[data-settings~="touchscreen"]').length!=0);if(!Z){aq.click(function(){A(ar,"",false)});ap.click(function(){A(ar,"",false)});aC.click(function(){A(ar,"",false)})}if(aD.filter('[data-settings~="no-popup"]').length==0){N[ar].popup_settings=popupWindow(aF,{height:screen.height-200,width:screen.width-100,top:75,left:50,scrollbars:1,windowURL:"",data:""},function(){F(ar)},function(){})}ap.css("opacity",0);N[ar].toolbarVisible=true;N[ar].hasOneLine=aB.outerHeight()<au.outerHeight()*2;N[ar].toolbarMouseover=false;if(au.filter('[data-settings~="mouseover"]').length!=0&&!Z){N[ar].toolbarMouseover=true;N[ar].toolbarVisible=false;au.css("margin-top","-"+au.outerHeight()+"px");au.hide();if(au.filter('[data-settings~="overlay"]').length!=0&&!N[ar].hasOneLine){au.css("position","absolute");au.css("z-index",2);if(au.filter('[data-settings~="hide"]').length!=0){aq.click(function(){T(ar,undefined,undefined,0)});ap.click(function(){T(ar,false,undefined,0)})}}else{au.css("z-index",4)}if(au.filter('[data-settings~="delay"]').length!=0){N[ar].toolbar_delay=500}aD.mouseenter(function(){T(ar,true)}).mouseleave(function(){T(ar,false)})}else{if(Z){au.show()}}if(aD.filter('[data-settings~="minimize"]').length==0){I.minimize(ar)}if(ap.length!=0&&!Z){if(ap.filter('[data-settings~="dblclick"]').length!=0){aq.dblclick(function(){CrayonSyntax.togglePlain(ar)})}else{if(ap.filter('[data-settings~="click"]').length!=0){aq.click(function(){CrayonSyntax.togglePlain(ar)})}else{if(ap.filter('[data-settings~="mouseover"]').length!=0){aD.mouseenter(function(){CrayonSyntax.togglePlain(ar,true)}).mouseleave(function(){CrayonSyntax.togglePlain(ar,false)});az.hide()}}}if(ap.filter('[data-settings~="show-plain-default"]').length!=0){CrayonSyntax.togglePlain(ar,true)}}var ai=aD.filter('[data-settings~="expand"]').length!=0;if(!Z&&aD.filter('[data-settings~="scroll-mouseover"]').length!=0){aq.css("overflow","hidden");ap.css("overflow","hidden");aD.mouseenter(function(){M(ar,true,ai)}).mouseleave(function(){M(ar,false,ai)})}if(ai){aD.mouseenter(function(){D(ar,true)}).mouseleave(function(){D(ar,false)})}if(aD.filter('[data-settings~="disable-anim"]').length!=0){N[ar].time=0}if(aD.filter('[data-settings~="wrap"]').length!=0){N[ar].wrapped=true}N[ar].mac=aD.hasClass("crayon-os-mac");ac(ar);ab(ar);Y(ar)};var aa=function(ai){CrayonUtil.log(N);if(typeof N[ai]=="undefined"){N[ai]=f("#"+ai);CrayonUtil.log("make "+ai);return true}CrayonUtil.log("no make "+ai);return false};var X=function(){return G++};var F=function(ai){if(typeof N[ai]=="undefined"){return aa(ai)}var aj=N[ai].popup_settings;if(aj&&aj.data){return}var al=N[ai].clone(true);al.removeClass("crayon-wrapped");if(N[ai].wrapped){f(j,al).each(function(){var ao=f(this).attr("data-line");var an=f("#"+ao);var am=an.attr("data-height");am=am?am:"";if(typeof am!="undefined"){an.css("height",am);f(this).css("height",am)}})}al.find(o).css("height","");var ak="";if(N[ai].plainVisible){ak=al.find(w)}else{ak=al.find(o)}aj.data=I.getAllCSS()+'<body class="crayon-popup-window" style="padding:0; margin:0;"><div class="'+al.attr("class")+' crayon-popup">'+I.removeCssInline(I.getHtmlString(ak))+"</div></body>"};I.minimize=function(al){var ak=f('<div class="crayon-minimize crayon-button"><div>');N[al].tools.append(ak);N[al].origTitle=N[al].title.html();if(!N[al].origTitle){N[al].title.html(H.minimize)}var aj="crayon-minimized";var ai=function(){N[al].toolbarPreventHide=false;ak.remove();N[al].removeClass(aj);N[al].title.html(N[al].origTitle);var am=N[al].toolbar;if(am.filter('[data-settings~="never-show"]').length!=0){am.remove()}};N[al].toolbar.click(ai);ak.click(ai);N[al].addClass(aj);N[al].toolbarPreventHide=true;T(al,undefined,undefined,0)};I.getHtmlString=function(ai){return f("<div>").append(ai.clone()).remove().html()};I.removeCssInline=function(ak){var aj=/style\s*=\s*"([^"]+)"/gmi;var ai=null;while((ai=aj.exec(ak))!=null){var al=ai[1];al=al.replace(/\b(?:width|height)\s*:[^;]+;/gmi,"");ak=ak.sliceReplace(ai.index,ai.index+ai[0].length,'style="'+al+'"')}return ak};I.getAllCSS=function(){var ak="";var aj=f('link[rel="stylesheet"]');var ai=[];if(aj.length==1){ai=aj}else{ai=aj.filter('[href*="crayon-syntax-highlighter"], [href*="min/"]')}ai.each(function(){var al=I.getHtmlString(f(this));ak+=al});return ak};I.copyPlain=function(ak,al){if(typeof N[ak]=="undefined"){return aa(ak)}var aj=N[ak].plain;I.togglePlain(ak,true,true);T(ak,true);var ai=N[ak].mac?"\u2318":"CTRL";var am=H.copy;am=am.replace(/%s/,ai+"+C");am=am.replace(/%s/,ai+"+V");A(ak,am);return false};var A=function(aj,al,ai){if(typeof N[aj]=="undefined"){return aa(aj)}var ak=N[aj].info;if(typeof al=="undefined"){al=""}if(typeof ai=="undefined"){ai=true}if(L(ak)&&ai){ak.html("<div>"+al+"</div>");ak.css("margin-top",-ak.outerHeight());ak.show();Q(aj,ak,true);setTimeout(function(){Q(aj,ak,false)},5000)}if(!ai){Q(aj,ak,false)}};var B=function(ai){if(window.devicePixelRatio>1){var aj=f(".crayon-button-icon",N[ai].toolbar);aj.each(function(){var al=f(this).css("background-image");var ak=al.replace(/\.(?=[^\.]+$)/g,"@2x.");f(this).css("background-size","48px 128px");f(this).css("background-image",ak)})}};var L=function(ai){var aj="-"+ai.outerHeight()+"px";if(ai.css("margin-top")==aj||ai.css("display")=="none"){return true}else{return false}};var Q=function(al,ak,aj,an,am,ap){var ai=function(){if(ap){ap(al,ak)}};var ao="-"+ak.outerHeight()+"px";if(typeof aj=="undefined"){if(L(ak)){aj=true}else{aj=false}}if(typeof an=="undefined"){an=100}if(an==false){an=false}if(typeof am=="undefined"){am=0}ak.stop(true);if(aj==true){ak.show();ak.animate({marginTop:0},ah(an,al),ai)}else{if(aj==false){if(ak.css("margin-top")=="0px"&&am){ak.delay(am)}ak.animate({marginTop:ao},ah(an,al),function(){ak.hide();ai()})}}};I.togglePlain=function(al,am,aj){if(typeof N[al]=="undefined"){return aa(al)}var ai=N[al].main;var ak=N[al].plain;if((ai.is(":animated")||ak.is(":animated"))&&typeof am=="undefined"){return}ae(al);var ao,an;if(typeof am!="undefined"){if(am){ao=ai;an=ak}else{ao=ak;an=ai}}else{if(ai.css("z-index")==1){ao=ai;an=ak}else{ao=ak;an=ai}}N[al].plainVisible=(an==ak);N[al].top=ao.scrollTop();N[al].left=ao.scrollLeft();N[al].scrollChanged=false;C(al);ao.stop(true);ao.fadeTo(ah(500,al),0,function(){ao.css("z-index",0)});an.stop(true);an.fadeTo(ah(500,al),1,function(){an.css("z-index",1);if(an==ak){if(aj){ak.select()}else{}}an.scrollTop(N[al].top+1);an.scrollTop(N[al].top);an.scrollLeft(N[al].left+1);an.scrollLeft(N[al].left)});an.scrollTop(N[al].top);an.scrollLeft(N[al].left);ab(al);T(al,false);return false};I.toggleNums=function(am,al,ai){if(typeof N[am]=="undefined"){aa(am);return false}if(N[am].table.is(":animated")){return false}var ao=Math.round(N[am].nums_content.outerWidth()+1);var an="-"+ao+"px";var ak;if(typeof al!="undefined"){ak=false}else{ak=(N[am].table.css("margin-left")==an)}var aj;if(ak){aj="0px";N[am].numsVisible=true}else{N[am].table.css("margin-left","0px");N[am].numsVisible=false;aj=an}if(typeof ai!="undefined"){N[am].table.css("margin-left",aj);ac(am);return false}var ap=(N[am].table.outerWidth()+J(N[am].table.css("margin-left"))>N[am].main.outerWidth());var aq=(N[am].table.outerHeight()>N[am].main.outerHeight());if(!ap&&!aq){N[am].main.css("overflow","hidden")}N[am].table.animate({marginLeft:aj},ah(200,am),function(){if(typeof N[am]!="undefined"){ac(am);if(!ap&&!aq){N[am].main.css("overflow","auto")}}});return false};I.toggleWrap=function(ai){N[ai].wrapped=!N[ai].wrapped;Y(ai)};I.toggleExpand=function(ai){var aj=!CrayonUtil.setDefault(N[ai].expanded,false);D(ai,aj)};var Y=function(ai,aj){aj=CrayonUtil.setDefault(aj,true);if(N[ai].wrapped){N[ai].addClass(g)}else{N[ai].removeClass(g)}E(ai);if(!N[ai].expanded&&aj){V(ai)}N[ai].wrapTimes=0;clearInterval(N[ai].wrapTimer);N[ai].wrapTimer=setInterval(function(){if(N[ai].is(":visible")){O(ai);N[ai].wrapTimes++;if(N[ai].wrapTimes==5){clearInterval(N[ai].wrapTimer)}}},200)};var ad=function(ai){if(typeof N[ai]=="undefined"){aa(ai);return false}};var J=function(aj){if(typeof aj!="string"){return 0}var ai=aj.replace(/[^-0-9]/g,"");if(ai.length==0){return 0}else{return parseInt(ai)}};var ac=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].numsVisible=="undefined"){return}if(N[ai].numsVisible){N[ai].numsButton.removeClass(a);N[ai].numsButton.addClass(d)}else{N[ai].numsButton.removeClass(d);N[ai].numsButton.addClass(a)}};var E=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].wrapped=="undefined"){return}if(N[ai].wrapped){N[ai].wrapButton.removeClass(a);N[ai].wrapButton.addClass(d)}else{N[ai].wrapButton.removeClass(d);N[ai].wrapButton.addClass(a)}};var W=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].expanded=="undefined"){return}if(N[ai].expanded){N[ai].expandButton.removeClass(a);N[ai].expandButton.addClass(d)}else{N[ai].expandButton.removeClass(d);N[ai].expandButton.addClass(a)}};var ab=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].plainVisible=="undefined"){return}if(N[ai].plainVisible){N[ai].plainButton.removeClass(a);N[ai].plainButton.addClass(d)}else{N[ai].plainButton.removeClass(d);N[ai].plainButton.addClass(a)}};var T=function(aj,ai,al,ak){if(typeof N[aj]=="undefined"){return aa(aj)}else{if(!N[aj].toolbarMouseover){return}else{if(ai==false&&N[aj].toolbarPreventHide){return}else{if(Z){return}}}}var am=N[aj].toolbar;if(typeof ak=="undefined"){ak=N[aj].toolbar_delay}Q(aj,am,ai,al,ak,function(){N[aj].toolbarVisible=ai})};var R=function(ak,ai){var aj=f.extend({},ak);aj.width+=ai.width;aj.height+=ai.height;return aj};var P=function(ak,ai){var aj=f.extend({},ak);aj.width-=ai.width;aj.height-=ai.height;return aj};var U=function(ai){if(typeof N[ai].initialSize=="undefined"){N[ai].toolbarHeight=N[ai].toolbar.outerHeight();N[ai].innerSize={width:N[ai].width(),height:N[ai].height()};N[ai].outerSize={width:N[ai].outerWidth(),height:N[ai].outerHeight()};N[ai].borderSize=P(N[ai].outerSize,N[ai].innerSize);N[ai].initialSize={width:N[ai].main.outerWidth(),height:N[ai].main.outerHeight()};N[ai].initialSize.height+=N[ai].toolbarHeight;N[ai].initialOuterSize=R(N[ai].initialSize,N[ai].borderSize);N[ai].finalSize={width:N[ai].table.outerWidth(),height:N[ai].table.outerHeight()};N[ai].finalSize.height+=N[ai].toolbarHeight;N[ai].finalSize.width=CrayonUtil.setMin(N[ai].finalSize.width,N[ai].initialSize.width);N[ai].finalSize.height=CrayonUtil.setMin(N[ai].finalSize.height,N[ai].initialSize.height);N[ai].diffSize=P(N[ai].finalSize,N[ai].initialSize);N[ai].finalOuterSize=R(N[ai].finalSize,N[ai].borderSize);N[ai].initialSize.height+=N[ai].toolbar.outerHeight()}};var D=function(al,ao){if(typeof N[al]=="undefined"){return aa(al)}if(typeof ao=="undefined"){return}var aj=N[al].main;var aq=N[al].plain;if(ao){if(typeof N[al].expanded=="undefined"){U(al);N[al].expandTime=CrayonUtil.setRange(N[al].diffSize.width/3,300,800);N[al].expanded=false;var ap=N[al].finalOuterSize;N[al].placeholder=f("<div></div>");N[al].placeholder.addClass(y);N[al].placeholder.css(ap);N[al].before(N[al].placeholder);N[al].placeholder.css("margin",N[al].css("margin"));f(window).bind("resize",K)}var am={height:"auto","min-height":"none","max-height":"none"};var ai={width:"auto","min-width":"none","max-width":"none"};N[al].outerWidth(N[al].outerWidth());N[al].css({"min-width":"none","max-width":"none"});var an={width:N[al].finalOuterSize.width};if(!N[al].mainHeightAuto&&!N[al].hasOneLine){an.height=N[al].finalOuterSize.height;N[al].outerHeight(N[al].outerHeight())}aj.css(am);aj.css(ai);N[al].stop(true);N[al].animate(an,ah(N[al].expandTime,al),function(){N[al].expanded=true;W(al)});N[al].placeholder.show();f("body").prepend(N[al]);N[al].addClass(t);K()}else{var ar=N[al].initialOuterSize;var ak=N[al].toolbar_delay;if(ar){N[al].stop(true);if(!N[al].expanded){N[al].delay(ak)}var an={width:ar.width};if(!N[al].mainHeightAuto&&!N[al].hasOneLine){an.height=ar.height}N[al].animate(an,ah(N[al].expandTime,al),function(){af(al)})}else{setTimeout(function(){af(al)},ak)}N[al].placeholder.hide();N[al].placeholder.before(N[al]);N[al].css({left:"auto",top:"auto"});N[al].removeClass(t)}ae(al);if(ao){Y(al,false)}};var K=function(){for(uid in N){if(N[uid].hasClass(t)){N[uid].css(N[uid].placeholder.offset())}}};var af=function(ai){N[ai].expanded=false;V(ai);W(ai);if(N[ai].wrapped){Y(ai)}};var M=function(al,aj,am){if(typeof N[al]=="undefined"){return aa(al)}if(typeof aj=="undefined"||am||N[al].expanded){return}var ai=N[al].main;var ak=N[al].plain;if(aj){ai.css("overflow","auto");ak.css("overflow","auto");if(typeof N[al].top!="undefined"){visible=(ai.css("z-index")==1?ai:ak);visible.scrollTop(N[al].top-1);visible.scrollTop(N[al].top);visible.scrollLeft(N[al].left-1);visible.scrollLeft(N[al].left)}}else{visible=(ai.css("z-index")==1?ai:ak);N[al].top=visible.scrollTop();N[al].left=visible.scrollLeft();ai.css("overflow","hidden");ak.css("overflow","hidden")}N[al].scrollChanged=true;C(al)};var C=function(ai){N[ai].table.style("width","100%","important");var aj=setTimeout(function(){N[ai].table.style("width","");clearInterval(aj)},10)};var V=function(ak){var aj=N[ak].main;var ai=N[ak].mainStyle;aj.css(ai);N[ak].css("height","auto");N[ak].css("width",ai.width);N[ak].css("max-width",ai["max-width"]);N[ak].css("min-width",ai["min-width"])};var ae=function(ai){N[ai].plain.outerHeight(N[ai].main.outerHeight())};var O=function(ai){f(j,N[ai]).each(function(){var al=f(this).attr("data-line");var ak=f("#"+al);var aj=null;if(N[ai].wrapped){ak.css("height","");aj=ak.outerHeight();aj=aj?aj:""}else{aj=ak.attr("data-height");aj=aj?aj:"";ak.css("height",aj)}f(this).css("height",aj)})};var ah=function(ai,aj){if(ai=="fast"){ai=200}else{if(ai=="slow"){ai=600}else{if(!S(ai)){ai=parseInt(ai);if(isNaN(ai)){return 0}}}}return ai*N[aj].time};var S=function(ai){return typeof ai=="number"}};f(document).ready(function(){CrayonSyntax.init()})})(jQueryCrayon);
// source --> http://thejackalofjavascript.com/wp-content/plugins/responsive-lightbox/assets/prettyphoto/js/jquery.prettyPhoto.js 
/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.6
------------------------------------------------------------------------- */
(function($) {
	$.prettyPhoto = {version: '3.1.6'};
	
	$.fn.prettyPhoto = function(pp_settings) {
		pp_settings = jQuery.extend({
			hook: 'rel', /* the attribute tag to use for prettyPhoto hooks. default: 'rel'. For HTML5, use "data-rel" or similar. */
			animation_speed: 'fast', /* fast/slow/normal */
			ajaxcallback: function() {},
			slideshow: 5000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			allow_expand: true, /* Allow the user to expand a resized image. true/false */
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			overlay_gallery_max: 30, /* Maximum number of pictures in the overlay gallery */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
			callback: function(){}, /* Called when prettyPhoto is closed */
			ie6_fallback: true,
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
											<p class="pp_description"></p> \
											<div class="pp_social">{pp_social}</div> \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> \
								<a href="#" class="pp_arrow_previous">Previous</a> \
								<div> \
									<ul> \
										{gallery} \
									</ul> \
								</div> \
								<a href="#" class="pp_arrow_next">Next</a> \
							</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="//www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="//www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: '',
			social_tools: '<div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>' /* html or false to disable */
		}, pp_settings);

		var isMobile = {
			Android: function() {
				return navigator.userAgent.match( /Android/i );
			},
			BlackBerry: function() {
				return navigator.userAgent.match( /BlackBerry/i );
			},
			iOS: function() {
				return navigator.userAgent.match( /iPhone|iPad|iPod/i );
			},
			Opera: function() {
				return navigator.userAgent.match( /Opera Mini/i );
			},
			Windows: function() {
				return navigator.userAgent.match( /IEMobile/i );
			},
			any: function() {
				return ( isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() );
			}
		};

		function fitToMobileViewport( newWindowWidth, newWindowHeight, imgWidth, imgHeight ) {
			var newHeight = 0,
				newWidth = 0;

			if ( imgWidth > imgHeight ) {
				newWidth = newWindowWidth;
				newHeight = Math.round( imgHeight * newWindowWidth / imgWidth );
			} else {
				newWidth = Math.round( imgWidth * newWindowHeight / imgHeight );
				newHeight = newWindowHeight;
			}

			return _fitToViewport( newWidth, newHeight );
		}

		// Global variables accessible only by prettyPhoto
		var matchedObjects = this, percentBased = false, pp_dimensions, pp_open,
		
		// prettyPhoto container specific
		pp_contentHeight, pp_contentWidth, pp_containerHeight, pp_containerWidth,
		
		// Window size
		windowHeight = $(window).height(), windowWidth = $(window).width(),

		// Global elements
		pp_slideshow;
		
		doresize = true, scroll_pos = _get_scroll();
	
		// Window/Keyboard events
		$(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){ _center_overlay(); _resize_overlay(); });
		
		if(pp_settings.keyboard_shortcuts) {
			$(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){
				if(typeof $pp_pic_holder != 'undefined'){
					if($pp_pic_holder.is(':visible')){
						switch(e.keyCode){
							case 37:
								$.prettyPhoto.changePage('previous');
								e.preventDefault();
								break;
							case 39:
								$.prettyPhoto.changePage('next');
								e.preventDefault();
								break;
							case 27:
								if(!settings.modal)
								$.prettyPhoto.close();
								e.preventDefault();
								break;
						};
						// return false;
					};
				};
			});
		};
		
		/**
		* Initialize prettyPhoto.
		*/
		$.prettyPhoto.initialize = function() {
			
			settings = pp_settings;
			
			if(settings.theme == 'pp_default') settings.horizontal_padding = 16;
			
			// Find out if the picture is part of a set
			theRel = $(this).attr(settings.hook);
			galleryRegExp = /\-(?:.*)/;
			isSet = (galleryRegExp.exec(theRel)) ? true : false;
			
			// Put the SRCs, TITLEs, ALTs into an array.
			pp_images = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return $(n).attr('href'); }) : $.makeArray($(this).attr('href'));
			pp_titles = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).find('img').attr('alt')) ? $(n).find('img').attr('alt') : ""; }) : $.makeArray($(this).find('img').attr('alt'));
			pp_descriptions = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('title')) ? $(n).attr('title') : ""; }) : $.makeArray($(this).attr('title'));
			
			if(pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
			
			set_position = jQuery.inArray($(this).attr('href'), pp_images); // Define where in the array the clicked item is positionned
			rel_index = (isSet) ? set_position : $("a["+settings.hook+"^='"+theRel+"']").index($(this));
			
			_build_overlay(this); // Build the overlay {this} being the caller
			
			if(settings.allow_resize)
				$(window).bind('scroll.prettyphoto',function(){ _center_overlay(); });
			
			
			$.prettyPhoto.open();
			
			return false;
		}


		/**
		* Opens the prettyPhoto modal box.
		* @param image {String,Array} Full path to the image to be open, can also be an array containing full images paths.
		* @param title {String,Array} The title to be displayed with the picture, can also be an array containing all the titles.
		* @param description {String,Array} The description to be displayed with the picture, can also be an array containing all the descriptions.
		*/
		$.prettyPhoto.open = function(event) {
			if(typeof settings == "undefined"){ // Means it's an API call, need to manually get the settings and set the variables
				settings = pp_settings;
				pp_images = $.makeArray(arguments[0]);
				pp_titles = (arguments[1]) ? $.makeArray(arguments[1]) : $.makeArray("");
				pp_descriptions = (arguments[2]) ? $.makeArray(arguments[2]) : $.makeArray("");
				isSet = (pp_images.length > 1) ? true : false;
				set_position = (arguments[3])? arguments[3]: 0;
				_build_overlay(event.target); // Build the overlay {this} being the caller
			}
			
			if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden'); // Hide the flash

			_checkPosition($(pp_images).size()); // Hide the next/previous links if on first or last images.
		
			$('.pp_loaderIcon').show();
		
			if(settings.deeplinking)
				setHashtag();
		
			// Rebuild Facebook Like Button with updated href
			if(settings.social_tools){
				facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 
				$pp_pic_holder.find('.pp_social').html(facebook_like_link);
			}
			
			// Fade the content in
			if($ppt.is(':hidden')) $ppt.css('opacity',0).show();
			$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);

			// Display the current position
			$pp_pic_holder.find('.currentTextHolder').text((set_position+1) + settings.counter_separator_label + $(pp_images).size());

			// Set the description
			if(typeof pp_descriptions[set_position] != 'undefined' && pp_descriptions[set_position] != ""){
				$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));
			}else{
				$pp_pic_holder.find('.pp_description').hide();
			}
			
			// Get the dimensions
			movie_width = ( parseFloat(getParam('width',pp_images[set_position])) ) ? getParam('width',pp_images[set_position]) : settings.default_width.toString();
			movie_height = ( parseFloat(getParam('height',pp_images[set_position])) ) ? getParam('height',pp_images[set_position]) : settings.default_height.toString();
			
			// If the size is % based, calculate according to window dimensions
			percentBased=false;
			if(movie_height.indexOf('%') != -1) { movie_height = parseFloat(($(window).height() * parseFloat(movie_height) / 100) - 150); percentBased = true; }
			if(movie_width.indexOf('%') != -1) { movie_width = parseFloat(($(window).width() * parseFloat(movie_width) / 100) - 150); percentBased = true; }
			
			// Fade the holder
			$pp_pic_holder.fadeIn(function(){
				// Set the title
				(settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined") ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html('&nbsp;');
				
				imgPreloader = "";
				skipInjection = false;
				
				// Inject the proper content
				switch(_getFileType(pp_images[set_position])){
					case 'image':
						imgPreloader = new Image();

						// Preload the neighbour images
						nextImage = new Image();
						if(isSet && set_position < $(pp_images).size() -1) nextImage.src = pp_images[set_position + 1];
						prevImage = new Image();
						if(isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];

						$pp_pic_holder.find('#pp_full_res')[0].innerHTML = settings.image_markup.replace(/{path}/g,pp_images[set_position]);

						imgPreloader.onload = function() {
							// Fit item to viewport
							if ( isMobile.any() )
								pp_dimensions = fitToMobileViewport( Math.round( windowWidth * 0.9 ), Math.round( windowHeight * 0.9 ), imgPreloader.width, imgPreloader.height );
							else
								pp_dimensions = _fitToViewport(imgPreloader.width,imgPreloader.height);

							_showContent();
						};

						imgPreloader.onerror = function(){
							alert('Image cannot be loaded. Make sure the path is correct and image exist.');
							$.prettyPhoto.close();
						};
					
						imgPreloader.src = pp_images[set_position];
					break;
				
					case 'youtube':
						// Fit item to viewport
						if ( isMobile.any() )
							pp_dimensions = fitToMobileViewport( Math.round( windowWidth * 0.9 ), Math.round( windowHeight * 0.9 ), movie_width, movie_height );
						else
							pp_dimensions = _fitToViewport( movie_width, movie_height );

						// Regular youtube link
						movie_id = getParam('v',pp_images[set_position]);
						
						// youtu.be link
						if(movie_id == ""){
							movie_id = pp_images[set_position].split('youtu.be/');
							movie_id = movie_id[1];
							if(movie_id.indexOf('?') > 0)
								movie_id = movie_id.substr(0,movie_id.indexOf('?')); // Strip anything after the ?

							if(movie_id.indexOf('&') > 0)
								movie_id = movie_id.substr(0,movie_id.indexOf('&')); // Strip anything after the &
						}

						movie = '//www.youtube.com/embed/'+movie_id;
						(getParam('rel',pp_images[set_position])) ? movie+="?rel="+getParam('rel',pp_images[set_position]) : movie+="?rel=1";
							
						if(settings.autoplay) movie += "&autoplay=1";
					
						toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);
					break;
				
					case 'vimeo':
						// Fit item to viewport
						if ( isMobile.any() )
							pp_dimensions = fitToMobileViewport( Math.round( windowWidth * 0.9 ), Math.round( windowHeight * 0.9 ), movie_width, movie_height );
						else
							pp_dimensions = _fitToViewport( movie_width, movie_height );

						movie_id = pp_images[set_position];
						var regExp = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
						var match = movie_id.match(regExp);
						
						movie = '//player.vimeo.com/video/'+ match[3] +'?title=0&amp;byline=0&amp;portrait=0';
						if(settings.autoplay) movie += "&autoplay=1;";
				
						vimeo_width = pp_dimensions['width'] + '/embed/?moog_width='+ pp_dimensions['width'];
				
						toInject = settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);
					break;
				
					case 'quicktime':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						pp_dimensions['height']+=15; pp_dimensions['contentHeight']+=15; pp_dimensions['containerHeight']+=15; // Add space for the control bar
				
						toInject = settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);
					break;
				
					case 'flash':
						// Fit item to viewport
						if ( isMobile.any() )
							pp_dimensions = fitToMobileViewport( Math.round( windowWidth * 0.9 ), Math.round( windowHeight * 0.9 ), movie_width, movie_height );
						else
							pp_dimensions = _fitToViewport( movie_width, movie_height );

						flash_vars = pp_images[set_position];
						flash_vars = flash_vars.substring(pp_images[set_position].indexOf('flashvars') + 10,pp_images[set_position].length);

						filename = pp_images[set_position];
						filename = filename.substring(0,filename.indexOf('?'));

						toInject =  settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);
					break;
				
					case 'iframe':
						// Fit item to viewport
						if ( isMobile.any() )
							pp_dimensions = fitToMobileViewport( Math.round( windowWidth * 0.9 ), Math.round( windowHeight * 0.9 ), movie_width, movie_height );
						else
							pp_dimensions = _fitToViewport( movie_width, movie_height );

						frame_url = pp_images[set_position];
						frame_url = frame_url.substr(0,frame_url.indexOf('iframe')-1);

						toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);
					break;
					
					case 'ajax':
						doresize = false; // Make sure the dimensions are not resized.

						// Fit item to viewport
						if ( isMobile.any() )
							pp_dimensions = fitToMobileViewport( Math.round( windowWidth * 0.9 ), Math.round( windowHeight * 0.9 ), movie_width, movie_height );
						else
							pp_dimensions = _fitToViewport( movie_width, movie_height );

						doresize = true; // Reset the dimensions
					
						skipInjection = true;
						$.get(pp_images[set_position],function(responseHTML){
							toInject = settings.inline_markup.replace(/{content}/g,responseHTML);
							$pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
							_showContent();
						});
						
					break;
					
					case 'custom':
						// Fit item to viewport
						if ( isMobile.any() )
							pp_dimensions = fitToMobileViewport( Math.round( windowWidth * 0.9 ), Math.round( windowHeight * 0.9 ), movie_width, movie_height );
						else
							pp_dimensions = _fitToViewport( movie_width, movie_height );

						toInject = settings.custom_markup;
					break;
				
					case 'inline':
						// to get the item height clone it, apply default width, wrap it in the prettyPhoto containers , then delete
						myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();
						doresize = false; // Make sure the dimensions are not resized.

						// Fit item to viewport
						if ( isMobile.any() )
							pp_dimensions = fitToMobileViewport( Math.round( windowWidth * 0.9 ), Math.round( windowHeight * 0.9 ), $(myClone).width(), $(myClone).height() );
						else
							pp_dimensions = _fitToViewport( $(myClone).width(), $(myClone).height() );

						doresize = true; // Reset the dimensions
						$(myClone).remove();
						toInject = settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());
					break;
				};

				if(!imgPreloader && !skipInjection){
					$pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
				
					// Show content
					_showContent();
				};
			});

			return false;
		};

	
		/**
		* Change page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changePage = function(direction){
			currentGalleryPage = 0;
			
			if(direction == 'previous') {
				set_position--;
				if (set_position < 0) set_position = $(pp_images).size()-1;
			}else if(direction == 'next'){
				set_position++;
				if(set_position > $(pp_images).size()-1) set_position = 0;
			}else{
				set_position=direction;
			};
			
			rel_index = set_position;

			if(!doresize) doresize = true; // Allow the resizing of the images
			if(settings.allow_expand) {
				$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');
			}

			_hideContent(function(){ $.prettyPhoto.open(); });
		};


		/**
		* Change gallery page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changeGalleryPage = function(direction){
			if(direction=='next'){
				currentGalleryPage ++;

				if(currentGalleryPage > totalPage) currentGalleryPage = 0;
			}else if(direction=='previous'){
				currentGalleryPage --;

				if(currentGalleryPage < 0) currentGalleryPage = totalPage;
			}else{
				currentGalleryPage = direction;
			};
			
			slide_speed = (direction == 'next' || direction == 'previous') ? settings.animation_speed : 0;

			slide_to = currentGalleryPage * (itemsPerPage * itemWidth);

			$pp_gallery.find('ul').animate({left:-slide_to},slide_speed);
		};


		/**
		* Start the slideshow...
		*/
		$.prettyPhoto.startSlideshow = function(){
			if(typeof pp_slideshow == 'undefined'){
				$pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				pp_slideshow = setInterval($.prettyPhoto.startSlideshow,settings.slideshow);
			}else{
				$.prettyPhoto.changePage('next');	
			};
		}


		/**
		* Stop the slideshow...
		*/
		$.prettyPhoto.stopSlideshow = function(){
			$pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){
				$.prettyPhoto.startSlideshow();
				return false;
			});
			clearInterval(pp_slideshow);
			pp_slideshow=undefined;
		}


		/**
		* Closes prettyPhoto.
		*/
		$.prettyPhoto.close = function(){
			if($pp_overlay.is(":animated")) return;
			
			$.prettyPhoto.stopSlideshow();
			
			$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');
			
			$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){ $(this).remove(); });
			
			$pp_overlay.fadeOut(settings.animation_speed, function(){
				
				if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible'); // Show the flash
				
				$(this).remove(); // No more need for the prettyPhoto markup
				
				$(window).unbind('scroll.prettyphoto');
				
				clearHashtag();
				
				settings.callback();
				
				doresize = true;
				
				pp_open = false;
				
				delete settings;
			});
		};
	
		/**
		* Set the proper sizes on the containers and animate the content in.
		*/
		function _showContent(){
			$('.pp_loaderIcon').hide();

			// Calculate the opened top position of the pic holder
			projectedTop = scroll_pos['scrollTop'] + ((windowHeight/2) - (pp_dimensions['containerHeight']/2));
			if(projectedTop < 0) projectedTop = 0;

			$ppt.fadeTo(settings.animation_speed,1);

			// Resize the content holder
			$pp_pic_holder.find('.pp_content')
				.animate({
					height:pp_dimensions['contentHeight'],
					width:pp_dimensions['contentWidth']
				},settings.animation_speed);
			
			// Resize picture the holder
			$pp_pic_holder.animate({
				'top': projectedTop,
				'left': ((windowWidth/2) - (pp_dimensions['containerWidth']/2) < 0) ? 0 : (windowWidth/2) - (pp_dimensions['containerWidth']/2),
				width:pp_dimensions['containerWidth']
			},settings.animation_speed,function(){
				$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);

				$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed); // Fade the new content

				// Show the nav
				if(isSet && _getFileType(pp_images[set_position])=="image") { $pp_pic_holder.find('.pp_hoverContainer').show(); }else{ $pp_pic_holder.find('.pp_hoverContainer').hide(); }
			
				if(settings.allow_expand) {
					if(pp_dimensions['resized']){ // Fade the resizing link if the image is resized
						$('a.pp_expand,a.pp_contract').show();
					}else{
						$('a.pp_expand').hide();
					}
				}
				
				if(settings.autoplay_slideshow && !pp_slideshow && !pp_open) $.prettyPhoto.startSlideshow();
				
				settings.changepicturecallback(); // Callback!
				
				pp_open = true;
			});
			
			_insert_gallery();
			pp_settings.ajaxcallback();
		};
		
		/**
		* Hide the content...DUH!
		*/
		function _hideContent(callback){
			// Fade out the current picture
			$pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');
			$pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){
				$('.pp_loaderIcon').show();
				
				callback();
			});
		};
	
		/**
		* Check the item position in the gallery array, hide or show the navigation links
		* @param setCount {integer} The total number of items in the set
		*/
		function _checkPosition(setCount){
			(setCount > 1) ? $('.pp_nav').show() : $('.pp_nav').hide(); // Hide the bottom nav if it's not a set.
		};
	
		/**
		* Resize the item dimensions if it's bigger than the viewport
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		* @return An array containin the "fitted" dimensions
		*/
		function _fitToViewport(width,height){
			resized = false;

			_getDimensions(width,height);
			
			// Define them in case there's no resize needed
			imageWidth = width, imageHeight = height;

			if( ((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)) && doresize && settings.allow_resize && !percentBased) {
				resized = true, fitting = false;
			
				while (!fitting){
					if((pp_containerWidth > windowWidth)){
						imageWidth = (windowWidth - 200);
						imageHeight = (height/width) * imageWidth;
					}else if((pp_containerHeight > windowHeight)){
						imageHeight = (windowHeight - 200);
						imageWidth = (width/height) * imageHeight;
					}else{
						fitting = true;
					};

					pp_containerHeight = imageHeight, pp_containerWidth = imageWidth;
				};
			

				
				if((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)){
					_fitToViewport(pp_containerWidth,pp_containerHeight)
				};
				
				_getDimensions(imageWidth,imageHeight);
			};
			
			return {
				width:Math.floor(imageWidth),
				height:Math.floor(imageHeight),
				containerHeight:Math.floor(pp_containerHeight),
				containerWidth:Math.floor(pp_containerWidth) + (settings.horizontal_padding * 2),
				contentHeight:Math.floor(pp_contentHeight),
				contentWidth:Math.floor(pp_contentWidth),
				resized:resized
			};
		};
		
		/**
		* Get the containers dimensions according to the item size
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		*/
		function _getDimensions(width,height){
			width = parseFloat(width);
			height = parseFloat(height);
			
			// Get the details height, to do so, I need to clone it since it's invisible
			$pp_details = $pp_pic_holder.find('.pp_details');
			$pp_details.width(width);
			detailsHeight = parseFloat($pp_details.css('marginTop')) + parseFloat($pp_details.css('marginBottom'));
			
			$pp_details = $pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			detailsHeight += $pp_details.height();
			detailsHeight = (detailsHeight <= 34) ? 36 : detailsHeight; // Min-height for the details
			$pp_details.remove();
			
			// Get the titles height, to do so, I need to clone it since it's invisible
			$pp_title = $pp_pic_holder.find('.ppt');
			$pp_title.width(width);
			titleHeight = parseFloat($pp_title.css('marginTop')) + parseFloat($pp_title.css('marginBottom'));
			$pp_title = $pp_title.clone().appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			titleHeight += $pp_title.height();
			$pp_title.remove();
			
			// Get the container size, to resize the holder to the right dimensions
			pp_contentHeight = height + detailsHeight;
			pp_contentWidth = width;
			pp_containerHeight = pp_contentHeight + titleHeight + $pp_pic_holder.find('.pp_top').height() + $pp_pic_holder.find('.pp_bottom').height();
			pp_containerWidth = width;
		}
	
		function _getFileType(itemSrc){
			if (itemSrc.match(/youtube\.com\/watch/i) || itemSrc.match(/youtu\.be/i)) {
				return 'youtube';
			}else if (itemSrc.match(/vimeo\.com/i)) {
				return 'vimeo';
			}else if(itemSrc.match(/\b.mov\b/i)){ 
				return 'quicktime';
			}else if(itemSrc.match(/\b.swf\b/i)){
				return 'flash';
			}else if(itemSrc.match(/\biframe=true\b/i)){
				return 'iframe';
			}else if(itemSrc.match(/\bajax=true\b/i)){
				return 'ajax';
			}else if(itemSrc.match(/\bcustom=true\b/i)){
				return 'custom';
			}else if(itemSrc.substr(0,1) == '#'){
				return 'inline';
			}else{
				return 'image';
			};
		};
	
		function _center_overlay(){
			if(doresize && typeof $pp_pic_holder != 'undefined') {
				scroll_pos = _get_scroll();
				contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();

				projectedTop = (windowHeight/2) + scroll_pos['scrollTop'] - (contentHeight/2);
				if(projectedTop < 0) projectedTop = 0;
				
				if(contentHeight > windowHeight)
					return;

				$pp_pic_holder.css({
					'top': projectedTop,
					'left': (windowWidth/2) + scroll_pos['scrollLeft'] - (contentwidth/2)
				});
			};
		};
	
		function _get_scroll(){
			if (self.pageYOffset) {
				return {scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};
			} else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
				return {scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};
			} else if (document.body) {// all other Explorers
				return {scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};
			};
		};
	
		function _resize_overlay() {
			windowHeight = $(window).height(), windowWidth = $(window).width();
			
			if(typeof $pp_overlay != "undefined") $pp_overlay.height($(document).height()).width(windowWidth);
		};
	
		function _insert_gallery(){
			if(isSet && settings.overlay_gallery && _getFileType(pp_images[set_position])=="image") {
				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				navWidth = (settings.theme == "facebook" || settings.theme == "pp_default") ? 50 : 30; // Define the arrow width depending on the theme
				
				itemsPerPage = Math.floor((pp_dimensions['containerWidth'] - 100 - navWidth) / itemWidth);
				itemsPerPage = (itemsPerPage < pp_images.length) ? itemsPerPage : pp_images.length;
				totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;

				// Hide the nav in the case there's no need for links
				if(totalPage == 0){
					navWidth = 0; // No nav means no width!
					$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();
				}else{
					$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();
				};

				galleryWidth = itemsPerPage * itemWidth;
				fullGalleryWidth = pp_images.length * itemWidth;
				
				// Set the proper width to the gallery items
				$pp_gallery
					.css('margin-left',-((galleryWidth/2) + (navWidth/2)))
					.find('div:first').width(galleryWidth+5)
					.find('ul').width(fullGalleryWidth)
					.find('li.selected').removeClass('selected');
				
				goToPage = (Math.floor(set_position/itemsPerPage) < totalPage) ? Math.floor(set_position/itemsPerPage) : totalPage;

				$.prettyPhoto.changeGalleryPage(goToPage);
				
				$pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');
			}else{
				$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');
				// $pp_gallery.hide();
			}
		}
	
		function _build_overlay(caller){
			// Inject Social Tool markup into General markup
			if(settings.social_tools)
				facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 

			settings.markup = settings.markup.replace('{pp_social}',''); 
			
			$('body').append(settings.markup); // Inject the markup
			
			$pp_pic_holder = $('.pp_pic_holder') , $ppt = $('.ppt'), $pp_overlay = $('div.pp_overlay'); // Set my global selectors
			
			// Inject the inline gallery!
			if(isSet && settings.overlay_gallery) {
				currentGalleryPage = 0;
				toInject = "";
				for (var i=0; i < pp_images.length; i++) {
					if(!pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)){
						classname = 'default';
						img_src = '';
					}else{
						classname = '';
						img_src = pp_images[i];
					}
					toInject += "<li class='"+classname+"'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
				};
				
				toInject = settings.gallery_markup.replace(/{gallery}/g,toInject);
				
				$pp_pic_holder.find('#pp_full_res').after(toInject);
				
				$pp_gallery = $('.pp_pic_holder .pp_gallery'), $pp_gallery_li = $pp_gallery.find('li'); // Set the gallery selectors
				
				$pp_gallery.find('.pp_arrow_next').click(function(){
					$.prettyPhoto.changeGalleryPage('next');
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				
				$pp_gallery.find('.pp_arrow_previous').click(function(){
					$.prettyPhoto.changeGalleryPage('previous');
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				
				$pp_pic_holder.find('.pp_content').hover(
					function(){
						$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();
					},
					function(){
						$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();
					});

				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				$pp_gallery_li.each(function(i){
					$(this)
						.find('a')
						.click(function(){
							$.prettyPhoto.changePage(i);
							$.prettyPhoto.stopSlideshow();
							return false;
						});
				});
			};
			
			
			// Inject the play/pause if it's a slideshow
			if(settings.slideshow){
				$pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
				$pp_pic_holder.find('.pp_nav .pp_play').click(function(){
					$.prettyPhoto.startSlideshow();
					return false;
				});
			}
			
			$pp_pic_holder.attr('class','pp_pic_holder ' + settings.theme); // Set the proper theme
			
			$pp_overlay
				.css({
					'opacity':0,
					'height':$(document).height(),
					'width':$(window).width()
					})
				.bind('click',function(){
					if(!settings.modal) $.prettyPhoto.close();
				});

			$('a.pp_close').bind('click',function(){ $.prettyPhoto.close(); return false; });


			if(settings.allow_expand) {
				$('a.pp_expand').bind('click',function(e){
					// Expand the image
					if($(this).hasClass('pp_expand')){
						$(this).removeClass('pp_expand').addClass('pp_contract');
						doresize = false;
					}else{
						$(this).removeClass('pp_contract').addClass('pp_expand');
						doresize = true;
					};
				
					_hideContent(function(){ $.prettyPhoto.open(); });
			
					return false;
				});
			}
		
			$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){
				$.prettyPhoto.changePage('previous');
				$.prettyPhoto.stopSlideshow();
				return false;
			});
		
			$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){
				$.prettyPhoto.changePage('next');
				$.prettyPhoto.stopSlideshow();
				return false;
			});
			
			_center_overlay(); // Center it
		};

		if(!pp_alreadyInitialized && getHashtag()){
			pp_alreadyInitialized = true;
			
			// Grab the rel index to trigger the click on the correct element
			hashIndex = getHashtag();
			hashRel = hashIndex;
			hashIndex = hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);
			hashRel = hashRel.substring(0,hashRel.indexOf('/'));

			// Little timeout to make sure all the prettyPhoto initialize scripts has been run.
			// Useful in the event the page contain several init scripts.
			setTimeout(function(){ $("a["+pp_settings.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger('click'); },50);
		}
		
		return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize); // Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once
	};

	function getHashtag(){
		var url = location.href;
		hashtag = (url.indexOf('#prettyPhoto') !== -1) ? decodeURI(url.substring(url.indexOf('#prettyPhoto')+1,url.length)) : false;
		if(hashtag){  hashtag = hashtag.replace(/<|>/g,''); }
		return hashtag;
	};
	
	function setHashtag(){
		if(typeof theRel == 'undefined') return; // theRel is set on normal calls, it's impossible to deeplink using the API
		location.hash = theRel + '/'+rel_index+'/';
	};
	
	function clearHashtag(){
		if ( location.href.indexOf('#prettyPhoto') !== -1 ) location.hash = "prettyPhoto";
	}
	
	function getParam(name,url){
	  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regexS = "[\\?&]"+name+"=([^&#]*)";
	  var regex = new RegExp( regexS );
	  var results = regex.exec( url );
	  return ( results == null ) ? "" : results[1];
	}
	
})(jQuery);

var pp_alreadyInitialized = false; // Used for the deep linking to make sure not to call the same function several times.;