(function ( $ ) {
	$.fn.ifbox = function() {
		this.click(function(e){
			e.preventDefault();
			var overlay = jQuery('<div id="overlay"> </div>');
			overlay.css({
				'position': 'fixed',
				'top': '0',
				'left': 0,
				'width': '100%',
				'height': '100%',
				'background-color': 'rgba(0, 0, 0, .5)',
				'z-index': '10000',
				'display': 'none'
			})

			overlay.appendTo(parent.document.body);

			var image_url = $(this).attr('href');

			var alt_text = $(this).find('img').attr('alt');
			image_container = $('<div class="pop_image_container"><p>' + alt_text + '</p></div>');
			var image = $('<img id="custom_poped_image" src="' + image_url + '">');

			var loaded = false, wait;
			image.load(function () { loaded = true; });

			wait = setInterval(function () {
				loaded ? clearInterval(wait) : setParameters(image.outerWidth(true), image.outerHeight(true));
			}, 0);

			function  setParameters(width, height) {
				if (width > 700) {
					width = 700;
					image.css({
						'width': width + 'px',
						'height': 'auto'
					})
				}
				var windowH = $(parent.window).height();
				var windowW = $(parent.window).width();
				$(parent.document).find('.pop_image_container').css({
					'position':"fixed",
					'opacity': '1',
					'width': width,
					'height': height,
					'left': ((windowW - width)/2 + $(parent.document).scrollLeft()),
					'top': ((windowH - height)/2),
					'z-index': '10001'
				})
				image_container.find('p').css({
					'position': 'absolute',
					'text-align': 'center',
					'width': '100%',
					'bottom':'-40px',
					'font-weight':'bold',
					'color': '#FFF'
				})
				image.css({
					'border':'5px solid #888',
					'border-bottom': '45px solid #888',
					'-webkit-box-shadow': '4px 4px 4px #777',
					'-moz-box-shadow': '4px 4px 4px #777',
					'box-shadow': '4px 4px 4px #777'
				})
			}

			overlay.fadeIn('fast');
			image.appendTo(image_container);

			image_container.appendTo(overlay);
		});

		$(document).add(parent.document).mouseup(function (e)
		{
			var container = $(parent.document).find(".pop_image_container");
			if (!container.is(e.target) // if the target of the click isn't the container...
				&& container.has(e.target).length === 0) // ... nor a descendant of the container
				{
				$(parent.document).find("#overlay").remove();
			}
		});

	};
	return this;
}( jQuery ));
