import React, { useState } from "react";
import Header from "./Header";
import "./Login.scss";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignUp = ()=> {
        setIsSignInForm(!isSignInForm);
    }


  return (
    <main
      className="login-page"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)), url(https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <section className="login-form">
        <form>
          <h1> {isSignInForm ? 'Sign In' : 'Sign up'} </h1>
          {!isSignInForm &&  (
          <input type="text" placeholder="Full name" />
          )}
          <input type="text" placeholder="Email  or Phone number" />
          <input type="password" placeholder="Password" />
          <button type="submit">{isSignInForm ? "Sign In": "Sign Up"}</button>
        </form>
        <p className="declare" onClick={toggleSignUp}>
        {isSignInForm ? `New to netflix? Sign up Now` : 'Already Registered? Sign up Now '}
          
        </p>
      </section>
    </main>
  );
};

export default Login;
