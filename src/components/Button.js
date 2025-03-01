import React from "react";

export default function Button({ value, onClick, className }) {
  return (
    <button
      className={`p-2 text-lg bg-blue-500 text-white rounded ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}
