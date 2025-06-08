//#1 Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента(тега h2) і кількість елементів в категорії(всіх вкладених в нього елементів li).

//     Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4
console.log("1 Завдання");


const item = document.querySelectorAll("#categories .item");
item.forEach((element) => {
    const title = element.querySelector("h2").textContent;

    const elements = element.querySelectorAll("ul li").length;

    console.log(`Категорія: ${title}`);

    console.log(`Кількість елементів: ${elements}`);
});



//#2 В HTML є пустий список ul#ingredients.
//В JS є масив рядків.
//Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];


const ul = document.querySelector('#ingredients');

const listItems = ingredients.map((ingredient) => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
});

ul.append(...listItems);

