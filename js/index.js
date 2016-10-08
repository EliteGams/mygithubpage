jQuery(document).ready(function () {
    $(".menu").onclick(function() {
		$(".menu").fadeTo("slow", 1);
	});

	$(".menu").mouseleave(function() {
		$(".menu").fadeTo('slow', 0.25);
	});
});