$(function(){
  activeDatePicker();
  activeCarousel();
  openFormCart();
  openFormDetail();

})

$("#ex2, #ex3").slider({});

// Function Area
function openFormDetail() {
    // $('.sec5 .btn').on('click', function(){
    //   $('.booking-detail-content').slideDown();
    // })

    $('.sec5 .btn').on('click', function(){
      $('.booking-detail-content').slideToggle();
    })
}

function openFormCart() {
  if($('body').is('.booking-detail-page')) {
    $('.booking-detail-form-info .sec7 input').on('click', function(){
      $('.form-cart').addClass('open-form-cart');
    })
  }
}

function activeDatePicker() {
  $('.datepicker').datepicker({
    format: "yyyy-dd-mm"
  });
}

function activeCarousel() {
  $('.carousel-1').owlCarousel({
    items:6 ,
    loop:false,
    center: false,
    margin: 0,
    navText: ['<span class="navi-btn pre-btn"> <i class="fa fa-angle-left" aria-hidden="true"></i> </span>','<span class="navi-btn pre-btn"> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>'],
    navElement: 'span',
    nav: false,
    dots: false,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel();
  // Go to the next item
  $('.next-btn').click(function() {
      owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.prev-btn').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  })
}
