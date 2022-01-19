// Comprar entradas de cine, branch Fran

// JS principal: construccion del sitio

const peliculas = [];

let sectionPeliculas = document.getElementById("sectionPeliculas");
let divPeliculas = document.getElementById("divPeliculas");

fetch("peliculas.json")
  .then((response) => response.json())
  .then((data) => {
    for (pelicula of data) {
      const peliculaObj = new Pelicula(
        pelicula.Id,
        pelicula.Title,
        pelicula.Year,
        pelicula.Rated,
        pelicula.Runtime,
        pelicula.Genre,
        pelicula.Director,
        pelicula.Actors,
        pelicula.Plot,
        pelicula.Awards,
        pelicula.Poster,
        pelicula.Showtimes
      );
      sectionPeliculas.innerHTML += peliculaObj.posterPelicula();

      peliculas.push(peliculaObj);
      localStorage.setItem("Peliculas", JSON.stringify(peliculas));
    }

    for (let i = 0; i < peliculas.length; i++) {
      document
        .getElementById("boton" + peliculas[i].id)
        .addEventListener("click", () => {
          document.getElementById("divPeliculas").innerHTML += infoPelicula(
            peliculas[i]
          );
        });
    }
  })
  .catch((error) => console.error(error));
