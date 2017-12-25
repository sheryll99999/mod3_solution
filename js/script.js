$(document).ready(function() {
    // all custom jQuery will go here

    /*Scroll to top when arrow up clicked BEGIN*/
	$(window).scroll(function() {
    	var height = $(window).scrollTop();
    	if (height > 100) {
        	$('#Go2Top').fadeIn();
    	} else {
        	$('#Go2Top').fadeOut();
    	}
	});
	$(document).ready(function() {
    	$("#Go2Top").click(function(event) {
        	event.preventDefault();
        	$("html, body").animate({ scrollTop: 0 }, "slow");
        	return false;
    	});
	});
 /*Scroll to top when arrow up clicked END*/

});
