<h1 align ="center">📽 Reto  API TMDB 📽</h1>
<br>

Proyecto en grupo realizado para [Geeks Hubs](https://geekshubsacademy.com/) por [Alejandro](https://github.com/2020-JAUG) y [Juan Felipe](https://github.com/juanfegallego).


 Este reto consiste en el desarrollo de un backend para realizar consultas de datos en la <b>API</b> [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction) por medio de edpoints y aplicando el uso de metodologías ágiles.<br>

 Para realizar este trabajo de forma colaborativa y hacer el reparto de tareas, hemos utilizado la herramienta <b>Trello.</b>

<b>Tiempo de inicio/fin: 19 - 21 de mayo de 2021.</b>

Para su desarrollo nos hemos basado en las buenas practicas que nos ofrece <b>GitFlow.</b>

Hemos utilizado dos ramas de desarrollo para trabajar nuestras funcionalidades de forma individual y después de validar cada endpoint, lo hemos subido a la rama <b>master.</b>

<br>

![captura](/img/capturaTrello1.png)
<br>
![captura](/img/capturaTrello2.png)



<br>
# ÍNDICE

- [¿Qué es? 🧐](#¿Qué-es?)
- [¿Cómo realizar una búsqueda?](#busqueda)
- [Requisitos ⚙️](#requisitos)
- [Tecnologías](#tecnologías)

# <h1 align ="center"> ¿Qué es? 🧐 </h1>

Desde producción nos solicitan desarrollar un backend para realizar consultas de datos a una <b>API</b> de terceros mediante el uso de promesas. <br>
Ejemplo de una búsqueda mediante <b>ID</b><br>

```JavaScript
router.get("/:id", async(req, res) => {
    try {
        let id = req.params.id;
        res.json(await moviesControllers.searchById(id));
    } catch (err) {
        return res.status(500).json ({
            mensaje: err.message
        });
    }
});
```
<br>

<h1 align ="center"> Requisitos ⚙️</h1>

- Tener instalado un editor de código para poder modificar cualquier archivo del proyecto.
- [Descargar](https://nodejs.org/es/) e Instalar <b>Node.</b>
```
    $ npm install node
```
- Instalar <b>Axios.</b>
```
    $ npm install axios
```
- Instalar <b>Express.</b>
```
    $ npm install express.
```

# <h1 align ="center">¿Cómo realizar una búsqueda? 🔎</h1>
Para poder realizar una búsqueda se tiene que levantar el servidor local, en nuestro caso el <http://localhost:3000>.

- Abre la terminal y ejecuta el comando
```
    $ npm start
```
<br>

<h2 align ="center"> Enlaces de búsquedas </h2>

<h3 align ="center">Películas</h3>

● Películas top rated. (http://localhost:3000/movies/)
● Película según su id. (http://localhost:3000/movies/"id de lapelicula ej: 35")
● Película por título. (http://localhost:3000/movies/search/"Título de la pelicula")
● Películas con determinado género (indicando nombre, no id).
 (http://localhost:3000/movies/genre/"ej: Action")<br>
 <h3 align ="center">Series</h3>

● Series top rated. (http://localhost:3000/series/)
● Series por id. (http://localhost:3000/series/"id de laserie")
● Series por título. (http://localhost:3000/series/search/"Título de la serie")
● Series que vayan a tener un capítulo emitido en los próximos 7 días. (http://localhost:3000/series/search/on_the_air)
● Series que vayan a tener un pase en teatros o cines. (http://localhost:3000/series/search/)

# <p align ="center">Tecnologías 💻</p>
##### Para el desarrollo de este proyecto hemos trabajado con las siguientes tecnologías.<br>

 <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><a href="https://nodejs.org" target="_blank"> <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> <img src="img/TMDB.png" alt="TMDB" width="55"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60"/> </a> <img src="img/axios.png" alt="axios" width="100" height="60"/></a> <img src="img/express.png" alt="axios" width="90" height="90"/></a>
