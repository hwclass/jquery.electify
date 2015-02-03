/*!
 * jquery.electify. A form element cross-controlling script for jQuery.
 *
 * Copyright (c) 2014 Barış Güler
 * http://hwclass.github.io
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://docs.jquery.com/Plugins/Authoring
 * jQuery authoring guidelines
 *
 * Launch  : January 2015
 * Version : 1.0.1
 * Released: January 19th, 2015
 * jQuery Availability : >= 1.7.0
 *
 */
(function($) {
$.fn.electify = function(options) {
var allCheckBoxesChecked = false;
var allButtonsEnabled = true;
$(options.main).on('click', function(e) {
if (typeof options.childrenCheckBoxes !== 'undefined') {
if ($('input:checkbox' + options.childrenCheckBoxes).length > 0) {
for (var counter = 0; counter < $('input:checkbox' + options.childrenCheckBoxes).length; counter++) {
var attrOfCheckBox = $($(options.childrenCheckBoxes).get(counter)).prop('checked');
if (attrOfCheckBox === false) {
$($(options.childrenCheckBoxes).get(counter)).prop('checked', true);
allCheckBoxesChecked = true;
} else {
$($(options.childrenCheckBoxes).get(counter)).prop('checked', false);
allCheckBoxesChecked = false;
};
$($(options.childrenCheckBoxes).get(counter)).change(function() {
if (!this.checked) {
$(options.main).prop('checked', false);
allCheckBoxesChecked = false;
} else {
if (!allCheckBoxesChecked) {
for (var counter = 0; counter < $('input:checkbox' + options.childrenCheckBoxes).length; counter++) {
$($(options.childrenCheckBoxes).get(counter)).prop('checked', true);
}
allCheckBoxesChecked = true;
$(options.main).prop('checked', true);
}
}
});
};
allCheckBoxesChecked = true;
};
};
if (typeof options.childrenButtons !== 'undefined') {
if ($('input:button' + options.childrenButtons).length > 0) {
for (var counter = 0; counter < $('input:button' + options.childrenButtons).length; counter++) {
var attrOfButton = $($(options.childrenButtons).get(counter)).prop('disabled');
if (attrOfButton === false) {
$($(options.childrenButtons).get(counter)).prop('disabled', true);
allButtonsEnabled = false;
} else {
$($(options.childrenButtons).get(counter)).prop('disabled', false);
};
}
};
};
});
};
})(jQuery);
