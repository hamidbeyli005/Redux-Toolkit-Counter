import "./App.css";
import Counter from "./components/Counter";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import IncrementByAmount from "./components/IncrementByAmount";

function App() {
  return (
    <div className="container">
      <Counter  ></Counter>
      <div className="count">
      
      <Increment></Increment>
      <Decrement></Decrement>
      <IncrementByAmount></IncrementByAmount>
      </div>
    </div>
  );
}

export default App;
