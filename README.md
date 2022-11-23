# Proyecto-3
<h1>Creación de una ecomerce para Plantes amb Màgia</h1>
 <!-- añadir imagen logo  -->
<p>
La ecomerce para Plantes amb Màgia es un proyecto creado dentro del Bootcamp de Campsite.
</p>
<p>
Plantes amb mágia es un proyecto de joyería y artesanía realizadas con resina, madera, plantas y flores naturales.
Cada joya o decoración tiene su propio significado y sus propiedades mágicas.
Los clientes se pueden registrar si no tienen perfil o loguear si ya han creado su perfil previamente.
Hay dos perfiles de usuario: cliente normal y administrador.
En la web los clientes pueden visualizar los productos disponibles en el catalogo, las categorias, buscar un producto o categoria, realizar pedidos y pagar. También pueden modificar los datos de su perfil. </p>
<p>El administrador puede: </p>
<p>- Añadir productos. </p>
<p>- Añadir categorias. </p>
<p>- Modificar un producto. </p>
<p>- Modificar una categoria. </p>
<p>- Modificar usuarios. </p>
<p>- Borrar un producto. </p>
<p>- Borrar una categoria. </p>
<p>- Visualizar todos los productos y categorias. </p>
<p>- Visualizar todos los usuarios. </p>
<p>- Borrar usuarios. </p>
 
<h2>Funcionalidades</h2>
<p>- Require</p>
<p>- Schema</p>
<p>- post</p>
<p>- get</p>
<p>- delete</p>
<p>- put</p>
<p>- find()</p>
<p>- findbyid()</p>
<p>- module.exports</p>
<p>- config</p>
<p>- removeTmp</p>
<p>- try/catch</p>
<p>- verify</p>
<p>- next()</p>
<p>- model</p>
<p>- new()</p>
<p>- save()</p>
<p>- listen</p>
<p>- use</p>
<p>- connect</p>
<p></p>

<h2>Dependencias:</h2>
<p>- nodemon: devDependencies. Es una dependencia que ayuda a desarrollar aplicaciones basadas en Node.js al mostrar automáticamente en la terminal cuando detecta cambios en los archivos del directorio.</p>
<p>- bcrypt: es una dependencia que ayuda a crear contraseñas hasheadas para una mayor seguridad de los datos del usuario.</p>
<p>- cloudinary: dependencia que nos ayuda a integrar nuestra aplicación con Cloudinary.</p>
<p>- dotenv: dependencia que nos ayuda a mantener ciertos datos privados en el archivo .env mediante process.env.</p>
<p>- express-fileupload: dependencia que nos ayuda a subir archivos.</p>
<p>- jsonwebtoken: dependencia que nos ayuda a transmitir información entre dos o más campos de forma segura y efectiva, utilizando los tokens creados para verificar que se tiene acceso a la información solicitada.</p>
<p>- mongoose: dependecia que nos ayuda a vincular la información con la BBDD de MongoDB.</p>

 
<h2>Diagrama de relaciones</h2>

<p>Para esta ecomerce se han creado cuatro modelos distintos: </p>

<h3>Category</3>
<p>Con una única key requerida de title, type string, donde se informa el tipo de categoria que es. </p>

<h3>User</3>
<p>Con ocho keys, name, surname, email, phone, adress, password, role y cart.</p>

<h3>Product</3>
<p>Con seis keys, title, description, price, image, stock, category.</p>

<h3>Payment</3>
<p>Con ocho keys, user_id, name, surname, email, phone, adress, paymentID y cart.</p>

<p>También se han creado cinco Routes: </p>

<h3>CategoryRouter</3>

<p>.post("/category") - ruta privada para el administrados que permite añadir categorias a los productos. </p>
<p>get("/categories") - ruta abierta que permite visualizar todas las categorias creadas. </p>
<p>.get("/category/:id") - ruta abierta que permite visualizar una categoria en concreto a través del ID indicado. </p>
<p>.put("/category/:id") - ruta privada para el administrador que permite modificar una categoria a través del ID. </p>
<p> .delete("/category/:id") - ruta privada para el administrador que permite eliminar una categoria indicando el ID.</p>

<h3>UserRouter</3>
<p> .post("/register") - ruta abierta para registrar un nuevo usuario a través de email, name, surname, phone y password.</p>
<p> .get("/users") - ruta privada para el administrador que le permite visualizar todos los usuarios registrados.</p>
<p>.get("/user") - ruta privada para el usuario que le permite visualizar su perfil. </p>
<p> .put("/user") - ruta privada para el administrador que le permite modificar los datos del usuario.</p>
<p> .delete("/user/:id") - ruta privada para el administrador que le permite eliminar un usuario concreto mediante ID.</p>
<p> .post("/login") - ruta abierta que permite iniciar sesión a través de email y password. </p>
<p> .post("/cart") - ruta de usuario que permite añadir productos al carrito.</p>

<h3>ProductRouter</3>
<p> .post("/product") - ruta privada para el administrador que le permite añadir un nuevo producto indicando: title, description, price, stock, image y categoryID.</p>
<p>.get("/products") - ruta abierta que permite visualizar el catlogo de productos de la ecomerce. </p>
<p>.get("/product/:id") - ruta abierta que permite visualizar un único producto mediante ID. </p>
<p>.put("/product/:id") - ruta privada para el administrador que permite modificar un producto. </p>
<p> .delete("/product/:id") - ruta privada para el administrador que le permite eliminar un producto mediante ID.</p>

<h3>PaymentRouter</3>
<p>.get("/payments") - ruta privada para el usuario que le permite visualizar todos los pagos realizados desde su cuenta. </p>
<p> .post("/payment") - ruta privada para el usuario que le permite realizar el pago de los productos de su cart.</p>

<h3>ImageRouter</3>
<p>.post("/upload") - ruta que le permite al administrador añadir imagenes. </p>
<p>.post("/destroy")- ruta que le permite al administrador eliminar imagenes. </p>

 
<h2>Tecnologías empleadas</h2>
 
<p>- JavaScript: utilizado para crear toda la parte de Back-End de la ecomerce: modelos, rutas...</p>
<p>- Postman: utilizado para realizar la BBDD</p>
<p>- MongoDB: creación y mantenimiento de la BBDD</p>
<p>- Git y GitHub: repositorio en remoto y control y actualización de versiones.</p>
<p>- Cloudinary: gestión de imágenes y vídeos basados ​​en la nube. Permite a los usuarios cargar, almacenar, administrar, manipular y entregar imágenes y videos para sitios web y aplicaciones.</p>
 

 
<h2>Versiones</h2>
<p> - V0 (10/11/2022) Primera versión del proyecto </p>
 
<p> - V1 (23/11/2022) Actualización del proyecto y del readme con nuevas routes y middleware. </p>
 
 
<h2>To-Do</h2>

