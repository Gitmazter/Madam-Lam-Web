import MenuItem from './MenuItem.js';

export default function menuView () {
    
    async function getMenuItems () {
        const menuItems = await fetch(JSON.parse("../menuItems/menuItems.JSON"));
        return menuItems;
    }
    
    const menuPage = document.getElementById("menuSection");
    let menuItems = [];

    if (localStorage.getItem('menuItems')) {
        let menuItems = JSON.parse(localStorage.getItem('menuItems'));
    } else {
        let menuItems = [];
        localStorage.setItem('menuItems', JSON.stringify(menuItems));
    }
    
    /* PRINT MENUITEMS TO menu.html */

    let cookies = new MenuItem(1, 50000, "Cookies", "snack", ["eggs", "gluten", "dairy", "chocolate"], "cookies.jpg");
    menuItems.push(cookies);
    console.log('This is menuItems in session storage',menuItems);

    let fishNChips = new MenuItem(2, 120000, "Beer Battered Fish And Chips Large", "meal", ["eggs", "gluten", "dairy", "fish", "alcohol"], "FNCL.jpg");
    menuItems.push(fishNChips);

    localStorage.setItem('menuItems', JSON.stringify(menuItems));
    console.log( "This is menuItems in LS", localStorage.getItem('menuItems'));

    function displayMenu () {
        let menu = getMenuItems();
        console.log(menu)
        
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