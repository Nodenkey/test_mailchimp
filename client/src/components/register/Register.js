import React, {useState} from 'react';
import axios from "axios";

const Register = () => {
   const [userDetails, setUserDetails] = useState({
       firstName: '',
       lastName: '',
       email: '',
   });
   
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/signup", userDetails);
    };
    
    const onChange = (e) => {
        const {name, value} = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    }
    
    return (
        <div>
        <h1>Newsletter sign up</h1>
        <form onSubmit={handleSubmit} method="POST">
            <input name="firstName" placeholder="First name" type="text" onChange={onChange}/>
            <input name="lastName" placeholder="Last name" type="text" onChange={onChange}/>
            <input name="email" placeholder="Email" type="email" onChange={onChange}/>
            <button>Submit</button>
        </form>
        </div>
    );
}

export default Register;
