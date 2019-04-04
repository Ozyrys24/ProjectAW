function deferVideo() {

    //defer html5 video loading
  $("video source").each(function() {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
    // uncomment if video is not autoplay
    //video.play();
  });
}
window.onload = deferVideo;

function EmailValidatin()
{
  var email = document.getElementById("email");

  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;
  var verification = email.value.match(pattern);
  console.log(verification);
  if(verification == null)
  {
    console.log("Błędny email");
  } else {
    console.log("Prawidłowy email");
  }
}

$(function () {
  $('[data-toggle="popover"]').popover()
})
