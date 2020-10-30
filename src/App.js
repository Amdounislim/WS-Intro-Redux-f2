import "./App.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { toogle } from "./JS/actions/actionCounter";

function App() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.reducerCounter.show);
  return (
    <div className="App">
      <button onClick={() => dispatch(toogle())}>show</button>
      {show ? <Counter /> : ""}
    </div>
  );
}

export default App;
