// pages/login.js
"use client";
import { useState } from "react";
// import { useRouter } from "next/router";

// import classes from "./page.module.css";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    console.log({ firstName, lastName, email, password });
    // router.push("/dashboard"); // Redirect to dashboard or other page
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="form" method="POST">
          <h2 className="log-title">Sign Up</h2>

          <input
            className="email"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First name"
          />

          <input
            className="email"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Last name"
          />

          <input
            className="email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@mail.com"
          />

          <input
            className="password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="pass****"
            required
          />
          <button className="btn" type="submit">
            Create Account
          </button>
        </form>
        <p>
          Already have an account{" "}
          <Link className="link" href="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
