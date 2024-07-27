"use client";

import { useState } from "react";
import Link from "next/link";
import ChakraNextImage from '@/components/chakra-nextimage';
import { Box, Text } from "@chakra-ui/react";
import img from '@/public/icons/icon-384.png'
import classes from "@/components/authStyle.module.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import Head from "next/head";
import GoogleSignIn from "@/components/GoogleSignIn";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Signed in Successfully');
    } catch (error) {
      console.log('Error signing in:', error)
    }
  };

  return (
    <>
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form} method="GET">
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
            Login
          </button>
        </form>
        <p className={classes.text}>
          Don&apos;t have an account{" "}
          <Link className={classes.link} href="/auth/signup">
            Sign Up
          </Link>
        </p>

        <Head>
          <link rel="icon" href="/public/icons/icon-64.png"/>
        </Head>
        <main>
          <GoogleSignIn/>
        </main>
      </div>
    </>
  );
}
