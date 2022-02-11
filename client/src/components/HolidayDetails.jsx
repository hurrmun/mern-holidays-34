import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const fetchCurrentHoliday = (id) => async () => {
  //  const id = "6204c86bcb89745b230fdfc8";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(`/api/holidays/${id}/`, config);
};

const HolidayDetails = () => {
  const { id } = useParams();
  const info = useQuery(["allholidays", id], fetchCurrentHoliday(id));
  const currentHoliday = info?.data?.data?.data ?? {};
  // const [currentHoliday, setCurrentHoliday] = useState({});
  // useEffect(() => {
  //   const fetchCurrentHoliday = async () => {
  //     const fetchedHoliday = await axios.get(`/api/holidays/${id}/`);
  //     setCurrentHoliday(fetchedHoliday.data.data);
  //   };
  //   fetchCurrentHoliday();
  // }, [id]);

  return (
    <div>
      <h2>{currentHoliday?.name}</h2>
      <p>celebrated: {currentHoliday?.celebrated ? "yes" : "no"}</p>
      <p>likes: {currentHoliday?.likes}</p>
      <p>{currentHoliday?.description}</p>
      <p>
        tags:{" "}
        {currentHoliday.tags
          ? currentHoliday?.tags.map((el) => <span key={el}>{el} </span>)
          : null}
      </p>
      <Link to="/">Back to all holidays</Link>
    </div>
  );
};

export default HolidayDetails;
