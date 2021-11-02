"use strict";

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Hello, ${user}`);

const numberOfFilms = +prompt("How many fimlms have you seen?");

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},  
    genres: [],
    privat: false
};
const lastSeenFilm = prompt("Last seen film?",""),
      lastSeenFilmRating = prompt("Rate this film","");

personaMovieDB.movies[lastSeenFilm] = lastSeenFilmRating;

console.log(personaMovieDB);