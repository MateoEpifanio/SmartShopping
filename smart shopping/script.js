document.addEventListener("DOMContentLoaded", () => {
  // Animación de entrada para todos los productos
  const productos = document.querySelectorAll(".producto");
  productos.forEach((producto, index) => {
    producto.style.opacity = "0";
    producto.style.transform = "translateY(20px)";
    setTimeout(() => {
      producto.style.transition = "all 0.6s ease";
      producto.style.opacity = "1";
      producto.style.transform = "translateY(0)";
    }, index * 150); // efecto escalonado
  });

  // Resaltar el primer producto de cada categoría como "Lo más popular"
  const categorias = document.querySelectorAll(".categoria");
  categorias.forEach(categoria => {
    const primerProducto = categoria.querySelector(".producto");
    if (primerProducto) {
      const etiqueta = document.createElement("div");
      etiqueta.textContent = "🔥 Lo más popular";
      etiqueta.style.color = "#e67e22";
      etiqueta.style.fontWeight = "bold";
      etiqueta.style.marginBottom = "8px";
      primerProducto.insertBefore(etiqueta, primerProducto.firstChild);
      primerProducto.style.border = "2px solid #e67e22";
    }
  });
});