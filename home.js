const movies =
    JSON.parse(localStorage.getItem("movies")) || [];


// =========================
// CATEGORY CONTAINERS
// =========================

const tamilDubbedWebSeries =
    document.getElementById("tamilDubbedWebSeries");

const tamilWebSeries =
    document.getElementById("tamilWebSeries");

const tamilDubbedMovies =
    document.getElementById("tamilDubbedMovies");

const tamilMovies =
    document.getElementById("tamilMovies");

const tamilDubbedAnime =
    document.getElementById("tamilDubbedAnime");

const englishMovies =
    document.getElementById("englishMovies");


// =========================
// POPUP ELEMENTS
// =========================

const moviePopup =
    document.getElementById("moviePopup");

const closePopup =
    document.getElementById("closePopup");


// =========================
// DISPLAY MOVIES
// =========================

movies.forEach(function(movie) {

    const card =
        document.createElement("div");

    card.className = "movie-card";


    card.innerHTML = `

        <img
            src="${movie.poster}"
            alt="${movie.title}"
        >

        <h3>${movie.title}</h3>

        <p><b>Director:</b> ${movie.director}</p>

        <p><b>Writer:</b> ${movie.writer}</p>

        ${
            movie.category === "Tamil Dubbed Anime"
            ? `<p><b>Character:</b> ${movie.character || ""}</p>`
            : `<p><b>Cast:</b> ${movie.cast || ""}</p>`
        }

        <p><b>Rating:</b> ⭐ ${movie.rating}</p>

        <p><b>Release Date:</b> ${movie.releaseDate}</p>

        <p><b>Language:</b> ${movie.language}</p>

        <p><b>Genre:</b> ${movie.genre}</p>

        ${
            movie.episodeCount
            ? `<p><b>Episode Count:</b> ${movie.episodeCount}</p>`
            : `<p><b>Runtime:</b> ${movie.runtime || ""}</p>`
        }

        <a
            href="${movie.movieLink}"
            target="_blank">
            Watch Movie
        </a>

        <button
            type="button"
            onclick="deleteMovie('${movie.title}')">
            Delete
        </button>

    `;


    // =========================
    // OPEN POPUP
    // =========================

    card.addEventListener("click", function(event) {

        // Delete button / Watch button click karama popup open wenna epa
        if (
            event.target.tagName === "BUTTON" ||
            event.target.tagName === "A"
        ) {
            return;
        }


        document.getElementById("popupPoster").src =
            movie.poster;


        document.getElementById("popupTitle").textContent =
            movie.title;


        document.getElementById("popupCategory").innerHTML =
            "<b>Category:</b> " +
            (movie.category || "");


        document.getElementById("popupDirector").innerHTML =
            "<b>Director:</b> " +
            (movie.director || "");


        document.getElementById("popupWriter").innerHTML =
            "<b>Writer:</b> " +
            (movie.writer || "");


        if (movie.category === "Tamil Dubbed Anime") {

            document.getElementById("popupCast").innerHTML =
                "<b>Character:</b> " +
                (movie.character || "");

        } else {

            document.getElementById("popupCast").innerHTML =
                "<b>Cast:</b> " +
                (movie.cast || "");

        }


        document.getElementById("popupRating").innerHTML =
            "<b>Rating:</b> ⭐ " +
            (movie.rating || "");


        document.getElementById("popupReleaseDate").innerHTML =
            "<b>Release Date:</b> " +
            (movie.releaseDate || "");


        document.getElementById("popupLanguage").innerHTML =
            "<b>Language:</b> " +
            (movie.language || "");


        document.getElementById("popupGenre").innerHTML =
            "<b>Genre:</b> " +
            (movie.genre || "");


        if (movie.episodeCount) {

            document.getElementById("popupDuration").innerHTML =
                "<b>Episode Count:</b> " +
                movie.episodeCount;

        } else {

            document.getElementById("popupDuration").innerHTML =
                "<b>Runtime:</b> " +
                (movie.runtime || "");

        }


        // Watch Movie button

        document.getElementById("popupLink").href =
            movie.movieLink;


        // =========================
        // WHATSAPP SHARE
        // =========================

        const whatsappMessage =

            "🎬 " + (movie.title || "") +

            "\n\n📂 Category: " +
            (movie.category || "") +

            "\n🎬 Director: " +
            (movie.director || "") +

            "\n✍️ Writer: " +
            (movie.writer || "") +

            (
                movie.category === "Tamil Dubbed Anime"

                ? "\n👤 Character: " +
                  (movie.character || "")

                : "\n👥 Cast: " +
                  (movie.cast || "")
            ) +

            "\n⭐ Rating: " +
            (movie.rating || "") +

            "\n📅 Release Date: " +
            (movie.releaseDate || "") +

            "\n🌐 Language: " +
            (movie.language || "") +

            "\n🎭 Genre: " +
            (movie.genre || "") +

            (
                movie.episodeCount

                ? "\n📺 Episode Count: " +
                  movie.episodeCount

                : "\n⏱️ Runtime: " +
                  (movie.runtime || "")
            ) +

            "\n\n▶️ Watch Movie:\n" +
            (movie.movieLink || "");


        document.getElementById("whatsappShare").href =
            "https://wa.me/?text=" +
            encodeURIComponent(whatsappMessage);


        // OPEN POPUP

        moviePopup.style.display = "flex";

    });


    // =========================
    // PUT INTO CATEGORY
    // =========================

    if (movie.category === "Tamil Dubbed Web Series") {

        tamilDubbedWebSeries.appendChild(card);

    }

    else if (movie.category === "Tamil Web Series") {

        tamilWebSeries.appendChild(card);

    }

    else if (movie.category === "Tamil Dubbed Movie") {

        tamilDubbedMovies.appendChild(card);

    }

    else if (movie.category === "Tamil Movie") {

        tamilMovies.appendChild(card);

    }

    else if (movie.category === "Tamil Dubbed Anime") {

        tamilDubbedAnime.appendChild(card);

    }

    else if (movie.category === "English Movie") {

        englishMovies.appendChild(card);

    }

});


// =========================
// DELETE MOVIE
// =========================

function deleteMovie(title) {

    let movies =
        JSON.parse(localStorage.getItem("movies")) || [];


    const confirmDelete =
        confirm(
            "Do you want to delete " +
            title +
            "?"
        );


    if (!confirmDelete) {
        return;
    }


    movies = movies.filter(function(movie) {

        return movie.title !== title;

    });


    localStorage.setItem(
        "movies",
        JSON.stringify(movies)
    );


    alert(
        "Movie deleted successfully!"
    );


    location.reload();

}


// =========================
// SEARCH MOVIE
// =========================

const searchForm =
    document.getElementById("searchForm");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


searchForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const searchText =
            searchInput.value
            .trim()
            .toLowerCase();


        searchResults.innerHTML = "";


        if (searchText === "") {

            searchResults.innerHTML =
                "<p>Please enter movie name.</p>";

            return;

        }


        const foundMovies =
            movies.filter(function(movie) {

                return movie.title
                    .toLowerCase()
                    .includes(searchText);

            });


        if (foundMovies.length === 0) {

            searchResults.innerHTML =
                "<p>Movie not found.</p>";

            return;

        }


        foundMovies.forEach(function(movie) {

            const card =
                document.createElement("div");


            card.className =
                "search-card";


            card.innerHTML = `

                <img
                    src="${movie.poster}"
                    alt="${movie.title}"
                >

                <div class="search-details">

                    <h2>${movie.title}</h2>

                    <p>
                        <b>Category:</b>
                        ${movie.category || ""}
                    </p>

                    <p>
                        <b>Director:</b>
                        ${movie.director || ""}
                    </p>

                    <p>
                        <b>Writer:</b>
                        ${movie.writer || ""}
                    </p>

                    ${
                        movie.category === "Tamil Dubbed Anime"

                        ? `<p>
                            <b>Character:</b>
                            ${movie.character || ""}
                           </p>`

                        : `<p>
                            <b>Cast:</b>
                            ${movie.cast || ""}
                           </p>`
                    }

                    <p>
                        <b>Rating:</b>
                        ⭐ ${movie.rating || ""}
                    </p>

                    <p>
                        <b>Release Date:</b>
                        ${movie.releaseDate || ""}
                    </p>

                    <p>
                        <b>Language:</b>
                        ${movie.language || ""}
                    </p>

                    <p>
                        <b>Genre:</b>
                        ${movie.genre || ""}
                    </p>

                    ${
                        movie.episodeCount

                        ? `<p>
                            <b>Episode Count:</b>
                            ${movie.episodeCount}
                           </p>`

                        : `<p>
                            <b>Runtime:</b>
                            ${movie.runtime || ""}
                           </p>`
                    }

                    <a
                        href="${movie.movieLink}"
                        target="_blank">
                        Watch Movie
                    </a>

                </div>

            `;


            searchResults.appendChild(card);

        });

    }
);


// =========================
// CLOSE POPUP
// =========================

closePopup.onclick = function() {

    moviePopup.style.display = "none";

};


// =========================
// CLOSE WHEN CLICK OUTSIDE
// =========================

moviePopup.onclick = function(event) {

    if (event.target === moviePopup) {

        moviePopup.style.display = "none";

    }

};