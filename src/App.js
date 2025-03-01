import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
  try {
    setResult(new Function(`return (${input})`)()); // Safe alternative
  } catch (error) {
    setResult("Error");
  }
};

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg w-64 shadow-lg mx-auto mt-20">
      <Display input={input} result={result} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <Button key={char} value={char} onClick={char === "=" ? calculateResult : handleClick} />
        ))}
        <Button value="Clear" onClick={clearInput} className="col-span-4 bg-red-500" />
      </div>
    </div>
  );
}
