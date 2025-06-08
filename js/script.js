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
console.log("2 Завдання");

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


//#3 Напиши скрипт для створення галереї зображень по масиву даних.
//В HTML є список ul#gallery.

//Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.

// Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.
console.log("3 Завдання");

const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const list = document.querySelector("#gallery");

const markup = images
    .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="300"></li>`)
    .join("");

list.insertAdjacentHTML("beforeend", markup);

// Мінімальне CSS оформлення (можеш вставити в <style> або CSS-файл)
list.style.display = "flex";
list.style.gap = "20px";

