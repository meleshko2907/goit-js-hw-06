const listCategories = document.querySelector("#categories");
const liWithClasses = listCategories.querySelectorAll(".item");
console.log(`Number of categories: ${liWithClasses.length}`);
for(let liWithClass of liWithClasses){
    console.log(`Category: ${liWithClass.firstElementChild.textContent}`);
    console.log(`Elements: ${liWithClass.lastElementChild.children.length}`);
}


























