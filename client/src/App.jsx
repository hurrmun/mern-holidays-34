import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchTest = async () => {
      const test = await axios.get("/api/test");
      console.log("test", test);
    };
    fetchTest();
  }, []);

  return (
    <div className="App">
      <h1>MERN Holiday App</h1>
    </div>
  );
}

export default App;
