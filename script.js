//Bubble Wrap

$(document).ready(function() {

//Bubble loop -- create x bubbles
	var counter = 0;

	while(counter < 238) {
		counter = counter + 1;

		$("body").append("<div class='size blue circle sound'></div>");
	}

//Clicking stuff
	var audio = new Audio("pop.mp3");

	$(document).on("click",".circle",function() {

		if(! $(this).hasClass("popped")) {

			//Pop!
	    	audio.play();

			$(this).addClass("popped").removeClass("sound");

			$(this).empty().append("<div class='size white star popped'></div>");

		}

		if($(".star").length > 237) {
			location.reload();
		};

	});

});