// Seleccionamos todos los botones de "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('[data-btn-action="add-btn-cart"]');

// Seleccionamos el contenedor donde se mostrarán los productos en el modal
const modalList = document.querySelector('.modal__list');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');

let carrito = [];
let subtotal = 0;

// Función para agregar un producto al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        // Obtenemos la información del producto
        const card = button.closest('.card');
        const title = card.querySelector('.card-title').textContent;
        const priceText = card.querySelector('.card-text').textContent;
        const imageUrl = card.querySelector('img').src; // Obtener la URL de la imagen
        // Convertimos el texto del precio a número, eliminando el símbolo '$' y las comas
        const price = parseFloat(priceText.replace('$', '').replace('.', '').replace(',', '.'));

        // Creamos un objeto producto
        const producto = {
            titulo: title,
            precio: price,
            imagen: imageUrl // Añadimos la URL de la imagen
        };

        // Añadimos el producto al carrito
        carrito.push(producto);
        subtotal += price;
        
        // Actualizamos la visualización del carrito
        actualizarCarrito();
    });
});

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    // Limpiamos la lista actual
    modalList.innerHTML = '';

    carrito.forEach((producto, index) => {
        // Creamos un nuevo elemento para el producto
        const item = document.createElement('div');
        item.classList.add('modal__item');
        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}" style="width: 50px; height: auto;"/>
            <p>${producto.titulo} - $${producto.precio.toLocaleString()}</p>
            <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        modalList.appendChild(item);
    });

    // Actualizamos los valores de subtotal y total
    subtotalElement.textContent = `$${subtotal.toLocaleString()}`;
    totalElement.textContent = `$${subtotal.toLocaleString()}`;
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
    // Restamos el precio del producto al subtotal
    subtotal -= carrito[index].precio;

    // Eliminamos el producto del carrito
    carrito.splice(index, 1);

    // Actualizamos la visualización del carrito
    actualizarCarrito();
}
