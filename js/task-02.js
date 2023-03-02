
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

for ( const value of ingredients) { 
    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent += value;
    itemPart.appendChild(item);
};

document.querySelector('ul#ingredients').append(itemPart);
