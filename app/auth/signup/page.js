"use client";

import { useState } from "react";
import Link from "next/link";
import ChakraNextImage from '@/components/chakra-nextimage';
import classes from "@/components/authStyle.module.css"
import img from '@/public/icons/icon-384.png'
import { Box, Text } from "@chakra-ui/react";
import { auth } from "/firebase.config"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Sign up successful!');
      setEmail('');
      setPassword('');
      router.push('/')
    } catch (err) {
      console.log('Error signing up:', err);
      setError(err.message);
    }
    setLoading(false);
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
            placeholder="tomiwamajor@mail.com"
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

          <button className={classes.btn} type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          {error && <Text>Error: {error}</Text>}
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