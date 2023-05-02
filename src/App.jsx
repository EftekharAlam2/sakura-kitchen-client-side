import { useState } from "react";
import NavBar from "./Components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
