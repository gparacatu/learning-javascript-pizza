const s = (item) => document.querySelector(item); //Cria uma constante para simplificar a query selector
const sa = (item) => document.querySelectorAll(item); //Cria uma constante para simplificar a query selector all
let pizzaQuantidade = 1;
pizzaJson.map((pizza, index) => {
    //listagem das pizzas
    let pizzaItem = s(".models .pizza-item").cloneNode(true);

    pizzaItem.setAttribute("data-key", index);
    pizzaItem.querySelector(".pizza-item--img img").src = pizza.img;
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${pizza.price.toFixed(2)}`;
    pizzaItem.querySelector(".pizza-item--name").innerHTML = pizza.name;
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = pizza.description;

    //Evento de clique nas pizzas para abrir o modal
    pizzaItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        pizzaQuantidade = 1;
        let key = e.target.closest(".pizza-item").getAttribute("data-key");

        // console.log(pizzaJson[index]);

        s(".pizzaBig img").src = pizzaJson[key].img;
        s(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
        s(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
        s(".pizzaInfo--size.selected").classList.remove("selected");
        var controlIndex = sa(".pizzaInfo--size").length;
        sa(".pizzaInfo--size").forEach((size, sizeIndex) => {

            if (sizeIndex == (controlIndex - 1)) {
                size.classList.add("selected");
            }

            sizeKey = size.getAttribute("data-key");
            size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeKey];

        });

        s(".pizzaInfo--qt").innerHTML = pizzaQuantidade;

        s(".pizzaWindowArea").style.opacity = 0;
        s(".pizzaWindowArea").style.display = "flex";
        setTimeout(() => {
            s(".pizzaWindowArea").style.opacity = 1;
        }, 500);

    });

    //adicionas as pizzas na div 
    s(".pizza-area").append(pizzaItem);
})

function closeModal() {
    s(".pizzaWindowArea").style.opacity = 0;
    setTimeout(() => {
        s(".pizzaWindowArea").style.display = "none";
    }, 500);
}

//Adiciona o evento onclick nos botões de cancelar o modal com o método closeModel()
sa(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach((item) => {
    item.addEventListener("click", closeModal);
});

s(".pizzaInfo--qtmais").addEventListener("click", () => {
    pizzaQuantidade++;
    s(".pizzaInfo--qt").innerHTML = pizzaQuantidade;
});

s(".pizzaInfo--qtmenos").addEventListener("click", () => {
    if (pizzaQuantidade > 1) {
        pizzaQuantidade--;
        s(".pizzaInfo--qt").innerHTML = pizzaQuantidade;
    }
});
