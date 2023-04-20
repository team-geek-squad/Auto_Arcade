import classes from './SignIn.module.css';
import {useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault()

    const config = {
      method: "post",
      url: 'http://localhost:8080/auth/register',
      data: {
        fullname: fullName,
        username: username,
        email: email,
        password: password
      }
    }

    axios(config)
        .then((res) => {
          window.location.href = "/sign-in"
        })
        .catch((res) => {
          alert("Registration Failed. please try again")
        })
  }

  return <section className={classes.authSection}>
    <form onSubmit={submitHandler}>
      <div className={classes.container}>
        <div className={classes.inputGroup}>
          <label htmlFor="fullname"><b>Full Name</b></label>
          <input
              type="text"
              placeholder="Enter Your full name"
              name="fullname"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              required/>
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="username"><b>Username</b></label>
          <input
              type="text"
              placeholder="Enter an username"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required/>
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="email"><b>Email</b></label>
          <input
              type="text"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required/>
        </div>

        <div className={classes.inputGroup}>
          <label htmlFor="psw"><b>Password</b></label>
          <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required/>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.submitButton} type="submit">Login</button>
        </div>

        <p>Already have an account? Login <NavLink to='/sign-in'>here</NavLink></p>

      </div>
    </form>
  </section>
};

export default SignUp;
