$(document).ready(function() {

  if (!document.createElement('audio').canPlayType) {
    $("audio_controls").hide();
    return;
  }

  var audio = document.getElementById("audio");

  $("#play_toggle").bind("click", function() {
    if (audio.paused) {
      audio.play();
      $(this).html("Pause");
    } else {
      audio.pause();
      $(this).html("Play");
    }
  });
});
