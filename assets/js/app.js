$(document).ready(function(){
  $('.owl-carousel.slider-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
  $('#sidebar-filter-toggle-btn').click(function() {
    $('.sidebar-filter').addClass('trans-right');
    $('.sidebar-filter').removeClass('trans-left');
  });
  $('#sidebar-filter-toggle-btn-close, #sidebar-filter-btn-close').click(function() {
    $('.sidebar-filter').addClass('trans-left');
    $('.sidebar-filter').removeClass('trans-right');

  });
});
$(function(){
  $('.noon-shopping-list').slimScroll({
    height: '300px'
  });
});
$(function(){
  $('.fixed-height').slimScroll({
    height: '150px',
    position: 'left',
  });
});
