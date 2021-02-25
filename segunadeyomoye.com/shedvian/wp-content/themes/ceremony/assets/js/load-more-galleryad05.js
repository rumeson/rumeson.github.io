jQuery(document).ready(function($) {
	"use strict";
	/**
	 * Load category tab.
	 */

	ajax_pagenav();

	$('.nav.filter-buttons').on('click', 'a', function(e) {
		e.preventDefault();

		$('.nav.filter-buttons a').removeClass('active');
		$(this).addClass('active');

		var cat_ids = $(this).data('ids'),
			cat 	= $(this).data('cat'),
			limit 	= $(this).data('limit');
			style 	= $(this).data('style');
			order 	= $(this).data('order'),
			orderby = $(this).data('orderby'),
			loader 	= $(this).data('loader');
			key 	= $(this).data('key');

		$.ajax({
			type: 'POST',
			dataType: 'html',
			url: ceremony_admin_url.ajaxurl,
			data: {
				'cat'		: cat,
				'limit'  : limit,
				'style'  : style,
				'action'	: 'ceremony_gallery_ajax'
			},
			beforeSend : function () {
				var height = $(".crmny-galry-data").height();
				$('.crmny-galry-data').prepend('<div class="post-spinner"><div class="loader-wrap"><div class="loader"><div class="loader-inner ball-pulse"></div></div></div></div>');
				$('.loader-inner').loaders();
				$(".ajax-page-numbers").hide();
			},
			success: function (data) {
				$('.crmny-galry-data').addClass('height-auto');
				$(".crmny-galry-data").html(data);

				$(".gallery-item").mouseenter(function(){
		      $(this).addClass('crmny-hover');
		    });
		    $(".gallery-item").mouseleave(function(){
		      $(this).removeClass('crmny-hover');
		    });

		    //Crmny Hover Animtion Script
			  $('.direction-hover .gallery-item').hoverdir ({
			    hoverElem: '.gallery-info',
			    speed: 350,
			  });
			  setTimeout(ajax_pagenav, 100);
			  $('.crmny-pagination.pagination-spacer-three').hide();

			},
		});
	});

	function ajax_pagenav() {
		$(".ajax-page-numbers li").on( 'click', 'a', function(e){
			e.preventDefault();

			var page_no = $(this).data("page"),
			cat_slug = $(".nav.filter-buttons a.active").data("cat");
			limit 	= $(".nav.filter-buttons a.active").data('limit');
			style 	= $(".nav.filter-buttons a.active").data('style');

			$.ajax({
				type: 'POST',
				dataType: 'html',
				url: ceremony_admin_url.ajaxurl,
				data: {
					'cat': cat_slug,
					'offset': page_no,
					'limit'  : limit,
					'style'  : style,
					'action': 'ceremony_more_gallery_ajax_pagi'
				},
				beforeSend : function () {
					var height = $(".crmny-galry-data").height();
					$('.crmny-galry-data').prepend('<div class="post-spinner"><div class="loader-wrap"><div class="loader"><div class="loader-inner ball-pulse"></div></div></div></div>');
					$('.loader-inner').loaders();
				},
				success: function (data) {
					$(".crmny-galry-data").html(data);
				},
				complete: function (data) {
					// Pagination data link update
					$('.crmny-galry-data').addClass('height-auto');
					$(".ajax-page-numbers .last").remove();
					$(".ajax-page-numbers .first").remove();
					$('.ajax-page-numbers a').removeClass('current disabled-click');
					$('.ajax-page-numbers a[data-page = '+ page_no +']').addClass('current disabled-click');
					if (page_no > 1) {
						$(".ajax-page-numbers").prepend('<li class="first update-item"><a class="prev page-numbers" data-page="'+(page_no - 1)+'" href="#"><i class="fa fa-angle-left"></i></a></li>');
					}
					var navcount = $(".ajax-page-numbers > li").not('.update-item').length;
					if (navcount >= (page_no+1)) {
						$(".ajax-page-numbers").append('<li class="last update-item"><a class="next page-numbers" data-page="'+(page_no + 1)+'" href="#"><i class="fa fa-angle-right"></i></a></li>');
					}
					$(".gallery-item").mouseenter(function(){
			      $(this).addClass('crmny-hover');
			    });
			    $(".gallery-item").mouseleave(function(){
			      $(this).removeClass('crmny-hover');
			    });

			    //Crmny Hover Animtion Script
				  $('.direction-hover .gallery-item').hoverdir ({
				    hoverElem: '.gallery-info',
				    speed: 350,
				  });
					ajax_pagenav();
					$('.crmny-pagination.pagination-spacer-three').hide();
				}
			});

		});
	}

});