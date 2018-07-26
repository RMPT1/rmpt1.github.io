$(function(){
				// Fix Fade Functions===================================
				jQuery.fn.fadeIn = function(speed, callback) {
								if(typeof(speed)=='function'){
												callback=speed;
												speed='normal';
								}
								return this.animate({opacity: 'show'}, speed, function() {
												if (jQuery.browser.msie)this.style.removeAttribute('filter');
												if (jQuery.isFunction(callback))callback();
								});
				};
				jQuery.fn.fadeOut = function(speed, callback) {
								if(typeof(speed)=='function'){
												callback=speed;
												speed='normal';
								}
								return this.animate({opacity: 'hide'}, speed, function() {
												if (jQuery.browser.msie)this.style.removeAttribute('filter');
												if (jQuery.isFunction(callback))callback();
								});
				};
				jQuery.fn.fadeTo = function(speed,to,callback) {
								if(typeof(speed)=='function'){
												callback=speed;
												speed='normal';
								}
								return this.animate({opacity: to}, speed, function() {
												if (to == 1 && jQuery.browser.msie)this.style.removeAttribute('filter');
												if (jQuery.isFunction(callback))callback();
								});
				};

				$.fn.delay = function(time, callback){
								jQuery.fx.step.delay = function(){};
								return this.animate({delay:1}, time, callback);
				}

				function alignBoth(){
								var ah = $(this).height();
								var aw = $(this).width();
								var ph = $('.slideshowAlign').height();
								var pw = $('.slideshowAlign').width();
								var mh = (ph - ah) / 2;
								var mw = (pw - aw) / 2;
								$(this).css('top', mh);
								$(this).css('left', mw);
								$(this).parent().hide();
				};

  var scriptLoaded=0;

  if($('.slideshow').length > 0){
    scriptLoaded=1;
        $('.slideshow').children().hide();
        $('.slideshow:first-child').show();
        //$.getScript("http://www.ptclinic.com/site/jquery.cycle.all.pack.js",function(){
        $.getScript("http://www.ptclinic.com/site/jquery.cycle.all.min.js",function(){
          $('.slideshow').each(function(i){
          $(this).cycle();
        })
        }
    );
  }

  if($('.slideshowAlign').length > 0){
    var t=setTimeout(function(){
      $('.slideshowAlign img').each(alignBoth);
      if(scriptLoaded==0){
            $.getScript("http://www.ptclinic.com/site/jquery.cycle.all.pack.js",function(){
                  $('.slideshowAlign').each(function(i){
                  $(this).cycle();
                  })
                }
            );
      }
      else{
        $('.slideshowAlign').each(function(i){
          $(this).cycle();
        });
      }
    },1000);
  }

		if($('.newsfeed').length){
				var params=$('.newsfeed').metadata();
				$('.newsfeed').load('getnews.php',params,function(){var newheight=$('#newsfeedarea').height();$('.newsfeed').height(newheight);$('a',$('#newsfeedarea')).not('.medlink').attr('target','_blank');});
//				$.ajax({
//        data: params,
//        type: "POST",
//        url: 'getnews.php',
//        timeout: 20000,
//        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
//        //dataType: 'text',
//        success: function(data){
//										$('.newsfeed').html(data);
//										var newheight=$('#newsfeedarea').height();
//										$('.newsfeed').height(newheight);
//										$('a',$('#newsfeedarea')).not('.medlink').attr('target','_blank');
//								}
//				});
  }


});
