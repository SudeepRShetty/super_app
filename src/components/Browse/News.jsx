import { useEffect, useState } from "react"
import './browsecomp.css'
const News = ()=>{
    const [news, setNews] = useState('')
     const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    useEffect(()=>{
        const fetchNews = async()=>{
           await fetch("https://newsapi.org/v2/everything?q=apple&from=2023-04-20&to=2023-04-20&sortBy=popularity&apiKey=f2bee0aa5aa64bad8697ec675e17c9f6")
                .then(async(data)=>await data.json()).then((res)=>setNews(res.articles[0]))
        }
        fetchNews();
    },[])
     useEffect(()=>{
        const date = new Date
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime)
    })
    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; 
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setDate(formattedToday)
    })
    return (
        <div className="newsOutline">
            <img src={news.urlToImage}/>
            <div className="desc">
                {news.description}
            </div>
            <div className="imgAbove">
                <p className="content">{news.title}</p>
                <span className="content">{date}</span>
                <span className="content">{time}</span>
            </div>
        </div>
    )
}

export default News