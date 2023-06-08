import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function SignUp() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`https://password-reset-api-b2a7.onrender.com/api/user/register`,{
        email: details.email,
        password: details.password
    },
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    })
    .then((response) => {
        console.log(response);
    })
    console.log(details);
  };
  return (
    <div className="App">
      <h1>SignUp</h1>
      <form>
        <input 
            type="email" 
            name="email" 
            placeholder="Enter your email"
            
            onChange={changeHandler} />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          
          onChange={changeHandler}
        />
        <br />
        <Link to='signin'>Sign in</Link><br />
        <input type="submit" value="Submit" onClick={submitHandler} />
      </form>
    </div>
  );
}

export default SignUp;
