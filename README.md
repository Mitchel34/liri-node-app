# liri-node-app

This is a command line node app that takes in parameters and gives you back data.

The acceptable parameters are:

    'concert-this'
    When run, the app calls a function which uses axios to retrieve venue info, city name, and date of event for the search term from the 'bands in town' API.

    'spotify-this-song'
    When run, the app uses the node-spotify-api to search by track for song name, album name, artist name, and a preview track link.

    'movie-this'
    When run, the app calls a function which uses axios to retrieve the title, IMDB rating, Rotten Tomatoes rating, country, language, plot, and actors for the search term from the OMDB API.

    'do-what-it-says' 
    When run, the 'fs' function reads from the 'random.txt' file splits the text into an array to determine the search parameter and search term then runs the appropriate parameter.

    
   