import "./App.css";
import { QueryClient, QueryClientProvider, useIsFetching } from "react-query";
// import axios from "axios";
// import { useEffect } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";

import HolidayTable from "./components/HolidayTable";
import NewHolidayForm from "./components/NewHolidayForm";
import EditHolidayForm from "./components/EditHolidayForm";
import HolidayDetails from "./components/HolidayDetails";

const queryClient = new QueryClient();

const Navbar = () => {
  const isFetching = useIsFetching();
  return <h1>Holiday MERN App {isFetching ? "...." : null} </h1>;
};

function App() {
  // useEffect(() => {
  //   const fetchTest = async () => {
  //     const test = await axios.get("/api/test");
  //     console.log("test", test);
  //   };
  //   fetchTest();
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HolidayTable />} />
          <Route path="/holidays/:id" element={<HolidayDetails />} />
          <Route path="/holidays/:id/edit" element={<EditHolidayForm />} />
          <Route path="/holidays/new" element={<NewHolidayForm />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
