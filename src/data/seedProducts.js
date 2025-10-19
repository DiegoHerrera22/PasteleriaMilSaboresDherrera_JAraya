// Seed data representing a small catalogue of bakery products.  In a real
// application this data would be fetched from an API or database.  Each
// product includes an id, name, price, description and image URL.  Feel free
// to extend this list with more items or replace the placeholder images.
const products = [
  {
    id: 1,
    name: 'Torta de Chocolate',
    price: 15000,
    description: 'Bizcocho húmedo de chocolate cubierto con ganache y decorado con frutas.',
    image: '/assets/torta-chocolate.jpg',
  },
  {
    id: 2,
    name: 'Cheesecake de Frambuesa',
    price: 12000,
    description: 'Base de galleta crocante con crema de queso y salsa de frambuesas naturales.',
    image: '/assets/cheesecake-frambuesa.jpg',
  },
  {
    id: 3,
    name: 'Brownies',
    price: 5000,
    description: 'Porción de brownies suaves con nueces y cobertura de chocolate.',
    image: '/assets/brownies.jpg',
  },
  {
    id: 4,
    name: 'Alfajores',
    price: 3000,
    description: 'Alfajores de maicena rellenos con manjar y bañados en coco.',
    image: '/assets/alfajores.jpg',
  },
];

export default products;