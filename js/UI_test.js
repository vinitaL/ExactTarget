var v_picture_icons =".picture_icons",
	v_sidebar_icons =".sidebar_icons",
	v_popup_container = "#popup_container",
	v_popup_help_container = "#popup_help_container",
	f_show_large_image,
	f_show_help_window;

$(document).ready(function(){

	$(v_picture_icons).hover(function(e){
		 f_show_large_image(this);
	}).click(function(e){
		 f_show_large_image(this);
	});
	
	$(v_popup_container).mouseout(function(e){
		 $(v_popup_container).hide();
	});
	
	$(v_sidebar_icons).hover(function(e){
		 alert("This element has be hovered");
	}).click(function(e){
		  alert("This element has be clicked");
	});
	
	f_show_help_window();
});

f_show_large_image = function(element) {
	var top = $(element).offset().top,
		left = $(element).offset().left;
	
	$(element).index();
		
	$(v_popup_container).css({
		top: top-20,
		left:left-40
	}).show();
};

f_show_help_window =  function(){
	var l_content;
	$.getJSON("data/help.json", function(data){
		console.log(data.help);
		$.each(data.help, function(index, value){
			l_content = '<a href="'+ value.URL +'">' + value.title + '</a><br/>';
			$(v_popup_help_container).append(l_content);
		});
		$(v_popup_help_container).css({
			top: ($(window).height() - $(v_popup_help_container).offset().top)/2,
			left: ($(window).width() - $(v_popup_help_container).offset().left)/2
		}).show();
	});

};
