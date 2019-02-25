$(document).ready(function(){
  var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 80) {
            $(".navbar-transparent").css('background', 'black');
        } else {
            $(".navbar-transparent").css('background', 'transparent');
        }
    });
});