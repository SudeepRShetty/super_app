import './banner.css';
import BackgroundImage from '../../assets/page1_bg.png'
const Banner = ()=>{
    return(
        <> 
            <div className="top">
                <p>Already Have an Account ?</p>
                <button>LOGIN</button>
            </div>
            <div className="bottom">
                <p>Discover new things on SuperApp</p>
            </div>
            <img src={BackgroundImage}/>
        </>
    )
}

export default Banner