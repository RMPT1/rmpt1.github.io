function putMovie(divID,newContent){
	$("#"+divID).html(newContent);
}

// Color Conversion functions from highlightFade
// By Blair Mitchelmore
// http://jquery.offput.ca/highlightFade/

// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
	var result;

	// Check if we're already dealing with an array of colors
	if ( color && color.constructor == Array && color.length == 3 )
		return color;

	// Look for rgb(num,num,num)
	if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
		return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

	// Look for rgb(num%,num%,num%)
	if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
		return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

	// Look for #a0b1c2
	if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
		return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

	// Look for #fff
	if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
		return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

	// Otherwise, we're most likely dealing with a named color
	return colors[jQuery.trim(color).toLowerCase()];
}

$.fn.colorswap=function(){
	return this.each(function(){
		var color=$(this).css("color");
		color=String(getRGB(color));
		result=color.split(',');
		result[0]=(+result[0]);
		result[1]=(+result[1]);
		result[2]=(+result[2]);
		o1=(+result[0]);
		o2=(+result[1]);
		o3=(+result[2]);
		result=result.sort(function(a,b){return a - b});
		top1=result[0];
		if(o1>160 && o2 >160 && o2 >160){
			o11=100;
			o21=100;
			o31=100;
		}
		else{
			o11=o1;
			o21=o2;
			o31=o3;
		}
		if(o1==o2 && o2==o3)top1=0;
		if(o1!=top1){
			o1=o11;
		}
		else{
			top1=0;
		}
		if(o2!=top1){
			o2=o21;
		}
		else{
			top1=0;
		}
		if(o3!=top1)o3=o31;
		o1s=o1.toString(16);
		o2s=o2.toString(16);
		o3s=o3.toString(16);
		if(o1s=='0')o1s='00';
		if(o2s=='0')o2s='00';
		if(o3s=='0')o3s='00';
		//color=o1.toString(16)+o2.toString(16)+o3.toString(16);
		color=o1s+o2s+o3s;
		$(this).css("color","#"+color);
	})
};

function videoButton_over(buttonID)
{
$("#"+buttonID).attr("src","http://ptclinic.com/medlibrary/body/video_over.gif");
}
function videoButton_out(buttonID)
{
		$("#"+buttonID).attr("src","http://ptclinic.com/medlibrary/body/video_norm.gif");
}

function addScript( url ) {
 var script = document.createElement( 'script' );
 script.type = 'text/javascript';
 script.charset = 'utf-8';
 script.src = url;
 document.getElementsByTagName('head')[0].appendChild( script );
 };

$(function(){
function scroller(){
	pagehref=$(this).attr("href");
	hrefparts = pagehref.split(/\//);
	pagehref=hrefparts[hrefparts.length-1];
	$(pagehref).ScrollTo('fast');
	return false;
}

function statelinks(){
	$("a.statelink").each(function() {
			$(this).bind("click",function(){titlelink=$(this).attr("title");$("#"+titlelink).ScrollTo('normal');return false;});
	});
	$('#statecodes').slideDown("slow").animateColor(1500, {backgroundColor:['#ff0','#fff']});
	$("a.toplink").bind("click",function(){$("#clinicTop").ScrollTo('normal');return false;});
	ajaxlinks();
};


//hashparts=window.location.hash.split(/_/);
//if(hashparts[2]==72){
//	statelinks();
//}
});

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
