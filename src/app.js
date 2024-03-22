/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Generador de carta aleatorio
window.generadorDeCarta = function() {
  //escribimos nuestros arrays
  const carta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  const simbolos = ["♦", "♥", "♠", "♣"];

  //Generamos el ramdom aleatorio de cada uno de los arrays
  let numAleatorioCarta = carta[Math.floor(Math.random() * carta.length)];

  let numAleatorioSimbolos =
    simbolos[Math.floor(Math.random() * simbolos.length)];
  //Enviamos el resultado de los ramdom al HTML
  document.getElementById("carta").innerHTML = numAleatorioCarta;

  document.getElementById("symbol1").innerHTML = numAleatorioSimbolos;

  document.getElementById("symbol2").innerHTML = numAleatorioSimbolos;

  //para sacar los colores de corazon y de picas en rojo

  if (numAleatorioSimbolos === "♥" || numAleatorioSimbolos === "♦") {
    document.getElementById("symbol1").classList.add("red-suit");
    document.getElementById("symbol2").classList.add("red-suit");
  } else {
    symbol1.classList.remove("red-suit");
    symbol2.classList.remove("red-suit");
  }
};

//Generar boton para que recargue una carta diferente
window.onload = function() {
  generadorDeCarta();
  document.getElementById("boton").addEventListener("click", function() {
    generadorDeCarta();
  });
};

//Change letter size
