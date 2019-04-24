//From Instructions
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var media = process.argv.slice(3).join(" ");

if (process.argv[2] === "spotify-this-song") {
    spotify.search({ type: 'track', query: media, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Song Name: " + data.tracks.items[0].artists[0].name);
        console.log("Artist Name: " + data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].href);
        console.log("Album Name: " + data.tracks.items[0].album.name);
    });
}


//var axios = require("axios");
