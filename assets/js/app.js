(function($) { "use strict";
  // Preloader
  jQuery(window).on('load',function(){
    //jQuery(".preloader").fadeOut(1000);
    $(".preloader").delay(1600).fadeOut("slow");
  });

  // sticky navbar js
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".main-nav").addClass("sticky");
    } else {
      $(".main-nav").removeClass("sticky");
    }
  });

  $(document).ready(function(){	
      
      // mobile menu
      $('.hamburger').click(function (event) {
        $(this).toggleClass('h-active');
        $('.main-nav').toggleClass('slidenav');
      });

      $('.header-home .main-nav ul li  a').click(function (event) {
        $('.hamburger').removeClass('h-active');
        $('.main-nav').removeClass('slidenav');
      });

    $(".main-nav .fl").on('click', function(event) {
      var $fl = $(this);
      $(this).parent().siblings().find('.sub-menu').slideUp();
      $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");       
      if($fl.hasClass('flaticon-plus')){
        $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
      }else{
        $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
      }
      $fl.next(".sub-menu").slideToggle();
    });

  });	

  //wow
  
  // window.wow = new WOW(
  //   {
  //   boxClass:     'wow',      // default
  //   animateClass: 'animated', // default
  //   offset:       0,          // default
  //   mobile:       true,       // default
  //   live:         true,        // default
  //   offset: 100
  // }

  // )
  // window.wow.init();


  /* 
  ==========================================================
  ====================== COUNTER WIDGET ====================
  */
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 5000;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 1);
      } else counter.innerText = target;
    };
    updateCounter();
  });



  /*============= SCROLL TOP BTN ================*/
  $(document).ready(function () {
    // $("body").append("<div class='scroll_up' style='d-none d-sm-block' ><i class='bx bx-chevrons-up'></i></div>");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 180) $('.scroll_up').fadeIn();
      else $('.scroll_up').fadeOut();
    });
    $(document).on("click", ".scroll_up", function (e) {
      e.preventDefault();
      $("html, body").stop().animate({ scrollTop: 0 }, 100);
    });
  });
  
 
  
  // jQuery(window).load(function(){

  //   //wow
  //   new WOW().init();
  //   window.wow = new WOW(
  //     {
  //     boxClass:     'wow',      // default
  //     animateClass: 'animated', // default
  //     offset:       0,          // default
  //     mobile:       true,       // default
  //     live:         true,        // default
  //     offset: 100
  //   }
  //   )
  //   window.wow.init();
  // });

}(jQuery));


