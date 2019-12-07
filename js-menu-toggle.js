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
	$("nav.items .item").click(function() {
		$(this).toggleClass("active-block").siblings().removeClass("active-block");
	});
});



