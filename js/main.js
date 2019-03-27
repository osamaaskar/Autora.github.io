$(function(){
    
    "use strict"
    
    
    //wow animation
    new WOW().init();
    
    
    
    var winh = $(window).height();
    var upperh = $(".upper_bar").innerHeight();
    var navh = $(".navbar").innerHeight();  
    $(".slider, .carousel-item").height(winh-(upperh + navh));
    
    //Show Scroll Button
  $(window).scroll(function(){
    var n = $(this).scrollTop();
    if(n > 300){
      $('.sroll-button i').fadeIn();
    } else{
      $('.sroll-button i').fadeOut();
    }
  });

  //Scroll To Top By Button
  $('.sroll-button i').click(function(){
    $('body,html').animate({
      scrollTop :0
    },1000);
  });
    
    //Slider swipper
    
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    
    
    
    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:3,
               
            },
            1000:{
                items:5,
                
                loop:false
            }
        }

    });
       
});

//loading
    $(".spinner").fadeOut(3000, function () {
        
        $(this).parent().fadeOut(2000, function () {
            
            $("body").css("overflow", "auto");
            
            $(this).remove();
        });
    });