$(()=>{ // ready
	(()=>{
		/*$('#header .btn-menu').on('click', function(e){
			e.preventDefault();

			$('#header').css('overflow', 'inherit');
			$('#gnb').addClass('on');
		});*/

		const pathName = location.pathname;
		const $btnMenu = $('.btn-menu');
		const $btnMenuClose = $('.btn-menu-close');
		const $gnb = $('#gnb');
		const $gnbBG = $('.gnb-bg');
		const $header = $('#header');
		const $depth1 = $gnb.find('.depth1 > li');
		const $depth2 = $depth1.find('.depth2 > li');
		let d1, d2, titValue;

		$btnMenu.on('click', function(e){
			e.preventDefault();

			e.preventDefault();
			
			$gnb.addClass('on');
			$(this).addClass('open').removeClass('close');
			$header.css({'height':$(document).height()});
			
			$gnb.off('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd');
		});

		$btnMenuClose.on('click', function(e){
			$gnb.removeClass('on');
			$(this).addClass('close').removeClass('open');
			$depth1.find('.depth2').stop().slideUp(200);

			$gnb.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
				$header.css({'height':''});
			});
		});	
		
		$depth1.on('click', function(e){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				$(this).find('.depth2').stop().slideDown(200);
			} else {
				$(this).removeClass('on');
				$(this).find('.depth2').stop().slideUp(200);
			}
		});
	})();
});