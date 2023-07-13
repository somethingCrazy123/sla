$(document).ready(function()
{

   
        if($('.bbb_slider').length)
        {
            var trendsSliders = $('.bbb_slider');
            trendsSliders.owlCarousel(
            {
                loop:true,
                margin:5,
                nav:false,
                dots:false,
                autoplayHoverPause:true,
                autoplay:true,
                responsive:
                {
                    0:{items:2},
                    575:{items:3},
                    991:{items:4}
                }
            });

            if($('.bbb_prev').length)
            {
                var prev = $('.bbb_prev');
                prev.on('click', function()
                {
                    trendsSliders.trigger('prev.owl.carousel');
                });
            }

            if($('.bbb_next').length)
            {
                var next = $('.bbb_next');
                next.on('click', function()
                {
                    trendsSliders.trigger('next.owl.carousel');
                });
            }
        };



        if($('.sss_slider').length)
        {
            var trendsSlider = $('.sss_slider');
            trendsSlider.owlCarousel(
            {
                loop:true,
                margin:30,
                nav:false,
                dots:false,
                autoplayHoverPause:true,
                autoplay:true,
                responsive:
                {
                    0:{items:2},
                    575:{items:3},
                    991:{items:3}
                }
            });

            if($('.sss_prev').length)
            {
                var prev = $('.sss_prev');
                prev.on('click', function()
                {
                    trendsSlider.trigger('prev.owl.carousel');
                });
            }

            if($('.sss_next').length)
            {
                var next = $('.sss_next');
                next.on('click', function()
                {
                    trendsSlider.trigger('next.owl.carousel');
                });
            }
        }

    
            var silder = $(".owl-carousel");
            silder.owlCarousel({
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                items: 1,
                stagePadding: 20,
                center: true,
                nav: false,
                margin: 50,
                dots: true,
                loop: true,
                responsive: {
                    0: { items: 1 },
                    480: { items: 2 },
                    575: { items: 2 },
                    768: { items: 2 },
                    991: { items: 3 },
                    1200: { items: 4 }
                }
            });
        

    });