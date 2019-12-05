$(document).ready(function () {
	$("#menu-toggle").click(function() {
		$(".site-nav-action").addClass("active");
		$(".site-nav-action").removeClass("close");
	});
	$("#close-menu").click(function () {
		$(".site-nav-action").addClass("close");
		$(".site-nav-action").removeClass("active");
	});
})