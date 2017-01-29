
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

	// skills chart
	$(document).ready(function(e) {
	//var windowBottom = $(window).height();
	var index=0;
	$(document).scroll(function(){
		var top = $('#skills').height()-$(window).scrollTop();
		// console.log(top)
		if(top<-300){
			if(index==0){	
			
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			
				}
			index++;
		}
	})
	//console.log(nagativeValue)
	});


  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	});
	
  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});

}());


}
main();
$(document).ready(function( $ ) {
    $('.introduction').typeIt({
        speed: 50,
        autoStart: false
    }).tiType('Hello :)')
        .tiPause(500)
        .tiDelete()
        .tiType('I\'m <span class="name">Kishan Kachchhi</span>')
        .tiPause(1000)
        .tiType('<h4 class="tagline">A Web Developer & freelancer</h4>')
        .tiPause(750)
        .tiSettings({speed: 50})
        .tiType('<a href="#about" class="btn btn-default btn-lg page-scroll">More about me</a>');

    /*$('.intro-text').typeIt({
        speed: 50,
        autoStart: false
    }).tiType('<h1>Hello :)</h1>')
        .tiPause(500)
        .tiDelete()
        .tiType('<h1>I\'m <span class="name">Kishan Kachchhi</span></h1>')
        .tiPause(1000)
        .tiType('<p>A Web Developer & freelancer</p>')
        .tiSettings({speed: 700})
        .tiType('...')
        .tiPause(750)
        .tiSettings({speed: 50})
        .tiType('<a href="#about" class="btn btn-default btn-lg page-scroll">Learn More</a>');*/
});

