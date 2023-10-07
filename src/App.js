import { useState } from "react";
import useDate from "./hooks/useDate";
import "./App.css";

function App() {
  const [heading, setHeading] = useState("Current Date:");
  const [daysToAdd, setDaysToAdd] = useState(0);
  const [monthsToAdd, setMonthsToAdd] = useState(0);
  const { date, getDay, getMonth, addDay, addMonth } = useDate();
  const [newdate, setNewdate] = useState(date.toString());

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "day") {
      setDaysToAdd(parseInt(value));
    } else if (name === "month") {
      setMonthsToAdd(parseInt(value));
    }
  };

  const handleAddDaysAndMonths = () => {
    const newDate = addMonth(monthsToAdd, addDay(daysToAdd, date));
    return newDate;
  };
  return (
    <div className="App">
      <h2>{heading}</h2>
      <br />
      Date: {newdate}
      <br />
      Day: {getDay()}
      <br />
      Month: {getMonth()}
      <br />
      Add Day:
      <input type="number" name="day" onChange={handleChange} />
      <br />
      Add Month:
      <input type="number" name="month" onChange={handleChange} />
      <br />
      <button
        onClick={() => {
          setHeading("Updated Date:");
          setNewdate(handleAddDaysAndMonths().toString());
        }}
      >
        Change The World
      </button>
    </div>
  );
}

export default App;
