import { useState } from "react";
import PropTypes from 'prop-types'

function Form({type}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(type === 'login'){
        console.log("lkloging")
    }
    else if(type === 'signup'){
        console.log("signing up")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>{type === "login" ? "Login" : "Signup"}</h2>
      <lable>Email:</lable>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label>Password:</label>
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      {type === "signup" && (
        <>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </>
      )}

      <button type="submit">
        {
            type === 'login' ? 'Login' : 'Sign up'
        }
      </button>
    </form>
  );
}

Form.propTypes = {
    type : PropTypes.oneOf(['login','signup']).isRequired
};

export default Form;
