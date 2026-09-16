const form =
    document.getElementById("animeForm");

const durationType =
    document.getElementById("durationType");

const episodeField =
    document.getElementById("episodeField");

const runtimeField =
    document.getElementById("runtimeField");


// Duration switch

durationType.onchange = function() {

    if (durationType.value === "runtime") {

        episodeField.style.display = "none";
        runtimeField.style.display = "block";

    } else {

        episodeField.style.display = "block";
        runtimeField.style.display = "none";

    }

};


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

    const character =
        document.getElementById("character").value.trim();

    const rating =
        document.getElementById("rating").value;

    const releaseDate =
        document.getElementById("releaseDate").value;

    const language =
        document.getElementById("language").value.trim();

    const animeLink =
        document.getElementById("animeLink").value.trim();

    const genre =
        document.getElementById("genre").value.trim();

    const episodeCount =
        document.getElementById("episodeCount").value;

    const runtime =
        document.getElementById("runtime").value.trim();

    const poster =
        document.getElementById("poster").files[0];

    const message =
        document.getElementById("message");


    // Validation

    if (title === "") {
        message.textContent =
            "Please enter anime name.";
        return;
    }

    if (category === "") {
        message.textContent =
            "Please select category.";
        return;
    }

    if (director === "") {
        message.textContent =
            "Please enter director.";
        return;
    }

    if (writer === "") {
        message.textContent =
            "Please enter writer.";
        return;
    }

    if (character === "") {
        message.textContent =
            "Please enter character.";
        return;
    }

    if (rating === "") {
        message.textContent =
            "Please enter rating.";
        return;
    }

    if (releaseDate === "") {
        message.textContent =
            "Please select release date.";
        return;
    }

    if (language === "") {
        message.textContent =
            "Please enter language.";
        return;
    }

    if (animeLink === "") {
        message.textContent =
            "Please enter anime link.";
        return;
    }

    if (genre === "") {
        message.textContent =
            "Please enter genre.";
        return;
    }


    // Check duration

    if (durationType.value === "episodeCount") {

        if (episodeCount === "") {

            message.textContent =
                "Please enter episode count.";

            return;
        }

    }


    if (durationType.value === "runtime") {

        if (runtime === "") {

            message.textContent =
                "Please enter runtime.";

            return;
        }

    }


    // Check poster

    if (!poster) {

        message.textContent =
            "Please select poster.";

        return;
    }


    // Read poster

    const reader =
        new FileReader();


    reader.onload = function() {

        const anime = {

            title: title,

            category: category,

            director: director,

            writer: writer,

            character: character,

            rating: rating,

            releaseDate: releaseDate,

            language: language,

            movieLink: animeLink,

            genre: genre,

            durationType: durationType.value,

            episodeCount: durationType.value === "episodeCount"
                ? episodeCount
                : "",

            runtime: durationType.value === "runtime"
                ? runtime
                : "",

            poster: reader.result

        };


        // Get existing movies

        let movies =
            JSON.parse(
                localStorage.getItem("movies")
            ) || [];


        // Add anime

        movies.push(anime);


        // Save

        localStorage.setItem(
            "movies",
            JSON.stringify(movies)
        );


        // Success

        message.textContent =
            "Anime uploaded successfully!";

        alert(
            "Anime saved successfully!"
        );


        // Clear form

        form.reset();


        // Reset duration

        episodeField.style.display =
            "block";

        runtimeField.style.display =
            "none";

    };


    reader.readAsDataURL(poster);

});