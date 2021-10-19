// TODAS LAS FUNCIONES DEL SITIO

// Constructor de información de cada pelicula
class Pelicula {
  constructor(
    id,
    title,
    year,
    rated,
    runtime,
    genre,
    director,
    actors,
    plot,
    awards,
    poster,
    showtimes
  ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.rated = rated;
    this.runtime = runtime;
    this.genre = genre;
    this.director = director;
    this.actors = actors;
    this.plot = plot;
    this.awards = awards;
    this.poster = poster;
    this.showtimes = showtimes;
  }

  // tarjetas de peliculas (inicio de página)
  // metodo de la clase
  posterPelicula() {
    return `
    <article class="article${this.id}" id="cardpelicula${this.id}" >
    <button class="botonPelicula" id="boton${this.id}" onclick="mostrar()"> <img src="${this.poster}" width= 200px height= 296px>  </img></button>
    <h5 class="tituloPelicula">${this.title}</h5>
    </article>  
    `;
  }
}
// FUNCIONES DE TODO EL SITIO
// tarjeta zoom de pelicula (informacion de la pelicula seleccionada)
function infoPelicula(movie) {
  return `
  
  <article class="articuloPeliculaZoom" id="articuloPeliculaZoom${movie.id}" >
  <button class="botonCerrar" onclick="this.parentElement.remove(); ocultar(); " > X </button> 
  
<div class="divTextoImagen">
  <img src="${movie.poster}" width= 250px height= 370px></img>
           <div class="divTexto">
                <h5 >${movie.title}</h5>
                <p> Año: ${movie.year} </p>
                <p> Duración: ${movie.runtime} </p>
                <p> Genero: ${movie.genre} </p>
                <p> Calificación: ${movie.rated} </p>
                <p> Director: ${movie.director} </p>
                <p> Actores: ${movie.actors} </p>
                <p> Premios: ${movie.awards} </p>
                </br>
                <p class="pTrama"> Trama:<em> ${movie.plot} </em></p>

                <div class="divEntradaHorario">
                <form action="#" >
                <input type="number" min="0" max="10" placeholder="cant. entradas" style="width:100px;">
                <select name="showtimes" style="width:100px;">
                    <option value="horario" >Horarios</option>
                    <option value="${movie.showtimes[0]}">${movie.showtimes[0]}</option>
                    <option value="${movie.showtimes[1]}">${movie.showtimes[1]}</option>
                    <option value="${movie.showtimes[2]}">${movie.showtimes[2]}</option>
                </select>
                <input type="button" id="botonAceptar" onclick="getValores(${movie.id})" value="Aceptar"></input>
            </form>
            </div>
            </div>
  </div>
    </article>
    `;
}
// Funciones mostrar/ocultar 
function mostrar() {
  //  document.getElementById("divPeliculas").style.display="flex";

  document.getElementById(
    "divPeliculasPadre"
  ).innerHTML = `<div id="divPeliculas" style="display: flex;"></div>`;
}
function ocultar() {
  //  document.getElementById("divPeliculas").style.display="none";
  document.getElementById("divPeliculas").remove();
  
  
}

// Construccion de la información brindada por el usuario
class EntradaComprada {
  constructor(cantEntradas, horarioSeleccionado, idPelicula) {
    this.idPelicula = idPelicula;
    this.cantEntradas = cantEntradas;
    this.horarioSeleccionado = horarioSeleccionado;
  }
}

const entradasCompradasArray =
  JSON.parse(localStorage.getItem("Carrito")) || [];

function getValores(idPelicula) {
  const cantEntradas = document.querySelector("input").value;
  const horarioSeleccionado = document.querySelector("select").value;

  if (
    cantEntradas > 0 &&
    cantEntradas <= 10 &&
    horarioSeleccionado != "Horarios"
  ) {
    const entradaCompradaObj = new EntradaComprada(
      cantEntradas,
      horarioSeleccionado,
      idPelicula
    );
    entradasCompradasArray.push(entradaCompradaObj);
    localStorage.setItem("Carrito", JSON.stringify(entradasCompradasArray));
    ocultar();
  }
}

// Carrito de entradas
document.getElementById("bCarrito").addEventListener("click", function () {
  var infoCarritoPeliculas = JSON.parse(localStorage.getItem("Carrito"));
  
  document.getElementById("divPeliculasPadre").innerHTML = `
<div id="divCarrito">
<button id="botonCerrarCarrito" class="botonCerrar" onclick="this.parentElement.remove(); ocultar(); " > X </button>
</div>
`;
  var a = 0;
  var acumulador = 0;
  infoCarritoPeliculas.forEach((element) => {
    // <div><p>${infoCarritoPeliculas[a].idPelicula} </p></div>
    document.getElementById("divCarrito").innerHTML += `<article >
  <img src="${
    JSON.parse(localStorage.getItem("Peliculas"))[
      infoCarritoPeliculas[a].idPelicula
    ].poster
  }" width= 100px height= 148px> </img>
  <div><p>${
    JSON.parse(localStorage.getItem("Peliculas"))[
      infoCarritoPeliculas[a].idPelicula
    ].title
  } </p>
  <p>Cantidad de Entradas: ${infoCarritoPeliculas[a].cantEntradas} </p>
  <p>Horario: ${infoCarritoPeliculas[a].horarioSeleccionado} </p></div>
  </article>
  `;
    acumulador += Number(infoCarritoPeliculas[a].cantEntradas);
    a++;
  });
  var descuento=1;
  document.getElementById(
    "divCarrito"
  ).innerHTML += `<div id="divCarritoPrecio">
<input type="password" placeholder="Codigo descuento" id="codigoDescuento" maxlength="5" > </input>
<input type=button id="validarDescuento" value="Validar"></button>
<span>Precio entrada $350 </span>
<span>Cantidad entradas: ${acumulador} </span>
<span id="descuentoFinal"></span>
<span id="total">Total $${(acumulador * 350)} </span>
</div>

<button id="botonComprar" class="botonComprar" onclick="this.parentElement.remove(); ocultar(); alertar(); " > Comprar </button>
<button id="botonVaciarCarrito" class="botonVaciarCarrito" onclick="botonVaciarCarrito(); this.parentElement.remove(); ocultar();" > Vaciar Carrito </button>

`;
// APLICAR DESCUENTOS
  document.getElementById("validarDescuento").addEventListener("click", () => {
    let codigoDescuento = document.getElementById("codigoDescuento").value;
    // diferentes tipos de descuentos
    let descuento10 = /^[0-9]{5}$/;
    let descuento25 = /^[a-z0-9_-]{5}$/;
    let descuento50 = /^.*(?=.{5})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    // console.log(codigoDescuento)
    if (descuento10.test(codigoDescuento)) {
      // console.log("descuento 10");
      // console.log(codigoDescuento);
      descuento= 0.9;
      document.getElementById("descuentoFinal").innerText = `Descuento del 10%`
    } else if (descuento25.test(codigoDescuento)) {
      // console.log("descuento 25");
      // console.log(codigoDescuento);
      descuento= 0.75;
      document.getElementById("descuentoFinal").innerText = `Descuento del 25%`
    } else if (descuento50.test(codigoDescuento)) {
      // console.log("descuento 50");
      // console.log(codigoDescuento);
      descuento=0.5;
      document.getElementById("descuentoFinal").innerText = `Descuento del 50%`
    } else {
      // console.log("descuento 0");
      // console.log(codigoDescuento);
      descuento=1;
      document.getElementById("descuentoFinal").innerText = ``
    }
    
    document.getElementById("total").innerText = `Total $${(acumulador * 350)*descuento}`
  
    
  });
});

// VACIAR EL CARRITO

function botonVaciarCarrito(){
  localStorage.removeItem("Carrito")
}