// pages/login.js
"use client";
import { useState } from "react";
// import { useRouter } from "next/router";

import classes from "./page.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your authentication logic here.
    // For example, you might send a request to your backend API.
    // Example:
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    // const data = await response.json();

    // if (data.success) {
    //   // Redirect to a different page on successful login
    //   router.push('/dashboard');
    // } else {
    //   // Handle login failure
    //   alert('Login failed');
    // }

    // For demonstration, we'll just log the email and password.
    console.log({ email, password });
    // router.push("/dashboard"); // Redirect to dashboard or other page
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h2 className={classes["log-title"]}>Login</h2>
        {/* <label htmlFor="email">Email:</label> */}
        <input
          className={classes.email}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="email@mail.com"
        />
        {/* <label htmlFor="password">Password:</label> */}
        <input
          className={classes.password}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="pass****"
          required
        />
        <button className={classes.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
