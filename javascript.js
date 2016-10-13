//Vehicle Constructor
var Clothing = function(brand, price, color, type, stock){
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.type = type;
    this.stock = stock;
};

//Encapsulated display method
Clothing.prototype.displayClothing = function() {
    document.write("<tr id='/" + this.brand + "/'><td>" + this.brand + "</td><td>" + this.price.toFixed(2) + "</td><td>" + this.color + "</td><td>" + this.type + "</td><td></td></tr>");
};

//Encapsulated launch method
Clothing.prototype.writeClothing = function() {
    document.write("<p>" + this.brand + "'s stock amount: " + this.stock + "</p>");
};


function Shirt(brand, price, color, type, stock, sleeveLength){
    //Calls Parent Constructor, Sets inherited Properties
    Clothing.call(this, brand, price, color, type, stock);
    this.sleeveLength = sleeveLength;
}

//Sets Constructor of Car
Shirt.prototype.constructor = Shirt;

//Overrides Parent Display Method
Shirt.prototype.displayClothing = function(){
    document.write("<tr id='/" + this.brand + "/'><td>" + this.brand + "</td><td>" + this.price.toFixed(2) + "</td><td>" + this.color + "</td><td>" + this.type + "</td><td>" + this.sleeveLength + "</td></tr>");
};

//Encapsulated launch method
Shirt.prototype.writeClothing = function() {
    document.write("<p>" + this.brand + "'s stock amount: " + this.stock + "</p>");
};


function Pants(brand, price, color, type, stock, pantLength){
    //Calls Parent Constructor, Sets inherited Properties
    Clothing.call(this, brand, price, color, type, stock);
    this.pantLength = pantLength;
}

//Sets Constructor of Car
Pants.prototype.constructor = Pants;

//Overrides Parent Display Method
Pants.prototype.displayClothing = function(){
    document.write("<tr id='/" + this.brand + "/'><td>" + this.brand + "</td><td>" + this.price.toFixed(2) + "</td><td>" + this.color + "</td><td>" + this.type + "</td><td>" + this.pantLength + "</td></tr>");
};

//Encapsulated launch method
Pants.prototype.writeClothing = function() {
    document.write("<p>" + this.brand + "'s stock amount: " + this.stock + "</p>");
};


function Hats(brand, price, color, type, stock, hatType){
    //Calls Parent Constructor, Sets inherited Properties
    Clothing.call(this, brand, price, color, type, stock);
    this.hatType = hatType;
}

//Sets Constructor of Car
Hats.prototype.constructor = Hats;

//Overrides Parent Display Method
Hats.prototype.displayClothing = function(){
    document.write("<tr id='/" + this.brand + "/'><td>" + this.brand + "</td><td>" + this.price.toFixed(2) + "</td><td>" + this.color + "</td><td>" + this.type + "</td><td>" + this.hatType + "</td></tr>");
};

//Encapsulated launch method
Hats.prototype.writeClothing = function() {
    document.write("<p>" + this.brand + "'s stock amount: " + this.stock + "</p>");
};


function Shoes(brand, price, color, type, stock, shoeType){
    //Calls Parent Constructor, Sets inherited Properties
    Clothing.call(this, brand, price, color, type, stock);
    this.shoeType = shoeType;
}

//Sets Constructor of Car
Shoes.prototype.constructor = Shoes;

//Overrides Parent Display Method
Shoes.prototype.displayClothing = function(){
    document.write("<tr id='/" + this.brand + "/'><td>" + this.brand + "</td><td>" + this.price.toFixed(2) + "</td><td>" + this.color + "</td><td>" + this.type + "</td><td>" + this.shoeType + "</td></tr>");
};

//Encapsulated launch method
Shoes.prototype.writeClothing = function() {
    document.write("<p>" + this.brand + "'s stock amount: " + this.stock + "</p>");
};

function main(data){
    var clothingArray = [];

    clothingArray[0] = new Clothing("Generic Brand", 0, "Generic", "Generic", "N/A");
    clothingArray[1] = new Shirt("Yamaha", 19.99, "Green", "Shirt", 99, "Long Sleeve");
    clothingArray[2] = new Pants("Volvo", 11.49, "Navy Blue", "Pants", 180, "Cargo Pants");
    clothingArray[3] = new Hats("Fisher Price", 25.49, "Orange", "Hats", "Out of stock", "Flat Bill");
    clothingArray[4] = new Shoes("Souper", 29.99, "White", "Shoes", 81, "Running Shoes");
    if(data == 1){
        for (i = 0; i < clothingArray.length; i++) {
            clothingArray[i].displayClothing();
        }
    }

    if(data == 2){
        for (b = 0; b < clothingArray.length; b++) {
            clothingArray[b].writeClothing();
        }
    }
}