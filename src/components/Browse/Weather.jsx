import { useEffect, useState } from "react" 
import './browsecomp.css'
import pres from '../../assets/pressure.png'
import wind from '../../assets/wind.png'
import humidity from '../../assets/humidity.png'
const Weather = ()=>{
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [weather, setWeather] = useState(false)
    // console.log(weather)
    useEffect(()=>{
        const fetchWeather = async()=>{
            await fetch("http://api.weatherapi.com/v1/current.json?key=fd3f79b4cbb34bcdbcc83427231504&q=Bengaluru&aqi=no")
                .then(async(data)=>await data.json()).then((data)=>setWeather(data)) 
        }
        fetchWeather()
    },[])
    useEffect(()=>{
        const date = new Date
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime)
    })
    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setDate(formattedToday)
    })
    return (
        <div className="weatherOutline">
            <div className="dateTime">
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <div>
                {weather ?<div style={{display:"flex", color:"white", alignItems:"center", justifyContent:"space-evenly"}}> <div>
                    <img src={weather.current.condition.icon} style={{width:"30px",height:"30px"}}/>
                    <p>{weather.current.condition.text}</p>
                </div>
                <p style={{fontSize:"3rem"}}>|</p>
                <div>
                   <p style={{marginBottom:"12px", fontSize:"25px",marginTop:"10px"}}><span>{weather.current.temp_c}</span>{'\u00b0'}C</p>
                    <div style={{display:"flex",flexDirection:"row",gap:"5px"}}>
                        <img src={pres} alt="" srcset="" style={{height:"20px",width:"auto"}}/>
                        <p>{weather.current.pressure_mb}mbar<br/> pressure</p>
                    </div>
                </div>
                <p style={{fontSize:"3rem"}}>|</p>
                <div>
                    <div style={{display:"flex",flexDirection:"row",gap:"5px"}}>
                        <img src={wind} alt="" srcset="" style={{height:"20px",width:"auto"}}/>
                        <p>{weather.current.wind_kph}kmph<br/>wind</p>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",gap:"5px"}}>
                        <img src={humidity} alt="" srcset="" style={{height:"20px",width:"auto"}}/>
                        <p>{weather.current.humidity}%<br/>humidity</p>
                    </div>
                    {/* <p style={{marginBottom:"12px", fontSize:"20px", marginTop:"10px"}}>{weather.current.wind_kph} wind</p>
                    <p>{weather.current.humidity} humidity</p> */}
                </div></div>:<></>}
              </div>
        </div>
    )
}

export default Weather



//current.condition.icon, text
//current.temp_c
//current.pressure_mb
//current.wind_kph
//current.humidity