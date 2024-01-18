# GAMERS HAVEN HUB
## Vite, React JS, JavaScript & Firebase
### E-commerce

[Vercel](https://gamer-s-haven-hub.vercel.app/) - Visita la pagina.



Gamers Haven Hub es un proyecto realizado en base a los conoimientos obtenidos en el curso de React Js de CODERHOUSE.

## Caracteristicas

- Cada uno de los componentes fue creado dentro de la carpeta src con el nombre de carpeta que le hace enfasis a su funcionalidad.
- En app.jsx se puede ver la forma de navegacion siendo:
- - path="/" te dirige justo al inicio del programa
- - path="/category/:categoryId" te dirige a ItemListContainer donde se filtra por categoria
- - path="/detail/:productId" te dirige al ItemDetailContainer del producto selecccionado
- - path="/cart" te envia al componente CartView donde se muestran los producctos agregados al carrito
- - path="/checkout" te envia a la partte final que es el formulario y donde se dan las ordenes de compra.
- Se hace uso de la funcion Context de React JS, puedes ver como se implemento en la carpeta src > Context > CartContext
- Se uso la libreria Toastify para la parte de las notificaciones apareciendo una notificación cuando: Se agrega un producto al carrito, se elimina algun producto del carrito, cuando no se puede generar la orden debbido a falta de stock y cuando el carrito esta vacío.
- Se uso firebase para almacenar los datos de los productos en la nube, tambien se uso para generar las ordenes de compra.
- Se subio el proyecto a la plataforma de VERSEL.
- Se creo el .env para salvarguardar la informacion propia de firebase.


## Instalación
Gamers Haven Hub necesita [Node.js](https://nodejs.org/) v10+ para funcionar.

Pasos a seguir.
1. Cree la carpeta donde va a alogar el proyectto, abra la terminal y clone el proyecto 
```sh
git clone https://github.com/OscarNah/Gamer-s-Haven-Hub
```
2. Una vez clonado abra una nueva terminal donde se encuentren los documentos package.json e ingrese el siguiente instruccion:
```sh
npm install
```
3. Una vez terminada la instalacion escriba la siguiente instrucccion haga click en el link que se le da.
```sh
npm run dev
