import { useState } from "react";
import { useLocation } from "react-router-dom";
import aside from "./asidehotels.module.css";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

function AsideHotels() {
  const location = useLocation();

  const [showCalendar, setShowCalendar] = useState(false);

  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);

  return (
    <aside className={aside.container}>
      <header className={aside.header}>
        <h2 className={aside.heading}>search</h2>
      </header>
      <label htmlFor="destination" className={aside.destination}>
        Destination
        <input
          type="text"
          name="destination"
          id="destination"
          defaultValue={destination}
          className={aside.destination_input}
          onChange={(e) => {
            setDestination(e.target.value);
          }}
        />
      </label>
      <label htmlFor="check_in_date" className={aside.date}>
        Check-in date
        <span
          onClick={() => {
            setShowCalendar(!showCalendar);
          }}
          className={aside.date_input}
        >
          {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}
        </span>
        {showCalendar && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className={aside.date_selector}
          />
        )}
      </label>
      <ul className={aside.options}>
        <li className={aside.option}>
          <p className="">Options</p>
        </li>
        <li className={aside.option}>
          <label htmlFor="min_price" className="">
            Min price <small className="">per night</small>
          </label>
          <input
            type="number"
            name="min_price"
            id="min_price"
            className={aside.removeArrow}
          />
        </li>
        <li className={aside.option}>
          <label htmlFor="max_price" className="">
            Max price <small className="">per night</small>
          </label>
          <input
            type="number"
            name="max_price"
            id="max_price"
            className={aside.removeArrow}
          />
        </li>
        <li className={aside.option}>
          <label htmlFor="adult" className="">
            Adult
          </label>
          <input
            min={1}
            type="number"
            name="adult"
            id="adult"
            defaultValue={options.adult}
            onChange={(e) => {
              setOptions((prev) => {
                return {
                  ...prev,
                  [e.target.name]: Number(e.target.value),
                };
              });
            }}
          />
        </li>
        <li className={aside.option}>
          <label htmlFor="" className="">
            Children
          </label>
          <input
            min={0}
            type="number"
            name="children"
            id=""
            defaultValue={options.children}
            onChange={(e) => {
              setOptions((prev) => {
                return {
                  ...prev,
                  [e.target.name]: Number(e.target.value),
                };
              });
            }}
          />
        </li>
        <li className={aside.option}>
          <label htmlFor="" className="">
            Room
          </label>
          <input
            min={1}
            type="number"
            name="room"
            id=""
            defaultValue={options.room}
            onChange={(e) => {
              setOptions((prev) => {
                return {
                  ...prev,
                  [e.target.name]: Number(e.target.value),
                };
              });
            }}
          />
        </li>
      </ul>
      <button className={aside.btn}>search</button>
    </aside>
  );
}

export default AsideHotels;
