/*
Template Name: Ceremony
Author: VictorTheme
Version: 1.0
Email: support@victortheme.com
*/

(function($){
'use strict';

/*----- ELEMENTOR LOAD FUNTION CALL ---*/

$( window ).on( 'elementor/frontend/init', function() {
	//Obra Owl Carousel Slider Script
	var owl_carousel = function(){
		$('.owl-carousel').each( function() {
    var $carousel = $(this);
    var $items = ($carousel.data('items') !== undefined) ? $carousel.data('items') : 1;
    var $items_tablet = ($carousel.data('items-tablet') !== undefined) ? $carousel.data('items-tablet') : 1;
    var $items_mobile_landscape = ($carousel.data('items-mobile-landscape') !== undefined) ? $carousel.data('items-mobile-landscape') : 1;
    var $items_mobile_portrait = ($carousel.data('items-mobile-portrait') !== undefined) ? $carousel.data('items-mobile-portrait') : 1;
    $carousel.owlCarousel ({
      loop : ($carousel.data('loop') !== undefined) ? $carousel.data('loop') : true,
      items : $carousel.data('items'),
      margin : ($carousel.data('margin') !== undefined) ? $carousel.data('margin') : 0,
      dots : ($carousel.data('dots') !== undefined) ? $carousel.data('dots') : true,
      nav : ($carousel.data('nav') !== undefined) ? $carousel.data('nav') : false,
      navText : ["<div class='slider-no-current'><span class='current-no'></span><span class='total-no'></span></div><span class='current-monials'></span>", "<div class='slider-no-next'></div><span class='next-monials'></span>"],
      autoplay : ($carousel.data('autoplay') !== undefined) ? $carousel.data('autoplay') : false,
      autoplayTimeout : ($carousel.data('autoplay-timeout') !== undefined) ? $carousel.data('autoplay-timeout') : 5000,
      animateIn : ($carousel.data('animatein') !== undefined) ? $carousel.data('animatein') : false,
      animateOut : ($carousel.data('animateout') !== undefined) ? $carousel.data('animateout') : false,
      mouseDrag : ($carousel.data('mouse-drag') !== undefined) ? $carousel.data('mouse-drag') : true,
      autoWidth : ($carousel.data('auto-width') !== undefined) ? $carousel.data('auto-width') : false,
      autoHeight : ($carousel.data('auto-height') !== undefined) ? $carousel.data('auto-height') : false,
      center : ($carousel.data('center') !== undefined) ? $carousel.data('center') : false,
      responsiveClass: true,
      dotsEachNumber: true,
      smartSpeed: 600,
      responsive : {
        0 : {
          items : $items_mobile_portrait,
        },
        480 : {
          items : $items_mobile_landscape,
        },
        768 : {
          items : $items_tablet,
        },
        992 : {
          items : $items,
        }
      }
    });
    var totLength = $('.owl-dot', $carousel).length;
    $('.total-no', $carousel).html(totLength);
    $('.current-no', $carousel).html(totLength);
    $carousel.owlCarousel();
    $('.current-no', $carousel).html(1);
    $carousel.on('changed.owl.carousel', function(event) {
      var total_items = event.page.count;
      var currentNum = event.page.index + 1;
      $('.total-no', $carousel ).html(total_items);
      $('.current-no', $carousel).html(currentNum);
      $(".photoshoot-item").mouseenter(function(){
        $(this).addClass('crmny-hover');
      });
      $(".photoshoot-item").mouseleave(function(){
        $(this).removeClass('crmny-hover');
      });
    });
  });

	}; // end

	var item_hover_class = function( selector ){
		$(selector).on({
		  mouseenter : function() {
			$(this).addClass('crmny-hover');
		  },
		  mouseleave : function() {
			$(this).removeClass('crmny-hover');
		  }
		});
	};

	//Crmny Set Equal Height Script
  $('.crmny-item').matchHeight ({
    property: 'height'
  });

	//Ceremony client
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_client.default', function($scope, $){
		owl_carousel();
	} );

	//Ceremony Blog
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_blog.default', function($scope, $){
		// Ceremony Hover Script
		item_hover_class('.blog-item');

		//Crmny Hover Animtion Script
	  $('.direction-hover .blog-item').hoverdir ({
	    hoverElem: '.blog-overlay',
	    speed: 350,
	  });

	} );

	//Ceremony Features
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_feature.default', function($scope, $){
		// Ceremony Hover Script
		item_hover_class('.feature-item');

	});

  //Ceremony Image With Animation
  elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_image.default', function($scope, $){
   $('.crmny-animate-image').each( function() {
      var $animate = $(this);
      var max = $animate.data('max');
      var speed = $animate.data('speed');
      var scale = $animate.data('scale');
      var perspective = $animate.data('perspective');
      var glare = $animate.data('glare');
      VanillaTilt.init(document.querySelector(".crmny-animate-image"),{
        max: max,
        speed: speed,
        scale: scale,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        perspective: perspective,
        glare: glare
      });
    });

  });

  // Ceremony Preloader Script
  $('.crmny-preloader').fadeOut(500);

	// Ceremony Countdown
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_countdown.default', function($scope, $){
  	//Crmny Countdown Script
    $('.crmny-countdown.static, .crmny-countdown.dynamic').each( function() {
      var $countdown = $(this);
      var date = $countdown.data("date");
      var format = $countdown.data("format");
      var count_format = format ? format : 'dHMS';
      // Plural Labels
      var years = $countdown.data("years");
      var months = $countdown.data("months");
      var weeks = $countdown.data("weeks");
      var days = $countdown.data("days");
      var hours = $countdown.data("hours");
      var minutes = $countdown.data("minutes");
      var seconds = $countdown.data("seconds");
      // Singular Labels
      var year = $countdown.data("year");
      var month = $countdown.data("month");
      var week = $countdown.data("week");
      var day = $countdown.data("day");
      var hour = $countdown.data("hour");
      var minute = $countdown.data("minute");
      var second = $countdown.data("second");

      var austDay = new Date();
      austDay = new Date(date);

      $countdown.countdown({
        until: austDay,
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second],
        format: count_format,
      });
    });

    // Crmny Fake COuntdown Script
    $('.crmny-countdown.fake').each( function() {
      var $countdown = $(this);
      var date = $countdown.data("date");
      var today = new Date();
      var newdate = new Date();
      newdate.setDate(today.getDate() + date);
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      today =  new Date(newdate);


      // Plural Labels
      var years = $countdown.data("years");
      var months = $countdown.data("months");
      var weeks = $countdown.data("weeks");
      var days = $countdown.data("days");
      var hours = $countdown.data("hours");
      var minutes = $countdown.data("minutes");
      var seconds = $countdown.data("seconds");
      // Singular Labels
      var year = $countdown.data("year");
      var month = $countdown.data("month");
      var week = $countdown.data("week");
      var day = $countdown.data("day");
      var hour = $countdown.data("hour");
      var minute = $countdown.data("minute");
      var second = $countdown.data("second");

      $('.crmny-countdown.fake').countdown({
        until: today,
        labels: [years,months,weeks,days,hours,minutes,seconds],
        labels1: [year,month,week,day,hour,minute,second],
      });
    });

	} );

	// Ceremony Friends
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_friends.default', function($scope, $){
		// Ceremony Hover Script
		item_hover_class('.friend-item');
		// Ceremony Masonry Filter Script
		var $grid = $('.crmny-friends-masonry').isotope ({
      itemSelector: '.friends-masonry-item',
      layoutMode: 'packery',
      percentPosition: true,
      isFitWidth: true,
    });
    var filterFns = {
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };
    $('.friends-masonry-filters').on('click', 'li a', function() {
      var filterValue = $(this).attr('data-filter');
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
    });
    $('.friends-masonry-filters').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'li a', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });

    $('.crmny-friends .friends-masonry-filters ul li:first-child a').addClass('active');
    $('.crmny-friends .friends-masonry-filters ul li:first-child a').click();

		//Crmny Hover Animtion Script
	  $('.direction-hover .friend-item').hoverdir ({
	    hoverElem: '.crmny-social',
	    speed: 350,
	  });
	} );

	// Ceremony Gallery Slider
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_gallery_slider.default', function($scope, $){
		owl_carousel();
    // Ceremony Hover Script
    item_hover_class('.photoshoot-item');
	} );

  // Ceremony Banner Slider
  elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_slider.default', function($scope, $){
   //Crmny Swiper Slider Script
    var animEndEv = 'webkitAnimationEnd animationend';
    var swipermw = $('.swiper-container.swiper-mousewheel').length ? true : false;
    var swiperkb = $('.swiper-container.swiper-keyboard').length ? true : false;
    var swipercentered = $('.swiper-container.swiper-center').length ? true : false;
    var swiperautoplay = $('.swiper-container').data('autoplay');
    var swiperinterval = $('.swiper-container').data('interval');
    var swiperloop = $('.swiper-container').data('loop');
    var swipermousedrag = $('.swiper-container').data('mousedrag');
    var swipereffect = $('.swiper-container').data('effect');
    var swiperclikable = $('.swiper-container').data('clickpage');
    var swiperspeed = $('.swiper-container').data('speed');
    var swiperinteraction = $('.swiper-container').data('interaction');

    //Crmny Swiper Slides Script
    var autoplay = swiperinterval;
    var swiper = new Swiper('.swiper-slides', {
      autoplayDisableOnInteraction: swiperinteraction,
      effect: swipereffect,
      speed: swiperspeed,
      loop: swiperloop,
      paginationClickable: swiperclikable,
      watchSlidesProgress: true,
      autoplay: swiperautoplay,
      simulateTouch: swipermousedrag,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheelControl: swipermw,
      keyboardControl: swiperkb,

    });
    swiper.on('slideChange', function (s) {
      var currentSlide = $(swiper.slides[swiper.activeIndex]);
        var elems = currentSlide.find('.animated')
        elems.each(function() {
          var $this = $(this);
          var animationType = $this.data('animation');
          $this.addClass(animationType, 100).on(animEndEv, function() {
            $this.removeClass(animationType);
          });
        });
    });
    swiper.on('slideChange', function (s) {
       var currentSlide = $(swiper.slides[swiper.activeIndex]);
    });
  });

	// Ceremony Gift
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_gift.default', function($scope, $){
		// Ceremony Hover Script
		item_hover_class('.gift-item');
	} );

	// Ceremony Pricing
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_pricing.default', function($scope, $){
		// Ceremony Hover Script
		item_hover_class('.proposal-item');
	} );

	// Ceremony Product
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_product.default', function($scope, $){
		// Ceremony Hover Script
		item_hover_class('li.product');
	} );

	//Ceremony Gallery
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_gallery.default', function($scope, $){
		// Ceremony Masonry Script
		var $grid = $('.crmny-masonry').isotope ({
      itemSelector: '.masonry-item',
      layoutMode: 'packery',
      percentPosition: true,
      isFitWidth: true,
    });
    var filterFns = {
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };
    $('.masonry-filters').on('click', 'li a', function() {
      var filterValue = $(this).attr('data-filter');
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
    });
    $('.masonry-filters').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'li a', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
    // Direction Hover
    $('.direction-hover .gallery-item').hoverdir ({
	    hoverElem: '.gallery-info',
	    speed: 350,
	  });

		// Ceremony Hover Script
		item_hover_class('.gallery-item');

	} );

	// Ceremony Quote Slider
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_quotes.default', function($scope, $){
		owl_carousel();
	} );

	// Ceremony Testimonial Slider
	elementorFrontend.hooks.addAction( 'frontend/element_ready/vt-ceremony_testimonial.default', function($scope, $){
		owl_carousel();
	} );

	$('#cs-shortcode-dialog').css('display','none');

} );


})(jQuery);