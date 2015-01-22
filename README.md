# jquery.electify

A form element cross-controlling script.

You can get the working example of the plugin <a href="http://jsfiddle.net/utr64kbz/8/" target="_blank">here</a>.

<iframe width="100%" height="300" src="http://jsfiddle.net/utr64kbz/8/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### usage
<pre lang="javascript">
<code>
$(document).ready(function () {
  $('#testForm').electify({main : '#select_all', childrenCheckBoxes : '.checks', childrenButtons : '.default'});
  $('#testForm').electify({main : '#deselect', childrenButtons : '#edit_button'});
});
</code>
</pre>