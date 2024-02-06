 $(document).ready(function() {
     var image_array = ["DSI_IMG_LANDING_06.png", "DSI_IMG_LANDING_01.png", "DSI_IMG_LANDING_02.png", "DSI_IMG_LANDING_03.png",  "DSI_IMG_LANDING_04.png",  "DSI_IMG_LANDING_05.png"]; // Füge hier die Pfade zu deinen Bildern hinzu
	 var link_array = ["no", "#anchor_orchestrate", "#anchor_resilient", "#anchor_situations", "#anchor_possibilities", "#anchor_channels"];
     var tempImgIndex = 0;
	 var folder = "";
	 var temp_anchor = "";

      function changeImage() {
		  if($(window).width()<700){
			  folder="ani_mobile/";
		  }else{
			  folder="ani_desktop/";
		  }
        // Ändere den Bildpfad des Divs
        $("#animation img").attr("src","img/"+folder+image_array[tempImgIndex]);
		temp_anchor = link_array[tempImgIndex];

        // Aktualisiere den Index für das nächste Bild
        tempImgIndex = (tempImgIndex + 1) % image_array.length;
		
      }

      // Starte die Bildwechsel-Funktion alle 5 Sekunden
	 setInterval(changeImage, 5000);
	 changeImage();
	 
	  $("#animation img").click(function(){
      	var animationDuration = 1000;
		  if(temp_anchor!="no"){
		  
			$(temp_anchor).find(".arrow").toggleClass("rotate");
		
			var dropdown_content = $(temp_anchor).find('.dropdown_content');
			dropdown_content.each(function(){
			 	$(this).toggleClass("expanded");
			});

      		$('html, body').animate({
        		scrollTop: $(temp_anchor).offset().top-68
			}, animationDuration);
		  }
		  
	  });
    });