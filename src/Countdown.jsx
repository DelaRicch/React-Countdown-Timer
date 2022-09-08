import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { FcCalendar } from "react-icons/fc";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let timeInterval = useRef();

  const timerStartFunc = () => {
        // let search = document.getElementById('search').value
    let countdownDate = new Date("6 April 2023").getTime();
    // let countdownDate = new Date(search).getTime()
    

    timeInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDistance = countdownDate - currentTime;

      const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(timeDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(timeDistance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(timeDistance % (1000 * 60) / 1000);

      if (timeDistance === 0) {
        clearInterval(timeInterval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    timerStartFunc();

    // return () => {
    //     clearInterval(timeInterval.current)
    // }
  }, []);

  return (
    <section>
      <div className="container">
        <FcCalendar />
        <h2>Simple Countdown Timer App</h2>
        <p>
          Few more days to my birthday. I am really happy and can't wait 🤗😉
        </p>
        <div className="countdown__container">
          <div className="time">
            <h5>
              {timerDays}
              <span>:</span>
            </h5>
            <small>Days</small>
          </div>
          <div className="time">
            <h5>
              {timerHours}
              <span>:</span>
            </h5>
            <small>Hours</small>
          </div>
          <div className="time">
            <h5>
              {timerMinutes}
              <span>:</span>
            </h5>
            <small>Minutes</small>
          </div>
          <div className="time">
            <h5>{timerSeconds}</h5>
            <small>Seconds</small>
          </div>
        </div>
        {/* <input
        onChange={timerStartFunc}
        id="search"
        min='2022-09-10'
         type="date" /> */}
      </div>
    </section>
  );
};

export default Countdown;
