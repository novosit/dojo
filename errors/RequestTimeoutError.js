(function (factory) {
    'use strict';
    var req = require,
        isAmd = typeof (define) === 'function' && define.amd;
    if (isAmd) {
        define([
            './create',
			'./RequestError'
        ], factory);
    }
    else if (typeof(exports) === 'object') {
        module.exports = factory(
            require('./create'),
			require('./RequestError')
        );
    }
})(function(create, RequestError){
	// module:
	//		dojo/errors/RequestTimeoutError

	/*=====
	 return function(){
		 // summary:
		 //		TODOC
	 };
	 =====*/

	return create("RequestTimeoutError", null, RequestError, {
		dojoType: "timeout"
	});
});
