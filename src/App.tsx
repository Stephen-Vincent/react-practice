import { useState } from "react";

import Button from "./components/Button";

const App = () => {
  const [pizza, setPizza] = useState({
    name: "spicy pepperoni",
    topping: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, topping: [...pizza.topping, "Cheese"] });
    console.log(pizza);
  };

  return (
    <div>
      <Button onClick={handleClick}>My Button</Button>
    </div>
  );
};

export default App;
