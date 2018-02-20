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
	return ({ root:

//begin v1.x content
{
	"dateFormatItem-Ehm": "E h:mm a",
	"days-standAlone-short": [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	"months-format-narrow": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12"
	],
	"field-second-relative+0": "now",
	"quarters-standAlone-narrow": [
		"1",
		"2",
		"3",
		"4"
	],
	"field-weekday": "Day of the Week",
	"dateFormatItem-yQQQ": "y QQQ",
	"dateFormatItem-yMEd": "y-MM-dd, E",
	"field-wed-relative+0": "this Wednesday",
	"field-wed-relative+1": "next Wednesday",
	"dateFormatItem-GyMMMEd": "G y MMM d, E",
	"dateFormatItem-MMMEd": "MMM d, E",
	"eraNarrow": [
		"BCE",
		"CE"
	],
	"field-tue-relative+-1": "last Tuesday",
	"days-format-short": [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	"dateTimeFormats-appendItem-Day-Of-Week": "{0} {1}",
	"dateFormat-long": "y MMMM d",
	"field-fri-relative+-1": "last Friday",
	"field-wed-relative+-1": "last Wednesday",
	"months-format-wide": [
		"M01",
		"M02",
		"M03",
		"M04",
		"M05",
		"M06",
		"M07",
		"M08",
		"M09",
		"M10",
		"M11",
		"M12"
	],
	"dateTimeFormat-medium": "{1} {0}",
	"dayPeriods-format-wide-pm": "PM",
	"dateFormat-full": "y MMMM d, EEEE",
	"field-thu-relative+-1": "last Thursday",
	"dateFormatItem-Md": "MM-dd",
	"dayPeriods-format-abbr-am": "AM",
	"dateTimeFormats-appendItem-Second": "{0} ({2}: {1})",
	"dayPeriods-format-wide-noon": "noon",
	"dateFormatItem-yMd": "y-MM-dd",
	"field-era": "Era",
	"dateFormatItem-yM": "y-MM",
	"months-standAlone-wide": [
		"M01",
		"M02",
		"M03",
		"M04",
		"M05",
		"M06",
		"M07",
		"M08",
		"M09",
		"M10",
		"M11",
		"M12"
	],
	"timeFormat-short": "HH:mm",
	"quarters-format-wide": [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	"dateFormatItem-yQQQQ": "y QQQQ",
	"timeFormat-long": "HH:mm:ss z",
	"field-year": "Year",
	"dateFormatItem-yMMM": "y MMM",
	"dateTimeFormats-appendItem-Era": "{1} {0}",
	"field-hour": "Hour",
	"months-format-abbr": [
		"M01",
		"M02",
		"M03",
		"M04",
		"M05",
		"M06",
		"M07",
		"M08",
		"M09",
		"M10",
		"M11",
		"M12"
	],
	"field-sat-relative+0": "this Saturday",
	"field-sat-relative+1": "next Saturday",
	"timeFormat-full": "HH:mm:ss zzzz",
	"dateTimeFormats-appendItem-Week": "{0} ({2}: {1})",
	"field-day-relative+0": "today",
	"field-thu-relative+0": "this Thursday",
	"field-day-relative+1": "tomorrow",
	"field-thu-relative+1": "next Thursday",
	"dateFormatItem-GyMMMd": "G y MMM d",
	"dateFormatItem-H": "HH",
	"months-standAlone-abbr": [
		"M01",
		"M02",
		"M03",
		"M04",
		"M05",
		"M06",
		"M07",
		"M08",
		"M09",
		"M10",
		"M11",
		"M12"
	],
	"quarters-format-abbr": [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	"quarters-standAlone-wide": [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	"dateFormatItem-Gy": "G y",
	"dateFormatItem-M": "L",
	"days-standAlone-wide": [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	"dayPeriods-format-abbr-noon": "noon",
	"timeFormat-medium": "HH:mm:ss",
	"field-sun-relative+0": "this Sunday",
	"dateFormatItem-Hm": "HH:mm",
	"field-sun-relative+1": "next Sunday",
	"quarters-standAlone-abbr": [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	"eraAbbr": [
		"BCE",
		"CE"
	],
	"field-minute": "Minute",
	"field-dayperiod": "Dayperiod",
	"days-standAlone-abbr": [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	"dateFormatItem-d": "d",
	"dateFormatItem-ms": "mm:ss",
	"quarters-format-narrow": [
		"1",
		"2",
		"3",
		"4"
	],
	"field-day-relative+-1": "yesterday",
	"dateTimeFormat-long": "{1} {0}",
	"dayPeriods-format-narrow-am": "a",
	"dateFormatItem-h": "h a",
	"dateFormatItem-MMMd": "MMM d",
	"dateFormatItem-MEd": "MM-dd, E",
	"dateTimeFormat-full": "{1} {0}",
	"field-fri-relative+0": "this Friday",
	"field-fri-relative+1": "next Friday",
	"field-day": "Day",
	"days-format-wide": [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	"field-zone": "Zone",
	"months-standAlone-narrow": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12"
	],
	"dateFormatItem-y": "y",
	"dateTimeFormats-appendItem-Day": "{0} ({2}: {1})",
	"field-year-relative+-1": "last year",
	"field-month-relative+-1": "last month",
	"dateTimeFormats-appendItem-Year": "{1} {0}",
	"dateFormatItem-hm": "h:mm a",
	"dateTimeFormats-appendItem-Hour": "{0} ({2}: {1})",
	"dayPeriods-format-abbr-pm": "PM",
	"days-format-abbr": [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	"eraNames": [
		"BCE",
		"CE"
	],
	"dateFormatItem-yMMMd": "y MMM d",
	"days-format-narrow": [
		"S",
		"M",
		"T",
		"W",
		"T",
		"F",
		"S"
	],
	"field-month": "Month",
	"days-standAlone-narrow": [
		"S",
		"M",
		"T",
		"W",
		"T",
		"F",
		"S"
	],
	"dateFormatItem-MMM": "LLL",
	"field-tue-relative+0": "this Tuesday",
	"dateTimeFormats-appendItem-Quarter": "{0} ({2}: {1})",
	"field-tue-relative+1": "next Tuesday",
	"dayPeriods-format-wide-am": "AM",
	"dateTimeFormats-appendItem-Month": "{0} ({2}: {1})",
	"dateTimeFormats-appendItem-Minute": "{0} ({2}: {1})",
	"dateFormatItem-EHm": "E HH:mm",
	"field-mon-relative+0": "this Monday",
	"field-mon-relative+1": "next Monday",
	"dateFormat-short": "y-MM-dd",
	"dateFormatItem-EHms": "E HH:mm:ss",
	"dateFormatItem-Ehms": "E h:mm:ss a",
	"dayPeriods-format-narrow-noon": "n",
	"field-second": "Second",
	"field-sat-relative+-1": "last Saturday",
	"dateFormatItem-yMMMEd": "y MMM d, E",
	"field-sun-relative+-1": "last Sunday",
	"field-month-relative+0": "this month",
	"field-month-relative+1": "next month",
	"dateTimeFormats-appendItem-Timezone": "{0} {1}",
	"dateFormatItem-Ed": "d, E",
	"field-week": "Week",
	"dateFormat-medium": "y MMM d",
	"field-week-relative+-1": "last week",
	"field-year-relative+0": "this year",
	"field-year-relative+1": "next year",
	"dayPeriods-format-narrow-pm": "p",
	"dateTimeFormat-short": "{1} {0}",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-hms": "h:mm:ss a",
	"dateFormatItem-GyMMM": "G y MMM",
	"field-mon-relative+-1": "last Monday",
	"field-week-relative+0": "this week",
	"field-week-relative+1": "next week"
}
//end v1.x content
,
	// "ar": true,
	// "ca": true,
	// "cs": true,
	// "da": true,
	// "de": true,
	// "el": true,
	"en": true,
	// "en-au": true,
	// "en-ca": true,
	// "en-gb": true,
	"es": true,
	// "fi": true,
	"fr": true,
	// "fr-ch": true,
	// "he": true,
	// "hu": true,
	// "it": true,
	// "ja": true,
	// "ko": true,
	// "nb": true,
	// "nl": true,
	// "pl": true,
	// "pt": true,
	// "pt-pt": true,
	// "ro": true,
	// "ru": true,
	// "sk": true,
	// "sl": true,
	// "sv": true,
	// "th": true,
	// "tr": true,
	// "zh": true,
	// "zh-hant": true,
	// "zh-hk": true,
	// "zh-tw": true
});
});