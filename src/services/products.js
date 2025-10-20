const products = [
   { id: 1, categoria: "Tortas Cuadradas", nombre: "Torta Cuadrada Chocolate", precio: 45000, stock: 10, img: "/public/products/TC001.jpg", descripcion: "Bizcocho cacao, relleno manjar y ganache." },
  { id: 2, categoria: "Tortas Cuadradas", nombre: "Torta Cuadrada Frutas",    precio: 50000, stock: 8,  img: "/public/products/TC002.jpg", descripcion: "Vainilla y frutas frescas de temporada." },

  // Tortas Circulares
  { id: 3, categoria: "Tortas Circulares", nombre: "Torta Circular Vainilla",  precio: 40000, stock: 12, img: "/public/products/TT001.jpg", descripcion: "Bizcocho vainilla y crema pastelera." },
  { id: 4, categoria: "Tortas Circulares", nombre: "Torta Circular Manjar",    precio: 42000, stock: 9,  img: "/public/products/TT002.jpg", descripcion: "Rellena de manjar y nueces." },

  // Postres Individuales
  { id: 5, categoria: "Postres Individuales", nombre: "Mousse de Chocolate",   precio: 5000,  stock: 25, img: "/public/products/PI001.jpg", descripcion: "Mousse 70% cacao." },
  { id: 6, categoria: "Postres Individuales", nombre: "Tiramisú Clásico",      precio: 5500,  stock: 20, img: "/public/products/PI002.jpg", descripcion: "Café, mascarpone y cacao." },

  // Productos Sin Azúcar
  { id: 7, categoria: "Productos Sin Azúcar", nombre: "Cheesecake Sin Azúcar", precio: 5200, stock: 18, img: "/public/products/SA001.jpg", descripcion: "Endulzado con sustituto permitido." },
  { id: 8, categoria: "Productos Sin Azúcar", nombre: "Brownie Sin Azúcar",    precio: 4800, stock: 22, img: "/public/products/SA002.jpg", descripcion: "Cacao intenso sin azúcar añadida." },

  // Pastelería Tradicional
  { id: 9, categoria: "Pastelería Tradicional", nombre: "Alfajor Maicena",     precio: 1200, stock: 100, img: "/public/products/PT001.jpg", descripcion: "Clásico con coco y manjar." },
  { id: 10, categoria: "Pastelería Tradicional", nombre: "Empolvado",           precio: 1500, stock: 80,  img: "/public/products/PT002.jpg", descripcion: "Relleno manjar y espolvoreado azúcar." },

  // Productos Sin Gluten
  { id: 11, categoria: "Productos Sin Gluten",  nombre: "Queque Limón (SG)",    precio: 6200, stock: 15, img: "/public/products/SG001.jpg", descripcion: "Harinas certificadas sin gluten." },
  { id: 12, categoria: "Productos Sin Gluten",  nombre: "Galletas Avena (SG)",  precio: 3500, stock: 30, img: "/public/products/SG002.jpg", descripcion: "Avena certificada." },

  // Productos Vegana
  { id: 13, categoria: "Productos Vegana",      nombre: "Torta Vegana Frutos Rojos", precio: 47000, stock: 7, img: "/public/products/VG001.jpg", descripcion: "Sin lácteos ni huevos." },
  { id: 14, categoria: "Productos Vegana",      nombre: "Brownie Vegano",       precio: 4800, stock: 24, img: "/public/products/VG002.jpg", descripcion: "Sin ingredientes de origen animal." },

  // Tortas Especiales
  { id: 15, categoria: "Tortas Especiales",     nombre: "Torta Cumpleaños Personalizada", precio: 60000, stock: 5, img: "/public/products/TE001.jpg", descripcion: "Decoración personalizada básica." },
  { id: 16, categoria: "Tortas Especiales",     nombre: "Torta de Novios (pequeña)",      precio: 95000, stock: 3, img: "/public/products/TE002.jpg", descripcion: "2 pisos, decoración sencilla." }
];


export function getProducts() {

  // Las promesas (Promise) son una forma de manejar operaciones asincrónicas en JavaScript.
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(products);
    }, 1000);
  })
}

export function getProductById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
      return setTimeout(() => {
        resolve(product);
      }, 1000);
    } else {
      reject(new Error("Producto no encontrado"));
    }
  });
}