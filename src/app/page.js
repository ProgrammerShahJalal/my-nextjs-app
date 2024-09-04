import React from "react";
import Counter from "../components/Counter/Counter";

const page = () => {
  return (
    <div className="my-10">
      <h1 className="font-bold text-center text-3xl mt-10">
        Welcome to Next.Js
      </h1>
      <Counter />
    </div>
  );
};

export default page;
