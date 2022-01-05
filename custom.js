$(document).ready(function () {
  let body = $("body");

  body.css("background", "rgb(40,40,40)");

  let color = ["rgb(30,30,30)"];

  function randomColorW() {
    let a = Math.random() * 254 + 1;
    let b = Math.random() * 254 + 1;
    let c = Math.random() * 254 + 1;

    if (a < 60) {
      a = 61;
    }
    if (b < 60) {
      b = 61;
    }
    if (c < 60) {
      c = 61;
    }

    color[0] = `rgb(${a},${b},${c})`;
  }

  let i = 0;

  function changeColor() {
    body.css("background", color[i]);
    i++;
    if (i == color.length) {
      i = 0;
    }
  }

  function randomColorD() {
    let a = Math.random() * 70 + 1;

    if (a < 10) {
      a = 11;
    }

    color[0] = `rgb(${a},${a},${a})`;
  }

  // function checkMe() {
  //   let cb = document.getElementsByClassName("buttonC");
  //   if (cb.checked == true) {
  //     setInterval(randomColorD, 4900);
  //     clearInterval(randomColorW);
  //   } else {
  //     setInterval(randomColorW, 4900);
  //     clearInterval(randomColorD);
  //   }
  // }

  setInterval(randomColorW, 4900);
  setInterval(changeColor, 5000);

  // let x = 0;
  // function dorlmode() {
  //   if (x % 2 == 0) {
  //     setInterval(randomColorD, 4900);
  //    clearInterval(randomColorW);
  //  }
  //  if (!(x % 2 == 0)) {
  //    setInterval(randomColorW, 4900);
  //   clearInterval(randomColorD);
  // }
  //  i++;
  // }
});
