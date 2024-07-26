"use client";

import { useState } from "react";
import Link from "next/link";
import ChakraNextImage from '@/components/chakra-nextimage';
import classes from "@/components/authStyle.module.css"
import img from '@/public/icons/icon-384.png'
import { Box } from "@chakra-ui/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password, firstName });
  };
  

  return (
    <>
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form} method="POST">
          <Box width={'50%'}>
                <ChakraNextImage
                  src={img}
                  quality={100}
                  alt='img logo'
                  width={'100%'}
                  aspectRatio={'1/1'}
                />
              </Box>
          <input
            className={classes.input}
            type="text"
            id="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First Name"
          />

          <input
            className={classes.input}
            type="text"
            id="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Last Name"
          />

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
            placeholder="Password"
            minLength={6}
            required
          />

          <button className={classes.btn} type="submit">
            Register
          </button>
        </form>
        <p className={classes.text}>
          Have an account already{" "}
          <Link className={classes.link} href="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
