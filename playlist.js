
// Create a 'module' (in this case our application)
let app = angular.module('Playlist', []);


app.controller('Songs', function($scope){

    let emptySong = {
        title: "No Song Playing",
        artist: "",
        art: "https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60",
    };

    $scope.playlist = [ 
        {title: "Mother's Love", artist: "Emahoy Tsegue-Maryam Guebrou", album: "Ethiopiques, Vol: 21", duration: {mins: 3, secs: 39}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Brother Sport", artist: "Animal Collective", album: "Merriweather Post Pavillion", duration: {mins: 5, secs: 59}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Dern Kala", artist: "Khruangbin", album: "The Universe Smiles Upn You", duration: {mins: 3, secs: 40}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Jade", artist: "Medeski, Martin and Wood", album: "Woodstock Sessions", duration: {mins: 4, secs: 04}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Balkan Wedding", artist: "Galactic", album: "The Otherside of Midnight, Live in New Orleans", duration: {mins: 5, secs: 15}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "The Ballad of Arlo Jones", artist: "Kevin Morby", album: "Still Life", duration: {mins: 2, secs: 47}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Fugue State", artist: "Vulfpeck", album: "Fugue State", duration: {mins: 2, secs: 42}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Nobody But You", artist: "Charles Bradley", album: "Changes", duration: {mins: 3, secs: 58}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Reunione (Live)", artist: "Lettuce", album: "Like in Tokyo", duration: {mins: 9, secs: 49}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Fantastic Man", artist: "William Onyearbor", album: "Who is William Onyearbor?", duration: {mins: 6, secs: 26}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Number 4", artist: "Khruangbin", album: "The Universe Smiles Upon You", duration: {mins: 3, secs: 41}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Mother's Love", artist: "Emahoy Tsegue-Maryam Guebrou", album: "Ethiopiques, Vol: 21", duration: {mins: 3, secs: 39}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Brother Sport", artist: "Animal Collective", album: "Merriweather Post Pavillion", duration: {mins: 5, secs: 59}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Dern Kala", artist: "Khruangbin", album: "The Universe Smiles Upn You", duration: {mins: 3, secs: 40}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Jade", artist: "Medeski, Martin and Wood", album: "Woodstock Sessions", duration: {mins: 4, secs: 04}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Balkan Wedding", artist: "Galactic", album: "The Otherside of Midnight, Live in New Orleans", duration: {mins: 5, secs: 15}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "The Ballad of Arlo Jones", artist: "Kevin Morby", album: "Still Life", duration: {mins: 2, secs: 47}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Fugue State", artist: "Vulfpeck", album: "Fugue State", duration: {mins: 2, secs: 42}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Nobody But You", artist: "Charles Bradley", album: "Changes", duration: {mins: 3, secs: 58}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Reunione (Live)", artist: "Lettuce", album: "Like in Tokyo", duration: {mins: 9, secs: 49}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Fantastic Man", artist: "William Onyearbor", album: "Who is William Onyearbor?", duration: {mins: 6, secs: 26}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Number 4", artist: "Khruangbin", album: "The Universe Smiles Upon You", duration: {mins: 3, secs: 41}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Mother's Love", artist: "Emahoy Tsegue-Maryam Guebrou", album: "Ethiopiques, Vol: 21", duration: {mins: 3, secs: 39}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Brother Sport", artist: "Animal Collective", album: "Merriweather Post Pavillion", duration: {mins: 5, secs: 59}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Dern Kala", artist: "Khruangbin", album: "The Universe Smiles Upn You", duration: {mins: 3, secs: 40}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Jade", artist: "Medeski, Martin and Wood", album: "Woodstock Sessions", duration: {mins: 4, secs: 04}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Balkan Wedding", artist: "Galactic", album: "The Otherside of Midnight, Live in New Orleans", duration: {mins: 5, secs: 15}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "The Ballad of Arlo Jones", artist: "Kevin Morby", album: "Still Life", duration: {mins: 2, secs: 47}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Fugue State", artist: "Vulfpeck", album: "Fugue State", duration: {mins: 2, secs: 42}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Nobody But You", artist: "Charles Bradley", album: "Changes", duration: {mins: 3, secs: 58}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Reunione (Live)", artist: "Lettuce", album: "Like in Tokyo", duration: {mins: 9, secs: 49}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Fantastic Man", artist: "William Onyearbor", album: "Who is William Onyearbor?", duration: {mins: 6, secs: 26}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
        {title: "Number 4", artist: "Khruangbin", album: "The Universe Smiles Upon You", duration: {mins: 3, secs: 41}, playing: false, fav: false, art: 'https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60'},
    ];

    $scope.currentSong = {
        title: "No Song Playing",
        artist: "",
        art: "https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60",
    };

    $scope.update = function(song){

        if($scope.currentSong === song){
            song.playing = false;
            $scope.currentSong.playing = false;
            $scope.currentSong = emptySong;
        } else {
            $scope.currentSong.playing = false;
            song.playing = true;
            $scope.currentSong = song;
        }
    };

    $scope.favs = [];

    $scope.favorite = function(song){
        $scope.favs.push(song);
        console.log("song added");
        console.log($scope.favs);
    };

});