'use strict';

import $ from 'jquery';

console.log('hey');
var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log(firstHref);

if($('div:contains("ElScorcho")').length) {
	console.log('did it work???');
}

$('div:contains("ElScorcho")').alert("hey");