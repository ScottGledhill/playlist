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
      $('#title').append(
        "<ul class='track-title' id='" +i+ "'>" +
          list[i].title +
        "</ul>"
      );
    }



    $('.track-title').click(function(val) {
      var audio = $("#audio");
      var track = val.target.id;
      var combinedUrl = list[track].url + "?client_id=8e74002fd2542f89231c5133c2a54833";
      $("#player").attr("src", combinedUrl);
      audio[0].pause();
      audio[0].load();
      audio[0].oncanplaythrough = audio[0].play();
    });
  });

  var audio = document.getElementById("audio");

  $('#audio').on('click', function(){
    SC.stream(list.url, function(sound){
      sound.play();
    });
  });
});
