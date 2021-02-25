jQuery(document).ready(function($) {
  "use strict";
  //Crmny Sticky Header Script
  $('.crmny-header.header-sticky').CeremonySticky ({
    topSpacing: 0,
    zIndex: 4
  });

  //Crmny Navigation Hover Script
  $('.crmny-navigation .has-dropdown').on ({
    mouseenter : function() {
      $(this).find('ul.dropdown-nav').first().stop(true, true).fadeIn(300).addClass('open');
    },
    mouseleave : function() {
      $(this).find('ul.dropdown-nav').first().stop(true, true).fadeOut(300).removeClass('open');
    }
  });
  $(".meks-instagram-widget a").removeAttr("title");
  $('li.has-dropdown ul.dropdown-nav li.has-dropdown').addClass('sub');

  $(".crmny-side-navigation .has-dropdown").mouseenter(function(){
    $(this).find('ul.dropdown-nav').first().stop(false, false).slideDown(300);
  });
  $(".has-dropdown").mouseleave(function(){
    $(this).find('ul.dropdown-nav').first().stop(false, false).slideUp(300);
  });

  /* Side Menu */
  $('.crmny-toggle-link').on('click',function() {
    $('.crmny-side-navigation, .crmny-navigation-overlay').toggleClass('open');
  });
  $('.navigation-wrap .close-btn a, .crmny-navigation-overlay').on('click',function() {
    $('.crmny-side-navigation, .crmny-navigation-overlay').removeClass('open');
  });

  //Crmny Search Box Script
  $('html').on('click',function() {
    $('.search-link .search-box').fadeOut(300).removeClass('open');
  });
  $('.search-link').on('click',function(e) {
    e.stopPropagation();
    $('.search-link .search-box').find('input[type="text"]').focus();
  });
  $('.search-link a').on('click',function() {
    $('.search-link .search-box').fadeToggle(300).addClass('open');
  });

  // Site Credit Hover Script
  $('.site-credit-link a').mouseenter(function(){
   $(this).find('.default-text').hide();
   $(this).find('.change-text').show();
  });
  $('.site-credit-link a').mouseleave(function(){
   $(this).find('.default-text').show();
   $(this).find('.change-text').hide();
  });

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

  //Crmny Parallax And Width Script
  $(window).resize(function() {
    var $meantop = $('.crmny-header').outerHeight()/2;
    $('.mean-container a.meanmenu-reveal').css('top', $meantop );

    // Mean nav margin top
    var $headerHeight = $('.crmny-header').outerHeight();
    $('.mean-nav').css('margin-top', $headerHeight );

    if (screen.width >= 768) {
      $('.crmny-parallax').jarallax ({
        speed: 0.6,
      });
    }
    if (screen.width >= 992) {
      $('.crmny-sticky-footer .main-wrap-inner').css('margin-bottom', $('.crmny-footer').outerHeight());
    }
    if (screen.width <= 600) {
      if ($('.owl-carousel').attr('data-auto-width', true)) {
        $('.owl-carousel').attr('data-auto-width', false);
      }
    }
  });
  $(window).trigger('resize');

  //Crmny Hover Script
  $(window).load(function() {

    // Mean nav margin top
    var $headerHeight = $('.crmny-header').outerHeight();
    $('.mean-nav').css('margin-top', $headerHeight );
    // Mean Toggle Top Value
    var $meantop = $('.crmny-header').outerHeight()/2;
    $('.mean-container a.meanmenu-reveal').css('top', $meantop );

    $(".gallery-item, .friend-item, .blog-item, .feature-item, .proposal-item, .photoshoot-item, .suit-item, .client-item, .gift-item, .event-item, .gallery-control-link, .grid-view-link, li.product").mouseenter(function(){
      $(this).addClass('crmny-hover');
    });
    $(".gallery-item, .friend-item, .blog-item, .feature-item, .proposal-item, .photoshoot-item, .suit-item, .client-item, .gift-item, .event-item, .gallery-control-link, .grid-view-link, li.product").mouseleave(function(){
      $(this).removeClass('crmny-hover');
    });

    $(".feature-item").mouseenter(function(){
      $(this).find('.feature-info-wrap').first().stop(true, true).slideDown(300);
    });
    $(".feature-item").mouseleave(function(){
      $(this).find('.feature-info-wrap').first().stop(true, true).slideUp(300);
    });

    // Crmny Preloader
    $('.crmny-preloader').fadeOut(500);

    if ($( "div" ).hasClass( "swiper-slides" ) ){
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

      //Crmny Swiper Gallery Slider Script
      var galleryTopSlider = new Swiper('.galleryslides', {
        loop: true,
        direction:'vertical',
        loopedSlides: 50,
        onlyExternal: true,
      });

      //Crmny Swiper Gallery Slider Script
      var galleryThumbSlider = new Swiper('.gallerythumbs', {
        spaceBetween: 8,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        loop: true,
        slideToClickedSlide: true,
        loopedSlides: 50,
        direction: 'vertical',
      });
      galleryTopSlider.params.control = galleryThumbSlider;
      galleryThumbSlider.params.control = galleryTopSlider;
    }

    //Crmny Masonry Script
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
    $('.crmny-friends .friends-masonry-filters ul li:first-child a').on('click', function() {});

    //Crmny Owl Carousel Slider Script
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

  });

    // Image Animate on Mouse move
    $('.animated-image-wrapper').each( function() {
      var $animatee = $(this);
      var transform = $animatee.data('transform');
      var transx = $animatee.data('transx');
      var transy = $animatee.data('transy');
    if ($('div').hasClass('mouse-move-on')) {
      let sky   = document.querySelector('body');
      var elemOne   = this.querySelector('.mouse-move-on.crmny-animate-image');
        var img = $('.crmny-animate-image');
        TweenMax.set([img], { transformStyle: "preserve-3d" });

        sky.addEventListener('mousemove',function(e){
          var pageX = e.clientX - window.innerWidth/2,
          pageY = e.clientY - window.innerHeight/2;
          elemOne.style.transform = 'translateX('+transx+'' + (5 + pageX/transform) + '%) translateY('+transy+'' + (5 + pageY/transform) + '%)';
        });
    }
    });

    $('.animated-image-wrapper').each( function() {

      var $animate = $(this);
      var max = $animate.data('max');
      var speed = $animate.data('speed');
      var scale = $animate.data('scale');
      var perspective = $animate.data('perspective');
      var glare = $animate.data('glare');
      if ($('div').hasClass('tilt-on')) {
        VanillaTilt.init(this.querySelector(".tilt-on.crmny-animate-image"),{
          max: max,
          speed: speed,
          scale: scale,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          perspective: perspective,
          glare: glare,
          transition: false,
        });
      }
    });

  // Mean Menu
  var $navmenu = $('nav');
  var $menu_starts = ($navmenu.data('nav') !== undefined) ? $navmenu.data('nav') : 1199;
  $('.mean-menu-parent .crmny-navigation, .mean-menu-parent.crmny-side-navigation').meanmenu({
    meanMenuContainer: '.crmny-header > .container, .header-style-one.crmny-full-width-header .crmny-header',
    meanMenuOpen: '<span></span>',
    meanMenuClose: '<span></span>',
    meanExpand: '<i class="fa fa-angle-down"></i>',
    meanContract: '<i class="fa fa-angle-up"></i>',
    meanScreenWidth: $menu_starts,
  });

  //Crmny Popup Picture Script
  $('.crmny-popup').magnificPopup ({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    closeMarkup:'<div class="mfp-close" title="%title%"></div>',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true,
      arrowMarkup:'<div title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>',
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('*');
      }
    }
  });

  //Crmny Popup Video Script
  $('.crmny-popup-video').magnificPopup ({
    mainClass: 'mfp-fade',
    type: 'iframe',
    closeMarkup:'<div class="mfp-close" title="%title%"></div>',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: function(url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if ( !m || !m[1] ) return null;
            return m[1];
          },
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: function(url) {
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if ( !m || !m[5] ) return null;
            return m[5];
          },
          src: 'https://player.vimeo.com/video/%id%?autoplay=1'
        }
      }
    }
  });

  //Crmny Hover Animtion Script
  $('.direction-hover .gallery-item, .direction-hover .friend-item, .direction-hover .blog-item').hoverdir ({
    hoverElem: '.gallery-info, .crmny-social, .blog-overlay',
    speed: 350,
  });

  //Crmny Custom Select Script
  $('select').niceSelect();
  $('.tribe-bar-views select, .woocommerce div.product form.cart .variations select').niceSelect('destroy');
  $('.comment-form-rating select, .shipping-calculator-form select').niceSelect('destroy');
  $('.crmny-widget.woocommerce select, .woocommerce-billing-fields select, .woocommerce-shipping-fields select, .footer-widget.woocommerce select, .footer-widget .woocommerce select').niceSelect('destroy');

  // Moved add to cart into price span tag
  $('.woocommerce ul.products li.product').each( function() {
    var $product_cart = $(this);
    $product_cart.find( ".button" ).appendTo( $product_cart.find( "span.price" ) );
  });
  $('.woocommerce ul.products li.product .button').addClass('fa fa-shopping-basket');

  //Crmny Checkbox Script
  $('input.input-checkbox').on('change', function() {
    $('input.input-checkbox').not(this).prop('checked', false);
  });
  $('.payment-method').on('change', function() {
    $('.payment-method').not(this).prop('checked', false);
    $(this).parents('.wc_payment_method').toggleClass('current_payment_method').siblings().removeClass('current_payment_method');
  });

  //Crmny Counter Script
  $('.crmny-counter').each( function() {
    var $counter = $(this);
    var swiperdelay = $counter.data('delay');
    var swipertime = $counter.data('time');
    $counter.counterUp ({
      delay: swiperdelay,
      time: swipertime,
    });
  });

  //Crmny Set Equal Height Script
  $('.crmny-item, .event-author-item, .woocommerce ul.products li.product').matchHeight ({
    property: 'height'
  });

  //Crmny Zoom Image Script
  $('.zoom-image').zoom();

  //Crmny Responsive Tabs Script
  $('.woocommerce-tabs').responsiveTabs ({
    collapsible: false,
    animation: 'fade',
    duration: 0,
    active: 0,
  });

  //Crmny Audio Play Pause Script
  $('.crmny-music-link').on('click',function() {
    if ($('#crmny-background-music').get(0).paused) {
      $('#crmny-background-music').get(0).play();
    }
    else {
      $('#crmny-background-music').get(0).pause();
    }
    $('.crmny-music-link').toggleClass('pause');
  });

  //Crmny Rating Script
  $('.crmny-rating').rateYo ({
    starWidth: '13px',
    spacing: '2px',
    ratedFill: '#a1a1a1',
    normalFill  : '#dadada',
    zIndex: 1,
    rating : 3,
    "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>"+
    "<path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379"+
    " 4.246-3.611-2.625-3.612 2.625"+
    " 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833"+
    " 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388"+
    " 7.416 5.388-2.833-8.718"+
    " 7.417-5.389h-9.167l-2.833-8.718z'/>"+
    "</svg>"
  });

  //Crmny Back Top Script
  if ($('div').hasClass('crmny-back-top')) {
    var backtop = $('.crmny-back-top');
    var position = backtop.offset().top;
  $(window).scroll(function() {
    var windowposition = $(window).scrollTop();
    if(windowposition + $(window).height() == $(document).height()) {
      backtop.removeClass('active');
    }
    else if (windowposition > 150) {
      backtop.addClass('active');
    }
    else {
      backtop.removeClass('active');
    }
  });
  jQuery('.crmny-back-top a').on('click',function() {
    jQuery('body,html').animate ({
      scrollTop: 0
    }, 2000);
    return false;
  });
  }

  if ($('div').hasClass('crmny-popup')) {
    $(this).find('a').attr("data-elementor-open-lightbox","no");
  }

});