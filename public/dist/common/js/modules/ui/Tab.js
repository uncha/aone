'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tab = exports.Tab = function () {
	function Tab(_ref) {
		var _ref$tab = _ref.tab,
		    tab = _ref$tab === undefined ? '' : _ref$tab,
		    _ref$tabCont = _ref.tabCont,
		    tabCont = _ref$tabCont === undefined ? '' : _ref$tabCont,
		    _ref$fadeTime = _ref.fadeTime,
		    fadeTime = _ref$fadeTime === undefined ? 0 : _ref$fadeTime;

		_classCallCheck(this, Tab);

		if (!tab || !tabCont) throw new Error('tab과 tabCont의 선택자가 전달되지 않았습니다.');

		_(this).$tab = $(tab);
		_(this).$tabCont = $(tabCont);
		_(this).fadeTime = fadeTime;

		this.addEvent();
	}

	_createClass(Tab, [{
		key: 'addEvent',
		value: function addEvent() {
			var _this = _(this);

			_this.$tab.on('click', function (e) {
				e.preventDefault();

				_this.$tab.removeClass('on');
				$(this).addClass('on');

				_this.$tabCont.stop().fadeOut(0);
				_this.$tabCont.eq($(this).index()).stop().fadeIn(_this.fadeTime);
			});

			_this.$tab.eq(0).trigger('click');
		}
	}]);

	return Tab;
}();
//# sourceMappingURL=../../maps/modules/ui/Tab.js.map
