import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("I'm Logging Everything Everytime", count);
    return () => setCount(count + 1);
  }, [count, toggle]);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setToggle(!toggle)}>Update Toggle</button>
    </div>
  );
};

export default UseEffect;








