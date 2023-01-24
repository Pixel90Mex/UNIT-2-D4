/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.skills.splice(2, 2);
console.log(me);

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

let disp = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    disp.push(i);
  }
}
console.log(disp);

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

let ar = [];
let Messanicus = [];

/*Due modi differenti*/
for (var i = 0; i < 10; i++) {
  ar[i] = parseInt(Math.random() * (100));
  Messanicus.push(parseInt(Math.random() * 100));
}

console.log(ar);
console.log(Messanicus);

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

let pari = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pariDue = [];

for (var i = 0; i <= pari.length; i++) {
  if (pari[i] % 2 === 0) {
    pariDue.push(pari[i]);
    //pariDue[i] = pari[i];
  }
}

console.log(pariDue);

let nPari = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nPariDue = [];

for (let element of nPari) {
  if (element % 2 === 0) {
    nPariDue.push(element);
  }
}

console.log(nPariDue);

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

/* 
 let somma = 0;

 for(var i = 0; i < cat.length; i++){ 
   somma = somma + cat[i];
 }
 console.log(somma);*/

let cat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sommaCinque = 0;

for (let i = 0; i < cat.length; i++) {
  sommaCinque += cat[i];
}

console.log(sommaCinque);

let catDue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sommaCat = 0;

for (let element of catDue) {
  sommaCat += element;
}

console.log(sommaCat);
/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/

let arTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < arTwo.length; i++) {
  if (typeof arTwo[i] === "number") {
    arTwo[i]++;
  }
}

console.log(arTwo);

for (let element of arTwo) {
  if (typeof arTwo[i] === "number") {
    arTwo[i]++;
  }
}

console.log(arTwo);

function incremento(arr) {
  return arr.map(val => {
    if (typeof val === "number") {
      return val + 1;
    }
  })
}

console.log(incremento([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const values = [1, 'a', 3, 'b'];

const incrementAdValues = incremento(values);

console.log(incrementAdValues);

/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

function arDispari() {

  let arThree = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10];

  for (var i = 0; i < arThree.length; i++) {
    if (arThree[i] % 2 !== 0) {
      delete arThree[i - 1];
    }
  }
  return arThree.join();
}

console.log(arDispari());

let arThreeS = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10];

for (let element of arThreeS) {
  if (element % 2 !== 0) {
    arThreeS.splice(i--, 1);
  }
}

console.log(arThreeS);

/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

let arFour = [];

while (arFour.length < 10) {
  let val = parseInt(Math.random() * 100);
  if (!arFour.includes(val)) {
    arFour.push(val);
  }
}

console.log(arFour);

/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const arr9 = ['EPICODE', 'is', 'great']
for (let i = 0; i < arr9.length; i++) {
  arr9[i] = arr9[i].length
}

console.log(arr9)

/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

let arInvert = [1, 3, 5];

console.log(arInvert.reverse());


/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

function getMaxValue(arr) {
  let max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    return max;
  }
}


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

let olderFilm;
for (let movie of movies) {
  if (olderFilm === undefined) {
    olderFilm = movie;
  } else {
    if (parseInt(movie.Year) < parseInt(olderFilm)) {
      olderFilm = movie;
    }
  }
}

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

console.log(movies.length);

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

let titles = [];
for (let movie of movies) {
  titles.push(movie.Title);
}

console.log(titles);

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

let currentMovies = [];
for (let movie of movies) {
  if (parseInt(movie.Year) >= 2000) {
    currentMovies.push(movie);
  }
}

console.log(currentMovies);

/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
const id = 'tt0355702'
for (let movie of movies) {
  if (movie.imdbID === id) {
    console.log(movie);
    break;
  }
}


/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

let somma = 0;
for (let movie of movies) {
  somma += parseInt(movie.Year);
}

console.log(somma);

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

function getMoviesWith(word) {
  let result = [];
  for (let movie of movies) {
    if (movie.Title.includes(word)) {
      result.push(movie);
    }
  }
  return result;
}

console.log(getMoviesWith('Avengers'));
