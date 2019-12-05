$(document).ready(function () {
	$("#menu-toggle").click(function() {
		$(".overlay").addClass("overlay-toggle");
		$(".site-nav-action").addClass("active");
		$(".site-nav-action").removeClass("close");
	});
	$("#close-menu").click(function () {
		$(".overlay").removeClass("overlay-toggle");
		$(".site-nav-action").addClass("close");
		$(".site-nav-action").removeClass("active");
	});
})



$(document).ready(function () {
	$("#close-menu-lv2").click(function() {
		$(".nav-lv2-wrapper").addClass("display-none");
	});
})