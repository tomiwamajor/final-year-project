import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Link href="./auth/login">Login</Link>
      <Link href="./auth/signup">Sign up</Link>
    </>
  );
}
