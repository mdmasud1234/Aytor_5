
$(function(){
  //search show or hide start
  $('#search_show_btn').on('click', function(){
    $('#search').addClass("show");
  });
  $('#search_hide_btn').on('click', function(){
    $('#search').removeClass("show");
  });
  //search show or hide End
  //cart show or hide start
  $('.bag_show_btn').on("click", function(){
    $('#shopping').addClass('show');
  });
  $('.bag_hide_btn').on("click", function(){
    $('#shopping').removeClass('show');
  });
  //cart show or hide End
   //popup js section start 
   $('.popup_hide_btn').on("click", function(){
    $('#popup_section').fadeOut();
  });
    //popup js section End 
    //slick js start
    $('.banner_slider').slick({
      arrows: false,
      dots: true,
      appendDots: $('.banner_slider_dots_container'),
      dotsClass:'banner_slider_dots',
      autoplay:true,
      autoplaySpeed:3000,
      fade: true,
      speed:1000,
      pauseOnHover:false
    });
    //slick js End
    //product slider
    $('.product_slider').slick({
      slidesToShow:4,
      prevArrow:'<i class="fa-solid fa-long-arrow-left product_slider_arrow"></i>',
      nextArrow:'<i class="fa-solid fa-long-arrow-right product_slider_arrow"></i>',
      autoplay:true,
      autoplaySpeed:3000,
      speed:1000,
      slidesToScroll:1,
      pauseOnHover:false
    });
      //mackup slider
    $('.mackup_slider').slick({
      slidesToShow:2,
      arrows: false,
      autoplay:true,
      dots:true,
      appendDots:$('.mackup_slider_dots_container'),
      dotsClass:'mackup_slider_dots',
      autoplaySpeed:2000,
      speed:1000,
      pauseOnHover:false
    });
    //deals countdown js
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $(this).html(event.strftime(''
        + '<li><h3>%D</h3> <small>Days</small></li> '
        + '<li><h2>:</h2></li> '
        + '<li><h3>%H</h3> <small>Hour</small></li> '
        + '<li><h2>:</h2></li> '
        + '<li><h3>%M</h3> <small>Minute</small></li> '
        + '<li><h2>:</h2></li> '
        + '<li><h3>%S</h3> <small>Sec</small></li>'
        + '<li><h2>:</h2></li> '
        ));
      });
    });
    //news_slider start
    $('.news_slider').slick({
      slidesToShow:3,
      arrows: false,
      autoplay:true,
      autoplaySpeed:2000,
      speed:1000,
      pauseOnHover:false,
      dots: true,
      appendDots: $('.news_slider_dots_container'),
      dotsClass:'news_slider_dots',
    });
    //news_slider End
})
//document.ready js End
//tooltips start
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//tooltips end
//veno box start
new VenoBox();
//veno box end