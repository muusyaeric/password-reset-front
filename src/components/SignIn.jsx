import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function SignIn() {
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
    // console.log(details);
    axios.post(`http://localhost:5000/api/user/login`, {
      email: details.email,
      password: details.password
    })
  };
  return (
    <div className="App">
        <h1>SingIn</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={changeHandler}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={changeHandler}
        />
        <br />
        <Link to="/forgotpass">Forgot password?</Link>
        <br />
        <Link to="/">Sign Up</Link>
        <br />
        <input type="submit" value="Submit" onClick={submitHandler} />
      </form>
    </div>
  );
}

export default SignIn;
