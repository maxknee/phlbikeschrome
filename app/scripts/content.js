

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('hey');
var firstHref = (0, _jquery2.default)("a[href^='http']").eq(0).attr("href");
console.log(firstHref);

if ((0, _jquery2.default)('div:contains("ElScorcho")').length) {
	console.log('did it work???');
}

(0, _jquery2.default)('div:contains("ElScorcho")').alert("hey");
//# sourceMappingURL=content.js.map
