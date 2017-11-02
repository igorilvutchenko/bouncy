'use strict';

(function(){


var gallery = $('.gallery').isotope({ //Isotope gallery
  itemSelector: '.item',
  percentPosition: true,
  masonry: {
    columnWidth: 270,
    gutter: 10,
    sortbay: 'all'
  }
});


$('.tags a').on('click', function(e){
  e.preventDefault();
  $('.tags a').removeClass('active');
  $(this).addClass('active');
  var target = $(this).data('target');
  gallery.isotope({ filter: '.' + target });
});


$(document).ready(function() {
 
 
   $(".anchor").click(function(e) {
    e.preventDefault();
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, 700, "swing");
   });
 
 
});

  $(function(){ //slider
    $(".slider").slick({
    speed:300,
    dots: true,
    autoplay: true,  
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging : function(slider, i) {
    return '<span class="bullet"></span>'
    }

  });
});


}());