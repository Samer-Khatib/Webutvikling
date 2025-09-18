import React from "react";

interface User {
  name: string;
}

const Login = () => {
  const user: User = { name: "Guest" };

  return (
    <div>
      <h2>Login</h2>
      <p>Welcome, {user.name}</p>
      <button>Login with Facebook</button>
    </div>
  );
};

export default Login;
