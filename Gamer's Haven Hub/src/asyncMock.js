const products = [
  {id: "1",name: "Xbox Series X",price: 13000,category: "consolas",img: "https://m.media-amazon.com/images/I/51ojzJk77qL._AC_SL1500_.jpg",stock: 7,description: "La consola Xbox más rápida y potente de la historia."},
  {id: "2", name: "Xbox Series S", price: 5500, category: "consolas", img: "https://m.media-amazon.com/images/I/61f1agMOeTL._AC_SX679_.jpg", stock: 10, description: "Totalmente digital, ofrece juegos de próxima generación a un precio accesible. " },
  {id: "3", name: "PlayStation 5 Slim Bundle Spiderman", price: 12000, category: "consolas", img: "https://m.media-amazon.com/images/I/61INHIveEIL._AC_SX679_.jpg", stock: 2, description: "El paquete incluye el cupón digital de Marvel's Spider-Man 2 de juego completo." },
  {id: "4", name: "PlayStation 5 Slim", price: 11300, category: "consolas", img: "https://m.media-amazon.com/images/I/61MCSdTkPOL._AC_SX522_.jpg", stock: 6, description: "Diseño slim del PS5, 1 TB de almacenamiento, mantenga sus juegos favoritos listos." },
  {id: "5", name: "Nintendo Switch Oled Edicion Zelda", price: 7800, category: "consolas", img: "https://m.media-amazon.com/images/I/81Yiw8Zk0uL._AC_SX679_.jpg", stock: 10, description: "Embárcate en una épica aventura a través de la superficie y los cielos de Hyrule con la consola Nintendo Switch." },
  {id: "6", name: "Nintendo Switch Oled Edicion Mario", price: 1200, category: "consolas", img: "https://m.media-amazon.com/images/I/51Jx6AuFPAL._AC_SX679_.jpg", stock: 9, description: "Diseño de Mario con una pantalla OLED vívida de 7." },
  {id: "7", name: "Call Of Duty MW III", price: 1400, category: "videojuegos", img: "https://m.media-amazon.com/images/I/81gC+0ed-nL._AC_SY679_.jpg", stock: 5, description: "Call of Duty: Modern Warfare III - Cross-Gen Bundle." },
  {id: "8", name: "Super Mario Odyssey", price: 1000, category: "videojuegos", img: "https://m.media-amazon.com/images/I/81sS-oqpkLS.__AC_SX300_SY300_QL70_ML2_.jpg", stock: 11, description: "Acompaña a Mario en una aventura en 3D enorme por todo el planeta." },
  {id: "9", name: "Zelda Tears Of The Kingdom", price: 1100, category: "videojuegos", img: "https://m.media-amazon.com/images/I/71glcphYY0L.__AC_SX300_SY300_QL70_ML2_.jpg", stock: 12, description: "Una épica aventura a través de la superficie y los cielos de Hyrule te espera." },
  {id: "10", name: "The Last Of Us II Remastered", price: 1100, category: "videojuegos", img: "https://m.media-amazon.com/images/I/71eK4zlswgL._AC_SX679_.jpg", stock: 15, description: "Mejoras de PS5 nativas. Creado para PS5, The Last of Us Part II Remastered mejora al juego original de PS4" },
  {id: "11", name: "CyberPunk 2077", price: 1350, category: "videojuegos", img: "https://m.media-amazon.com/images/I/81EPiOqyw8L.__AC_SX300_SY300_QL70_ML2_.jpg", stock: 4, description: "Videojuego de rol en primera persona, ofreciendo un alto nivel de personalización de cada aspecto del jugador." },
  {id: "12", name: "Spiderman Miles Morales", price: 1400, category: "videojuegos", img: "https://m.media-amazon.com/images/I/71Kwo5V9QOL._AC_SX425_.jpg", stock: 4, description: "El ascenso de Miles Morales Miles Morales descubre poderes explosivos que lo diferencian de su mentor, Peter Parker. " },
  {id: "13", name: "Control Xbox", price: 1000, category: "accesorios", img: "https://m.media-amazon.com/images/I/61YNiiJizXL.__AC_SX300_SY300_QL70_ML2_.jpg", stock: 2, description: "Mando Inalambrico de Xbox Series Carbon Black" },
  {id: "14", name: "Control PlayStation 5", price: 1200, category: "accesorios", img: "https://m.media-amazon.com/images/I/61oYPSnBRKS.__AC_SX300_SY300_QL70_ML2_.jpg", stock: 6, description: "Control Inalámbrico DualSense Midnight Black. " },
  {id: "15", name: "Control Nintendo Switch - Joy-Con", price: 1400, category: "accesorios", img: "https://m.media-amazon.com/images/I/61Yb9jsraxL._AC_SX679_.jpg", stock: 6, description: "Dos Joy-Con se pueden usar independientemente en cada mano, o juntos" },
  {id: "16", name: "Funda de Transporte de Viaje Compatible con Nintendo Switch ", price: 800, category: "accesorios", img: "https://m.media-amazon.com/images/I/81VNBokvIiL.__AC_SY300_SX300_QL70_ML2_.jpg", stock: 8, description: "Diseño Exterior Personalizado y Único" },
  {id: "17", name: "Soporte de pared de acero para Xbox Series X", price: 500, category: "accesorios", img: "https://m.media-amazon.com/images/I/71XxKKXYarL._AC_SX522_.jpg", stock: 8, description: "Soporte de pared para Xbox Series X: diseñado específicamente para la Xbox Series X, este soporte de pared de acero sostiene de forma segura tu consola de juegos en un lugar conveniente en la pared" },
  {id: "18", name: "Soporte de PS5 pared con luz RGB", price: 600, category: "accesorios", img: "https://m.media-amazon.com/images/I/51Qt+fNaVEL._AC_SX522_.jpg", stock: 8, description: "Kit de montaje en pared para PS5, a parte inferior del soporte cuenta con 6 almohadillas para orejas antideslizantes " },

];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === itemId));
    }, 500);
  });
};
