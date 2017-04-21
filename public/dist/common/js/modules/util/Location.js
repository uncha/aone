"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Location = exports.Location = function () {
  function Location() {
    _classCallCheck(this, Location);
  }

  _createClass(Location, null, [{
    key: "getParamValue",
    value: function getParamValue(paramName) {
      if (!paramName) throw new Error('검색할 파라미터명이 전달되어야 합니다.');

      var arrResult = location.search.match(new RegExp("[&?]" + paramName + "=(.*?)(&|$)"));
      var str = location.search.match(new RegExp("[&?]"));
      var result = arrResult && arrResult[1] ? this.replaceAll(decodeURIComponent(arrResult[1])) : null;

      // 띄어 쓰기가 +로 표시되지 않도록 처리
      var len = str.length;
      var arr = [];
      for (var i = 0; i < len; i++) {
        var replaceStr = str.slice(i, i + 1).replace('+', ' ');
        arr.push(replaceStr);
      }
      return arr.join('');
    }
  }]);

  return Location;
}();
//# sourceMappingURL=../../maps/modules/util/Location.js.map
