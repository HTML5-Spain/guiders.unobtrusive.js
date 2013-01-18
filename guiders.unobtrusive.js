/*
* guiders.unobtrusive.js
* An unobtrusive guiders.js extension.
* version 1.0
* by Douglas Tarr https://github.com/tarr11
* 
* Developed at CorpQNA. (www.corpqna.com)
* Q&A For Business
*
* Forked from Guiders-JS https://github.com/jeff-optimizely/Guiders-JS
* Released under the Apache License 2.0.
* www.apache.org/licenses/LICENSE-2.0.html
* 
*
*/
(function ($) {

	$.fn.guider = function () {

		// there's no need to do $(this) because
		// "this" is already a jquery object

		var ids = [];

		this.children().each(function (index, val) {
			if (val.id == "")
				ids.push("guider-" + index);
			else
				ids.push(val.id);
		});

		this.children().each(function (index, value) {
			var guiderId = ids[index];
			var nextId = ids[index + 1];
			var buttons = [];
			$(this).find('.guider-buttons-row').children().each(function () {
				var btn = {
					name: $(this).html(),
					classString: $(this).attr('class')
				};
				if ($(this).attr("data-onclick")) {
					var functionName = $(this).attr("data-onclick");
					btn.onclick = function () { window[functionName]() };
				}
				buttons.push(btn);
			});
			var dataoffset = null;
			var guiderOptions = {
				description: $(this).find('.guider-body').html(),
				buttons: buttons,
				attachTo: $(this).attr('data-attachTo'),
				id: guiderId,
				next: nextId,
				overlay: ($(this).attr('data-overlay') == "true"),
				title: $(this).find('.guider-title').html(),
				position: $(this).attr('data-position'),
				autoFocus: ($(this).attr('data-autoFocus') == "true"),
				closeOnEscape: ($(this).attr('data-closeOnEscape') == "true"),
				highlight: $(this).attr('data-highlight'),
				isHashable: $(this).attr('data-isHashable'),
				xButton: ($(this).attr('data-xButton') == "true"),
				shouldSkip: ($(this).attr('data-shouldSkip') == "true")
			};
			if ($(this).attr('data-offset'))
				guiderOptions.offset = JSON.parse($(this).attr('data-offset'));


			if ($(this).width() > 0) {
				guiderOptions.width = $(this).width();
			}

			if ($(this).height() > 0) {
				guiderOptions.height = $(this).height();
			}
			var guider = guiders.createGuider(guiderOptions);

			if (index == 0)
				guider.show();

			return this;
		});
	};
})(jQuery);
