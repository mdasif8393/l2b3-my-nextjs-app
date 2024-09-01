import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="text-4xl text-center mt-5">Counter: {counter}</h1>
      <button className="border p-2" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button className="border p-2" onClick={() => setCounter(counter - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
