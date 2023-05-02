import { useState } from "react";
import NavBar from "./Components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="text-sky-900 text-3xl text-center">Checking</p>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
