import "./App.css";
// import axios from "axios";
// import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HolidayTable from "./components/HolidayTable";
import NewHolidayForm from "./components/NewHolidayForm";
import EditHolidayForm from "./components/EditHolidayForm";
import HolidayDetails from "./components/HolidayDetails";

function App() {
  // useEffect(() => {
  //   const fetchTest = async () => {
  //     const test = await axios.get("/api/test");
  //     console.log("test", test);
  //   };
  //   fetchTest();
  // }, []);

  return (
    <div className="App">
      <h1>MERN Holiday App</h1>
      <Routes>
        <Route path="/" element={<HolidayTable />} />
        <Route path="/holidays/:id" element={<HolidayDetails />} />
        <Route path="/holidays/:id/edit" element={<EditHolidayForm />} />
        <Route path="/holidays/new" element={<NewHolidayForm />} />
      </Routes>
    </div>
  );
}

export default App;
