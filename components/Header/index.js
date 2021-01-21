import Link from "next/link";
import * as style from "./Header.module.css";

export default function Header() {
  return (
    <>
      <nav className={style.headerNav}>
        <Link href="/">
          <a className={style.headerItem}>Home</a>
        </Link>
      </nav>
    </>
  );
}
