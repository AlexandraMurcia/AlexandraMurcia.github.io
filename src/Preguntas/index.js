let preguntas = [];

const categorias = [
    {
        "nombre": "Comida",
        "preguntas": [

            {
                "pregunta": "&iquest;De que pais es originario el ceviche?",
                "respuestas": ["Chile", "Colombia", "Argentina", "Peru"],
                "correcta": "Peru",
                "imagen": "https://mandolina.co/wp-content/uploads/2020/11/ceviche-peruano-de-pescado-destacada.jpg"
            },
            {
                "pregunta": "&iquest;Cu&aacute;l es la carne m&aacute;s cara del mundo?",
                "respuestas": ["Wagyu", "Cerdo", "Pollo", "Salmon"],
                "correcta": "Wagyu",
                "imagen": "https://s10.s3c.es/imag/_v0/770x420/b/7/6/600x400_Diferentes-tipos-de-carne-iStock.jpg"
            },
            {
                "pregunta": "&iquest;Qu&eacute; refresco fue m&aacute;s famoso en 1892?",
                "respuestas": ["Pepsi Cola", "Coca Cola", "Dr. Pepper", "Mountain Dew"],
                "correcta": "Coca Cola",
                "imagen": "https://us.123rf.com/450wm/usersam2007/usersam20071311/usersam2007131100010/23705965-grupo-de-diversas-marcas-de-bebidas-gaseosas-en-latas-de-aluminio-aislados-en-blanco-con-trazado-de-.jpg?ver=6"
            },
            {
                "pregunta": "&iquest;Qu&eacute; fruta puede ablandar la carne?",
                "respuestas": ["manzana", "naranja", "Piña", "fresa"],
                "correcta": "Piña",
                "imagen": "https://mercadodesanfernando.es/wp-content/uploads/2021/10/tipos-de-fruta.jpeg"
            }
        ]

    },
    {
        "nombre": "Animales",
        "preguntas": [
            {
                "pregunta": "¿C&oacute;mo se llama a un pavo real hembra?",
                "respuestas": ["Peahens", "Peafowl", "Peananny", "Peonías"],
                "correcta": "Peahens",
                "imagen": "https://fotosdeaquiydealla.files.wordpress.com/2017/05/pavo-real-hembra-2.jpg"
            },
            {
                "pregunta": "¿Cuál es la vida media de un perro?",
                "respuestas": ["3-5 años", "14-20 años", "20-25 años", "10-13 años"],
                "correcta": "10-13 años",
                "imagen": "https://humanidades.com/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg"
            },
            {
                "pregunta": "¿Qué animal no tiene cerebro?",
                "respuestas": ["Estrella de mar", "Nutria", "Medusa", "Seal"],
                "correcta": "Medusa",
                "imagen": "https://www.renovablesverdes.com/wp-content/uploads/2020/11/animales-marinos.jpg"
            },
            {
                "pregunta": "¿Dónde se encuentra el corazón del camarón?",
                "respuestas": ["Pecho", "Cabeza", "Cola", "Piernas"],
                "correcta": "Cabeza",
                "imagen": "https://cdn0.bioenciclopedia.com/es/posts/1/0/5/camaron_501_600.jpg"
            }
        ]

    },
    {
        "nombre": "Peliculas",
        "preguntas": [
            {
                "pregunta": "¿Cómo se llamaba el búho mascota de Harry Potter?",
                "respuestas": ["Errol", "Hedwig", "Crookshanks", "Scabbers"],
                "correcta": "Hedwig",
                "imagen": "https://assets.teenvogue.com/photos/5665bcd09ddb4a237dfaba9f/5:2/w_3000,h_1199,c_limit/MSDHAPO_EC075_H.JPG"
            },
            {
                "pregunta": "¿Qué actor famoso protagonizó la película Titánic?",
                "respuestas": ["Ryan Gosling", "Ryan Reynolds", "Keanu Reeves", "Leonardo DiCaprio"],
                "correcta": "Leonardo DiCaprio",
                "imagen": "https://imgmedia.aweita.pe/640x345/aweita/migration/imagen/2018/09/26/noticia-ciencia-viral-titanic.webp"
            },
            {
                "pregunta": "¿Dónde vivieron Princess Anna y Queen Elsa?",
                "respuestas": ["Arandelle Castle", "Atlántica", "Bosque encantado", "Castillo de hielo"],
                "correcta": "Arandelle Castle",
                "imagen": "https://lumiere-a.akamaihd.net/v1/images/frozen16_9e8030ce.jpeg?region=0,2,1463,823&width=960"
            },
            {
                "pregunta": "¿En qué película se vio por primera vez la muñeca Anabelle?",
                "respuestas": ["Viernes 13", "Chucky", "The Conjuring", "La monja"],
                "correcta": "The Conjuring",
                "imagen": "https://ep00.epimg.net/cultura/imagenes/2019/07/10/actualidad/1562760252_957520_1562773226_portada_normal.jpg"
            }
        ]

    }
]
let categoriaSeleccionada = "";
function obtener_CategoriaLS() {
    categoriaSeleccionada = localStorage.getItem("categoria");
}
obtener_CategoriaLS();

function asignarPreguntas() {
    const contenerPregunta = document.getElementById('pregunta');
    contenerPregunta.innerHTML = preguntas[0].pregunta

    const contenerImagen = document.getElementById('imagen');
    contenerImagen.innerHTML = `<img src="${preguntas[0].imagen}" class="imagen"/>`

    const conteneResp = document.getElementById('respuestas')

    preguntas[0].respuestas.map((respuesta, index) => {
        if (preguntas[0].correcta === respuesta) {
            conteneResp.insertAdjacentHTML("beforeEnd", `<div class="btn correcta" id="respuesta${index}" onclick="guardarRespuestaElegida(event)">${respuesta}</div> `)

        } else {
            conteneResp.insertAdjacentHTML("beforeEnd", `<div class="btn" id="respuesta${index}" onclick="guardarRespuestaElegida(event)">${respuesta}</div> `)
        }
    })
    const contenerCategoria = document.getElementById('categoria');
    contenerCategoria.innerHTML = categoriaSeleccionada;
}

const consultar_categorias = () => {
    document.getElementById("alerta").style.display = "none";
    preguntas = categorias.filter((categoria) => categoria.nombre === categoriaSeleccionada)[0].preguntas
    asignarPreguntas();
}
consultar_categorias();



const salir = () => {
    location.href = "../../index.html";
}
let contador = 0;
let idRespuestaElegida = "";
function guardarRespuestaElegida(evento) {

    if (idRespuestaElegida !== "") {
        document.getElementById(idRespuestaElegida).style.transform = "scale(1)";
        document.getElementById(idRespuestaElegida).style.backgroundColor = "white";
    }
    idRespuestaElegida = evento.target.id;
    document.getElementById(evento.target.id).style.transform = "scale(1.05)";
    document.getElementById(evento.target.id).style.backgroundColor = "#FBA8AF";
}


const validar = () => {
    const botonElegido = document.getElementById(idRespuestaElegida)?.innerText;
    if (botonElegido === preguntas[0].correcta) {
        document.getElementById("respuestas").style.color = "red";
        document.getElementById(idRespuestaElegida).style.backgroundColor = "#38ff38";
        document.getElementById(idRespuestaElegida).style.color = "black";

        contador = contador + 50;
        document.getElementById('contador').textContent = contador;
    }
    else {
        const idCorrecta = document.getElementsByClassName("correcta")[0].id
        document.getElementById("respuestas").style.color = "red";
        document.getElementById(idCorrecta).style.backgroundColor = "#38ff38";
        document.getElementById(idCorrecta).style.color = "black";
        document.getElementById("respuestas").style.pointerEvents = "none";

    }
}

time = 0;
let t
const cuentaRegresiva = (tiempoRestante, tiempo) => {
    if (tiempoRestante === 11) {
        time = tiempoRestante;
    }

    time--;
    document.getElementById("segundos").innerHTML = String(time);
    if (time > 0) {

        t = setTimeout(() => {
            cuentaRegresiva(time, 1000)
        }, 1000);

    } else {
        validar();
    }
};

window.addEventListener("load", function (event) {
    cuentaRegresiva(11, 1000);
});

const siguiente = () => {

    preguntas.shift();
    if (preguntas.length > 0) {
        document.getElementById("respuestas").style.color = "black";
        document.getElementById("respuestas").style.pointerEvents = "all";
        document.getElementById("respuestas").innerHTML = "";
        consultar_categorias();
        clearTimeout(t)
        cuentaRegresiva(11, 1000);
    } else {
        document.getElementById("alerta").style.display = "block";
        document.getElementById("mensajeAlerta").innerHTML = "Su puntaje es " + contador;
        document.getElementById("mensajeAlerta").style.marginTop = "150px";
        document.getElementById("contenedor").style.display = "none";

    }

}

