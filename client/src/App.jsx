import React from "react";

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col gap-3 justify-center items-center">
        <h1 className="font-extrabold text-4xl">
          Welcome to the Scaffolding of MERN Projects
        </h1>
        <h2 className="text-2xl font-serif text-red-700">
          Check if Tailwind CSS is working properly
        </h2>
        <p className="text-lg">
          Check the{" "}
          <a
            href="https://github.com/MoAfran333/mern-scaffolding"
            target="_blank"
            className="hover:underline text-blue-600"
          >
            readme.md
          </a>{" "}
          for more info
        </p>
      </div>
    </>
  );
}

export default App;
