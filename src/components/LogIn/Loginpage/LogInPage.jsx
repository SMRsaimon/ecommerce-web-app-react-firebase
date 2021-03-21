import React from "react";
import "./LogInPage.css";

const LogInPage = () => {
  return (
    <div className="log-in-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
        <br></br>

        <input type="password" placeholder="password" name="password" ref={register({ min: 6, maxLength: 12, pattern: /(?=.*[0-9])/i })} />
        <br></br>
        <input type="submit" value="Registar Now" />
      </form>
      <button onClick={hendelSignInWithGoogle}>Sign In With Google</button>
      <button>Sign In With Facebook</button>
    </div>
  );
};

export default LogInPage;
