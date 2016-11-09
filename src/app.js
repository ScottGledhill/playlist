$(document).ready(function() {
  SC.get('/playlists/273704202').then(function(tracks){
    alert('Latest track: ' + tracks[1].title);
  });

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

  $("#next").bind("click", function() {
    audio.pause();
    $('playlist li.active').next();
    audio.play();
  });
});
