import React,{useState} from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom'
const SignUpForm = ()=>{
    const initialValues = { name :"",username: "", mail: "", mobile: "" }
    const [formValues, setFromValues] = useState(initialValues) 
    const [check,setcheck] = useState(false);
    const [error,seterror]= useState({});
    const navigate = useNavigate()
    const handleChange = (e)=>{
        setFromValues({...formValues,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault() 
        seterror(validateForm());
        console.log(error);
        if(Object.keys(error).length===0){
            console.log("ready to go");
            window.localStorage.setItem("userData",JSON.stringify(formValues))
            navigate('/genre')
        }else{
            console.log("cant navigate")
        }

        
    } 

    const validateForm = ()=>{
        const error = {};
        if (!formValues.name.trim()) {
            error.name = "Name is required";
          } else if (!/^[a-zA-Z\s]+$/.test(formValues.name)) {
            error.name = "Name should contain only letters and spaces";
          }
        
          if (!formValues.username.trim()) {
            error.username = "Username is required";
          } else if (!/^[a-zA-Z0-9]+$/.test(formValues.username)) {
            error.username = "Username should contain only letters and numbers";
          }
        
          if (!formValues.mail.trim()) {
            error.mail = "Email is required";
          } else if (!/^\S+@\S+\.\S+$/.test(formValues.mail)) {
            error.mail = "Email is not valid";
          }
        
          if (!formValues.mobile.trim()) {
            error.mobile = "Mobile number is required";
          } else if (!/^[1-9]\d{9}$/.test(formValues.mobile)) {
            error.mobile =
              "Mobile number should be a 10-digit number starting with a non-zero digit";
          }
        if(!check){
            error.checkbox="Select checkbox"
        }
        return error;
    }

   
    return(
        <div className="body">
            <p className="super">Super App</p>
            <p>Create a new Account</p>
            <p>Email <span style={{color:"green"}}>|</span> Google</p>
            <form>
                <input onChange={(e)=>handleChange(e)}  type="text" name='name'  placeholder="Name"></input>
                {error.name && <p style={{color:"red"}}>{error.name}</p>}
                <input onChange={(e)=>handleChange(e)}  type="text" name='username'  placeholder="UserName"></input>
                {error.username && <p style={{color:"red"}}>{error.username}</p>}
                <input onChange={(e)=>handleChange(e)}  type="email" name='mail'  placeholder="Email"></input>
                {error.mail && <p style={{color:"red"}}>{error.mail}</p>}
                <input onChange={(e)=>handleChange(e)}  type="tel"  name='mobile'  placeholder="Mobile"></input>
                {error.mobile && <p style={{color:"red"}}>{error.mobile}</p>}
                <label>
                <input onChange={(e)=>setcheck(!check)}  type="checkbox" name='check' />
                Share my registration data with Superapp
                </label>
                <p style={{color:"red"}}>{error.checkbox}</p>
                <button type='submit'  onClick={(e)=>handleSubmit(e)}>SIGN UP</button>
            </form>
            <footer className="footer">
                <p>By clicking on Sign up. you agree to Superapp<span style={{color:"green"}}> Terms and Conditions of Use</span></p>
                <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span style={{color:"green"}}> Privacy Policy</span></p>
            </footer>
        </div>
    )
}

export default SignUpForm