// Dark Mode
// JQUERY

let mode;

if (localStorage.getItem("mode")) {
  mode = localStorage.getItem("mode");
} else {
  mode = "light";
}

localStorage.setItem("mode", mode);

$(() => {
  if (localStorage.getItem("mode") == "dark") {
    $("#body").addClass("darkMode");
    $("#bDark").hide();
    $("#bLight").show();
  } else {
    $("#bLight").hide();
  }

  $("#bDark").click(() => {
    $("#bDark").hide();
    $("#bLight").show();
    $("#body").addClass("darkMode");
    localStorage.setItem("mode", "dark");
  });
  $("#bLight").click(() => {
    $("#bLight").hide();
    $("#bDark").show();

    $("#body").removeClass("darkMode");
    localStorage.setItem("mode", "light");
  });

$("#tituloCinema").mouseenter(function (){
  this.animate(
    {
      height: "3px",
      color: "white"
    }
  )
});

});


