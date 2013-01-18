guiders.unobtrusive.js (version 1.0)
==========================

Unobtrusive guiders are a software tour that leverages guiders.js, but allows you to declare most or all of your guider code in html5 + data attributes, instead of in javascript.


Why unobtrusive guiders?:
-----

 * No HTML strings in your javascript
 * Debug your guider layout code in HTML instead of JS
 * Leverage your existing templating libraries to make guider
 * Create dynamic guiders without having to have server side javascript
 * Isolate guider UI from other logic

How it works
-----
Unobtrusive guiders work by create a series of sequential divs that encapsulate a guider.  The code will read all the child divs, and configure the title, body, buttons and various properties of guiders.  

You just have to create HTML5 (as seen in the code example below) and instantiate the guiders via javascript.  You can also call any of the guiders.js underlying functions as well at any time.

Setup
-----

guiders.unobtrusive.js requires JQuery and guiders.js.

It uses HTML5 data attributes that map to guiders.js properties.   Most properties from guiders.js are available by putting "data-attributename" as an html5 property on each tag


~~~ HTML

<html>
<head>
</head>
<body>
<input type="button" id="my-button" value="My Button">
<div style="display:hidden" id="my-guider">
	<div data-position="3" data-autoFocus="true" data-overlay="true" data-closeOnEscape="true" data-xButton="true">
		<div class="guider-title">A guider with HTML in it!</div>
		<div class="guider-body">
			<div><a href="http://www.corpqna.com">CorpQNA</a> helps you ask, answer, and organize questions at your company.</div>
		</div>
		<div class="guider-buttons-row">
			<div class="btn btn-primary">Next</div>
		</div>
	</div>
	<div data-position="3" data-attachTo="#my-button" data-autoFocus="true" data-overlay="false" data-closeOnEscape="true" data-xButton="true">
		<div class="guider-title">A second slide</div>
		<div class="guider-body">
			<div>This slide doesn't have an overlay, and attaches to a control element via data-attachTo</div>
		</div>
		<div class="guider-buttons-row">
			<div class="btn btn-primary">Close</div>
		</div>
	</div>
</div>
<script>
$(document).ready(function () {
	$('#my-guider').guider();
});

</script>
~~~~


The parameters for creating guiders are:

~~~
attachTo: (optional) selector of the html element you want to attach the guider to
autoFocus: (optional) if you want the browser to scroll to the position of the guider, set this to true
buttons: array of button objects
  {
    name: "Close",
    classString: "primary-button",
    onclick: callback function for when the button is clicked
      (if name is "close", "next", or "prev", onclick defaults to guiders.hideAll, guiders.next, or guiders.prev respectively)
   }
buttonCustomHTML: (optional) custom HTML that gets appended to the buttons div
classString: (optional) custom class name that the guider should additionally have
closeOnEscape: (optional) if true, the escape key will close the currently open guider
description: text description that shows up inside the guider
highlight: (optional) selector of the html element you want to highlight (will cause element to be above the overlay)
isHashable: (defaults to true) the guider will be shown auto-shown when a page is loaded with a url hash parameter #guider=guider_name
offset: fine tune the position of the guider, e.g. { left:0, top: -10 }
onClose: (optional) additional function to call if a guider is closed by the x button, close button, or escape key
onHide: (optional) additional function to call when the guider is hidden
onShow: (optional) additional function to call before the guider is shown
overlay: (optional) if true, an overlay will pop up between the guider and the rest of the page
position: (optional / required if using attachTo) clock position at which the guider should be attached to the html element. Can also use a description keyword (such as "topLeft" for 11 or "bottom" for 6)
shouldSkip: (optional) if this function evaluates to true, the guider will be skipped
title: title of the guider
width: (optional) custom width of the guider (it defaults to 400px)
xButton: (optional) if true, a X will appear in the top right corner of the guider, as another way to close the guider
~~~



License
-------

Released under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html).
