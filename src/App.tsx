import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {isVisible && <Alert onClose={() => setIsVisible(false)}>My Alert</Alert>}
      <Button onClick={() => setIsVisible(true)}>My Button</Button>
    </div>
  );
};

export default App;
