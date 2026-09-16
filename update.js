// Get saved movies

let movies =
    JSON.parse(localStorage.getItem("movies")) || [];


// Get elements

const movieSelect =
    document.getElementById("movieSelect");

const form =
    document.getElementById("updateForm");

const message =
    document.getElementById("message");


// Load movie names

movies.forEach(function(movie, index) {

    const option =
        document.createElement("option");

    option.value = index;

    option.textContent = movie.title;

    movieSelect.appendChild(option);

});


// Select movie

movieSelect.addEventListener("change", function() {

    const index = this.value;

    if (index === "") {

        form.reset();

        return;

    }


    const movie = movies[index];


    // Show saved details

    document.getElementById("title").value =
        movie.title || "";

    document.getElementById("category").value =
        movie.category || "";

    document.getElementById("director").value =
        movie.director || "";

    document.getElementById("writer").value =
        movie.writer || "";

    document.getElementById("cast").value =
        movie.cast || "";

    document.getElementById("rating").value =
        movie.rating || "";

    document.getElementById("releaseDate").value =
        movie.releaseDate || "";

    document.getElementById("language").value =
        movie.language || "";

    document.getElementById("movieLink").value =
        movie.movieLink || "";

    document.getElementById("genre").value =
        movie.genre || "";

    document.getElementById("runtime").value =
        movie.runtime || "";

    document.getElementById("episodeCount").value =
        movie.episodeCount || "";

});


// Update movie

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const index =
        movieSelect.value;


    if (index === "") {

        message.textContent =
            "Please select a movie.";

        return;

    }


    const movie =
        movies[index];


    // Get new values

    movie.title =
        document.getElementById("title").value.trim();

    movie.category =
        document.getElementById("category").value;

    movie.director =
        document.getElementById("director").value.trim();

    movie.writer =
        document.getElementById("writer").value.trim();

    movie.cast =
        document.getElementById("cast").value.trim();

    movie.rating =
        document.getElementById("rating").value;

    movie.releaseDate =
        document.getElementById("releaseDate").value;

    movie.language =
        document.getElementById("language").value.trim();

    movie.movieLink =
        document.getElementById("movieLink").value.trim();

    movie.genre =
        document.getElementById("genre").value.trim();

    movie.runtime =
        document.getElementById("runtime").value.trim();

    movie.episodeCount =
        document.getElementById("episodeCount").value;


    // Check new poster

    const poster =
        document.getElementById("poster").files[0];


    if (poster) {

        const reader =
            new FileReader();


        reader.onload = function() {

            movie.poster =
                reader.result;


            saveMovies(index);

        };


        reader.readAsDataURL(poster);

    }

    else {

        saveMovies(index);

    }

});


// Save updated movie

function saveMovies(index) {

    localStorage.setItem(
        "movies",
        JSON.stringify(movies)
    );


    message.textContent =
        "Movie updated successfully!";


    alert("Movie updated successfully!");


    // Refresh movie list

    movieSelect.innerHTML =
        '<option value="">Select Movie</option>';


    movies.forEach(function(movie, i) {

        const option =
            document.createElement("option");

        option.value = i;

        option.textContent =
            movie.title;

        movieSelect.appendChild(option);

    });


    movieSelect.value = index;

}