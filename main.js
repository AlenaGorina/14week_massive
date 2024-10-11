// Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов.
//  Для генерации случайных оценок, используйте функцию Math.random().

let grades = [];

for (let i = 0; i < 12; i++) {
    const randomGrade = Math.floor(Math.random() * 100) + 1;
    grades.push(randomGrade);
};


// Рассчитайте и выведите средний балл студентов, используя методы массивов.
let total = grades.reduce((sum, grade) => sum + grade, 0);
let average = total / grades.length;


// Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const maxGrade = Math.max(...grades);

// Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
const minGrade = Math.min(...grades);

// Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). 
let positiveGrade = grades.filter(grade => grade >= 60).length;

// студенты, у которых балл ниже 60.
let negativeGrade = grades.filter(grade => grade < 60).length;

// Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E

let letterGrades = grades.map(grade => {
    if (grade >= 80) return 'A';
    else if (grade >= 60) return 'B';
    else if (grade >= 40) return 'C';
    else if (grade >= 20) return 'D';
    else return 'E';
});

// Выводим все результаты
console.log("Оценки студентов:", grades);
console.log("Средний балл:", average);
console.log("Максимальный балл:", maxGrade);
console.log("Минимальный балл:", minGrade);
console.log("Количество студентов с положительными оценками (>= 60):", positiveGrade);
console.log("Количество студентов с отрицательными оценками (< 60):", negativeGrade);
console.log("Буквенные оценки:", letterGrades);

