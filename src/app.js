$(document).ready(function() {
    var i1 = 0;
    var currentSong = 0;
    var currentMusicState = 'play';
    var song = {
        title: [],
        artist: [],
        id: []
    };

  SC.get('/playlists/230085336').then(function (playlist) {
    playlist.tracks.forEach(function (track) {
      console.log(song.id[i1] = track.id);
      song.title[i1] = track.title;
      song.artist[i1] = track.user.username;
      i1++;
    });
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
