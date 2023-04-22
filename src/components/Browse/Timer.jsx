import up from '../../assets/up.png'
import down from '../../assets/down.png'
import './browsecomp.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { useState } from 'react'
const Timer = ()=>{
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [playing, setPlaying] = useState(false)
    const increaseSecond = ()=>{
        if(seconds==59){
            return
        }
        setSeconds((sec)=>sec+1)
    }
        const increaseMinute = ()=>{
        if(minutes==59){
            return
        }
        setMinutes((min)=>min+1)
    }
        const increaseHour = ()=>{
        setHours((hours)=>hours+1)
    }
    const decreaseSecond = ()=>{
        if(seconds==0){
            return
        }
        setSeconds((sec)=>sec-1)
    }
        const decreaseMinute = ()=>{
        if(minutes==0){
            return
        }
        setMinutes((min)=>min-1)
    }
        const decreaseHour = ()=>{
        if(hours==0){
            return
        }
        setHours((hours)=>hours-1)
    }

    function toHoursAndMinutes(totalSeconds) {
  const totalMinutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}:${minutes}:${seconds}`;
}

    return (
        <div className='timerOutline'>
            <div>
                <CountdownCircleTimer
                isPlaying={playing}
                duration={seconds+minutes*60+hours*60*60}
                colors={["#FF6A6A"]}
            >
                {({ remainingTime }) =><span style={{color:"white",fontSize:"1.5rem"}}>{toHoursAndMinutes(remainingTime)}</span>}
            </CountdownCircleTimer>
            </div>
            <div style={{width:"35vw", textAlign:"center"}}>
                <div className='leftContent'>
                    <div>
                        <p>Hours</p>
                        <img   onClick={increaseHour}   src={up}/>
                        <p>{hours}</p>
                        <img   onClick={decreaseHour}  src={down}/>
                    </div>
                    <div style={{textAlign:"center", padding:"6px"}}>
                        <p>Minutes</p>
                        <img   onClick={increaseMinute}  src={up}/>
                        <p>{minutes}</p>
                        <img   onClick={decreaseMinute}  src={down}/>
                    </div>
                   <div style={{textAlign:"center", padding:"6px"}}>
                        <p>Seconds</p>
                        <img   onClick={increaseSecond}  src={up}/>
                        <p>{seconds}</p>
                        <img   onClick={decreaseSecond}  src={down}/>
                    </div>
                </div>
                <div onClick={()=>setPlaying((prev)=>!prev)}  style={{background:"#FF6A6A", borderRadius:"12px", padding:"6px", color:"white", textAlign:"center"}}>
                    {playing?<p>Pause</p>:<p>Start</p>}
                </div>
            </div>
        </div>
    )
}
export default Timer