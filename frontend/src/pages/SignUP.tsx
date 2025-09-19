import React from "react";

const SignUP = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div>
          <h2 className="text-3xl font-bold mb-4">Create account</h2>
        </div>
        <form action="">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="text" placeholder="Email address" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button>Sign Up</button>
        </form>
        <div className="mt-4">
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
