import Profile from '../../assets/profileBig.png'
import './browsecomp.css'
const Info = ()=>{
    const info = JSON.parse(window.localStorage.getItem("userData"))
    const genre = JSON.parse(window.localStorage.getItem("genres"))
    return (
        <div className='infoOutline'>
            <div>
                <img src={Profile}/>
            </div>
            <div className='leftSection'>
                <p>{info.name}</p>
                <p>{info.mail}</p>
                <p style={{color:'white',fontSize:"2rem",fontWeight:"500",fontFamily:"Roboto"}}>{info.username}</p>
                <Genre categories={genre} color={"#9F94FF"}/>
            </div>
        </div>
    )
}

const Genre = ({color,categories})=>{
    return(
        <div style={{width:"20vw"}}>
       {categories.map((category)=>(
                <button style={{background:`${color}`, borderRadius:"12px",width:"100px", color:"white", border:"none",padding:"6px", height:"30px", margin:"10px"}}>{category}</button>
        ))}
        </div>
    )
}

export default Info