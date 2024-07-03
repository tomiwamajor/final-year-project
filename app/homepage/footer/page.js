import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/icons/icon-144.png";
import classes from "./page.module.css";

export default function Foot() {
  return (
    <>
      <footer className={classes["footer-background"]}>
        <div className={classes["grid-body"]}>
          {/* <div>
            <Link className={classes.logo} href="/">
              <Image src={logoImg} alt="Logo of the organization" priority />
            </Link>
          </div> */}

          {/* contacting */}
          <div className={classes["grid-divide"]}>
            {/* <ul className={classes.unordered}>
              <li className={classes["footer-header"]}>Contact Us</li>
              <li>University of Ilorin</li>
              <li>
                <Link href="tel:0810 869 0052">0810 869 0052</Link>
              </li>
              <li>
                <Link href="mailto:adetomiwaadelekun@gmail.com">
                  adetomiwaadelekun@gmail.com
                </Link>
              </li>
            </ul> */}

            {/* account creation */}
            <ul className={classes.unordered}>
              <li className={classes["footer-header"]}>Account</li>
              <li>
                <Link href="/auth/signup">Create Account</Link>
              </li>
              <li>
                <Link href="/auth/login">Sign In</Link>
              </li>
            </ul>

            {/* about the organization */}
            <ul className={classes.unordered}>
              <li className={classes["footer-header"]}>Company</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
