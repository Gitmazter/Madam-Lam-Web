    const fs = require('fs');

    let cookies = [1, 50000, "Cookies", "snack", ["eggs", "gluten", "dairy", "chocolate"], "cookies.jpg"];
    cookies = JSON.stringify(cookies);

    fs.appendFile('menuItems.txt', cookies + ',', function (err) {
        if (err) throw err;
        console.log('Saved!');
      }); 
    /* CREATE MENU ITEMS IN admin.html */
    
    /* SAVE MENUITEMS TO menuItems.JSON */