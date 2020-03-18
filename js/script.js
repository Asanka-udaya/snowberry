// scripts
jQuery(document).ready(function() {
	jQuery('.main-visual .slider-wrapper').slick({
		arrows: false,
		fade: true,
		autoplay: true
	});

	jQuery('.scroll-btn').click(function() {
		var scrollSection = jQuery(this).attr('href');
		$('html, body').animate({
        	scrollTop: $(scrollSection).offset().top
    	}, 1000);
	});
});