import React, { useState } from "react";

const UseStateArray = () => {
  const Biodata = [
    {
      id: 0,
      Name: "Ujjwal Tiwari",
      age: 24,
    },
    {
      id: 1,
      Name: "Riyaz Qureshi",
      age: 21,
    },
    {
      id: 2,
      Name: "Raunak Thakkar",
      age: 24,
    },
    {
      id: 3,
      Name: "Thomson",
      age: 24,
    },
  ];

  const [Data, setData] = useState(Biodata);

  const clearData = () => {
    setData([]);
  };

  return (
    <div>
      {Data.map((Biodata, index) => {
        return (
          <div key="index">
            <h3>
              Name: {Biodata.Name} and age: {Biodata.age}
            </h3>
          </div>
        );
      })}
      <button className="btn" onClick={clearData}>
        Clear
      </button>
    </div>
  );
};

export default UseStateArray;
