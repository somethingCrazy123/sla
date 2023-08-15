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
                    575:{items:2},
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



            (function ($) {
                $.fn.countTo = function (options) {
                    options = options || {};
                    
                    return $(this).each(function () {
                        // set options for current element
                        var settings = $.extend({}, $.fn.countTo.defaults, {
                            from:            $(this).data('from'),
                            to:              $(this).data('to'),
                            speed:           $(this).data('speed'),
                            refreshInterval: $(this).data('refresh-interval'),
                            decimals:        $(this).data('decimals')
                        }, options);
                        
                        // how many times to update the value, and how much to increment the value on each update
                        var loops = Math.ceil(settings.speed / settings.refreshInterval),
                            increment = (settings.to - settings.from) / loops;
                        
                        // references & variables that will change with each update
                        var self = this,
                            $self = $(this),
                            loopCount = 0,
                            value = settings.from,
                            data = $self.data('countTo') || {};
                        
                        $self.data('countTo', data);
                        
                        // if an existing interval can be found, clear it first
                        if (data.interval) {
                            clearInterval(data.interval);
                        }
                        data.interval = setInterval(updateTimer, settings.refreshInterval);
                        
                        // initialize the element with the starting value
                        render(value);
                        
                        function updateTimer() {
                            value += increment;
                            loopCount++;
                            
                            render(value);
                            
                            if (typeof(settings.onUpdate) == 'function') {
                                settings.onUpdate.call(self, value);
                            }
                            
                            if (loopCount >= loops) {
                                // remove the interval
                                $self.removeData('countTo');
                                clearInterval(data.interval);
                                value = settings.to;
                                
                                if (typeof(settings.onComplete) == 'function') {
                                    settings.onComplete.call(self, value);
                                }
                            }
                        }
                        
                        function render(value) {
                            var formattedValue = settings.formatter.call(self, value, settings);
                            $self.html(formattedValue);
                        }
                    });
                };
                
                $.fn.countTo.defaults = {
                    from: 0,               // the number the element should start at
                    to: 0,                 // the number the element should end at
                    speed: 1000,           // how long it should take to count between the target numbers
                    refreshInterval: 100,  // how often the element should be updated
                    decimals: 0,           // the number of decimal places to show
                    formatter: formatter,  // handler for formatting the value before rendering
                    onUpdate: null,        // callback method for every time the element is updated
                    onComplete: null       // callback method for when the element finishes updating
                };
                
                function formatter(value, settings) {
                    return value.toFixed(settings.decimals);
                }
            }(jQuery));
            
            jQuery(function ($) {
              // custom formatting example
              $('.count-number').data('countToOptions', {
                formatter: function (value, options) {
                  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                }
              });
              
              // start all the timers
              $('.timer').each(count);  
              
              function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
              }
            });



            setTimeout(function(){
                $(".modal").modal('show');
            },5000)
    });