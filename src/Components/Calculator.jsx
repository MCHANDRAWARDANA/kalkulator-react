import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
      <div className=" bg-red-400 p-4 rounded-lg w-64 shadow-xl">
        <div className="bg-black text-white text-right p-4 text-3xl rounded-lg mb-4 animate-pulse">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={handleClear}
            className="col-span-2 bg-yellow-400 text-white p-4 rounded-lg shadow-xl"
          >
            C
          </button>
          <button
            onClick={() => handleClick("/")}
            className="bg-yellow-400 text-white p-4 rounded-lg shadow-xl"
          >
            /
          </button>
          <button
            onClick={() => handleClick("*")}
            className="bg-yellow-400 text-white p-4 rounded-lg shadow-xl"
          >
            *
          </button>
          <button
            onClick={() => handleClick("7")}
            className="bg-emerald-300 text-white p-4 rounded-lg shadow-xl"
          >
            7
          </button>
          <button
            onClick={() => handleClick("8")}
            className="bg-emerald-300 text-white p-4 rounded-lg shadow-xl"
          >
            8
          </button>
          <button
            onClick={() => handleClick("9")}
            className="bg-emerald-300 text-white p-4 rounded-lg shadow-xl"
          >
            9
          </button>
          <button
            onClick={() => handleClick("-")}
            className="bg-yellow-400 text-white p-4 rounded-lg shadow-xl"
          >
            -
          </button>
          <button
            onClick={() => handleClick("4")}
            className="bg-emerald-300 text-white p-4 rounded-lg shadow-xl"
          >
            4
          </button>
          <button
            onClick={() => handleClick("5")}
            className="bg-emerald-300 text-white p-4 rounded-lg shadow-xl"
          >
            5
          </button>
          <button
            onClick={() => handleClick("6")}
            className="bg-emerald-300 text-white p-4 rounded-lg shadow-xl"
          >
            6
          </button>
          <button
            onClick={() => handleClick("+")}
            className="bg-yellow-400 text-white p-4 rounded-lg shadow-xl"
          >
            +
          </button>
          <button
            onClick={() => handleClick("1")}
            className="bg-emerald-300 text-white p-4 rounded-lg shadow-xl"
          >
            1
          </button>
          <button
            onClick={() => handleClick("2")}
            className="bg-emerald-300 text-white p-4 rounded-lg shadow-xl"
          >
            2
          </button>
          <button
            onClick={() => handleClick("3")}
            className="bg-emerald-300 text-white p-4 rounded-lg shadow-xl"
          >
            3
          </button>
          <button
            onClick={handleCalculate}
            className="row-span-2 bg-yellow-400 text-white p-4 rounded-lg shadow-xl"
          >
            =
          </button>
          <button
            onClick={() => handleClick("0")}
            className="col-span-2 bg-emerald-300 text-white p-4 rounded-lg shadow-xl"
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            className="bg-yellow-400 text-white p-4 rounded-lg shadow-xl"
          >
            .
          </button>
        </div>
      </div>
  );
};

export default Calculator;
