Dia 1
este dia aprendi a crear elementos Html para poder crear 
la pagina de inicio, tambien aprendi a unir un archivo css y un javaScrip a un documento HTML
por medio de la etiqueta link y la etiqueta script, Aprendi como crear funciones en javaScript y 
diferentes metodos, aprendi a usar el elemento input el cual recibe valores por teclado, ademas de esto
aprendi a poner una imagen como fondo de un contenedor o encabezado, aprendi a crear botones y darles estilo
por medio de una clase, y a usar el Onclick con una funcion que esta en el javaScript para que al oprimir
realice lo que esta dentro de la funcion, en este caso aprendi a guardar datos por medio del Id en el
localStorage para asi poder usarlos en diferentes partes, ademas aprendi a referenciar un link, en este caso 
al dal click se guarda el nombre ingresado en el LS y redirige a la pagina de categorias.

Dia 2
Aprendi a traer del LocalStorage un Item por medio de su Id guardandolo en una variable y asi poder usarlo, para 
poder usarlo aprendi como funciona el InnerHTML que una propiedad que permite leer un dato o asignarlo al contenido que uno desee, gracias a esto pude agregar en el HTML un h1 con un Id especifico y su contenido cambiarlo por un mensaje de bienvenida y el nombre que anteriormente almacene en una variable, despues de ello cree botones haciendo uso de lo que aprendi el dia anterior, colocando en el onClick una funcion que se encontraba en el archivo JS y a la cual se le pasaba el parametro de categoria, en esta funcion guarde el el localStorage el parametro que mande, ademas de esto use location.href para redirgir a la pagina de preguntas. y de las misma manera agregue un boton de salir, el cual me redirige a la pagina de inicio, cabe recalcar que este dia agrege gran cantidad de estilos a cada boton, lo cual fue bien complicado de aprender pero al final se logro.

Dia 3
Este fue un dia bien dificl, ya que muchas funciones no las entendia y tuve muchos bloqueos aun asi decidi seguir intentando con prueba y error y asi sucesivamente para poder hacer que funcione, lo primero que hice este dia fue hacer la interfaz grafica es decir los contenedores, botones, estilos y esas cosas, lo siguiente fue hacer en una hoja la manera en la que iba a trabajar y a hacer el arreglo que contenia las preguntas, este fue cambiado varias veces a lo largo del proceso porque muchas veces lo cree de forma erronea, lo primero que hice fue traer y guardar en una variable la categoria que tenia almacenada el en LS esta se supone es la categoria que se selecciono, usando un innerHTML la reemplaze en un div que tenia creador dentro de un contenedor llamado encabezado, esto lo hice para que se mostrara en texto la categoria en la que estaba jugando, despues de ello hice una funcion la cual filtraba las preguntas de la categoria que se selecciono, a este filtrado se le asigno una variable, de esta manera dentro de una funcion empece colocar con el InnerHTML cada elemento donde correspondia sobre la categoria que correspondia, para poder asignar cada respuesta de la respectiva pregunta tuve que usar un .map para poder iterar sobre el arreglo de respuestas, despues de esto hice una condicion para poder identificar la respuesta correcta, despues de ello hice una funcion para guardar la repuesta que eligio el usuario, donde le pasaba como parametro un evento, esto para poder usar el tarjet.id el cual se guardo en una variable, se realizo un condicional para agregar algo de estilo, luego cree la funcion que coloque en el Onclick de El boton de validar, en ella utilize el Id de la respuesta selecionada para validar si era la correcta o incorrecta, y ahi mismo agrege estilos, ademas tambien cree un contador de puntos, donde si seleccionas una respuesta correcta te sumara 50 puntos, despues de ello afura en otra funcion hice un cronometro de cuenta regresiva, despues de ello hice la funcion del boton siguiente donde implemente shift() que es un método que elimina el primer elemento de una matriz, esto para que cada que dieran en el boton siguiente se eliminara el primer elemento de la matriz, dandole paso a la segunda pregunta de la matriz, ademas alli mismo añadi una condicion donde se resetaba el cronometro, los estilos y ademas cuando se acabaran los elementos de la matriz, ocultara todo y mostrara un pequeño mensaje donde decia el puntaje final y un boton para salir.