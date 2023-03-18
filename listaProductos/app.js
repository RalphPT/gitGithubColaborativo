

async function renderCategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    console.log(response)
    const dataCategories = await response.json();
    console.log(dataCategories);

    const categoriesSection = document.querySelector(".category")
    let categoryButtons = ''

    dataCategories.forEach(category => {
        categoryButtons = categoryButtons + `<button>${category}</button>`
        //categoryButtons += `<button>${category}</button>`
    })
    categoriesSection.innerHTML = categoryButtons;

    //A LOS BOTONES
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            //console.log(event.target.textContent)
            fetchProductsByCategory(event.target.textContent)
        })
    })

    function fetchProductsByCategory(categoryName){
        console.log(categoryName);
    }

}
renderCategories();

