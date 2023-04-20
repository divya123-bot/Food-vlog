import '../styles/signin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';


const Signin = () => {

    let navigate=useNavigate()

    let email=useRef(null)
    let password=useRef(null)

    let submit=(e)=>{
        e.preventDefault()

        let data={
            email:email.current.value,
            password:password.current.value
        }
        axios.post('http://localhost:4000/signin',data)
        .then((res)=>{
            alert(res.data.message)
            if(res.data.message=='login successful'){
                navigate('/home')
            }
        })
    }
    
    return (
        <div className="signin p-3">
            <div className="signform m-5 d-inline-flex ">
            <div class="text-center ">
                    <img src="images/signin-image.jpg" alt="" />
                    <Link class="text-dark" to={"/sign-up"}>Create an account</Link>
                </div>
                <div>
                    
                </div>
                <div>
                <div className="form">
                    <h2>Sign In</h2>
                </div>
                
                <form action="">
                    <div className="name ">
                        <input ref={email} type="email" placeholder="Enter the Name" className="form-Control" />
                    </div><br />
                    <div className="password">
                        <input ref={password} type="password" placeholder="Enter the Password" className="form-Control" />
                    </div> <br />
                    <div class="d-flex p-3 text-center ">
                        <input type="checkbox" />
                        <p class="p-1 m-1">Remender me</p>
                    </div>
                    <button onClick={submit} class="btn btn-primary fs-6">Login</button>
                    <div class=" log d-flex">
                        <p>or login with</p>
                        <img height={20} width={20} src="https://cdn.icon-icons.com/icons2/555/PNG/96/facebook_icon-icons.com_53612.png" alt="" />
                        <img height={20} width={20} src="https://cdn.icon-icons.com/icons2/729/PNG/96/google_icon-icons.com_62736.png" alt="" />
                        <img height={20} width={20} src="https://cdn.icon-icons.com/icons2/122/PNG/96/twitter_socialnetwork_20007.png" alt="" />
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Signin;