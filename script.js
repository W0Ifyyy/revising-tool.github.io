let n_pytanie = document.getElementById("p_txt");
let n_odpowiedz = document.getElementById("o_txt");

let dodaj_p = document.getElementById("add_q");
let pytania = [];
let odpowiedzi = [];
let i = 0;

//dodawanie pytania
dodaj_p.onclick = () => {
  if (n_pytanie.value == "" || n_odpowiedz.value == "") {
    alert("Fill all fields");
  }
  pytania[i] = n_pytanie.value;
  odpowiedzi[i] = n_odpowiedz.value;
  i++;
};
//granie

let graj = document.getElementById("play");
let pytanie = document.getElementById("pytanie");
let odpowiedz = document.getElementById("odpowiedz");

//gra
let main = document.getElementById("main");
let x = 0;
graj.onclick = () => {
  if (pytania[0] == null) {
    pytanie.innerHTML = "No questions here";
  } else {
    x = Math.round(Math.random() * pytania.length);
    if (x == undefined) {
      odpowiedz.innerHTML = "No questions here";
    }
    if (x == pytania.length) {
      x = 0;
    }
    odpowiedz.innerHTML = "";
    pytanie.innerHTML = pytania[x];
  }
};

let reveal_b = document.getElementById("reveal");
reveal_b.onclick = () => {
  odpowiedz.innerHTML = odpowiedzi[x];
};
