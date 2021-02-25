const songs = [
    {artist: "Kendrick Lamar", title: "Element", album: "DAMN"},
    {artist: "Erykah Badu", title: "On&On", album: "Baduizm"},
    {artist: "D'Angelo", title: "Chicken Grease", album: "Voodoo"},
    {artist: "OutKast", title: "Roses", album: "Speakerboxxx/The  Love Below"}
]

function remixTheSong(songsObj){ 
   return songsObj.map(function(song){
     return `${songs.artist} - ${songs.title}(Remix) ft. Mari World`}
    )
};


