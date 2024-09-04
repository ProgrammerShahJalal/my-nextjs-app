"use client";

import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="text-center my-10">
      <p className="text-4xl font-semibold">Count: {count}</p>
      <div className="my-10">
        <button
          className="btn mx-1 btn-active btn-primary"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="btn mx-1 btn-active btn-secondary"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
