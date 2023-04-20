import classes from './SignIn.module.css';
import {useState} from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import {NavLink} from "react-router-dom";
const cookies = new Cookies();


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitHandler(e) {
        e.preventDefault()

        const config = {
            method: "post",
            url: 'http://localhost:8080/auth/login',
            data: {
                email: email,
                password: password
            }
        }

        axios(config)
            .then((res) => {
                console.log(res)
                cookies.set("TOKEN", res.data, {
                    path: "/",
                });
                window.location.href = "/"
            })
            .catch((res) => {
                console.log(res);
                alert("Email or password incorrect, Try again")
            })
    }

    return <section className={classes.authSection}>
      <form onSubmit={submitHandler}>
          <div className={classes.container}>
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

              <p>Don;t have an account ? Register <NavLink to='/sign-up'>here</NavLink></p>

          </div>
      </form>
  </section>

};

export default SignIn;
