class Param{
    constructor(element){
        this.name = element.value;
        this.price = +element.data['price'];
        this.calories = +element.data['calories'];
    }
}

class Burger{
    constructor(size,struture,topping){
        this.size = new Param(this.select(size)); 
        this.struture = new Param(this.select(struture)); 
        this.toppings = this.getToppings(topping);
    }
    
    getToppings(name){
        let result = [];
        this.selectAll(name).forEach(elem => result.push(new Param(elem)))
        return result;
    }
    
    select(name){
        return document.querySelector(`input[name=${name}]:checked`);
    }
    
    selectAll(name){
        return [...document.querySelectorAll(`input[name=${name}]:checked`)];
   }
    
    sumPrice(){
        //console.log(this.toppings);
        let result = this.size.price + this.add.price;
        this.toppings.forEach(elem => result += elem.price);
        return result;
    }
    
    sumCalories(){
        let result = this.size.calories + this.add.calories;
        this.toppings.forEach(elem => result += elem.calories);
        return result;
    }
    
    showSum(price, calories){
        document.querySelector(price).textContent = this.sumPrice();
        document.querySelector(calories).textContent = this.sumCalories();
    }
}