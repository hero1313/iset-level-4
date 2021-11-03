


      $( document ).ready(function() {


        
      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

        return direction;
      }



        var swiper = new Swiper('.swiper1', {
          slidesPerView: 1,
          
          loop: true,
          autoplay: {
              delay: 1500,
              disableOnInteraction: false,
            },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            },
          on: {
           
          },
        });
  
        var swiper = new Swiper('.swiper2', {
          slidesPerView: 1,
          
          loop: true,
          autoplay: {
              delay: 50000,
              disableOnInteraction: false,
            },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            },
          on: {
           
          },
        });
        

        var windowWidth = $(window).width();
if(windowWidth<=751){
    $('.doles-blog').insertBefore('.blog-text');
    }
      
        

      $('.about-scroll').click(function () {
        $('html, body').animate({ scrollTop: $('div.banner-slider').offset().top }, 2000);
      });
    
      $('.indexes-scroll').click(function () {
        $('html, body').animate({ scrollTop: $('div.who-container').offset().top }, 2000);
      });
    
      $('.policy-scroll').click(function () {
        $('html, body').animate({ scrollTop: $('div.policy').offset().top }, 2000);
      });
    
      $('.publications-scroll').click(function () {
        $('html, body').animate({ scrollTop: $('div.pub').offset().top }, 2000);
      });
    
      $('.activities-scroll').click(function () {
        $('html, body').animate({ scrollTop: $('div.activities').offset().top }, 2000);
      });
    
      $('.blog-scroll').click(function () {
        $('html, body').animate({ scrollTop: $('div.blog').offset().top }, 2000);
      });

    });