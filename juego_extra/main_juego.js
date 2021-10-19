$(() => {
  $("#header").mouseenter(function () {
    $("#text").hide()
    $("#d1").show()
    $("#d2").show()
    $("#d3").show()
    $("#d4").show()
    $("#d5").show()
    $("#d6").show()
    $("#d7").show()
    $(this).animate(
      {
        height: "100vh",
      },
      {
        duration: 700,
        easing: "linear",
        complete: () => {
          $(this).click(function () {
            $(this).after("<em>¡ PERDISTE ! ¡ PERDISTE ! ¡ PERDISTE !</em>").fadeOut(function () {
             
              location.reload();
            });
            
          
            });

        },
      }
    );
  });

  $("#d1").css({
    animation: "x 10s linear infinite alternate",
  });
  $("#d2").css({
    animation: "x 8s linear infinite alternate",
  });
  $("#d3").css({
    animation: "x 4s linear infinite alternate",
  });
  $("#d4").css({
    animation: "x 12s linear infinite alternate",
  });
  $("#d5").css({
    animation: "x 7s linear infinite alternate",
  });
  $("#d6").css({
    animation: "x 6s linear infinite alternate",
  });
  $("#d7").css({
    animation: "x 9s linear infinite alternate",
  });
  
  $("#d1").click(function () {
    $(this)
      .css({
        "background-color": "red",
      }).animate({
        height: "35px",
        width: "30px",
        margin: "20px 0px"
      })
      .after(() => {
        $(this).click(function () {
          $(this).remove();
        });
      });
  });
});
$("#d2").click(function () {
  $(this)
    .css({
      "background-color": "green",
    }).animate({
      height: "65px",
      margin: "30px 0px"
    })
    .after(() => {
      $(this).click(function () {
        $(this).remove();
      });
    });
});

$("#d3").click(function () {
  $(this)
    .css({
      "background-color": "yellow",
    }).animate({
      height: "15px",
      margin: "40px 0px"
    })
    .after(() => {
      $(this).click(function () {
        $(this).remove();
      });
    });
});
$("#d4").click(function () {
  $(this)
    .css({
      "background-color": "blue",
    }).animate({
      height: "60px",
      width:"35px",
      margin: "20px 0px"
    })
    .after(() => {
      $(this).click(function () {
        $(this).remove();
      });
    });
});
$("#d5").click(function () {
  $(this)
    .css({
      "background-color": "brown",
    }).animate({
      width: "60px",
      height:"30px",
      margin: "20px 0px"
    })
    .after(() => {
      $(this).click(function () {
        $(this).remove();
      });
    });
});
$("#d6").click(function () {
  $(this)
    .css({
      "background-color": "pink",
    }).animate({
      height: "35px",
      margin: "20px 0px"
    })
    .after(() => {
      $(this).click(function () {
        $(this).remove();
      });
    });
});
$("#d7").click(function () {
  $(this)
    .css({
      "background-color": "orange",
    }).animate({
      width: "30px",
      margin: "20px 0px"
    })
    .after(() => {
      $(this).click(function () {
        $(this).remove();
      });
    });
});
