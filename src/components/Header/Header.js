import header from "./header.module.css";
import search from "./search.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faContactBook,
} from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Header({ type }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [destination, setDestination] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();

  const handleOptionBtn = (type, action) => {
    switch (action) {
      case "increment":
        setOptions((prev) => {
          return {
            ...prev,
            [type]: options[type] + 1,
          };
        });
        break;
      case "decrement":
        setOptions((prev) => {
          return {
            ...prev,
            [type]: options[type] - 1,
          };
        });
        break;
      default:
        alert("error!");
        break;
    }
  };

  const handleReset = () => {
    setOptions({
      adult: 1,
      children: 0,
      room: 1,
    });
  };

  const handleSearch = () => {
    navigate("./hotels", { state: { destination, date, options } });
  };

  return (
    <header
      className={
        type === "hotels" ? header.container_list_mode : header.container
      }
    >
      <ul className={header.list__container}>
        <li className={`${header.list__item} ${header.active}`}>
          <FontAwesomeIcon icon={faBed} />
          <span className="">Stays</span>
        </li>
        <li className={header.list__item}>
          <FontAwesomeIcon icon={faPlane} />
          <span className="">Flights</span>
        </li>
        <li className={header.list__item}>
          <FontAwesomeIcon icon={faCar} />
          <span className="">Car rentals</span>
        </li>
        <li className={header.list__item}>
          <FontAwesomeIcon icon={faBed} />
          <span className="">Attractions</span>
        </li>
        <li className={header.list__item}>
          <FontAwesomeIcon icon={faTaxi} />
          <span className="">Airport taxis</span>
        </li>
      </ul>
      {type === "hotels" || (
        <>
          <article className={header.heading}>
            <h1 className={header.title}>
              A lifetime of discounts? It's a Genius.
            </h1>
            <p className={header.desc}>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className={header.btn}>sign in</button>
          </article>
          <section className={search.container}>
            <ul className={search.list__container}>
              <li className={search.item}>
                <FontAwesomeIcon icon={faBed} className={search.icon} />
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Where are you going?"
                  onChange={(e) => {
                    setDestination(e.target.value);
                  }}
                  className={search.input}
                />
              </li>
              <li className={search.item}>
                <FontAwesomeIcon
                  onClick={() => {
                    setShowCalendar(!showCalendar);
                    setShowOptions(false);
                  }}
                  icon={faCalendarDays}
                  className={search.icon}
                />
                <span
                  onClick={() => {
                    setShowCalendar(!showCalendar);
                    setShowOptions(false);
                  }}
                  className={search.text}
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
                    className={search.date_selector}
                  />
                )}
              </li>
              <li className={search.item}>
                <FontAwesomeIcon
                  onClick={() => {
                    setShowOptions(!showOptions);
                    setShowCalendar(false);
                  }}
                  icon={faContactBook}
                  className={search.icon}
                />
                <span
                  onClick={() => {
                    setShowOptions(!showOptions);
                    setShowCalendar(false);
                  }}
                  className={search.text}
                >
                  {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                </span>
                {showOptions && (
                  <ul className={search.options__container}>
                    <li className={search.option}>
                      <span className={search.option_label}>adult</span>
                      <div className="">
                        <button
                          disabled={options.adult <= 1}
                          onClick={() => handleOptionBtn("adult", "decrement")}
                          className={search.option_counter_btn}
                        >
                          -
                        </button>
                        <span className={search.option_counter_val}>
                          {options["adult"]}
                        </span>
                        <button
                          disabled={options.adult === 10}
                          onClick={() => handleOptionBtn("adult", "increment")}
                          className={search.option_counter_btn}
                        >
                          +
                        </button>
                      </div>
                    </li>
                    <li className={search.option}>
                      <span className={search.option_label}>children</span>
                      <div className="">
                        <button
                          disabled={options.children <= 0}
                          onClick={() =>
                            handleOptionBtn("children", "decrement")
                          }
                          className={search.option_counter_btn}
                        >
                          -
                        </button>
                        <span className={search.option_counter_val}>
                          {options["children"]}
                        </span>
                        <button
                          disabled={options.children === 10}
                          onClick={() =>
                            handleOptionBtn("children", "increment")
                          }
                          className={search.option_counter_btn}
                        >
                          +
                        </button>
                      </div>
                    </li>
                    <li className={search.option}>
                      <span className={search.option_label}>room</span>
                      <div className="">
                        <button
                          disabled={options.room <= 1}
                          onClick={() => handleOptionBtn("room", "decrement")}
                          className={search.option_counter_btn}
                        >
                          -
                        </button>
                        <span className={search.option_counter_val}>
                          {options["room"]}
                        </span>
                        <button
                          disabled={options.room === 10}
                          onClick={() => handleOptionBtn("room", "increment")}
                          className={search.option_counter_btn}
                        >
                          +
                        </button>
                      </div>
                    </li>
                    <li className={search.option}>
                      <span className={search.option_label}></span>
                      <div className="">
                        <button
                          onClick={() => handleReset()}
                          className={search.option_reset_btn}
                        >
                          Reset
                        </button>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
              <li className={search.item}>
                <button onClick={() => handleSearch()} className={search.btn}>
                  search
                </button>
              </li>
            </ul>
          </section>
        </>
      )}
    </header>
  );
}

export default Header;
