
$(document).ready(function(){
      $('.parallax').parallax();
    });

(function($){
  $(function(){

    $('.button-collapse').sideNav({

    }
    );
    //$('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

  // Initialize collapse button
  //$(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();


$('.dropdown-button').dropdown({
           inDuration: 300,
           outDuration: 225,
           constrain_width: false, 
           hover: true, 
           gutter: 0, 
           belowOrigin: true 
           }
      );


 $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });