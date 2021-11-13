jQuery(function() {
    jQuery('table').wrap('<div class="scroll-table"></div>');
    jQuery(".scroll-table").after("<div class='guide-text'>Swipe to view <i class='fa fa-long-arrow-right'></i></div>");
    jQuery('a').attr('role', 'link');
    jQuery('input:button').attr('role', 'button');
    jQuery('input:submit').attr('role', 'submit');
    jQuery('input:text').attr('role', 'text');
    jQuery('input:hidden').attr('role', 'hidden');
    jQuery('.gtranslate a.gtflag').each(function() {
        var imgalt = jQuery(this).find("img").attr('alt');
        jQuery(this).attr('title', imgalt);
    });
});


jQuery(document).ready(function() {

    jQuery('.common-right a[target="_blank"]').removeAttr('target');
    /**************** Framework.js ************************/

    jQuery("#edit-search-block-form--2").attr("placeholder", "Search - Keyword, Phrase");
    jQuery(".gtranslate select").attr("id", "gtranslate");
    jQuery("#gtranslate").before('<label class="notdisplay" for="gtranslate">Google Translate</label>');


    if (getCookie('contrast') == 0 || getCookie('contrast') == null) {
        jQuery(".light").hide();
        jQuery(".dark").show();
    } else {
        jQuery(".light").show();
        jQuery(".dark").hide();
    }

    jQuery(".search-drop").css("display", "none");
    jQuery(".common-right ul li ul").css("visibility", "hidden");


    var num = 36;
    jQuery(window).bind('scroll', function() {
        if (jQuery(window).scrollTop() > num) {
            jQuery('.fixed-wrapper').addClass('sticky');
        } else {
            jQuery('.fixed-wrapper').removeClass('sticky');
        }
    });



    jQuery('.sub-menu').append('<i class="fa fa-caret-right"></i>');
    jQuery('.toggle-nav-bar').click(function() {
        jQuery('#nav').toggleClass('nav-open');
    });

    jQuery('a[href^=http]').click(function(e) {
        var curUrl = jQuery(this).attr('href');
        var curUrlArray = curUrl.split("/");
        if (curUrlArray[2] == "dor.gov.in") {} else {
            e.preventDefault();
            var str = "External site that opens in a new window.";
            if (jQuery("body").hasClass("i18n-hi")) {
                str = "बाहरी वेबसाइट जो एक नई विंडों में खुलती ह|";
            }
            if (confirm(str)) {
                window.open(curUrl, '_blank');
            }
        }
    });
    jQuery('a[href^="#skipCont"]').click(function(e) {
        e.preventDefault();
        jQuery('html,body').animate({
            scrollTop: jQuery(this.hash).offset().top
        }, 500);
        return false;
    });


    jQuery('#toggleSearch').live('focus', function() {
        jQuery('.search-drop').show();
        jQuery('#search_key').focus();
    });

    jQuery('.ico-sitemap a').live("focus", function(e) {
        jQuery('.search-drop').hide();
    });

    jQuery("#toggleSearch").click(function(e) {
        jQuery(".search-drop").show();
        e.stopPropagation();
    });

    jQuery(document).click(function(e) {
        if (!jQuery(e.target).is('.search-drop, .search-drop *')) {
            jQuery(".search-drop").hide();
        }
    });


    jQuery('#toggleSocial').click(function() {
        jQuery('.social-drop').slideToggle();
    });


    jQuery('#toggleAccessibility').click(function() {
        jQuery('.access-drop').slideToggle();
    });

    jQuery("#main-menu div ul").attr("id", "nav");
    dropdown1('nav', 'hover', 10);
    dropdown1("header-nav", "hover", 20);

    /**************** Framework.js ************************/

    jQuery('.dark').click(function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" media="screen" href="' + base_url + '/sites/all/themes/egovrev/css/site-change.css">');
    });

    if (getCookie('contrast') == "1") {
        jQuery('head').append('<link rel="stylesheet" type="text/css" media="screen" href="' + base_url + '/sites/all/themes/egovrev/css/site-change.css">');
    }
    if (getCookie('contrast') == "0") {
        jQuery("link[href*='/css/site-change.css']").remove();
    }

    jQuery('#flexCarousel').flexslider({
        animation: "slide",
        animationLoop: false,
        prevText: "",
        nextText: "",
        itemWidth: 200,
        itemMargin: 5,
        minItems: 2,
        maxItems: 6,
        slideshow: 1,
        move: 1,
        controlNav: true,
        touch: true,
        pausePlay: true,
        start: function(slider) {
            jQuery('body').removeClass('loading');
            if (slider.pagingCount === 1) {
                slider.addClass('flex-centered');
            }

            jQuery('.icon-pause').click(function() {
                jQuery('#flexCarousel').pause();
            });

            jQuery('.icon-play').click(function() {
                jQuery('#flexCarousel').play();
            });
        }
    });



    var comp = new RegExp(location.host);
    jQuery('.inner-content a').each(function() {
        if (comp.test(jQuery(this).attr('href'))) {
            jQuery(this).addClass('local');
            jQuery(this).removeAttr('target');
            jQuery(this).removeAttr('title');
        } else {
            jQuery(this).addClass('external');
        }
    });

    jQuery('.accOut h2.subheadTxt').click(function(e) {
        jQuery(this).siblings('.accOutDrop').slideToggle();
        jQuery(this).children('.icon-down-arrow').toggleClass('arrow-active');
    });

    jQuery('.whatsNewLists ul').parent().unwrap();
    jQuery('.whatsNewLists ul').unwrap();

    jQuery('.minister-panel .min-box').parent().parent().unwrap();
    jQuery('.minister-panel .min-box').parent().unwrap();
    jQuery('.minister-panel .min-box').unwrap();

    jQuery(".footer_toggle_menu").click(function() {
        jQuery(".footer-top-wrapper ul").toggleClass('ft-open');
    });

    jQuery('#sitemap h2').each(function() {
        if (jQuery(this).text() == 'Innerpage Menu')
            jQuery(this).text('Left Menu');
    });

});

jQuery(document).ready(function() {

    jQuery('.region-inner-left-menu > ul').toggleClass('ul js');
    jQuery('.region-inner-left-menu .js ul').hide();
    jQuery('.region-inner-left-menu li').hover(function(e) {
        jQuery(this).find('ul').slideToggle(200);
        jQuery('.clicker').toggleClass('active');
        e.stopPropagation();
    });
    jQuery(document).hover(function() {
        if (jQuery('.region-inner-left-menu .js ul').is(':visible')) {
            jQuery('.region-inner-left-menu .js ul', this).slideUp();
            jQuery('.region-inner-left-menu').removeClass('active');
        }
    });

    jQuery('.breadcam a').filter(function() {
        return jQuery(this).html().indexOf('Edit') != -1;
    }).remove();

    jQuery('.expanded').prepend('<span class="responsive-toggle"><p class="t-plus">+</p> <p class="t-minus">-</p></span>');
    jQuery('.t-minus').hide();
    jQuery('.menu-block-wrapper ul li.expanded').find('.responsive-toggle').click(function() {
        jQuery(this).siblings('.menu').toggleClass('responsive-open');
        jQuery(this).find('.t-plus').toggle();
        jQuery(this).find('.t-minus').toggle();
    });


    jQuery('.menu-name-main-menu ul li a.home-menu').html('<i class="fa fa-home"></i>');
    var divwarp = jQuery(".external-links ul > li");
    for (var i = 0; i < divwarp.length; i += 4) {
        divwarp.slice(i, i + 4).wrapAll("<div class='warp-3-col'></div>");
    }

    var whatswarp = jQuery(".whatsNewLists ul > li");
    for (var i = 0; i < whatswarp.length; i += 3) {
        whatswarp.slice(i, i + 3).wrapAll("<div class='warp-3-col'></div>");
    }
    jQuery('a.local').attr('title', 'pdf file that open in new window');
    if (jQuery('body').hasClass('i18n-hi')) {
        jQuery('#header-nav').find('li').last().find('a').attr('title', jQuery('#header-nav').find('li').last().find('a').text().trim() + ' version');
    } else {
        jQuery('#header-nav').find('li').last().find('a').attr('title', jQuery('#header-nav').find('li').last().attr('class').trim() + ' version');
    }

});





function dropdown1(dropdownId, hoverClass, mouseOffDelay) {
    if (dropdown = document.getElementById(dropdownId)) {
        var listItems = dropdown.getElementsByTagName('li');
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].onmouseover = function() {
                this.className = addClass(this);
            }
            listItems[i].onmouseout = function() {
                var that = this;
                setTimeout(function() {
                    that.className = removeClass(that);
                }, mouseOffDelay);
                this.className = that.className;
            }
            var anchor = listItems[i].getElementsByTagName('a');
            anchor = anchor[0];
            anchor.onfocus = function() {
                tabOn(this.parentNode);
            }
            anchor.onblur = function() {
                tabOff(this.parentNode);
            }
        }
    }

    function tabOn(li) {
        if (li.nodeName == 'LI') {
            li.className = addClass(li);
            tabOn(li.parentNode.parentNode);
        }
    }

    function tabOff(li) {
        if (li.nodeName == 'LI') {
            li.className = removeClass(li);
            tabOff(li.parentNode.parentNode);
        }
    }

    function addClass(li) {
        return li.className + ' ' + hoverClass;
    }

    function removeClass(li) {
        return li.className.replace(hoverClass, "");
    }
}

jQuery(window).bind("load", function() {
    jQuery('#nav ul').addClass('navblock')
});