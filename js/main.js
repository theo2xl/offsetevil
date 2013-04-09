$(document).ready(function() {
	// alert("document.ready");
    $(".dropdown dt a").click(function() {
        $(".dropdown dd ul").toggle();
    });

    $(".dropdown dd ul li a").click(function() {
        var text = $(this).html();
        $(".dropdown dt a span").html(text);
        $(".dropdown dd ul").hide();
		var amountChoice = getSelectedValue("amount-choice");
        $("#result").html("Selected value is: " + amountChoice);

		// Now call change-colors.js to change look and feel of app
		changeAppState(amountChoice);
    });

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("dropdown"))
            $(".dropdown dd ul").hide();
    });

	$("#donate").click(function(){
		alert("Donate!");
	});		
	
	$("#up-btn").click(function(){
		alert("up");
	});
	
	$("#down-btn").click(function(){
		alert("down");
	});
});

function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}
