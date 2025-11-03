var cart = [];

document.getElementById("add-to-cart").addEventListener("click", function() {
    // Guardar en un array el producto seleccionado añadido al carrito

    
    nameProduct = document.getElementById("Tortitas de Huazontle").innerText;
    priceProduct = document.querySelector(".price").innerText;

    var product = {
        name: nameProduct,
        price: parseFloat(priceProduct.replace("$", "").replace(",", ""))
    };


    cart.push(product);
}   );