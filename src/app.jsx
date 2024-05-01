import { useState } from "react";

export function App() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentColorNumber, setCurrentColorNumber] = useState(1);
  const [currentColorName, setCurrentColorName] = useState("emerald");
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

  function generatorQuote() {
    let newPosition = generateNumberPosition();

    setCurrentQuote(quotes[newPosition]);
  }

  function generateNumberPosition() {
    return Math.floor(Math.random() * quotes.length);
  }

  function generatorColor() {
    switch (currentColorNumber) {
      case 1:
        setCurrentColorName("red");
        break;
      case 2:
        setCurrentColorName("blue");
        break;
      case 3:
        setCurrentColorName("emerald");
        break;
    }
    console.log(currentColorName);

    if (currentColorNumber < 3) {
      setCurrentColorNumber(currentColorNumber + 1);
    } else {
      setCurrentColorNumber(1);
    }
    console.log(currentColorNumber);
  }

  function handleGenerator() {
    generatorQuote();
    generatorColor();
  }

  return (
    <div
      className={`box-border w-fit mx-auto bg-${currentColorName}-500 mt-4 p-4 flex flex-col justify-around items-center gap-2 rounded`}
    >
      <h1 className="w-fit bg-zinc-100 p-1 rounded font-bold">
        Random Quote Generator
      </h1>
      <p className="w-fit p-1 bg-zinc-100 p2.5 rounded text-nowrap">
        {currentQuote == "" ? quotes[0] : currentQuote}
      </p>
      <button
        className="w-fit bg-zinc-300 p-1 rounded font-bold hover:opacity-80 hover:opacity-80 text-sm"
        onClick={handleGenerator}
      >
        Generator Random Quote
      </button>
    </div>
  );
}
