'use strict';

$(function () {
	// ready
	(function () {
		/*$('#header .btn-menu').on('click', function(e){
  	e.preventDefault();
  			$('#header').css('overflow', 'inherit');
  	$('#gnb').addClass('on');
  });*/

		var pathName = location.pathname;
		var $btnMenu = $('.btn-menu');
		var $btnMenuClose = $('.btn-menu-close');
		var $gnb = $('#gnb');
		var $gnbBG = $('.gnb-bg');
		var $header = $('#header');
		var $depth1 = $gnb.find('.depth1 > li');
		var $depth2 = $depth1.find('.depth2 > li');
		var d1 = void 0,
		    d2 = void 0,
		    titValue = void 0;

		$btnMenu.on('click', function (e) {
			e.preventDefault();

			e.preventDefault();

			$gnb.addClass('on');
			$(this).addClass('open').removeClass('close');
			$header.css({ 'height': $(document).height() });

			$gnb.off('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd');
		});

		$btnMenuClose.on('click', function (e) {
			$gnb.removeClass('on');
			$(this).addClass('close').removeClass('open');
			$depth1.find('.depth2').stop().slideUp(200);

			$gnb.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function () {
				$header.css({ 'height': '' });
			});
		});

		$depth1.on('click', function (e) {
			if (!$(this).hasClass('on')) {
				$(this).addClass('on');
				$(this).find('.depth2').stop().slideDown(200);
			} else {
				$(this).removeClass('on');
				$(this).find('.depth2').stop().slideUp(200);
			}
		});
	})();
});
//# sourceMappingURL=maps/common.js.map
