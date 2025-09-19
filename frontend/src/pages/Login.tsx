import React from "react";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div>
          <h2 className="text-3xl font-bold mb-4">Login</h2>
        </div>
        <form action="">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button>Login</button>
        </form>
        <div className="mt-4">
          <p>
            You do not hava an account yet? <a href="/signup">Create here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
