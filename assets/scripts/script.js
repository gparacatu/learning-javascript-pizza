const s = (item) => document.querySelector(item); //Cria uma constante para simplificar a query selector
const sa = (item) => document.querySelectorAll(item); //Cria uma constante para simplificar a query selector all

pizzaJson.map((pizza, index) => {
    let pizzaItem = s(".models .pizza-item").cloneNode(true);

    pizzaItem.querySelector(".pizza-item--img img").src = pizza.img;
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${pizza.price.toFixed(2)}`;
    pizzaItem.querySelector(".pizza-item--name").innerHTML = pizza.name;
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = pizza.description;

    pizzaItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Clicou!!!")
    });

    s(".pizza-area").append( pizzaItem );
})