function firemovie(){
  var flv=$(this).attr('title');
  $(this).flash(
      { src: 'http://www.ptclinic.com/site/player.swf',
        width: 324,
        height: 280,
        flashvars: { menu: 'false', wmode: 'transparent' ,path:flv}
      },
      { version: 9 }
  );
}

function insertmovie(){
  $('.swfmovie').each(function(){
      var swf=$(this).attr('title');
      var moviewidth=$(this).width();
      var movieheight=$(this).height();
      $(this).flash(
          { src: swf,
						wmode:'transparent',
						allowScriptAccess:"always",
            width: moviewidth,
            height: movieheight},
          { version: 6 }
      );
  });
  jmovie2test();
}

function placeholdermovie(){
        var moviepath=$('#jmovie2').attr('title');
				autostartValue='true';
	if($('#jmovie2').hasClass('nostart')){
		autostartValue='false';
	}
	if($('#jmovie2').length > 0){
	      var moviewidth=$('#jmovie2').width();
      var movieheight=$('#jmovie2').height();
  $('#jmovie2').flash(
      { src: 'http://www.ptclinic.com/site/player42.swf',
        width: 324,
        height: 260,
				id:'jmovie2video',
				name:'jmovie2video',
				allowscriptaccess:'always',
        flashvars: { autostart:autostartValue,usefullscreen:'false',icons:'false',thumbsinplaylist:'false',javascriptid:'jstest',enablejs:'true',file:moviepath,stretching:'exactfit'}
      },
      { version: 8 }
  );
	}
}

var player;

function playerReady(obj) {
	var id = obj['id'];
	var version = obj['version'];
	var client = obj['client'];
	//alert('the videoplayer '+id+' has been instantiated');
	player = document.getElementById(id);
	player.addModelListener("STATE","moviedone");
};

function moviedone(obj){
	if(obj.newstate=='COMPLETED'){
		var md=$('#jmovie2done').html();$('#jmovie2').html(md);
	}
}

function jmovie2test(){
    if($('#jmovie2').length > 0){
      placeholdermovie();
  }
}

//Main Calls
$(function(){
  if($('.jmovie').length > 0||$('.swfmovie').length > 0||$('#jmovie2').length > 0){
		if($.erehabmovie===undefined){
			$.getScript('http://ptclinic.com/site/jquery.flash.min.js',domovies);
		}
		else{
			domovies();
		}
	}
  function domovies(){
    if($('.jmovie').length > 0){
        $('.jmovie').each(function(i){
          $(this).append("<br/><img src='http://ptclinic.com/site/video_ctrl.gif' width='324' height='40' alt='video_control' style='border:0;'/>");
          $(this).width(324).height(280).click(firemovie).css('cursor','pointer');
        })
    };
    if($('.swfmovie').length > 0){
        insertmovie();
    }
    else{
      jmovie2test();
    }
  }
})
