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

  // external js: isotope.pkg.js

  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
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
  
  /*====== TESTIMONIAL SLIDER ========*/
  $('.client-testimonial').owlCarousel({
    loop:true,
    margin:15,
    nav: true,
    dots: false,
    autoplay:false,
    lazyload:true,
    autoplayTimeout:4000,
    responsiveClass:true,
    slideSpeed : 5000,
    pagination : true,
    paginationSpeed : 3000,
    singleItem:true,
    autoplaySpeed:2000,
    navText: [
			'<i class="flaticon-previous"></i>',
			'<i class="flaticon-next"></i>',
		],
    responsive: {
      0:{
        items:1, 
        dots:false,
        nav:false
      },
      576:{
        items:1,
        dots:false,
        nav:false
      },
      768:{
        items:2,
      },
      992:{
        items:2,
      },
      1024:{
        items:2,
        nav:true,
      },
      1200:{
        items:3,
        nav:true,
      }
    }
  });

  
  /*====== TESTIMONIAL SLIDER ========*/
  $('.home2-client-testimonial').owlCarousel({
    loop:true,
    margin:15,
    nav: false,
    dots: false,
    autoplay:false,
    lazyload:true,
    autoplayTimeout:4000,
    responsiveClass:true,
    slideSpeed : 5000,
    pagination : true,
    paginationSpeed : 3000,
    singleItem:true,
    autoplaySpeed:2000,
    navText: [
			'<i class="flaticon-previous"></i>',
			'<i class="flaticon-next"></i>',
		],
    responsive: {
      0:{
        items:1, 
        dots:false,
        nav:false
      },
      576:{
        items:1,
        dots:false,
        nav:false
      },
      768:{
        items:2,
        dots:false,
        nav:false
      },
      992:{
        items:2,
        nav:false
      },
      1024:{
        items:2,
        nav:true,
      },
      1200:{
        items:2,
        nav:true,
      }
    }
  });

  /*====== TESTIMONIAL SLIDER ========*/
  $('.team-slider-area').owlCarousel({
    loop:true,
    margin:15,
    nav: true,
    dots: false,
    autoplay:false,
    lazyload:true,
    autoplayTimeout:4000,
    responsiveClass:true,
    slideSpeed : 5000,
    pagination : true,
    paginationSpeed : 3000,
    singleItem:true,
    autoplaySpeed:2000,
    navText: [
			'<i class="flaticon-previous"></i>',
			'<i class="flaticon-next"></i>',
		],
    responsive: {
      0:{
        items:1, 
        dots:false,
        nav:false
      },
      576:{
        items:1,
        dots:false,
        nav:false
      },
      768:{
        items:2,
      },
      992:{
        items:2,
      },
      1024:{
        items:2,
        nav:true,
      },
      1200:{
        items:3,
        nav:true,
      }
    }
  });

  /*====== TESTIMONIAL SLIDER ========*/
  $('.home2-team-slider').owlCarousel({
    loop:true,
    margin:15,
    nav: true,
    dots: false,
    autoplay:false,
    lazyload:true,
    autoplayTimeout:4000,
    responsiveClass:true,
    slideSpeed : 5000,
    pagination : true,
    paginationSpeed : 3000,
    singleItem:true,
    autoplaySpeed:2000,
    navText: [
			'<i class="flaticon-previous"></i>',
			'<i class="flaticon-next"></i>',
		],
    responsive: {
      0:{
        items:1, 
        dots:false,
        nav:false
      },
      576:{
        items:1,
        dots:false,
        nav:false
      },
      768:{
        items:2,
      },
      992:{
        items:3,
      },
      1024:{
        items:4,
        nav:true,
      },
      1200:{
        items:4,
        nav:true,
      }
    }
  });

  /*====== Marquee SLIDER ========*/
  $('.marquee-inner-content').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots: false,
    autoplay:true,
    lazyload:true,
    autoplayTimeout: 5000,
    responsiveClass:true,
    slideSpeed : 10,
    pagination : false,
    paginationSpeed : 10000,
    singleItem:true,
    autoplaySpeed: 10000,
    responsive: {
      0:{
        items:2, 
      },
      576:{
        items:3,
      },
      768:{
        items:4,
      },
      992:{
        items:4,
      },
      1024:{
        items:5,
      },
      1200:{
        items:6,
      }
    }
  });
  
  /*====== Home2 Banner SLIDER ========*/
  $('.banner-slider').owlCarousel({
    loop:true,
    margin:15,
    nav: false,
    dots: true,
    autoplay:false,
    lazyload:true,
    autoplayTimeout:4000,
    responsiveClass:true,
    slideSpeed : 5000,
    pagination : true,
    paginationSpeed : 3000,
    singleItem:true,
    autoplaySpeed:2000,
    navText: [
			'<i class="flaticon-previous"></i>',
			'<i class="flaticon-next"></i>',
		],
    responsive: {
      0:{
        items:1, 
        dots:false,
        nav:false
      },
      576:{
        items:1,
        dots:false,
        nav:false
      },
      768:{
        items:1,
      },
      992:{
        items:1,
      },
      1024:{
        items:1,
      },
      1200:{
        items:1,
      }
    }
  });

  // $('#exampleModal').modal({
  //   backdrop: 'static',
  //   keyboard: false
  // });

  jQuery(window).load(function(){

    //wow
    new WOW().init();
    window.wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true,        // default
      offset: 100
    }
    )
    window.wow.init();
  });

}(jQuery));


