import MenuItem from './MenuItem.js';

export default function menuView () {
    let menuItems = [];
    async function getMenuItems () {
        fetch('../JSON/menuItems.json')
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    
    const menuPage = document.getElementById("menuSection");

    
    /* PRINT MENUITEMS TO menu.html */

    async function displayMenu () {
        let menu = await getMenuItems();
        menu = menu;
        console.log(menu);
        
        for (let i = 0; i < menu.length; i++) {
            let item = menu[i];
            let itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
            <h4>  
            ${item.dish}
            </h4> 
            <p> Price: ${item.price}VND </p>
            <img href="${item.url}" alt="image of ${item.dish}">
            <p> Allergens: ${item.allergens} </p>`;

            menuPage.appendChild(itemDiv);
        }
    }
    displayMenu();
}