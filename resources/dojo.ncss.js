define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dojo/resources/dojo.css",children:[]};
result.data = "/*\n\tdojo.css\n\tBaseline CSS file for general usage.\n\n\tThis file is intended to be a \"quick and dirty\" stylesheet you can use to give\n\ta straight-up web page some basic styling without having" + 
 " to do the dirty work\n\tyourself.  It includes a modified version of YUI's reset.css (we pulled some\n\tof the list reset definitions, among other things), and then provides some very\n\tbasic style " + 
 "rules to be applied to general HTML elements.\n\n\tThis stylesheet is NOT intended to serve as the foundation for more complex things--\n\tincluding the use of a TABLE for layout purposes.  The table " + 
 "definitions in this\n\tfile make the assumption that you will be using tables for thier declared purpose:\n\tdisplaying tabular data.\n\n\tIf you are looking for a baseline stylesheet using tables for" + 
 " grid layout, you will\n\tneed to supply your own layout rules to override the ones in this stylesheet.\n\t\n\tApplications using Dojo will function correctly without including this\n\tfile, but it sh" + 
 "ould provide sane defaults for many common things that page\n\tauthors often need to set up manually.\n\n\tThe Dojo Core uses this stylesheet to quickly style HTML-based tests and demos.  Feel\n\tfree" + 
 " to use it as you will.\n*/\n\n/*****************************************************************************************/\n\n/*\n\tThe below are borrowed from YUI's reset style sheets for pages and f" + 
 "onts.\n\tWe've verified w/ the YUI development team that these are entirely\n\tcopyright Yahoo, written entirely by Nate Koechley and Matt Sweeney without\n\texternal contributions.\n\n\tCopyright (c)" + 
 " 2007, Yahoo! Inc. All rights reserved.\n\tCode licensed under the BSD License:\n\thttp://developer.yahoo.net/yui/license.txt\n\tversion: 2.2.1\n*/\n\nbody, div, dl, dt, dd, li, h1, h2, h3, h4, h5, h6" + 
 ", pre, form, fieldset, input, textarea, p, blockquote, th, td {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nfieldset, img {\n\tborder: 0 none;\n}\n\naddress, caption, cite, code, dfn, th, var {\n\tfont-style: " + 
 "normal; \n\tfont-weight: normal;\n}\n\ncaption, th {\n\ttext-align: left;\n}\n\nq:before, q:after {\n\tcontent:\"\";\n}\n\nabbr, acronym {\n\tborder:0;\n}\n/* End YUI imported code. */\n\n/***********" + 
 "******************************************************************************/\n\n/* \n\tBegin Dojo additions.\n\n\tStyle definitions, based loosely on the Dijit Tundra theme.\n\tRelative unit calcul" + 
 "ations based on \"Compose to a Vertical Rhythm\",\n\tby Richard Rutter (http://24ways.org/2006/compose-to-a-vertical-rhythm)\n\n\tIf changing the font size, make sure you do it in both\n\tpercent and " + 
 "px (% for IE, px for everything else). \n\t% value based on default size of 16px (in most browsers).\n\tSo if you want the default size to be 14px, set the \n\t% to 87% (14 / 16 = 0.875).\n\n\tTypical" + 
 " values:\n\t10px: 62.5%\n\t11px: 69% (68.75)\n\t12px: 75%\n\t13px: 81.25%\n\t14px: 87.5%\n\t16px: 100%\n\n\tDefault: 12px\n*/\nbody { \n\tfont: 12px Myriad,Helvetica,Tahoma,Arial,clean,sans-serif; \n\t" + 
 "*font-size: 75%;\n}\n\n/* Headings */\nh1 {\n\tfont-size: 1.5em; \n\tfont-weight: normal;\n\tline-height: 1em; \n\tmargin-top: 1em;\n\tmargin-bottom:0;\n}\n\nh2 { \n\tfont-size: 1.1667em; \n\tfont-wei" + 
 "ght: bold; \n\tline-height: 1.286em; \n\tmargin-top: 1.929em; \n\tmargin-bottom:0.643em;\n}\n\nh3, h4, h5, h6 {\n\tfont-size: 1em; \n\tfont-weight: bold; \n\tline-height: 1.5em; \n\tmargin-top: 1.5em;" + 
 " \n\tmargin-bottom: 0;\n}\n\n/* paragraphs, quotes and lists */\np { \n\tfont-size: 1em; \n\tmargin-top: 1.5em; \n\tmargin-bottom: 1.5em; \n\tline-height: 1.5em;\n}\n\nblockquote { \n\tfont-size: 0.91" + 
 "6em; \n\tmargin-top: 3.272em; \n\tmargin-bottom: 3.272em; \n\tline-height: 1.636em; \n\tpadding: 1.636em; \n\tborder-top: 1px solid #ccc; \n\tborder-bottom: 1px solid #ccc;\n}\n\nol li, ul li { \n\tfo" + 
 "nt-size: 1em; \n\tline-height: 1.5em; \n\tmargin: 0;\n}\n\n/* pre and code */\npre, code { \n\tfont-size:115%;\n\t*font-size:100%;\n\tfont-family: Courier, \"Courier New\"; \n\tbackground-color: #efef" + 
 "ef; \n\tborder: 1px solid #ccc;\n}\n\npre { \n\tborder-width: 1px 0; \n\tpadding: 1.5em;\n}\n\n/*\n\tTables\n\n\tNote that these table definitions make the assumption that you are using tables\n\tto d" + 
 "isplay tabular data, and NOT using tables as layout mechanisms.  If you are\n\tusing tables for layout, you will probably want to override these rules with\n\tmore specific ones.\n\n\tThese definition" + 
 "s make tabular data look presentable, particularly when presented\n\tinline with paragraphs.\n*/\ntable {  font-size:100%; }\n\n.dojoTabular { \n\tborder-collapse: collapse; \n\tborder-spacing: 0; \n\t" + 
 "border: 1px solid #ccc; \n\tmargin: 0 1.5em;\n}\n\n.dojoTabular th { \n\ttext-align: center; \n\tfont-weight: bold;\n}\n\n.dojoTabular thead,\n.dojoTabular tfoot { \n\tbackground-color: #efefef; \n\tb" + 
 "order: 1px solid #ccc; \n\tborder-width: 1px 0; \n}\n\n.dojoTabular th,\n.dojoTabular td { \n\tpadding: 0.25em 0.5em;\n}\n"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});