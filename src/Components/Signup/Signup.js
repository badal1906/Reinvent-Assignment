import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthenicationMutation } from "../../Redux/Api/ApiSlice";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../Redux/Users/UsersSlice";

const Signup = ({ type }) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ManageAuthenticate, { isLoading }] = useAuthenicationMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await ManageAuthenticate({
        url: type ? "login" : "register",
        body: {
          ...userDetails,
        },
      });
      if (res.error) return alert(res.error.data.error);

      const { token } = res.data;

      if (type) {
        dispatch(setUser(userDetails.email));
        dispatch(setToken(token));
        navigate("/dashboard");
      } else {
        alert("Signup Successful");
        navigate("/login");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="signup__container">
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <div className="signup__body">
            <div className="signup__heading">
              <h1>{type || "Sign up"}</h1>
              <p>Please Sign in to your Account to Continue</p>
            </div>

            <div>
              <input
                id="email"
                placeholder="Email"
                type="email"
                value={userDetails.email}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                id="pass"
                placeholder="Password"
                type="password"
                value={userDetails.password}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, password: e.target.value });
                }}
              />
            </div>

            <button disabled={isLoading} type="submit">
              {type || "Sign up"}
            </button>
            {type ? (
              <div className="signup__footer">
                Don't have an account.
                <Link className="signin" to={"/"}>
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="signup__footer">
                Already have an account.
                <Link to={"/login"} className="signin">
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
