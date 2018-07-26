function dofp(){
	if(fpkey=='notset'){
				var player="http://s3.ptclinic.com/ptclinic/flowplayer/flowplayerNC.swf";
	}
	else{
				var player="http://s3.ptclinic.com/ptclinic/flowplayer/flowplayer.swf";
	}
   if($('.fps').length > 0){
		$('.fps').each(function(){
			var fpshref=$(this).attr('href');
			if(fpshref.substring(1,-1)=='/')fpshref=fpshref.substring(1);
			if(fpshref.indexOf('.flv')>-1){
				fpshref='flv:'+fpshref.replace('.flv','');
				$(this).attr('href',fpshref);
			}
		});
						fpplayer=$f(".fps", {src:player,wmode:'transparent'},fpsettings);
			}
   if($('.fp').length > 0){
						fpsettings.clip= {	autoPlay: true,	accelerated:true,baseUrl:'http://s3.ptclinic.com'};
						delete fpsettings.plugins.s3v;
						fpplayer=$f(".fp", {src:player,wmode:'transparent'},fpsettings);
			}
   if($('.fpmulti').length > 0){
						fpsettings.clip= {	autoPlay: false,	accelerated:true,baseUrl:'http://s3.ptclinic.com'};
						delete fpsettings.plugins.s3v;
						fpplayer=$f(".fp", {src:player,wmode:'transparent'},fpsettings);
			}
   if($('.fpnone').length > 0){
						fpsettings.clip= {	autoPlay: true,	accelerated:true,baseUrl:'http://s3.ptclinic.com'};
						delete fpsettings.plugins.s3v;
						fpsettings.plugins.controls=null;
						fpsettings.play={};
						fpsettings.play.opacity=0;
						fpplayer=$f(".fpnone", {src:player,wmode:'transparent'},fpsettings);
			}
}


//Main Calls
$(function(){
  if($('.fps,.fpsnone,.fpmulti,.fp,.fpnone').length > 0){
			$.getScript('http://s3.ptclinic.com/ptclinic/flowplayer/fpjs.js',dofp);
		}
});
var fpplayer,fpc;
fpsettings={
			key:fpkey,
			clip: {	autoPlay: true,		provider:'s3v'},
			plugins: {
						s3v:{url:'http://s3.ptclinic.com/ptclinic/flowplayer/fprtmp.swf',
									netConnectionUrl:'rtmp://s3video.ptclinic.com/cfx/st'},
						controls:{
									url:'fpcontrols.swf',
									borderRadius:'10',
									all:false,
									play:true,
									stop:true,
									volume:true,
									scrubber:true,
									time:true,
									mute:true
						}
			},
			canvas: {backgroundColor:'transparent',backgroundGradient:'none',opacity:0}
};
fpc=fpsettings.plugins.controls;
