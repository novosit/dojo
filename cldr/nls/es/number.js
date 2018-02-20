(function (factory) {
    'use strict';
    var req = require,
        isAmd = typeof (define) === 'function' && define.amd;
    if (isAmd) {
        define([], factory);
    }
    else if (typeof(exports) === 'object') {
        module.exports = factory();
    }
})(function () {
	return (
//begin v1.x content
{
	"group": ".",
	"percentSign": "%",
	"exponential": "E",
	"scientificFormat": "#E0",
	"percentFormat": "#,##0%",
	"list": ";",
	"infinity": "∞",
	"minusSign": "-",
	"decimal": ",",
	"superscriptingExponent": "×",
	"nan": "NaN",
	"perMille": "‰",
	"decimalFormat": "#,##0.###",
	"currencyFormat": "#,##0.00 ¤",
	"plusSign": "+",
	"decimalFormat-long": "000 billones",
	"decimalFormat-short": "000B"
}
//end v1.x content
);
});