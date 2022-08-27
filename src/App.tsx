import { useState } from "react";
import { NewUser } from "./components/NewUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-700 w-screen h-screen flex justify-center items-center">
      <div className="w-4/5 h-4/5">
        <NewUser />
      </div>
    </div>
  );
}

export default App;
