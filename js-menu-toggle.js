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

	$("nav.items .item > a").click(function() {
		$(this).parent().toggleClass("active-block").siblings().removeClass("active-block");
	});
})

$(document).ready(function() {
	$(".close-menu-lv2").click(function() {
		$("nav.items .item").removeClass("active-block");
	})
});

