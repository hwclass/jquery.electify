# jquery.electify

A form element cross-controlling script.

### usage with (Modern Browsers)
<pre lang="javascript">
<code>
$(document).ready(function () {
  
  $('#testForm').electify({main : '#select_all', childrenCheckBoxes : '.checks', childrenButtons : '.default'});

  $('#testForm').electify({main : '#deselect', childrenButtons : '#edit_button'});

});
</code>
</pre>