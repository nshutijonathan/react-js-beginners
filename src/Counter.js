import React from "react";

const Counter = ({ setcount, count }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setcount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
