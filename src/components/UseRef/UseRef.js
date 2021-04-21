import React, { useState, useRef } from "react";

const UseRef = () => {
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("plz fill the data") : setShow(true);
  };

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyName">Enter your best frind name</label>
          <br/>
          <input type="text" id="luckyName" ref={luckyName} />
        </div>
        <br />
        <button>Submit</button>
      </form>
      <p> {show ? `Your best frind is ${luckyName.current.value}` : ""} </p>
    </div>
  );
};

export default UseRef;
