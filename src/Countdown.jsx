import React from 'react'
import './index.css'
import { FcCalendar } from "react-icons/fc";

const Countdown = () => {
  return (
    <section>
      <div className="container">
      <FcCalendar />
        <h2>Simple Countdown Timer App</h2>
        <p>Few more days to my birthday. I am really happy and can't wait 🤗😉</p>
        <div className='countdown__container'>
            <div className='time'>
                <h5>10<span>:</span></h5>
                <small>Days</small>
            </div>
            <div className='time'>
                <h5>10<span>:</span></h5>
                <small>Hours</small>
            </div>
            <div className='time'>
                <h5>10<span>:</span></h5>
                <small>Minutes</small>
            </div>
            <div className='time'>
                <h5>10</h5>
                <small>Seconds</small>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Countdown