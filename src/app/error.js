"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="text-center">
      <h2 className="text-center text-4xl text-red-500">
        Something went wrong
      </h2>
      <h2 className="text-center text-4xl text-red-500">{error?.message}</h2>
      <button
        onClick={() => reset()}
        className="bg-black text-white px-4 py-2 my-3 rounded-md"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
