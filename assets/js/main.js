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

	$('.js-home-slider').slick({
		// slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: false,
		arrows: true,
		variableWidth: true,
		nextArrow: '<button type="button" class="home-slider__next slider-button js-slider-next"><svg class="icon icon--arrow-right" viewBox="0 0 20 20"><path d="M7.354 18.354l-.707-.708L14.293 10 6.646 2.354l.708-.708L15.707 10z"></path></svg></button>',
		prevArrow: '<button type="button" class="home-slider__prev slider-button js-slider-prev"><svg class="icon icon--arrow-left" viewBox="0 0 20 20"><path d="M12.646 18.354L4.293 10l8.353-8.354.707.708L5.707 10l7.647 7.646z"></path></svg></button>',
		// centerMode: true
	});


});
