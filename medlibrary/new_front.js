jQuery.preloadImages = function(){
			for(var i = 0; i<arguments.length; i++)	{
						jQuery("<img>").attr("src", arguments[i]);
			}
}
$.preloadImages("http://www.ptclinic.com/medlibrary/bodyNew/neck.gif", "http://www.ptclinic.com/medlibrary/bodyNew/ankle.gif","http://www.ptclinic.com/medlibrary/bodyNew/elbow.gif","http://www.ptclinic.com/medlibrary/bodyNew/shoulder.gif","http://www.ptclinic.com/medlibrary/bodyNew/knee.gif","http://www.ptclinic.com/medlibrary/bodyNew/hip.gif","http://www.ptclinic.com/medlibrary/bodyNew/wrist.gif","http://www.ptclinic.com/medlibrary/bodyNew/back.gif","http://www.ptclinic.com/medlibrary/bodyNew/leg.gif","http://www.ptclinic.com/medlibrary/bodyNew/button_over.gif");
