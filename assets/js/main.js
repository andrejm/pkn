jQuery(document).ready(function($) {

	/*
	* SVG 4 everybody
	*/

	svg4everybody({
	    polyfill: true // polyfill <use> elements for External Content
	});

	/*
	* Slick carousel
	*/

	$('.js-other-speakers').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: false,
	});


});
