'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Math = exports.Math = function () {
	function Math() {
		_classCallCheck(this, Math);
	}

	_createClass(Math, null, [{
		key: 'linearFunction',
		value: function linearFunction(tg, start, end, min, max) {
			if (arguments.length < 5) throw new Error('전달인자가 정확하지 않습니다.');

			var result = (tg - start) * (max - min) / (end - start) + min;

			if (max > min) {
				if (result < min) result = min;
				if (result > max) result = max;
			} else {
				if (result > min) result = min;
				if (result < max) result = max;
			}

			return result;
		}
	}]);

	return Math;
}();
//# sourceMappingURL=../../maps/modules/util/Math.js.map
