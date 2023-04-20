import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css'
import { useRef } from 'react';
//axios
//alternate to fetch the data
import axios from 'axios';

const Signup = () => {

    let navigate = useNavigate()

    let name = useRef(null)
    let email = useRef(null)
    let password = useRef(null)
    let confirmpassword = useRef(null)

    let register = (e) => {
        e.preventDefault()

        let data = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            confirmpassword: confirmpassword.current.value
        }
        // console.log(data);

        if (data.name && data.email && data.password && (data.password == data.confirmpassword)) {
            axios.post('http://localhost:4000/sign-up', data)
                .then((res) => {
                    alert(res.data.message) //message from backend 
                    navigate('/') //navigate to signin page
                })
        }
        else {
            alert("invalid credentials")
        }
    }

    return (
        <div className="signup">
            <div className="signform m-5 d-inline-flex">

                <div className="form">
                    <h2><b>Sign Up</b></h2>

                    <form action="">
                        <div className="name ">
                            <input ref={name} name="name" type="name" placeholder='Your Name' className='form-control' />
                        </div><br />
                        <div className="email">
                            <input ref={email} name="email" type="email" placeholder='Your Email' className='form-control' />
                        </div><br />
                        <div className="password">
                            <input ref={password} name="password" type="password" placeholder='Your Password' className='form-control' />
                        </div><br />
                        <div className="password">
                            <input ref={confirmpassword} name="confirmpassword " type="password" placeholder='Re-Enter Password' className='form-control' />
                        </div><br />
                        <div className="check d-flex fs-6 ">
                            <input type="checkbox" />
                            <p class="p-1 m-2 ">I agree the statement in <a href="">Terms of services</a></p>
                        </div>
                        <div>
                            <button onClick={register} class="btn btn-primary p-2 fs-6  ">Register</button>
                        </div>
                    </form> </div>
                <div className="img p-4 ">
                    <img height={350} width={350} src="images\signup-image (1).jpg" alt="" />
                    <div class="text-center text-color-black">
                        <Link to={"/"} class="text-dark" href=""> I am already a member</Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Signup;