"use client";

import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/icon.jpg";
import { useState } from "react";

export default function NavSection() {
  const [searchBar, isSearchBar] = useState();
  function handleSearch() {
    console.log({ searchBar });
  }
  //includes logo, search bar, home logo, cart logo, user logo
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="Logo of the organization" priority />
        </Link>

        {/* i need a search icon */}

        <input
          onClick={handleSearch}
          className={classes.search}
          type="search"
          placeholder="Search for a Suit"
          value={searchBar}
          onChange={(e) => isSearchBar(e.target.value)}></input>

        <nav className={classes.nav}>
          <ul>
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
