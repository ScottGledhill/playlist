$(document).ready(function() {

  if (!document.createElement('video').canPlayType) {
    $("audio_controls").hide();
    return;
  }

  var video = document.getElementById("audio");

  $("#play_button").bind("click", function() {
    audio.play();
  });

  $("#pause_button").bind("click", function() {
    audio.pause();
  });
});
