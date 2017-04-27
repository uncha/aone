'use strict';

(function () {
	$(function () {
		// ready
		document.addEventListener("touchmove", function (event) {
			event.preventDefault();
		});

		var $header = $('#header');
		var $footer = $('#footer');
		var $visual = $('#contents.main .visual');
		var $cont = $visual.find('> ul > li > .cont');

		var current = 0;
		var isAnimate = false;

		$(window).on('resize', function () {
			$visual.find('ul').height($(window).height() - $header.outerHeight() - $footer.outerHeight());
			$cont.css('top', $(window).height() / 2 - $cont.outerHeight() / 2);
		});
		$(window).trigger('resize');

		$visual.swipe({
			swipeStatus: function swipeStatus(event, phase, direction, distance) {
				if (isAnimate) return;

				switch (phase) {
					case 'move':
						move(direction, distance);
						break;
					case 'end':
						end(direction);
						break;
				}
			}
		});

		var move = function move(direction, distance) {
			switch (direction) {
				case 'up':
					$visual.find('> ul > li').eq(current).css({ 'top': -1 * distance / 2, 'z-index': 0 });
					$visual.find('> ul > li').eq(current + 1).css({ 'top': -1 * distance + $visual.find('> ul > li').eq(current + 1).height(), 'z-index': 1 });
					break;
				case 'down':
					$visual.find('> ul > li').eq(current).css({ 'top': distance / 2, 'z-index': 0 });
					$visual.find('> ul > li').eq(current - 1).css({ 'top': distance - $visual.find('> ul > li').eq(current - 1).height(), 'z-index': 1 });
					break;
			}
		};

		var end = function end(direction) {
			isAnimate = true;
			switch (direction) {
				case 'up':
					$visual.find('> ul > li').eq(current).stop().transition({ top: '-100%', scale: 0.5 }, { duration: 300, complete: function complete() {
							current++;
							isAnimate = false;
						} });
					$visual.find('> ul > li').eq(current + 1).stop().transition({ top: 0 }, { duration: 150 });
					break;
				case 'down':
					$visual.find('> ul > li').eq(current).stop().transition({ top: '100%', scale: 0.5 }, { duration: 300, complete: function complete() {
							current--;
							isAnimate = false;
						} });
					$visual.find('> ul > li').eq(current - 1).stop().transition({ top: 0 }, { duration: 150 });
					break;
			}
		};
	});
})();
//# sourceMappingURL=maps/main.js.map
