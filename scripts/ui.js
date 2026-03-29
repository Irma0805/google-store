//UI Todo lo que toca el DOM

//1. Seleccionamos los elementos del HTML
const mainImage = document.getElementById("main-product-image");
const colorInputs = document.querySelectorAll('input[name="color"]');
const quantitySelect = document.querySelector(".quantity");
const addToCartButton = document.querySelector("button");
const thumbnails = document.querySelectorAll(".thumbnails img");

//Cambiar imagen con thumbnails
function changeThumbnail(){
    thumbnails.forEach(function(thumb){
        thumb.addEventListener("click", function(){
            mainImage.src = this.getAttribute("data-image");
        });
    });
}


// Cambiar imagen con colores
function changeColorProduct() {
    colorInputs.forEach(function (input, index){
        input.addEventListener("change", function(){
           

        });
    });
}

// Obtener los datos del producto
function getProductDetails(){
    const nombre = "Google Pixel Buds Pro";
    const cantidad = quantitySelect.value;

    //Comprueba si hay un color seleccionado
    const colorSeleccionado = document.querySelector('input[name="color"]:checked');
    const color = colorSeleccionado ? colorSeleccionado.value : "ninguno";

    return{nombre, cantidad, color}
}

// Botón Add to Card
function addToCart(){
    addToCartButton.addEventListener("click", function(){
        const producto = getProductDetails();
        console.log(producto);
    });
}