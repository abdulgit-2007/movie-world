const form = document.getElementById("movieForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get form values

    const title =
        document.getElementById("title").value.trim();

    const category =
        document.getElementById("category").value;

    const director =
        document.getElementById("director").value.trim();

    const writer =
        document.getElementById("writer").value.trim();

    const cast =
        document.getElementById("cast").value.trim();

    const rating =
        document.getElementById("rating").value;

    const releaseDate =
        document.getElementById("releaseDate").value;

    const language =
        document.getElementById("language").value.trim();

    const genre =
        document.getElementById("genre").value.trim();

    const runtime =
        document.getElementById("runtime").value.trim();

    const movieLink =
        document.getElementById("movieLink").value.trim();

    const poster =
        document.getElementById("poster").files[0];

    const message =
        document.getElementById("message");


    // Validation

    if (title === "") {
        message.textContent = "Please enter movie name.";
        return;
    }

    if (category === "") {
        message.textContent = "Please select category.";
        return;
    }

    if (director === "") {
        message.textContent = "Please enter director.";
        return;
    }

    if (writer === "") {
        message.textContent = "Please enter writer.";
        return;
    }

    if (cast === "") {
        message.textContent = "Please enter cast.";
        return;
    }

    if (rating === "") {
        message.textContent = "Please enter rating.";
        return;
    }

    if (releaseDate === "") {
        message.textContent = "Please select release date.";
        return;
    }

    if (language === "") {
        message.textContent = "Please enter language.";
        return;
    }

    if (genre === "") {
        message.textContent = "Please enter genre.";
        return;
    }

    if (runtime === "") {
        message.textContent = "Please enter runtime.";
        return;
    }

    if (!poster) {
        message.textContent = "Please select poster.";
        return;
    }

    if (movieLink === "") {
        message.textContent = "Please enter movie link.";
        return;
    }


    // Read poster

    const reader = new FileReader();

    reader.onload = function() {

        const movie = {

            title: title,

            category: category,

            director: director,

            writer: writer,

            cast: cast,

            rating: rating,

            releaseDate: releaseDate,

            language: language,

            genre: genre,

            runtime: runtime,

            poster: reader.result,

            movieLink: movieLink

        };


        // Get existing movies

        let movies =
            JSON.parse(localStorage.getItem("movies")) || [];


        // Add new movie

        movies.push(movie);


        // Save

        localStorage.setItem(
            "movies",
            JSON.stringify(movies)
        );


        // Success

        message.textContent =
            "Movie uploaded successfully!";


        console.log("Movie saved:", movie);


        // Clear form

        form.reset();

    };


    reader.readAsDataURL(poster);

});