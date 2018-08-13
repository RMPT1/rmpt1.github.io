function urldecode (str) {
    return decodeURIComponent(str).replace(/\+/g, ' ').replace(/\\/g,'');
}

function mm1(mb){
		var mdata=mb.metadata();
		if(mdata.type!=undefined)mdata.name=mdata.type;
		//console.debug(mdata);
		$.getJSON("http://ptclinic.com/site/minibannerget.php?name="+mdata.name+"&jsoncallback=?",function(data){makemini(mb,mdata,data);});
}


function makemini(mb,mdata,mdata1){
			//console.debug(mb,mdata,mdata1);
			t=mdata1.topoffset;
			o=mdata1.leftoffset;
			s1=mdata1.headtextsize;
			s2=mdata1.bodytextsize;
			ww=mdata1.textwidth;
			o2=mdata1.textoffset;
			align=mdata1.textalign;
			txt1=urldecode(mdata1.headtext);
			txt2=urldecode(mdata1.bodytext);

			if(mdata.t!=undefined)t=mdata.t;
			if(mdata.o!=undefined)o=mdata.o;
			if(mdata.s1!=undefined)s1=mdata.s1;
			if(mdata.s2!=undefined)s2=mdata.s2;
			if(mdata.ww!=undefined)ww=mdata.ww;
			if(mdata.o2!=undefined)o2=mdata.o2;
			if(mdata.align!=undefined)align=mdata.align;
			if(mdata.txt1!=undefined)txt1=mdata.txt1;
			if(mdata.txt2!=undefined)txt2=mdata.txt2;
			var w=240;
			if(mdata.size!=undefined){
						w=mdata.size;
			}else {
						w=mdata1.defaultwidth*1;
			}
			var h=w/2;
			mb.css({'width':w,'height':h,'text-decoration':'none','position':'relative','display':'block','overflow':'hidden'});
			if(mdata.overlay!=undefined){
				var alpha='.5';
				if(mdata.alpha!=undefined)alpha=mdata.alpha;
				var msalpha=alpha*100;
				mb.html("<div class='mboverlay' style='width:100%;height:100%;background-color:"+mdata.overlay+";opacity:"+alpha+";filter:alpha(opacity="+msalpha+");position:absolute;'></div><img src='"+mdata1.img+"' style='width:"+w+"px;height:"+h+"px;' />");
			}else{
				mb.html("<img src='"+mdata1.img+"' style='width:"+w+"px;height:"+h+"px;' />");
			}
			bodycolor=mdata1.bodycolor;
			c=mdata1.headcolor;
			color="color:"+c+";";
			$("<h1 id='mbcolor' style='display:none;'>MB</h1>").appendTo('body');
			if(mdata.color!=undefined){
						color="color:"+mdata.color+";";
						bordercolor=mdata.color;
			} else {
						bordercolor=$('#mbcolor').css('color');
						if(mdata1.headcolor=='none'){
									color="color:"+$('#mbcolor').css('color')+";";
						} else {
									color="color:"+mdata1.headcolor+";";
						}
			}
			//if(mdata.border!=undefined){
			//
			//} else {
			//			mb.css({'border':'2px solid '+bordercolor});
			//}
			var b=Math.ceil((w/10)*1.1);
			var bo=(w/b);
			var x=10;
			var fontsize=b*s1;
			var fontsize2=b*s2;
			var fs="line-height:"+fontsize+"px;font-size:"+fontsize+"px;text-align:"+align+";";
			var fs2="font-size:"+fontsize2+"px;text-align:"+align+";";
			var off="top:"+bo*t+"px;"+align+":"+bo*o+"px;";

			var mbtextwidth="width:"+(w*ww)+"px;";
			var mbheadwidth="width:"+(w-(bo*o))+"px;"
			mb.append("<div class='mbhead' style='position:absolute; z-index:10; display:none; font-weight:bold; text-decoration:none; border:0 !important; "+fs+color+off+mbheadwidth+"'>"+txt1+"</div>");
			var headheight=$('.mbhead',mb).height();
			var top2=headheight+(bo*o2);
			//var top2=(bo*t)+(bo*o2)+fontsize;
			var off2="top:"+top2+"px;"+align+":"+bo*o+"px;";
			mb.append("<div class='mbtext' style='position:absolute;z-index:10; display:none;font-weight:bold; text-decoration:none; border:0 !important; font-weight:normal;"+fs2+off2+mbtextwidth+"color:"+bodycolor+";'>"+txt2+"</div>");
			if(mdata.fx==undefined){
						mb.find('.mbhead,.mbtext').delay(1000).animate({opacity:'show'},2000,function(){if (jQuery.browser.msie)this.style.removeAttribute('filter');});
			} else {
						var mbhead=mb.find('.mbhead');
						if(mdata.fx=='size'){
									var fs=mbhead.css('fontSize');
									fs1=fs.replace(/px/,'');
									var fsbig=fs1*6;
									mbhead.css({fontSize:fsbig});
									mbhead.animate({fontSize:fs,opacity:'show'},2000,function(){if (jQuery.browser.msie)this.style.removeAttribute('filter');});
									mb.find('.mbtext').delay(1000).animate({opacity:'show'},2000,function(){if (jQuery.browser.msie)this.style.removeAttribute('filter');});
						} else if(mdata.fx=='fast'){
									mb.find('.mbhead,.mbtext').animate({opacity:'show'},100,function(){if (jQuery.browser.msie)this.style.removeAttribute('filter');});
						}	else {
									mb.find('.mbhead,.mbtext').delay(1000).animate({opacity:'show'},2000,function(){if (jQuery.browser.msie)this.style.removeAttribute('filter');});
						}
			}
			mb.hover(
						function(){
									$(this).fadeTo(200,.5);
						},
						function(){
									$(this).fadeTo(200,1);
						}
			);
}
function initminibanners(){
			$('.minibanner').each(function(){
						var mb=$(this);
						mm1(mb);
			});
}
