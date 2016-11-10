$(document).ready(function() {
    var i1 = 0;
    var currentSong = 0;
    var currentMusicState = 'play';
    var list = [];

  SC.get('/playlists/230085336').then(function (playlist) {
    playlist.tracks.forEach(function (track) {
      list.push({title: track.title, url: track.stream_url});
    });
    for(i=0; i < list.length; i++) {
      $('#title').append('<ul>'+list[i].title+'</ul>');
    }
    
  });

  var audio = document.getElementById("audio");


  $('#audio').on('click', function(){
    SC.stream(list.url, function(sound){
      sound.play();
    });
  });

  if (!document.createElement('audio').canPlayType) {
    $("audio_controls").hide();
    return;
  }


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
