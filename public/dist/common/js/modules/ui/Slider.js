'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Creates an instance of Slider.
* @author uncha
* 
* @constructor
* @param {jQuery} wrap - 
* @param {jQuery} slideList - 
* @param {jQuery} paging - 
* @param {jQuery} btnAuto - 
* @param {Boolean} useAutoPlay - 
* @param {jQuery} prevBtn - 
* @param {jQuery} nextBtn - 
* @param {Function} slideStart - 
* @param {Function} slideEnd - 
*/
var Slider = exports.Slider = function () {
	function Slider(_ref) {
		var wrap = _ref.wrap,
		    slideList = _ref.slideList,
		    _ref$paging = _ref.paging,
		    paging = _ref$paging === undefined ? $('') : _ref$paging,
		    _ref$btnAuto = _ref.btnAuto,
		    btnAuto = _ref$btnAuto === undefined ? $('') : _ref$btnAuto,
		    _ref$useAutoPlay = _ref.useAutoPlay,
		    useAutoPlay = _ref$useAutoPlay === undefined ? true : _ref$useAutoPlay,
		    _ref$autoPlayTime = _ref.autoPlayTime,
		    autoPlayTime = _ref$autoPlayTime === undefined ? 5000 : _ref$autoPlayTime,
		    _ref$prevBtn = _ref.prevBtn,
		    prevBtn = _ref$prevBtn === undefined ? $('') : _ref$prevBtn,
		    _ref$nextBtn = _ref.nextBtn,
		    nextBtn = _ref$nextBtn === undefined ? $('') : _ref$nextBtn,
		    _ref$slideStart = _ref.slideStart,
		    slideStart = _ref$slideStart === undefined ? function () {} : _ref$slideStart,
		    _ref$slideEnd = _ref.slideEnd,
		    slideEnd = _ref$slideEnd === undefined ? function () {} : _ref$slideEnd;

		_classCallCheck(this, Slider);

		if (!wrap) throw new Error('전달인자 wrap은 필수항목 입니다.');
		if (!slideList) throw new Error('전달인자 slideList는 필수항목 입니다.');

		// jQuery El
		_(this).$wrap = wrap;
		_(this).$slideList = slideList;
		_(this).$paging = paging;
		_(this).$btnAuto = btnAuto;
		_(this).$prevBtn = prevBtn;
		_(this).$nextBtn = nextBtn;
		// callback
		_(this).slideStart = slideStart;
		_(this).slideEnd = slideEnd;
		// default variable
		_(this).current = 0;
		_(this).timerId;
		_(this).autoPlay = true;
		_(this).useAutoPlay = useAutoPlay;
		_(this).autoPlayTime = autoPlayTime;

		this.addEvent();
		this.timer();
	}

	_createClass(Slider, [{
		key: 'addEvent',
		value: function addEvent() {
			var $this = this;
			var _this = _(this);

			_(this).$paging.on('click.Slider', function (e) {
				e.preventDefault();

				var i = $(this).index();
				var direction = _this.current < i ? 'right' : 'left';

				$this.move(i, direction);
			});

			_(this).$btnAuto.on('click.Slider', function (e) {
				e.preventDefault();

				if ($(this).hasClass('pause')) {
					$(this).removeClass('pause').addClass('play');
					_this.autoPlay = false;
					clearTimeout(_this.timerId);
				} else {
					$(this).removeClass('play').addClass('pause');
					_this.autoPlay = true;
					$this.timer();
				}
			});

			_(this).$nextBtn.on('click.Slider', function (e) {
				e.preventDefault();

				var i = 0;
				var len = _this.$slideList.length - 1;
				if (_this.current == len) {
					i = 0;
				} else {
					i = _this.current + 1;
				}

				$this.move(i);
			});

			_(this).$prevBtn.on('click.Slider', function (e) {
				e.preventDefault();

				var i = 0;
				if (_this.current == 0) {
					var len = _this.$slideList.length - 1;
					i = len;
				} else {
					i = _this.current - 1;
				}

				$this.move(i, 'left');
			});
		}
	}, {
		key: 'move',
		value: function move(i) {
			var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';

			if (_(this).current == i) return;

			var $current = _(this).$slideList.eq(_(this).current);
			var $next = _(this).$slideList.eq(i);

			_(this).$paging.removeClass('on');
			_(this).$paging.eq(i).addClass('on');

			var $this = this;
			var _this = _(this);
			//let direction = (_(this).current < i) ? 'right' : 'left';

			_(this).slideStart.call(this, i);

			if (direction == 'right') {
				$current.css({ left: 0 }).animate({ left: '-100%' }, { queue: false, duration: 600, ease: 'easeOutCubic' });
				$next.css({ left: '100%' }).animate({ left: 0 }, { queue: false, duration: 600, ease: 'easeOutCubic', complete: function complete() {
						if (_this.autoPlay) $this.timer();
						_this.slideEnd.call($this, i);
					} });
			} else {
				$current.css({ left: 0 }).animate({ left: '100%' }, { queue: false, duration: 600, ease: 'easeOutCubic' });
				$next.css({ left: '-100%' }).animate({ left: 0 }, { queue: false, duration: 600, ease: 'easeOutCubic', complete: function complete() {
						if (_this.autoPlay) $this.timer();
						_this.slideEnd.call($this, i);
					} });
			}

			_(this).current = i;
		}
	}, {
		key: 'timer',
		value: function timer() {
			if (!_(this).useAutoPlay) return;

			clearTimeout(_(this).timerId);

			var _this = _(this);
			var $this = this;
			_(this).timerId = setTimeout(function () {
				var i = _this.current;
				var len = _this.$slideList.length - 1;
				i == len ? i = 0 : i++;
				$this.move(i);
			}, _(this).autoPlayTime);
		}
	}]);

	return Slider;
}();
//# sourceMappingURL=../../maps/modules/ui/Slider.js.map
