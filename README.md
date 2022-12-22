# Proyecto-3
<h1>Creación de una ecomerce para Plantes amb Màgia</h1>
<img src="./logo.png"/>
<p>
La ecomerce para Plantes amb Màgia es un proyecto creado dentro del Bootcamp de Campsite.
</p>
<p>
Plantes amb mágia es un proyecto de joyería y artesanía realizadas con resina, madera, plantas y flores naturales.
Cada joya o decoración tiene su propio significado y sus propiedades mágicas.
Los clientes se pueden registrar si no tienen perfil o loguear si ya han creado su perfil previamente.
Hay dos perfiles de usuario: cliente normal y administrador.
En la web los clientes pueden visualizar los productos disponibles en el catálogo, las categorías. También pueden modificar los datos de su perfil. </p>
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
 
 <h2> Backend </h2>

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

<h3>Category</h3>
<p>Con una única key requerida de title, type string, donde se informa el tipo de categoria que es. </p>

<h3>User</h3>
<p>Con ocho keys, name, surname, email, phone, adress, password, role y cart.</p>

<h3>Product</h3>
<p>Con seis keys, title, description, price, image, stock, category.</p>

<h3>Payment</h3>
<p>Con ocho keys, user_id, name, surname, email, phone, adress, paymentID y cart.</p>

<p>También se han creado cinco Routes: </p>

<h3>CategoryRouter</h3>

<p>.post("/category") - ruta privada para el administrados que permite añadir categorias a los productos. </p>
<p>get("/categories") - ruta abierta que permite visualizar todas las categorias creadas. </p>
<p>.get("/category/:id") - ruta abierta que permite visualizar una categoria en concreto a través del ID indicado. </p>
<p>.put("/category/:id") - ruta privada para el administrador que permite modificar una categoria a través del ID. </p>
<p> .delete("/category/:id") - ruta privada para el administrador que permite eliminar una categoria indicando el ID.</p>

<h3>UserRouter</h3>
<p> .post("/register") - ruta abierta para registrar un nuevo usuario a través de email, name, surname, phone y password.</p>
<p> .get("/users") - ruta privada para el administrador que le permite visualizar todos los usuarios registrados.</p>
<p>.get("/user") - ruta privada para el usuario que le permite visualizar su perfil. </p>
<p> .put("/user") - ruta privada para el administrador que le permite modificar los datos del usuario.</p>
<p> .delete("/user/:id") - ruta privada para el administrador que le permite eliminar un usuario concreto mediante ID.</p>
<p> .post("/login") - ruta abierta que permite iniciar sesión a través de email y password. </p>
<p> .post("/cart") - ruta de usuario que permite añadir productos al carrito.</p>

<h3>ProductRouter</h3>
<p> .post("/product") - ruta privada para el administrador que le permite añadir un nuevo producto indicando: title, description, price, stock, image y categoryID.</p>
<p>.get("/products") - ruta abierta que permite visualizar el catlogo de productos de la ecomerce. </p>
<p>.get("/product/:id") - ruta abierta que permite visualizar un único producto mediante ID. </p>
<p>.put("/product/:id") - ruta privada para el administrador que permite modificar un producto. </p>
<p> .delete("/product/:id") - ruta privada para el administrador que le permite eliminar un producto mediante ID.</p>

<h3>PaymentRouter</h3>
<p>.get("/payments") - ruta privada para el usuario que le permite visualizar todos los pagos realizados desde su cuenta. </p>
<p> .post("/payment") - ruta privada para el usuario que le permite realizar el pago de los productos de su cart.</p>

<h3>ImageRouter</h3>
<p>.post("/upload") - ruta que le permite al administrador añadir imagenes. </p>
<p>.post("/destroy")- ruta que le permite al administrador eliminar imagenes. </p>

 
<h2>Frontend</h2>
<p>El frontend de esta aplicación web consta de 19 componentes:</p>
<p>- AddCategory: componente realizado para que el administrador pueda añadir categorías nuevas con su respectivo título y fotografía.</p>
<p>- Category: componente realizado para que se visualicen todas las categorías existentes en la web.</p>
<p>- CategoryId: componente realizado para que se visualice una categoría especifica con los productos que contiene.</p>
<p>- ModCategory: componente realizado para que el administrador pueda modificar el título de una categoría o la fotografía..</p>
<p>- Footer: componente realizado para visualizar el footer con las RRSS.</p>
<p>- About: componente realizado para mostrar la información sobre Plantes amb màgia.</p>
<p>- Home: componente realizado para mostrar galería de fotos y las categorías.</p>
<p>- Login: componente realizado para que el usuario y el administrador se puedan loguear en la página.</p>
<p>- Logout: componente realizado para que el usuario y el administrador se puedan desloguear de la página.</p>
<p>- Navbar:componente que contiene 3 navbars distintas. Una para usuarios no logueados, otra para usuarios con perfil y finalmente una para el usuario administrador.</p>
<p>- AddProduct: componente realizado para que el administrador pueda añadir un nuevo producto con todas las keys obligatorias.</p>
<p>- ModProduct: componente realizado para que el administrador pueda modificar la información de cualquier producto ya creado.</p>
<p>- Product: componente realizado para que cualquiera pueda visualizar la información de un producto.</p>
<p>- Products: componente realizado para que cualquiera pueda visualizar la ñista de productos disponibles.</p>
<p>- ModUser: componente realizado para que el administrador pueda modificar la información de los usuarios.</p>
<p>- Profile: componente realizado para que el usuario pueda modificar la información de su perfil. </p>
<p>- User: componente realizado para que el usuario pueda visualizar la información de su perfil y sus pedidos. </p>
<p>- Users: componente realizado para que el administrador pueda visualizar la información de los usuarios registrados.</p>
<p>- Register: componente realizado para que cualquier usuario pueda crearse un perfil. </p>


<h2>Funcionalidades</h2>
<p>- Import: nos permite importar cualquier dependencia, función, icono o imagen en un componente.</p>
<p>- useState: es una variable con una función que nos guardará los datos.
</p>
<p>- useNavigate: al ser una SAP podemos utilizar el useNavigate creando una variable navigate e indicando en setTimeout donde queremos que se redirija una vez realizada una acción. </p>
<p>- LocalStorage: utilizado con setItem para guardar información en el localstorage de nuestro navegador, con getItem para obtener la información guardada anteriormente y con deleteItem podemo eliminar esta información(logout o eliminar usuario).</p>
<p>- useEffect:es una función que en el momento que carga mi componente me trae los datos de la API y los guarda en una variable para poder manejarlos previamente. En resumen, no muestra el componente hasta el momento que tenga los datos.</p>
<p>- useParams: es un metodo de React-router-dom que nos ayuda a recibir por parametros la información del objeto.</p>
<p>- e.preventDefault()/event.target: función que impide que se actualice la página hasta que lo indiquemos con una acción.</p>
<p>- set: es una función que nos va a guardar la información indicada en useState.</p>
<p>- .map: función utilizada cuando queremos devolver la información de una array guardada en set.</p>
<p>- setTimeout: nos permite indicar, junto con navigate, donde se redirige la página una vez realizada la acción.</p>
<p>- handleUpload: función utilizada antes de añadir un producto o categoria para colgar sus fotos en cloudinary</p>
<p>- handleSubmit: se utiliza para especificar el método que debe de ejecutarse cuando se envía un formulario.</p>



<h2>Tecnologías empleadas</h2>
 
<p>- JavaScript: utilizado para crear toda la parte de Back-End de la ecomerce: modelos, rutas...</p>
<p>- Postman: utilizado para realizar la BBDD</p>
<p>- MongoDB: creación y mantenimiento de la BBDD</p>
<p>- Git y GitHub: repositorio en remoto y control y actualización de versiones.</p>
<p>- Cloudinary: gestión de imágenes y vídeos basados ​​en la nube. Permite a los usuarios cargar, almacenar, administrar, manipular y entregar imágenes y videos para sitios web y aplicaciones.</p>
<p>- Bootstrap: para realizar parte del diseño de la web.</p>
 

 
<h2>Versiones</h2>
<p> - V0 (10/11/2022) Primera versión del proyecto </p>
 
<p> - V1 (23/11/2022) Actualización del proyecto y del readme con nuevas routes y middleware. </p>
<p> - V1.2 (21/12/2022) Actualización del proyecto con todos los archivos de frontend. </p>
 
 
<h2>To-Do</h2>
<p>- Mejorar diseño</p>
<p>- Añadir carrito</p>
<p>- Añadir pasarela de pago</p>
<p>- Añadir formulario pedidos personalizados</p>
<p>- Añadir buscador</p>
<p>- Añadir blog</p>
<p>- Añadir mis pedidos al perfil</p>
