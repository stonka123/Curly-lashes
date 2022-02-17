$(document).ready(function () {
	$('.gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: true,
		dots: false,
		mobileFirst: true,
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	})
})
