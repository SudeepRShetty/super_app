import { useState } from "react"
import Edit from "../../assets/edit.png"
import pen from "../../assets/pen.png"
import './browsecomp.css'

const Notes = ()=>{
    const [text, setText] = useState(JSON.parse(window.localStorage.getItem("text")))
    // console.log(text)
    const handleChange=(e)=>{
        setText(e.target.value)
        window.localStorage.setItem("text",JSON.stringify(text))
    }
    return(
       <div className="noteOutline">
            <p>All notes</p>
            <textarea value={text} onChange={(e)=>handleChange(e)}/>
            <img src={pen}/>
       </div>
    )
}

export default Notes