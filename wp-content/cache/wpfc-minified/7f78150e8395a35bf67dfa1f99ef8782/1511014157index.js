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
// source --> http://thejackalofjavascript.com/wp-content/plugins/jetpack/_inc/spin.js 
//fgnass.github.com/spin.js#v1.3

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  /* CommonJS */
  if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    if(s[prop] !== undefined) return prop
    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto',         // center horizontally
    position: 'relative'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    if (typeof this == 'undefined') return new Spinner(o)
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width
        , ep // element position
        , tp // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null)
        tp = pos(target)
        ep = pos(el)
        css(el, {
          left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
          top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid)  + 'px'
        })
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))

        ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: o.color, opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));
// source --> http://thejackalofjavascript.com/wp-content/plugins/jetpack/_inc/jquery.spin.js 
/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

/*

Basic Usage:
============

$('#el').spin(); // Creates a default Spinner using the text color of #el.
$('#el').spin({ ... }); // Creates a Spinner using the provided options.

$('#el').spin(false); // Stops and removes the spinner.

Using Presets:
==============

$('#el').spin('small'); // Creates a 'small' Spinner using the text color of #el.
$('#el').spin('large', '#fff'); // Creates a 'large' white Spinner.

Adding a custom preset:
=======================

$.fn.spin.presets.flower = {
  lines: 9
  length: 10
  width: 20
  radius: 0
}

$('#el').spin('flower', 'red');

*/

(function(factory) {

  if (typeof exports == 'object') {
    // CommonJS
    factory(require('jquery'), require('spin'))
  }
  else if (typeof define == 'function' && define.amd) {
    // AMD, register as anonymous module
    define(['jquery', 'spin'], factory)
  }
  else {
    // Browser globals
    if (!window.Spinner) throw new Error('Spin.js not present')
    factory(window.jQuery, window.Spinner)
  }

}(function($, Spinner) {

  $.fn.spin = function(opts, color) {

    return this.each(function() {
      var $this = $(this),
        data = $this.data();

      if (data.spinner) {
        data.spinner.stop();
        delete data.spinner;
      }
      if (opts !== false) {
        opts = $.extend(
          { color: color || $this.css('color') },
          $.fn.spin.presets[opts] || opts
        )
        // Begin WordPress Additions
        // To use opts.right, you need to have specified a length, width, and radius.
        if ( typeof opts.right !== 'undefined' && typeof opts.length !== 'undefined'
          && typeof opts.width !== 'undefined' && typeof opts.radius !== 'undefined' ) {
          var pad = $this.css( 'padding-left' );
          pad = ( typeof pad === 'undefined' ) ? 0 : parseInt( pad, 10 );
          opts.left = $this.outerWidth() - ( 2 * ( opts.length + opts.width + opts.radius ) ) - pad - opts.right;
          delete opts.right;
        }
        // End WordPress Additions
        data.spinner = new Spinner(opts).spin(this)
      }
    })
  }

  $.fn.spin.presets = {
    tiny: { lines: 8, length: 2, width: 2, radius: 3 },
    small: { lines: 8, length: 4, width: 3, radius: 5 },
    large: { lines: 10, length: 8, width: 4, radius: 8 }
  }

}));

// Jetpack Presets Overrides:
(function($){
	$.fn.spin.presets.wp = { trail: 60, speed: 1.3 };
	$.fn.spin.presets.small  = $.extend( { lines:  8, length: 2, width: 2, radius: 3 }, $.fn.spin.presets.wp );
	$.fn.spin.presets.medium = $.extend( { lines:  8, length: 4, width: 3, radius: 5 }, $.fn.spin.presets.wp );
	$.fn.spin.presets.large  = $.extend( { lines: 10, length: 6, width: 4, radius: 7 }, $.fn.spin.presets.wp );
	$.fn.spin.presets['small-left']   = $.extend( { left:  5 }, $.fn.spin.presets.small );
	$.fn.spin.presets['small-right']  = $.extend( { right: 5 }, $.fn.spin.presets.small );
	$.fn.spin.presets['medium-left']  = $.extend( { left:  5 }, $.fn.spin.presets.medium );
	$.fn.spin.presets['medium-right'] = $.extend( { right: 5 }, $.fn.spin.presets.medium );
	$.fn.spin.presets['large-left']   = $.extend( { left:  5 }, $.fn.spin.presets.large );
	$.fn.spin.presets['large-right']  = $.extend( { right: 5 }, $.fn.spin.presets.large );
})(jQuery);