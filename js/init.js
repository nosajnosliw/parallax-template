(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.dropdown-button').dropdown({
           inDuration: 300,
           outDuration: 225,
           constrain_width: false, 
           hover: true, 
           gutter: 0, 
           belowOrigin: true 
           }
      );
