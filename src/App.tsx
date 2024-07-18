import Button from "./components/Button";

const handleClick = () => {
  console.log("button clicked");
};

const App = () => {
  return (
    <div>
      <Button onClick={handleClick} color="danger">
        Hello World
      </Button>
    </div>
  );
};

export default App;
