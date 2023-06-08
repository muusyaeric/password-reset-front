import { useState } from "react";
import axios from "axios";

function ForgotPass() {
  const [email, setEmail] = useState({});
  const [errMsg, setErrMessage] = useState("")

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEmail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    axios
      .post(`https://password-reset-api-b2a7.onrender.com/api/user/forgot-password`, email
      ).then((response) => {
        const data = response.data
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        setErrMessage(error.response.data)
      });
  };
  return (
    <div className="App">
      <p>
        Forgot password? Enter the email you use to login. Click on the link set
        to reset password.
      </p>
      {errMsg && errMsg}
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter the email you use"
        onChange={changeHandler}
        required
      />{" "}
      <br />
      <input type="submit" value="Submit" onClick={submitHandler} />
    </div>
  );
}

export default ForgotPass;
