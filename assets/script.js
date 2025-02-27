// // Сохраните в переменную массив.
// // Вызовите метод forEach у массива.
// // В функцию обработчик добавьте код, который относится к работе с DOM
// // В найденные элементы на странице добавьте информацию из каждого элемента массива.
// // Создайте новый массив topFilmsList, в нём должны быть лучшие фильмы режиссёров
// //  (они хранятся в полях top_rated_film).

const array = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
];

const topFilmsList = [];


array.forEach((director) => {
    // Добавление информации в DOM
    const directorElement = document.createElement('div');
    directorElement.innerHTML = `
        <h3 class="name">${director.name}</h3>
        <p class="career">Карьера: ${director.career}</p>
        <p class="career_link">Фильмы: <a href="${director.films}" target="_blank">Ссылка</a></p>
        <p class="films">Лучший фильм: ${director.top_rated_film}</p>
    `;
    
    document.body.appendChild(directorElement); // Добавляем элемент в тело документа

    // Добавление лучшего фильма в новый массив
    topFilmsList.push(director.top_rated_film);
});

console.log(topFilmsList);


