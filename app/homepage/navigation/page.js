"use client";

import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/icons/icon-144.png";

export default function NavSection() {
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="Logo of the organization" priority />
        </Link>

        <nav className={classes.nav}>
          <ul>
          <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/cart">Cart</Link>
            </li>

            <li>
              <Link href="/auth/login">User</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
