new WOW().init();
$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});
/**************************************************banner js on scroll****************************************** */
$(function() {
    var banner = $(".banner");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 30) {
            banner.css('z-index', '1');
        } else {
            banner.css('z-index', '2000');
        }
    });
});
/*************************************************end banner js on scroll****************************** */

/*************************************************categories swiper ********************************/
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	speed:700,
	autoplay: {
	delay: 20000, 
	disableOnInteraction: false,
	},
	loop: false,
	breakpoints: {
		1200: {
			slidesPerView: 5,
			spaceBetween: 10,
			slidesPerColumn: 5,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 20,
			slidesPerColumn: 4,
		},
		991: {
			slidesPerView: 3.5,
			spaceBetween: 20,
			slidesPerColumn: 3,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 10,
			slidesPerColumn: 3,
		},
		500: {
			slidesPerView: 2.2,
			spaceBetween: 10,
			slidesPerColumn: 2,
		},
		400: {
			slidesPerView: 1.5,
			spaceBetween: 10,
			slidesPerColumn: 2,
		},
		300: {
			slidesPerView: 1.4,
			spaceBetween: 10,
			slidesPerColumn: 2,
		},
		220: {
			slidesPerView: 1,
			spaceBetween: 10,
			slidesPerColumn: 1,
		}
		},
	loopFillGroupWithBlank: true,
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	},
	navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
	},
});
swiper.loopDestroy();
/***********************************************eno of categories ***********************************************/
