import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const HolidayTable = () => {
  const [holidays, setHolidays] = useState([]);
  useEffect(() => {
    const fetchHolidays = async () => {
      const foundHolidays = await axios.get("/api/holidays");
      //   console.log(foundHolidays);
      setHolidays(foundHolidays?.data?.data);
    };
    fetchHolidays();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/api/holidays/${id}`);
    setHolidays(holidays.filter((holiday) => holiday._id !== id));
  };

  return (
    <div>
      <Link to="/holidays/new">
        <button className="newHolidayBtn">Create new Holiday</button>
      </Link>
      <table border="1">
        <thead>
          <tr>
            <th>Holiday</th>
            <th>Likes</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => {
            return (
              <tr key={index}>
                <td>
                  <NavLink to={`/holidays/${holiday._id}`}>
                    {holiday.name}
                  </NavLink>
                </td>
                <td>{holiday.likes}</td>
                <td>
                  <NavLink to={`/holidays/${holiday._id}/edit`}>Edit</NavLink>
                </td>
                <td>
                  <button onClick={() => handleDelete(holiday._id)}>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HolidayTable;
