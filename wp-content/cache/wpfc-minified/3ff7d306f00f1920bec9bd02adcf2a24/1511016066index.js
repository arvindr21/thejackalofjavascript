// source --> http://thejackalofjavascript.com/wp-content/plugins/responsive-lightbox/js/front.js 
( function ( $ ) {

	$( document ).on( 'ready' + rlArgs.customEvents, function () {

		// initialise event
		$.event.trigger( {
			type		: 'doResponsiveLightbox',
			script		: rlArgs.script,
			selector	: rlArgs.selector,
			args		: rlArgs
		} );

	} );

	// this is similar to the WP function add_action();
	$( document ).on( 'doResponsiveLightbox', function( event ) {

    	var script 		= event.script,
    		selector 	= event.selector
    		args 		= event.args;

    	if ( typeof script === 'undefined' || typeof selector === 'undefined' ) {
    		return false;
    	}

    	switch( script ) {

    		case 'swipebox':

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).swipebox( {
					useCSS						: ( rlArgs.animation === '1' ? true : false ),
					useSVG						: ( rlArgs.useSVG === '1' ? true : false ),
					hideCloseButtonOnMobile		: ( rlArgs.hideCloseButtonOnMobile === '1' ? true : false ),
					removeBarsOnMobile			: ( rlArgs.removeBarsOnMobile === '1' ? true : false ),
					hideBarsDelay				: ( rlArgs.hideBars === '1' ? parseInt( rlArgs.hideBarsDelay ) : 0 ),
					videoMaxWidth				: parseInt( rlArgs.videoMaxWidth ),
					loopAtEnd					: ( rlArgs.loopAtEnd === '1' ? true : false )
				} );

				break;

			case 'prettyphoto':

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).prettyPhoto( {
					hook						: 'data-rel',
					animation_speed				: rlArgs.animationSpeed,
					slideshow					: ( rlArgs.slideshow === '1' ? parseInt( rlArgs.slideshowDelay ) : false ),
					autoplay_slideshow			: ( rlArgs.slideshowAutoplay === '1' ? true : false ),
					opacity						: rlArgs.opacity,
					show_title					: ( rlArgs.showTitle === '1' ? true : false ),
					allow_resize				: ( rlArgs.allowResize === '1' ? true : false ),
					allow_expand				: ( rlArgs.allowExpand === '1' ? true : false ),
					default_width				: parseInt( rlArgs.width ),
					default_height				: parseInt( rlArgs.height ),
					counter_separator_label		: rlArgs.separator,
					theme						: rlArgs.theme,
					horizontal_padding			: parseInt( rlArgs.horizontalPadding ),
					hideflash					: ( rlArgs.hideFlash === '1' ? true : false ),
					wmode						: rlArgs.wmode,
					autoplay					: ( rlArgs.videoAutoplay === '1' ? true : false ),
					modal						: ( rlArgs.modal === '1' ? true : false ),
					deeplinking					: ( rlArgs.deeplinking === '1' ? true : false ),
					overlay_gallery				: ( rlArgs.overlayGallery === '1' ? true : false ),
					keyboard_shortcuts			: ( rlArgs.keyboardShortcuts === '1' ? true : false ),
					social_tools				: ( rlArgs.social === '1' ? '<div class="pp_social"><div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href=' + location.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' : '' ),
					changepicturecallback		: function () {
					},
					callback					: function () {
					},
					ie6_fallback				: true
				} );

				break;

			case 'fancybox':

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).fancybox( {
					modal						: ( rlArgs.modal === '1' ? true : false ),
					overlayShow					: ( rlArgs.showOverlay === '1' ? true : false ),
					showCloseButton				: ( rlArgs.showCloseButton === '1' ? true : false ),
					enableEscapeButton			: ( rlArgs.enableEscapeButton === '1' ? true : false ),
					hideOnOverlayClick			: ( rlArgs.hideOnOverlayClick === '1' ? true : false ),
					hideOnContentClick			: ( rlArgs.hideOnContentClick === '1' ? true : false ),
					cyclic						: ( rlArgs.cyclic === '1' ? true : false ),
					showNavArrows				: ( rlArgs.showNavArrows === '1' ? true : false ),
					autoScale					: ( rlArgs.autoScale === '1' ? true : false ),
					scrolling					: rlArgs.scrolling,
					centerOnScroll				: ( rlArgs.centerOnScroll === '1' ? true : false ),
					opacity						: ( rlArgs.opacity === '1' ? true : false ),
					overlayOpacity				: parseFloat( rlArgs.overlayOpacity / 100 ),
					overlayColor				: rlArgs.overlayColor,
					titleShow					: ( rlArgs.titleShow === '1' ? true : false ),
					titlePosition				: rlArgs.titlePosition,
					transitionIn				: rlArgs.transitions,
					transitionOut				: rlArgs.transitions,
					easingIn					: rlArgs.easings,
					easingOut					: rlArgs.easings,
					speedIn						: parseInt( rlArgs.speeds ),
					speedOut					: parseInt( rlArgs.speeds ),
					changeSpeed					: parseInt( rlArgs.changeSpeed ),
					changeFade					: parseInt( rlArgs.changeFade ),
					padding						: parseInt( rlArgs.padding ),
					margin						: parseInt( rlArgs.margin ),
					width						: parseInt( rlArgs.videoWidth ),
					height						: parseInt( rlArgs.videoHeight )
				} );

				break;

			case 'nivo':

				$.each( $( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ), function () {
					var attr = $( this ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr === 'undefined' || attr == false ) {
						// if not found then try to check rel attribute for backward compatibility
						attr = $( this ).attr( 'rel' );
					}

					// for some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
					if ( typeof attr !== 'undefined' && attr !== false ) {
						var match = attr.match( new RegExp( rlArgs.selector + '\\-(gallery\\-(?:[\\da-z]{1,4}))', 'ig' ) );

						if ( match !== null ) {
							$( this ).attr( 'data-lightbox-gallery', match[0] );
						}
					}

				} );

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).nivoLightbox( {
					effect						: rlArgs.effect,
					clickOverlayToClose			: ( rlArgs.clickOverlayToClose === '1' ? true : false ),
					keyboardNav					: ( rlArgs.keyboardNav === '1' ? true : false ),
					errorMessage				: rlArgs.errorMessage
				} );

				break;

			case 'imagelightbox':

				var selectors = [];

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).each( function ( i, item ) {
					var attr = $( item ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
						selectors.push( attr );
					// if not found then try to check rel attribute for backward compatibility
					else {
						attr = $( item ).attr( 'rel' );

						if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
							selectors.push( attr );
					}
				} );

				if ( selectors.length > 0 ) {

					// make unique
					selectors = $.unique( selectors );

					$( selectors ).each( function ( i, item ) {
						$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).imageLightbox( {
							animationSpeed		: parseInt( rlArgs.animationSpeed ),
							preloadNext			: ( rlArgs.preloadNext === '1' ? true : false ),
							enableKeyboard		: ( rlArgs.enableKeyboard === '1' ? true : false ),
							quitOnEnd			: ( rlArgs.quitOnEnd === '1' ? true : false ),
							quitOnImgClick		: ( rlArgs.quitOnImageClick === '1' ? true : false ),
							quitOnDocClick		: ( rlArgs.quitOnDocumentClick === '1' ? true : false )
						} );
					} );
				}

				break;

			case 'tosrus':

				var selectors = [];

				$( 'a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]' ).each( function ( i, item ) {
					var attr = $( item ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
						selectors.push( attr );
					// if not found then try to check rel attribute for backward compatibility
					else {
						attr = $( item ).attr( 'rel' );

						if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
							selectors.push( attr );
					}
				} );

				if ( selectors.length > 0 ) {

					// make unique
					selectors = $.unique( selectors );

					$( selectors ).each( function ( i, item ) {
						$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).tosrus( {
							infinite			: ( rlArgs.infinite === '1' ? true : false ),
							autoplay				: {
								play				: ( rlArgs.autoplay === '1' ? true : false ),
								pauseOnHover		: ( rlArgs.pauseOnHover === '1' ? true : false ),
								timeout 			: rlArgs.timeout
							},
							effect					: rlArgs.effect,
							keys					: {
								prev					: ( rlArgs.keys === '1' ? true : false ),
								next					: ( rlArgs.keys === '1' ? true : false ),
								close					: ( rlArgs.keys === '1' ? true : false )
							},
							pagination				: {
								add						: ( rlArgs.pagination === '1' ? true : false ),
								type					: rlArgs.paginationType
							},
							// forced
							show					: false,
							buttons					: true,
							caption					: {
								add						: true,
								attributes				: ["title"]
							}
						} );
					} );
				}

				break;
		}

	} );

} )( jQuery );
// source --> http://thejackalofjavascript.com/wp-content/plugins/wpfront-notification-bar/jquery-plugins/jquery.c.js 
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
		} catch(e) {
			return;
		}

		try {
			// If we can't parse the cookie, ignore it, it's unusable.
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write
		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));
// source --> http://thejackalofjavascript.com/wp-content/plugins/wpfront-notification-bar/js/wpfront-notification-bar.js 
/*
 WPFront Notification Bar Plugin
 Copyright (C) 2013, WPFront.com
 Website: wpfront.com
 Contact: syam@wpfront.com
 
 WPFront Notification Bar Plugin is distributed under the GNU General Public License, Version 3,
 June 2007. Copyright (C) 2007 Free Software Foundation, Inc., 51 Franklin
 St, Fifth Floor, Boston, MA 02110, USA
 
 */

(function() {
    var $ = jQuery;

    //displays the notification bar
    window.wpfront_notification_bar = function(data) {
        var keep_closed_cookie = "wpfront-notification-bar-keep-closed";

        var spacer = $("#wpfront-notification-bar-spacer").show();
        var bar = $("#wpfront-notification-bar");
        var open_button = $("#wpfront-notification-bar-open-button");

        //set the position
        if (data.position == 1) {
            var top = 0;
            if (data.fixed_position && data.is_admin_bar_showing) {
                top = $("html").css("margin-top");
                if (top == "0px")
                    top = $("html").css("padding-top");
                top = parseInt(top);
            }
            if (data.fixed_position) {
                top += data.position_offset;
            }
            bar.css("top", top + "px");
            open_button.css("top", top + "px");
            $("body").prepend(spacer);
            spacer.css("top", data.position_offset + "px");
        }
        else {
            $("body").append(spacer);
            bar.css("bottom", "0px");
        }

        var height = bar.height();
        if (data.height > 0) {
            height = data.height;
            bar.find("table, tbody, tr").css("height", "100%");
        }

        bar.height(0).css({"position": (data.fixed_position ? "fixed" : "relative"), "visibility": "visible"});
        open_button.css({"position": (data.fixed_position ? "fixed" : "absolute")});

        //function to set bar height based on options
        var closed = false;
        var user_closed = false;
        function setHeight(height, callback, userclosed) {
            callback = callback || $.noop;

            if (userclosed)
                user_closed = true;

            if (height == 0) {
                if (closed)
                    return;
                closed = true;
            }
            else {
                if (!closed)
                    return;
                closed = false;
            }

            var fn = callback;
            callback = function() {
                fn();
                if (height > 0) {
                    //set height to auto if in case content wraps on resize
                    if (data.height == 0)
                        bar.height("auto");
                    open_button.hide();
                    closed = false;
                }
                if (height == 0 && data.display_open_button) {
                    open_button.show();
                }
                if (height == 0 && data.keep_closed && userclosed) {
                    if (data.keep_closed_for > 0)
                        $.cookie(keep_closed_cookie, 1, {path: "/", expires: data.keep_closed_for});
                    else
                        $.cookie(keep_closed_cookie, 1, {path: "/"});
                }
            };

            //set animation
            if (data.animate_delay > 0) {
                bar.stop().animate({"height": height + "px"}, data.animate_delay * 1000, "swing", callback);
                if (data.fixed_position)
                    spacer.stop().animate({"height": height + "px"}, data.animate_delay * 1000);
            }
            else {
                bar.height(height);
                if (data.fixed_position)
                    spacer.height(height);
                callback();
            }

        }

        if (data.close_button) {
            bar.find(".wpfront-close").click(function() {
                setHeight(0, null, true);
            });
        }

        //close button action
        if (data.button_action_close_bar) {
            bar.find(".wpfront-button").click(function() {
                setHeight(0, null, true);
            });
        }

        if (data.display_open_button) {
            open_button.click(function() {
                setHeight(height);
            });
        }

        if (data.keep_closed) {
            if ($.cookie(keep_closed_cookie)) {
                setHeight(0);
                return;
            }
        }

        closed = true;

        if (data.display_scroll) {
            setHeight(0);

            $(window).scroll(function() {
                if (user_closed)
                    return;

                if ($(this).scrollTop() > data.display_scroll_offset) {
                    setHeight(height);
                }
                else {
                    setHeight(0);
                }
            });
        }
        else {
            //set open after seconds and auto close seconds.
            setTimeout(function() {
                setHeight(height, function() {
                    if (data.auto_close_after > 0) {
                        setTimeout(function() {
                            setHeight(0, null, true);
                        }, data.auto_close_after * 1000);
                    }
                });
            }, data.display_after * 1000);
        }
    };
})();