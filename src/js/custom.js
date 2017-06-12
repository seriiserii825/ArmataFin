$(function () {
	/*img svg
	===============================*/
	if(!Modernizr.svg){
		$('img[src*="svg"]').attr('src', function(){
			return $(this).attr().replace('svg', 'png');
		});
	}	

	/*toggle menu
	===============================*/
	$('.toggle-menu').on('click', function(){
		$(".main-menu").slideToggle('fast');	
		$(this).children('span').toggleClass('active');
	});

	$('.main-footer .toggle-menu').on('click', function(){
		$('html, body').animate({
			scrollTop: $(document).height()
		}, 'slow');
	});

	/*equalheights
	===============================*/
	$('#js-services-content .info-wrap').equalHeights();

	/*advantages animation
	===============================*/
	$('#js-advantages .features').waypoint(function(){
		$('#js-advantages .features__item').each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.addClass('on');
			}, index*200);
		});
	}, {offset: '70%'});

	/*connection animation
	===============================*/
	$('#js-connection .features').waypoint(function(){
		$('#js-connection .features__item').each(function(index){
			var ths1 = $(this);
			setInterval(function(){
				ths1.addClass('on');
			}, index*200);
		});
	}, {offset: '70%'});

	/*slider
	===============================*/
	$('#js-slider').slick();

	/*click to top
	===============================*/
	$('.to_top').on('click', function(e){
		e.preventDefault();
		$( "html, body" ).animate({
    		scrollTop: 0
  		}, 'slow');
		});

	/*animation
	===============================*/
	$('#js-valuation .info-wrap, #js-services-content .info-wrap').addClass('wow bounce');
	$('.deal__content .row:first-child .deal__item').addClass('wow fadeInLeftBig');
	$('.deal__content .row:last-child .deal__item').addClass('wow fadeInRightBig');
	$('.home-section__title').addClass('wow zoomIn');
	$('#js-work .work__item').addClass('wow zoomIn');
	$('#js-work .work__item:nth-child(2)').attr('data-wow-delay', '.2s');
	$('#js-work .work__item:nth-child(3)').attr('data-wow-delay', '.4s');
	$('#js-work .work__item:last-child').attr('data-wow-delay', '.6s');
	$('#js-contacts form').addClass('wow flipInY');
	$('#js-contacts .contacts__item').addClass('wow fadeInLeftBig');
	$('#js-contacts .contacts__item:nth-child(2)').attr('data-wow-delay', '.5s');
	$('#js-contacts .contacts__item:nth-child(3)').attr('data-wow-delay', '1s');
	$('#js-contacts .contacts__item:last-child').attr('data-wow-delay', '1.5s');
	
	var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       300,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
	);
	wow.init();

	/*form
	===============================*/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			setTimeout(function(){
				$(".form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	/*magnificPopup
	===============================*/

	$('.btn').on('click', function(e){
		e.preventDefault();
		$('#callback h3').html($(this).text());
	}).magnificPopup({
		type: 'inline'
	});

}());

