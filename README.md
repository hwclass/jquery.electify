# jquery.electify

A form element cross-controlling script.

You can get the working example of the plugin <a href="http://jsfiddle.net/utr64kbz/7/" target="_blank">here</a>. 

### usage
<pre lang="javascript">
<code>
$(document).ready(function () {
  $('#testForm').electify({main : '#select_all', childrenCheckBoxes : '.checks', childrenButtons : '.default'});
  $('#testForm').electify({main : '#deselect', childrenButtons : '#edit_button'});
});
</code>
</pre>