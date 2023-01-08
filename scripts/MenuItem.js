export default class MenuItem {
    constructor (id, price, dish, category, allergens, url) {
        this.id = id;
        this.dish = dish; 
        this.price = price;
        this.category = category;
        this.allergens = allergens;
        this.imgUrl = url; //needs to load lazy for optimization
    }
}