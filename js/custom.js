jQuery(window).ready(function($) {
	"use strict";

            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data("countToOptions") || {});
                $this.countTo(options);
            }

	        function count(options) {
	            var $this = $(this);
	            options = $.extend({}, options || {}, $this.data("countToOptions") || {});
	            $this.countTo(options);
	        }

	        jQuery("#counter_2468").data("countToOptions", {
	            formatter: function(value, options) {
	                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
	            }
	        });

	        if (typeof jQuery.fn.waypoint !== "undefined") {
	            jQuery("#counter_2468").waypoint(function($) {
	                jQuery("#counter_2468").each(count);
	            }, {
	                offset: "95%"
	            });
	        }
	        function count(options) {
	            var $this = $(this);
	            options = $.extend({}, options || {}, $this.data("countToOptions") || {});
	            $this.countTo(options);
	        }

	        jQuery("#counter_808").data("countToOptions", {
	            formatter: function(value, options) {
	                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
	            }
	        });

	        if (typeof jQuery.fn.waypoint !== "undefined") {
	            jQuery("#counter_808").waypoint(function($) {
	                jQuery("#counter_808").each(count);
	            }, {
	                offset: "95%"
	            });
	        }
	        function count(options) {
	            var $this = $(this);
	            options = $.extend({}, options || {}, $this.data("countToOptions") || {});
	            $this.countTo(options);
	        }

	        jQuery("#counter_7821").data("countToOptions", {
	            formatter: function(value, options) {
	                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
	            }
	        });

	        if (typeof jQuery.fn.waypoint !== "undefined") {
	            jQuery("#counter_7821").waypoint(function($) {
	                jQuery("#counter_7821").each(count);
	            }, {
	                offset: "95%"
	            });
	        }
	        function count(options) {
	            var $this = $(this);
	            options = $.extend({}, options || {}, $this.data("countToOptions") || {});
	            $this.countTo(options);
	        }

	        jQuery("#counter_9635").data("countToOptions", {
	            formatter: function(value, options) {
	                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
	            }
	        });

	        if (typeof jQuery.fn.waypoint !== "undefined") {
	            jQuery("#counter_9635").waypoint(function($) {
	                jQuery("#counter_9635").each(count);
	            }, {
	                offset: "95%"
	            });
	        }
            jQuery("#counter_724").data("countToOptions", {
                formatter: function(value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
                }
            });

            if (typeof jQuery.fn.waypoint !== "undefined") {
                jQuery("#counter_724").waypoint(function($) {
                    jQuery("#counter_724").each(count);
                }, {
                    offset: "95%"
                });
            }
            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data("countToOptions") || {});
                $this.countTo(options);
            }

            jQuery("#counter_4267").data("countToOptions", {
                formatter: function(value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
                }
            });

            if (typeof jQuery.fn.waypoint !== "undefined") {
                jQuery("#counter_4267").waypoint(function($) {
                    jQuery("#counter_4267").each(count);
                }, {
                    offset: "95%"
                });
            }
            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data("countToOptions") || {});
                $this.countTo(options);
            }

            jQuery("#counter_8542").data("countToOptions", {
                formatter: function(value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
                }
            });

            if (typeof jQuery.fn.waypoint !== "undefined") {
                jQuery("#counter_8542").waypoint(function($) {
                    jQuery("#counter_8542").each(count);
                }, {
                    offset: "95%"
                });
            }
            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data("countToOptions") || {});
                $this.countTo(options);
            }

            jQuery("#counter_2883").data("countToOptions", {
                formatter: function(value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
                }
            });

            if (typeof jQuery.fn.waypoint !== "undefined") {
                jQuery("#counter_2883").waypoint(function($) {
                    jQuery("#counter_2883").each(count);
                }, {
                    offset: "95%"
                });
            }

	jQuery('.main-menu, .mobile-menu-wrapper').localScroll({
		offset: -100
	});

	var urls_from_menu = jQuery('.main-menu li');
	var page_sections = jQuery('.onepager_section_class');
	page_sections.waypoint({
		handler: function(direction) {
		var pos = jQuery.inArray(this,page_sections);
		var active_section = page_sections.eq(direction === "up" ? Math.max(0,pos-1) : pos);
		var active_link = jQuery('.main-menu li a[href$="#' + active_section.attr("id") + '"]');
		urls_from_menu.removeClass("current_page_item");
		urls_from_menu.removeClass("current-menu-item");
		active_link.parent().addClass("current_page_item");
		active_link.parent().addClass("current-menu-item");
	},
	offset: '200'
	});

	if
      (jQuery(document).scrollTop() > 120){
		  jQuery(".header-wrapper.header2").addClass("shown");
		}
		else
		{
			jQuery(".header-wrapper.header2").removeClass("shown");
			
		}

	if (jQuery(".header-wrapper-special").length > 0) {
		jQuery(window).load(function () {
			    "use strict";
				var offsetHeight = document.getElementById('header2').offsetHeight;
				jQuery(".header-extra").css("height", offsetHeight+"px");
		});
		jQuery(window).scroll(function () {
			"use strict";
			if( jQuery(document).scrollTop() >= jQuery('.header-wrapper-special').offset().top) {
				jQuery(".header-extra").css("display", "block");
				jQuery(".header-wrapper-special").addClass("header-fixed");
			} else {
				jQuery(".header-extra").css("display", "none");
				jQuery(".header-wrapper-special").removeClass("header-fixed");
			}
			if ( jQuery('.header-extra').offset().top >= jQuery('.header-wrapper-special').offset().top) {
				jQuery(".header-extra").css("display", "none");
				jQuery(".header-wrapper-special").removeClass("header-fixed");
			}
		
		});

		var urls_from_menu = jQuery('.main-menu li');
		var page_sections = jQuery('.onepager_section_class');
		page_sections.waypoint({
			handler: function(direction) {
			var pos = jQuery.inArray(this,page_sections);
			var active_section = page_sections.eq(direction === "up" ? Math.max(0,pos-1) : pos);
			var active_link = jQuery('.main-menu li a[href$="#' + active_section.attr("id") + '"]');
			urls_from_menu.removeClass("current_page_item");
			urls_from_menu.removeClass("current-menu-item");
			active_link.parent().addClass("current_page_item");
			active_link.parent().addClass("current-menu-item");
		},
		offset: '0'
		});

		/*	Testimonials START */
		if (jQuery(".owl-carousel.testimonials-wrapper").length > 0) {
			jQuery(document).ready(function() {
				"use strict";
				  var owl = jQuery(".owl-carousel.testimonials-wrapper");
				  owl.owlCarousel({
			 
					  itemsCustom : [
						[0, 1],
						[450, 1],
						[600, 1],
						[700, 1],
						[1000, 1],
						[1200, 1],
						[1400, 1],
						[1600, 1]
					  ],
					  navigation : false,
					  pagination : true,
					  autoPlay: 5000,
					  stopOnHover: true
				  });
			});
		}

		/*	Testimonials END */
	}

	var container = jQuery(".pego-isotope-wrapper");
	    container.isotope({
		itemSelector : ".isotope-item",
		layoutMode: "masonry",
		transitionDuration: "0.7s"	
    });

	if (jQuery("#footer").length > 0) {
 		var offsetHeight = document.getElementById('footer').offsetHeight;
		jQuery(".container-wrapper").css("padding-bottom", offsetHeight+"px");
	}

	var offsetHeightHeader = document.getElementById('header').offsetHeight;
	if (jQuery(".header-info").length > 0) {
		var offsetHeightHeader2 = document.getElementById('header-info').offsetHeight;
		var mobileheight = offsetHeightHeader - offsetHeightHeader2;
		jQuery(".mobile-menu-wrapper").css("top", mobileheight+"px");
	} else {
		jQuery(".mobile-menu-wrapper").css("top", offsetHeightHeader+"px");
	}
	if (jQuery("#footer").length > 0) {
  		var offsetHeight = document.getElementById('footer').offsetHeight;
		jQuery(".container-wrapper").css("padding-bottom", offsetHeight+"px");
	}

	var offsetHeightHeader = document.getElementById('header').offsetHeight;
	if (jQuery(".header-info").length > 0) {
		var offsetHeightHeader2 = document.getElementById('header-info').offsetHeight;
		var mobileheight = offsetHeightHeader - offsetHeightHeader2;
		jQuery(".mobile-menu-wrapper").css("top", mobileheight+"px");
	} else {
		jQuery(".mobile-menu-wrapper").css("top", offsetHeightHeader+"px");
	}
	if (jQuery("#footer").length > 0) {
 		var offsetHeight = document.getElementById('footer').offsetHeight;
		jQuery(".container-wrapper").css("padding-bottom", offsetHeight+"px");
	}

	var offsetHeightHeader = document.getElementById('header').offsetHeight;
	if (jQuery(".header-info").length > 0) {
		var offsetHeightHeader2 = document.getElementById('header-info').offsetHeight;
		var mobileheight = offsetHeightHeader - offsetHeightHeader2;
		jQuery(".mobile-menu-wrapper").css("top", mobileheight+"px");
	} else {
		jQuery(".mobile-menu-wrapper").css("top", offsetHeightHeader+"px");
	}

	if (jQuery("a[data-gal^='prettyPhoto']").length > 0) {
		jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});
	}

	if (jQuery("a[rel^='prettyPhoto']").length > 0) {
  		jQuery("a[rel^='prettyPhoto']").prettyPhoto();
  	}

  	
	jQuery(".animsition").animsition({
	inClass               :   'fade-in',
	outClass              :   'fade-out',
	inDuration            :    1500,
	outDuration           :    800,
	linkElement           :   '.animsition-link',
	loading               :    true,
	loadingParentElement  :   'body', //animsition wrapper element
	loadingClass          :   'animsition-loading',
	unSupportCss          : [ 'animation-duration',
							  '-webkit-animation-duration',
							  '-o-animation-duration'
							],
	overlay               :   false,

	overlayClass          :   'animsition-overlay-slide',
	overlayParentElement  :   'body'
	});

	var slide = false;
	jQuery(".menu-icon-mobile").on( "click", function() {
	
		if (slide == false) {
			jQuery(".mobile-menu-wrapper").slideDown("slow");
			jQuery(".menu-icon.menu-icon-mobile").addClass("opened");
			slide = true;
		}
		else {
			jQuery(".mobile-menu-wrapper").slideUp("slow");
			jQuery(".menu-icon.menu-icon-mobile").removeClass("opened");
			slide = false;
		}
  	});


  	jQuery(".mobile-menu-wrapper a").on( "click", function() {
 		if (slide == false) {
			jQuery(".mobile-menu-wrapper").slideDown("slow");
			jQuery(".menu-icon.menu-icon-mobile").addClass("opened");
			slide = true;
		}
		else {
			jQuery(".mobile-menu-wrapper").slideUp("slow");
			jQuery(".menu-icon.menu-icon-mobile").removeClass("opened");
			slide = false;
		}
  	});


    jQuery('.scroll_to_top').on( "click", function() {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

	function goBack() {
	    window.history.back();
	}

});	




