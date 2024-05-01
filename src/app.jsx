import { useState } from "react";

export function App() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentColor, setCurrentColor] = useState("");

  const quotes = [
    "A vida é curta demais para se preocupar com o que os outros pensam - Mark Twain",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia - Robert Collier",
    "A única maneira de fazer um bom trabalho é amar o que você faz - Steve Jobs",
    "Se você pode sonhar, você pode fazê-lo - Walt Disney",
    "A única coisa constante na vida é a mudança - Heráclito",
    "O tempo é o mais valioso recurso que temos - Theodore Roosevelt",
    "Nunca desista dos seus sonhos - Walt Disney",
    "O que importa não é o tamanho do desafio, mas a força da sua vontade - Mahatma Gandhi",
    "A felicidade é a jornada, não o destino - Roy M. Goodman",
    "Acredite em si mesmo e você será capaz de realizar grandes coisas - Norman Vincent Peale",
  ];

  const colors = ["red", "blue", "emerald"];

  function generatorQuote() {
    let newPosition = generateNumberPosition(quotes, currentQuote);
    setCurrentQuote(quotes[newPosition]);
  }

  function generatorColor() {
    let newPosition = generateNumberPosition(colors, currentColor);
    setCurrentColor(colors[newPosition]);
  }

  function generateNumberPosition(array, currentValue) {
    let newPosition = Math.floor(Math.random() * array.length);
    while (newPosition == array.indexOf(currentValue)) {
      newPosition = Math.floor(Math.random() * tarray.length);
    }

    return newPosition;
  }

  function handleGenerator() {
    generatorQuote();
    generatorColor();
  }

  return (
    <div
      className={`box-border w-fit mx-auto bg-${
        currentColor || generatorColor()
      }-500 mt-4 p-4 flex flex-col justify-around items-center gap-2 rounded`}
    >
      <h1 className="w-fit bg-zinc-100 p-1 rounded font-bold">
        Gerador aleatório de citações
      </h1>
      <p className="w-fit bg-zinc-100 p-1 rounded text-nowrap">
        {currentQuote || generatorQuote()}
      </p>
      <button
        className="w-fit bg-zinc-300 p-1 rounded font-bold text-sm hover:opacity-80 hover:opacity-80 "
        onClick={handleGenerator}
      >
        Gerar
      </button>
    </div>
  );
}
