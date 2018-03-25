
// function dropdown() {
//   var a = document.getElementById("hamburger");
//   if (a.style.display === "block") {
//     document.getElementById("hamburger").style.display="none";
//   }
//   else {
//     document.getElementById("hamburger").style.display="block";
//   }
// }
// function popup() {
//   alert("Thank you!! We'll get back to you soon");
// }
$(function() {
  /**************************************/
  /*      SMOOTH SCROLL FUNCTION        */
  /**************************************/
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          // scrollTop: target.offset().top - 41+'px'
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  /**************************************/
  /*      TOGGLE MOBILE NAVIGATION        */
  /**************************************/
  $(".button_hamburger").click(function(){
    $("#mobile_nav").toggleClass('open');
  });
});
