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

    // Actualizar la visualización del carrito
    document.getElementById("cart").innerHTML = "<h3>Carrito de Compras</h3>";
    cart.forEach(function(item, index) {
        document.getElementById("cart").innerHTML += "<p>" + item.name + " - $" + item.price.toFixed(2) + "</p>";
    });

    var total = cart.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);

    document.getElementById("cart").innerHTML += "<h4>Total: $" + total.toFixed(2) + "</h4>";
});