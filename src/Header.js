import React from "react";

const Header = () => {
  const [counter, setCounter] = React.useState("liqud");

  return (
    <div>
      <h2>Total friends {counter} </h2>
      <button onClick={() => setCounter("solid")}>Update the counter</button>
    </div>
  );
};

export default Header;
