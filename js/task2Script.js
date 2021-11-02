/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt("How many films have you seen?");

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},  
    genres: [],
    privat: false
};

let count = 1;

do{
    let lastSeenFilm = prompt("Last seen film?",""),
      lastSeenFilmRating = prompt("Rate this film","");
      if((lastSeenFilm != null && lastSeenFilm.length < 50 && lastSeenFilm != '') && (lastSeenFilmRating != null && lastSeenFilmRating.length < 50 && lastSeenFilmRating != '')){
        personaMovieDB.movies[lastSeenFilm] = lastSeenFilmRating;
        count++;
      }
}while(count <=2);

if (personaMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
}else if(personaMovieDB.count >= 10 && personaMovieDB.count < 30){
    console.log("Вы классический зритель");
}else {
    console.log("Вы киноман");
}

console.log(personaMovieDB);


