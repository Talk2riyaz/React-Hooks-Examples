import React, { useState } from "react";

const UseState = () => {

  const [users, setUsers] = useState([
    { name: "Riyaz Qureshi", age: 21, country: "India" },
  ]);

  const submitFrom = (e) => {
      const user = {name: 'Raunak Thakkar' , age: 24 , country: 'USA'}
      setUsers([...users , user]);
  }

  return (
    <div>
      {users.map((user , index) => {
        return (
          <div key="index">
            <ul>
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.country}</li>
            </ul>
            <button onClick={submitFrom}>Add User</button>
          </div>
        );
      })}
    </div>
  );
};

export default UseState;


