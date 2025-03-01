import React from "react";

export default function Display({ input, result }) {
  return (
    <div className="w-full p-2 text-right bg-white rounded-md shadow">
      <div className="text-gray-500 text-sm">{input}</div>
      <div className="text-xl font-bold">{result}</div>
    </div>
  );
}
