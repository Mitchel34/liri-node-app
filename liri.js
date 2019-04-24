//From Instructions
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var media = process.argv.slice(3).join(" ");
var axios = require("axios");

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

if (process.argv[2] === "concert-this"){
axios.get("https://rest.bandsintown.com/artists/" + media + "/events?app_id=codingbootcamp").then(
    function(response) {
      console.log("Name of Venue: " + response.data[0].venue.name);
      console.log("Name of City: " + response.data[0].venue.city);
      console.log("Date of Event: " + response.data[0].datetime.slice(0,10));
    }
)}

if (process.argv[2] === "movie-this"){
    axios.get("http://www.omdbapi.com/?t="+media+"&y=&plot=short&apikey=trilogy").then(
        function(response) {
          console.log(response);
          console.log("Title: " + response.data.Title);
          console.log("IMDB Rating: " +  response.data.imdbRating);
          console.log("Rotten Tomatoes Rating: " + response.data.Ratings);
          console.log("Country: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);
        }
    )}
//     `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.


