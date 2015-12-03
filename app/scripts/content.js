'use strict';

var _jqueryMin = require('jquery.min.js');

var _jqueryMin2 = _interopRequireDefault(_jqueryMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('hey');
var firstHref = (0, _jqueryMin2.default)("a[href^='http']").eq(0).attr("href");
console.log(firstHref);

if ((0, _jqueryMin2.default)('div:contains("ElScorcho")').length) {
	console.log('did it work???');
}

(0, _jqueryMin2.default)('div:contains("ElScorcho")').alert("hey");
//# sourceMappingURL=content.js.map
