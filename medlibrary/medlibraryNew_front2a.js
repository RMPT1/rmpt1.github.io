function bodyroll(){
	$(".bodypart").click(function(){
		part=$(this).attr('title');
		window.location='/library_'+part+'/';
		})
		$(".bodypart").hover(function(){

		var part;
		part=$(this).attr("title");
		//alert(part);
		$('#bodyback').css('background-image',"url(http://ptclinic.com/medlibrary/bodyNew/"+part+".gif)");
		$('#bodyTextButton').addClass("bover");

		part = (part=='neck') ? 'Head/Neck' : part;
		part = (part=='wrist') ? 'Wrist/Hand' : part;
		part = (part=='hip') ? 'Hip/Thigh' : part;
		part = (part=='ankle') ? 'Ankle/Foot' : part;
		firstLetterPart = part.charAt(0).toUpperCase();
		restPart = part.substr (1, part.length);
		part = firstLetterPart + restPart;
		$('#bodyText').html(part);
	},function(){
		$('#bodyback').css('background-image',"url(http://ptclinic.com/medlibrary/bodyNew/left.gif)");
		$('#bodyTextButton').removeClass("bover");
		$('#bodyText').html("...");
		defaultBody();
	});
}

	function defaultBody(){
		var defaultPart=$("#list").attr('title');

		switch(defaultPart)
		{
			case "systemic":
			case "health":
			case "treatments":
			case "exercise":
			case "md":
			case "custom":
			defaultButton(defaultPart);
			break;
			case "none":
			break;
			default:
			defaultArea(defaultPart);
		}
	};
	function defaultArea(area){
		$('#bodyback').css('background-image',"url(http://ptclinic.com/medlibrary/bodyNew/"+area+".gif)");
		var part=area;
		part = (part=='neck') ? 'Head/Neck' : part;
		part = (part=='wrist') ? 'Wrist/Hand' : part;
		part = (part=='hip') ? 'Hip/Thigh' : part;
		part = (part=='ankle') ? 'Ankle/Foot' : part;
		firstLetterPart = part.charAt(0).toUpperCase();
		restPart = part.substr (1, part.length);
		part = firstLetterPart + restPart;
		$('#bodyText').html(part);
		$('#bodyTextButton').addClass("bover");
	};
	function defaultButton(button){
		$('#'+button+'Link').parent().addClass("bover");

	};


$(function(){
		defaultBody();
		bodyroll();
	$('.buttonTextLink a').hover(function(){
		$(this).parent().removeClass("bnorm").addClass("bover");
	},function(){
		$(this).parent().removeClass("bover").addClass("bnorm");
		defaultBody();
	});

});
