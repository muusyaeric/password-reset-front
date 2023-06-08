import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [msg, setMsg] = useState("");
  const { id, token } = useParams();

  useEffect(()=> {
    console.log("Id", id);
    console.log("Token", token);
    axios.get(`https://password-reset-api-b2a7.onrender.com/api/user/reset-password/${id}/${token}`)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || !passwordConfirm) {
      setMsg("Both fields should contain values");
      return;
    }
    axios
      .post(`https://password-reset-api-b2a7.onrender.com/api/user/reset-password/${id}/${token}`, {
        newPassword: newPassword,
        passwordConfirm: passwordConfirm,
      })
      .then((response) => {
        console.log(response);
        const status = response.status;
        if (status === 200) {
          setMsg("Success...");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {msg && msg}
      <form>
        <input
          required
          type="password"
          name="newPassword"
          id=""
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />
        <input
          required
          type="password"
          name="passwordConfirm"
          id=""
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;
