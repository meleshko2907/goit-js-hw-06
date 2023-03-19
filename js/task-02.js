
const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];


const list = document.querySelector('ul#ingredients');
let itemPart = new DocumentFragment();
for (const value of ingredients) {
    const item = document.createElement('li');
    item.textContent += value;
    item.classList.add('item');
    itemPart.appendChild(item);

}

document.querySelector('ul#ingredients').append(itemPart);

//






