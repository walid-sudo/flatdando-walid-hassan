let films = [];

document.addEventListener("DOMContentLoaded", function(){
    getFilms();
});

function getFilms() {
    // Fetch films from your JSON server or any other data source
    fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(data => {
            films = data;
            displayFilms();
        })
        .catch(error => {
            console.error('Error fetching films:', error);
        });
}

function displayFilms() {
    const movieList = document.querySelector('.movie-list');

    // Clear any existing content
    movieList.innerHTML = '';

    // Iterate through films and create list items
    films.forEach(film => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = film.title;

        // Add click event to show film details
        listItem.addEventListener('click', () => showFilmDetails(film));

        movieList.appendChild(listItem);
    });
}

function showFilmDetails(film) {
    const movieDetails = document.querySelector('.movie-details');

    // Display film details in the movie details container
    movieDetails.innerHTML = `
        <h2>${film.title}</h2>
        <p>${film.description}</p>
        <p>Director: ${film.director}</p>
        <p>Release Year: ${film.releaseYear}</p>
        <!-- Add more details as needed -->
    `;
}
