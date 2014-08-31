'use strict';

(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'assert'], function (exports, assert) {factory((root.commonJsStrictGlobal = exports), assert);});} else if (typeof exports === 'object') {factory(exports, require('assert'));} else {factory((root.Mocha = {}), root.assert);}}(this, function (exports, assert) {

	describe('Array', function(){
	  	describe('#indexOf()', function(){
	  	  	it('should return -1 when the value is not present', function(){
	  	  	  	assert.equal(-1, [1,2,3].indexOf(5));
	  	  	  	assert.equal(-1, [1,2,3].indexOf(0));
	  	  	});
	  	});
	});


}));




