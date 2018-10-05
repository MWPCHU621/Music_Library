
//library constructor
let Library = function(name, creator) {
  this.name = name,
  this.creator = creator,
  this.playlists = [],
}

// additional library prototype methods.
Library.prototype.addPlaylist = function(playlist){
  this.playlist.push(playlist);
}

//playlist constructor
let Playlist = function(name) {
  this.name = name,
  this.tracks = [],
}

// additional playlist prototype methods.
Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function() {
  return this.tracks.reduce((acc,nxt) => acc + nxt.rating, 0) / this.tracks.length;
}

Playlist.prototype.totalDuration = function() {
  return this.tracks.reduce((acc,nxt) => acc + nxt.length, 0);
}

// track constructor
let Track = function(title, rating, length) {
  this.title = title,
  this.rating = rating,
  this.lengthInSec = length,
}


