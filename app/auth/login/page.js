"use client";

import { useState } from "react";
import Link from "next/link";
import classes from "@/components/authStyle.module.css"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <>
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form} method="GET">
          <h2 className="log-title">Login</h2>
          <input
            className={classes.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@mail.com"
          />

          <input
            className={classes.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            minLength={6}
            required
          />

          <button className={classes.btn} type="submit">
            Login
          </button>
        </form>
        <p className={classes.text}>
          Don&apos;t have an account{" "}
          <Link className={classes.link} href="/auth/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
