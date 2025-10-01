// const books = [
//   {
//     id: 1,
//     title: "1984",
//     author: "Джордж Орвелл",
//     yearCreate: 1949,
//     pages: 328,
//     genre: "Дистопія",
//   },

//   {
//     id: 2,
//     title: "Убити пересмішника",
//     author: "Гарпер Лі",
//     yearCreate: 1960,
//     pages: 281,
//     genre: "Фікція",
//   },

//   {
//     id: 3,
//     title: "Гордість і упередження",
//     author: "Джейн Остін",
//     yearCreate: 1813,
//     pages: 279,
//     genre: "Романтика",
//   },

//   {
//     id: 4,
//     title: "Великий Гетсбі",
//     author: "Френсіс Скотт Фіцджеральд",
//     yearCreate: 1925,
//     pages: 180,
//     genre: "Трагедія",
//   },

//   {
//     id: 5,
//     title: "Мобі Дік",
//     author: "Герман Мелвілл",
//     yearCreate: 1851,
//     pages: 585,
//     genre: "Пригоди",
//   },

//   {
//     id: 6,
//     title: "Війна і мир",
//     author: "Лев Толстой",
//     yearCreate: 1869,
//     pages: 1225,
//     genre: "Історичний",
//   },

//   {
//     id: 7,
//     title: "Ловець у житі",
//     author: "Джером Девід Селінджер",
//     yearCreate: 1951,
//     pages: 277,
//     genre: "Фікція",
//   },

//   {
//     id: 8,
//     title: "Гобіт",
//     author: "Джон Рональд Руел Толкін",
//     yearCreate: 1937,
//     pages: 310,
//     genre: "Фентезі",
//   },

//   {
//     id: 9,
//     title: "451 градус за Фаренгейтом",
//     author: "Рей Бредбері",
//     yearCreate: 1953,
//     pages: 194,
//     genre: "Дистопія",
//   },

//   {
//     id: 10,
//     title: "Джейн Ейр",
//     author: "Шарлотта Бронте",
//     yearCreate: 1847,
//     pages: 500,
//     genre: "Романтика",
//   },

//   {
//     id: 11,
//     title: "Прекрасний новий світ",
//     author: "Олдос Хакслі",
//     yearCreate: 1932,
//     pages: 288,
//     genre: "Дистопія",
//   },

//   {
//     id: 12,
//     title: "Злочин і кара",
//     author: "Федір Достоєвський",
//     yearCreate: 1866,
//     pages: 671,
//     genre: "Філософський",
//   },

//   {
//     id: 13,
//     title: "Одіссея",
//     author: "Гомер",
//     yearCreate: -800,
//     pages: 541,
//     genre: "Епос",
//   },

//   {
//     id: 14,
//     title: "Колгосп тварин",
//     author: "Джордж Орвелл",
//     yearCreate: 1945,
//     pages: 112,
//     genre: "Сатира",
//   },

//   {
//     id: 15,
//     title: "Грона гніву",
//     author: "Джон Стейнбек",
//     yearCreate: 1939,
//     pages: 464,
//     genre: "Фікція",
//   },

//   {
//     id: 16,
//     title: "Сто років самотності",
//     author: "Габріель Гарсія Маркес",
//     yearCreate: 1967,
//     pages: 417,
//     genre: "Магічний реалізм",
//   },

//   {
//     id: 17,
//     title: "Брати Карамазови",
//     author: "Федір Достоєвський",
//     yearCreate: 1880,
//     pages: 796,
//     genre: "Філософський",
//   },

//   {
//     id: 18,
//     title: "Франкенштейн",
//     author: "Мері Шеллі",
//     yearCreate: 1818,
//     pages: 280,
//     genre: "Горор",
//   },

//   {
//     id: 19,
//     title: "Граф Монте-Крісто",
//     author: "Олександр Дюма",
//     yearCreate: 1844,
//     pages: 1276,
//     genre: "Пригоди",
//   },

//   {
//     id: 20,
//     title: "Дракула",
//     author: "Брем Стокер",
//     yearCreate: 1897,
//     pages: 418,
//     genre: "Горор",
//   },

//   {
//     id: 21,
//     title: "Портрет Доріана Грея",
//     author: "Оскар Вайльд",
//     yearCreate: 1890,
//     pages: 254,
//     genre: "Філософський",
//   },

//   {
//     id: 22,
//     title: "Повернення короля",
//     author: "Джон Рональд Руел Толкін",
//     yearCreate: 1955,
//     pages: 416,
//     genre: "Фентезі",
//   },

//   {
//     id: 23,
//     title: "Прекрасний новий світ",
//     author: "Олдос Хакслі",
//     yearCreate: 1932,
//     pages: 288,
//     genre: "Дистопія",
//   },

//   {
//     id: 24,
//     title: "Мобі Дік",
//     author: "Герман Мелвілл",
//     yearCreate: 1851,
//     pages: 585,
//     genre: "Пригоди",
//   },

//   {
//     id: 25,
//     title: "Володар перснів: Дві вежі",
//     author: "Джон Рональд Руел Толкін",
//     yearCreate: 1954,
//     pages: 352,
//     genre: "Фентезі",
//   },

//   {
//     id: 26,
//     title: "Буремний перевал",
//     author: "Емілі Бронте",
//     yearCreate: 1847,
//     pages: 416,
//     genre: "Готичний роман",
//   },

//   {
//     id: 27,
//     title: "Віднесені вітром",
//     author: "Маргарет Мітчелл",
//     yearCreate: 1936,
//     pages: 1037,
//     genre: "Історичний",
//   },

//   {
//     id: 28,
//     title: "Знедолені",
//     author: "Віктор Гюго",
//     yearCreate: 1862,
//     pages: 1463,
//     genre: "Історичний",
//   },

//   {
//     id: 29,
//     title: "Дон Кіхот",
//     author: "Мігель де Сервантес",
//     yearCreate: 1605,
//     pages: 1072,
//     genre: "Пригоди",
//   },

//   {
//     id: 30,
//     title: "Таємний сад",
//     author: "Френсіс Годґсон Бернетт",
//     yearCreate: 1911,
//     pages: 331,
//     genre: "Дитяча література",
//   },
// ];

// console.table(books);

// function filterBooksByGenre(books, genre) {
//   return books.filter((book) => book.genre === genre); //array
// }
// const booksGenre = filterBooksByGenre(books, "Пригоди");
// console.table(booksGenre);

// function filterBooksByPages(books, minPages,maxPages){
//     return books.filter((books)=> books.pages >= minPages && book.pages<=maxPages);
// }
// const booksPages = filterBooksByPages(books,1000,1500)
// console.table(booksPages);

// function sortBooksByPages(books) {
//   return books.toSorted((book1, book2) => book1.pages - book2.pages);
// }
// const booksPageSort = sortBooksByPages(books);
// console.table(booksPageSort);

// function getTitleByAuthor(books, author) {
//   return books
//     .filter((book) => book.author === author)
//     .map((book) => book.title);
// }
// const titlesByAuthor = getTitleByAuthor(books, "Джордж Орвелл");

// console.table(titlesByAuthor)

// function sortBooksByTitleInGenre(books,genre){
//     return books.filter((book)=>book.genre === genre).toSorted((book1,book2)=>{
//         if (book1.title === book2,title) {
//             return 0 ;
//         }
//         if (book1.title > book2,title) {
//             return 1 ;
//         }
//          if (book1.title < book2,title) {
//             return -1 ;
//         }
//     });
// }
// const sortBooksInGenre = sortBooksByTitleInGenre
// (books,'Функція');
// console.table(sortBooksInGenre)

//map Set

// function summa(...args){
//     return args.reduce((sum,elem)=>sum+elem,0)
// }
// const map = new Map();

// map.set('word', ()=>{console.log('hi!');})
// map.set(20,null);
// map.set(summa,22);
// map.set(summa,3333);

// // console.log(map);
// map.forEach((value,key)=>console.log(value,key))

// const test = {
//     props: 45,
//     title:'title object',
//     555:1000,
//     age : 33,
//     '01':'o1'

// }
// console.log(test);
// for(const key in test){
//     // console.log(key,test[key]);

// }

// const array = [1,2,3];
// console.log(array);
// array.forEach((elem)=>console.log(elem));

// const set = new Set();
// set.add(7);
// set.add(7);
// set.add('7');
// set.add(3+4);
// console.log(set);

// const numbers = [1,2,3,1,5,4,2,3,1,7]
// // // const uniqNumbers = [...new Set(numbers)]
// const uniqSetNumbers = new Set(numbers);
// const uniqNumbers = [...uniqSetNumbers]
// console.log(uniqNumbers);

// const string = 'SyntaxError: Unepected token \'const\'';
// const word = 'subscribe'
// console.log(new Set(word));
// console.log(new Set(string.toLocaleLowerCase()));
// console.log(new Set(string.split('')));




// const dictionary = new Map();
// dictionary.set("copy", "копіювати");
// dictionary.set("subscribe", "підписатися");
// dictionary.set("send", "відправити");
// dictionary.set("share", "поділитися");
// dictionary.set("add to cart", "додати в корзину");
// dictionary.set("zoom", "збільшити");
// dictionary.set("play", "грати");

// const word = prompt('enter any word')
// if(dictionary.has(word)){
//     console.log(dictionary.get(word));

// } else{
//     console.log(word);

// }

// const lang = prompt("1- en, 2 - uk");

// switch (lang) {
//   case " 1":
//   case "en":
//     dictionary.keys().forEach((key) => console.log(key));
//     break;
//   case "2":
//   case "uk":
//     dictionary.values().forEach((value) => console.log(key));
//     break;
//     default:
//     break;
// }

//class 

function User(name,age){
    this.name = name;
    this.age = age;
}

function UserPrototype(){
    this.logName = function(){
        console.log(this.name);
        
    }
}
User.prototype = new UserPrototype();
const user = newUser('Alex,23');
user.logName()