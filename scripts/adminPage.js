
    import MenuItem from './MenuItem.js';

    const saveBtn = document.getElementById('saveBtn');

    const dishPrice = document.getElementById('dishPrice');
    const dishName = document.getElementById('dishName');
    const dishCategory = document.getElementById('dishCategory');
    const dishAllergens = document.getElementById('dishAllergens');
    const dishUrl = document.getElementById('dishUrl');

    const selectedAllergen = document.getElementById('selectedAllergen');
    const addAllergenBtn = document.getElementById('addAllergen');
    let allergens = [];

    let menu = [];
    console.log(menu)

    addAllergenBtn.addEventListener('click', () => {
        let allergenValue = selectedAllergen.value;
        allergens.push(allergenValue);
        dishAllergens.innerText += allergenValue + ", ";
    });

    function autoUrl () {
        let dishName4Url = dishName.value;
        dishName4Url = dishName4Url.toLowerCase();
        dishName4Url = dishName4Url.replace(' ', '_');
        dishUrl.value = `../images/${dishCategory.value}/${dishName4Url}.jpg`;
    }
    setInterval(autoUrl, 1000)

    saveBtn.addEventListener('click', () => {
        let newItem = new MenuItem(1, dishPrice.value, dishName.value, dishCategory.value, allergens, dishUrl.value);
        console.log(JSON.stringify(newItem));

        writeToJSON();
        /* Presentation display */
        
    });
    function writeToJSON() {
        fs.appendFile('menuItems.txt', newItem + ',', function (err) {
            if (err) throw err;
            console.log('Saved!');
        }); 
    }
    /* CREATE MENU ITEMS IN admin.html */
    
    /* SAVE MENUITEMS TO menuItems.JSON */