/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания






const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},  
    genres: [],
    privat: false,
    toggleVisibleMyDB: function() {
        if(!personaMovieDB.privat){
            personaMovieDB.privat = true;
        }else {
            personaMovieDB.privat = false;
        }
    },
    start: function () {
        let numberOfFilms = +prompt("How many films have you seen?");
    
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("How many films have you seen?");
        }

        personaMovieDB.count = numberOfFilms;
    },
    detectPersonalLevel: function (){
        if (personaMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        }else if(personaMovieDB.count >= 10 && personaMovieDB.count < 30){
            console.log("Вы классический зритель");
        }else {
            console.log("Вы киноман");
        }
    },
    showMyDB: function (){
        if(!personaMovieDB.privat){
            console.log(personaMovieDB);
        }
    },
    writeYourGenres: function (){
        let genres = [];
    
        let favoriteGenres;
        let count = 0;
        while(count <3) {
            favoriteGenres = prompt(`Your favorite genre by the number ${count+1}?`);
            if (favoriteGenres != null && favoriteGenres !== '') {
                genres.push(favoriteGenres);
                count++;
            }
        }
    
        personaMovieDB.genres = genres;
        genres.forEach(function(value,i){
            console.log(`Любимый жанр #${i+1} - это ${value}`);
        });
    },
    rememberMyFilms: function (){
        let count = 1;
    
        do{
            let lastSeenFilm = prompt("Last seen film?",""),
            lastSeenFilmRating = prompt("Rate this film","");
            if((lastSeenFilm != null && lastSeenFilm.length < 50 && lastSeenFilm != '') && (lastSeenFilmRating != null && lastSeenFilmRating.length < 50 && lastSeenFilmRating != '')){
                personaMovieDB.movies[lastSeenFilm] = lastSeenFilmRating;
                count++;
            }
        }while(count <=2);
    }
};

personaMovieDB.start();

personaMovieDB.rememberMyFilms();

personaMovieDB.detectPersonalLevel();

personaMovieDB.writeYourGenres();

personaMovieDB.toggleVisibleMyDB();

personaMovieDB.showMyDB();