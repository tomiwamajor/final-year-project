import Link from "next/link";
import classes from "./page.module.css";

export default function Foot() {
  return (
    <>
      <footer className={classes["footer-background"]}>
        <div className={classes["grid-body"]}>
          <div className={classes["grid-divide"]}>
            <ul className={classes.unordered}>
              <li className={classes["footer-header"]}>Account</li>
              <li>
                <Link href="/auth/signup">Create Account</Link>
              </li>
              <li>
                <Link href="/auth/login">Sign In</Link>
              </li>
            </ul>
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
