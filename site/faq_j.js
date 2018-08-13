$(function(){

function faqToggle(){
	faqtitle=$(this).parent().attr("title");
	if(faqtitle=='Expand Answer'){
		answer=$(this).parent().next();
		answer.addClass("faqbackground");
		answer.slideDown("slow",function(){
		  answer.removeClass("faqbackground");
		});
		$(this).parent().attr("title","Collapse Answer");
		$(this).parent().addClass("questionOver");

	}
	else{
		$(this).parent().next().slideUp("normal");
		$(this).parent().attr("title","Expand Answer");
		$(this).parent().removeClass("questionOver");
	}
	return false;
};

function faqLoad(){
	$("div.faqAnswer2").hide();
	$("h5.question a").unbind("click");
	$("h5.question a").bind("click",faqToggle);
	if($("#faqTitle:visible").length>0){
		$("#faqTitle").after("<h5 style='text-align:center;' id='clickquestiontosee'>(Click on a Question to view the Answer)</h5>");
	}

};
faqLoad();

});
