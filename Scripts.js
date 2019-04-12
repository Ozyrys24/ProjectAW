function deferVideo() {

    //defer html5 video loading
  $("video source").each(function() {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
  });
}
window.onload = deferVideo;

function EmailValidatin()
{
  var email = document.getElementById("email");
  var sendEmail = document.getElementById("sendEmail");

  var pattern = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;
  var verification = email.value.match(pattern);
  console.log(verification);
  
  if(verification == null)
  {
    $("#sendEmail").popover("show");
    setTimeout(function(){
      $("#sendEmail").popover("hide");
    },2000);
  }
}

$(document).ready(function() {
  
  $('#sendEmail').popover({
    content: '<span>Błędny adres email</span>',
    html: true,
    trigger: "manual",
    placement: "bottom"
  });
  
  $("#testbutton").click(function(){
    $(".popup-mainbox").slideDown("slow");
  });

  $("#popup-mainbox-close").click(function(){
    $(".popup-mainbox").slideUp("slow");
  });
})



/* $(window).resize(function() {
  var sticky =  document.getElementById("sticky");
  sticky.style.width = $(window).width();
  sticky.style.height = $(window).height();
}); */

/* $( window ).resize(function() {
  $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
}); */
