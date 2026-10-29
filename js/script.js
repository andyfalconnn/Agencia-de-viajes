// DATOS PARA FILTRAR //

// Primer filtro: Planea //

const dwandy = [

//Planea//

{id: 1, name:"TORRE DE PIZA - Roma, Italia", image: "img/FOTO 1.jpg", genero: "Planea" ,description: "Visita Pisa y admira su famosa torre inclinada y disfruta de su arquitectura histórica"},
{id: 2, name:"WORLD DISNEY - Orlando, Estados Unidos", image: "img/FOTO 2.jpg", genero: "Planea" ,description: "Visita disney y disfruta de sus increibles atracciones y experiencias."},
{id: 3, name:"CRISTO REDENTOR - Rio de Janeiro, Brazil", image: "img/FOTO 3.jpg", genero: "Planea" ,description: "Admira el imponente Cristo Redentor, disfruta de las increíbles vistas de Río de Janeiro y descubre la belleza de Brasil."},
{id: 4, name:"TORRE EIFFEL - Paris, Francia", image: "img/FOTO 5.jpg", genero: "Planea" ,description: "Visita una de las 7 maravillas del mundo y observa increibles vistas desde la punta de la torre eiffel."},

//Explora//

{id: 5, name:"VIAJE EN GLOBO AEROSTATICO - Capadocia, Turquia", image: "img/FOTO 6.jpg", genero: "Explora" ,description: "Vive una experiencia mágica sobre los paisajes de Capadocia! Disfruta de un espectacular vuelo en globo aerostático al amanecer."},
{id: 6, name:"BUCEO - Bali, Indonesia", image: "img/FOTO 7.jpg", genero: "Explora" ,description: "Descubre el mundo submarino de Bali, donde las aguas cristalinas, los coloridos arrecifes de coral y la increíble vida marina hacen del buceo una experiencia inolvidable."},
{id: 7, name:"NAVIDAD - Laponia, Finlandia", image: "img/FOTO 8.jpg", genero: "Explora" ,description: "Vive la magia del invierno en Laponia, Finlandia, donde las auroras boreales, los paisajes nevados y los paseos en trineo crean una experiencia de cuento de hadas."},
{id: 8, name:"SAN BASILIO - Moscu, Rusia", image: "img/FOTO 4.jpg", genero: "Explora" ,description: "Déjate sorprender por la colorida arquitectura de la Catedral de San Basilio, sus impresionantes cúpulas y sus paisajes llenos de historia y encanto.."},

];

// Obtener los contenedores y botones del DOM
const xxContainer = document.getElementById("destinos-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwandyToRender = [];
    if (genero === "all") {
        dwandyToRender = dwandy;
    } else {
        dwandyToRender = dwandy.filter(Dwandy => Dwandy.genero === genero);
    }
}
