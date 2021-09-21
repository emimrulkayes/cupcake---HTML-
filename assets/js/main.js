
(function($) { "use strict";





  // Preloader
  jQuery(window).on('load',function(){
    //jQuery(".preloader").fadeOut(1000);
    $(".preloader").delay(1600).fadeOut("slow");
  });





      // Mobile menu
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

    // Sticky Menu
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 30) {
            $(".header-area").addClass("sticky");
        } else {
            $(".header-area").removeClass("sticky");
        }
    });

  /*============= SCROLL TOP BTN ================*/
  $(document).ready(function () {
    $("body").append("<div class='scroll_up'><i class='bx bx-chevrons-up'></i></div>");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 180) $('.scroll_up').fadeIn();
      else $('.scroll_up').fadeOut();
    });
    $(document).on("click", ".scroll_up", function (e) {
      e.preventDefault();
      $("html, body").stop().animate({ scrollTop: 0 }, 1000);
    });
  });



  /*========= Search ==========*/
  var submitIcon = $('.search-btn i');
  var inputBox = $('.searchbox-input');
  var searchBox = $('.searchbox');
  var isOpen = false;
  submitIcon.click(function(){
      if(isOpen == false){
          searchBox.addClass('searchbox-open');
          submitIcon.attr('class', 'bx bx-x');
          inputBox.focus();
          isOpen = true;
      } else {
          searchBox.removeClass('searchbox-open');
          submitIcon.attr('class', 'bx bx-search');
          inputBox.focusout();
          isOpen = false;
      }
  });
  submitIcon.mouseup(function(){
      return false;
  });
  searchBox.mouseup(function(){
      return false;
  });
  $(document).mouseup(function(){
      if(isOpen == true){
          $('.searchbox-icon').css('display','block');
          submitIcon.click();
      }
  });


  /*======= Quantity Value change ========*/
  $('.quantity').on('click', '.plus', function(e) {
      let $input = $(this).prev('input.qty');
      let val = parseInt($input.val());
      $input.val( val+1 ).change();
  });

  $('.quantity').on('click', '.minus',
      function(e) {
          let $input = $(this).next('input.qty');
          var val = parseInt($input.val());
          if (val > 0) {
              $input.val( val-1 ).change();
      }
  });

  // Aos Animation 
  AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      disable: 'mobile'
  })
  

  	// Isotope 
	var $grid = $('.portfolio-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: 1
		}
	})
	$('.portfolio-menu').on('click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	$('.portfolio-menu li').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});


  /* 
  ==========================================================
  ====================== COUNTER WIDGET ====================
  ==========================================================
  */
  //  
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 1000;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 1);
      } else counter.innerText = target;
    };
    updateCounter();
  });

  /*====== TESTIMONIAL SLIDER ========*/
  $('.client_testimonial-slider').owlCarousel({
    loop:true,
    margin:30,
    items: 1,
    nav:false,
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
    responsive: {
      0:{
        dots:false,
        nav:false
      },
      576:{
        dots:false
      },
      992:{
        dots:false
      },
      1024:{
        dots:true
      },
      1200:{
        dots:true
      }
    }
  });


  /*====== TEAM SLIDER ========*/
  $('.teams_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
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
    responsive: {
      0:{
        items:1,
        dots:false,
        nav:false
      },
      600:{
        items:2,
        dots:false,
        nav:false
      },
      1000:{
        items:3,
        nav:false,
        dots:true,
        loop:true
      }
    }
  });

  /*======= MARQUEE SLIDER ==========*/
  $('.marquee-content').owlCarousel({
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
        items:3,
      },
      600:{
        items:4,
      },
      1000:{
        items:5,
      }
    }
  });

  /*=========== PORTFOLIO SLIDER ===========*/
  $('.portfolio-inner').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
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
    responsive: {
      0:{
        items:1,
        dots:true,
        nav:false
      },
      600:{
        items:3,
        dots:true,
        nav:false
      },
      1000:{
        items:3,
        nav:false,
        dots:true,
        loop:true
      }
    }
  });


}(jQuery));