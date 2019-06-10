//wait until page is ready
$(document).ready(function() {
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow");
	});
});