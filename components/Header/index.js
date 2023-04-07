import Link from "next/link"
import * as style from "./Header.module.css"

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <Link href="/" className={style.headerItem}>
        Home
      </Link>
    </div>
  )
}