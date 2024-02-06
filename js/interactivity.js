// JavaScript Document
jQuery(function($) {
	
	var filler_height = ($(document).height() - ($('#anchor_about').offset().top + $(window).height()))*-1;
	if(filler_height < 10){
		filler_height = 10;
	}
	
	$('.filler').css( "height", filler_height+"px" );
	
	$( window ).on( "resize", function() {
		resize_video();
	} );
	
	function resize_video(){
		var new_video_width = $('.video_content').parent().width() + "px";
		var new_video_height = ($('.video_content').parent().width()/640 * 360)+ "px";
		$('.video_content').attr("width", new_video_width);
		$('.video_content').attr("height", new_video_height);
	}
	
	$('.dropdown_click').click(function (e) {
		$(e.target).find(".arrow").toggleClass("rotate");
		
		var dropdown_content = $(e.target).parent().parent().find('.dropdown_content');
		dropdown_content.each(function(){
			 $(this).toggleClass("expanded");
		});
		
	});
	    
	
	$(".menu_item").click(function () {
		
		var target_id= $(this).attr("id");
		var regex = /click_(.*)/;
  		var match = target_id.match(regex);
	
		var targetId = "#anchor_"+match[1];
      	var animationDuration = 1000;

      	$('html, body').animate({
        	scrollTop: $(targetId).offset().top-34
		}, animationDuration);
		
    });
	
	
	$(document).scroll(function(){
		var offset_project = $("#anchor_project").offset().top;
		var offset_news = $("#anchor_news").offset().top;
		var offset_insights = $("#anchor_insights").offset().top;
		var offset_about =  $("#anchor_about").offset().top;
		$('.menu_item').removeClass("white_on_blue");
		
    if($(this).scrollTop() >= offset_about - 35) {
		$("#click_about").addClass("white_on_blue");
    } else if($(this).scrollTop() >= offset_insights - 35){
		$("#click_insights").addClass("white_on_blue");$
	} else if($(this).scrollTop() >= offset_news - 35){
		$("#click_news").addClass("white_on_blue");		  
	} else if($(this).scrollTop() >= offset_project - 35){
		$("#click_project").addClass("white_on_blue");  
	}
  });
	
	
	
	resize_video();
	
});