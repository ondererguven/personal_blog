import Link from "next/link"
import * as style from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={style.footerContainer}>
            <Link href="/" className={style.footerItem}>
                Home
            </Link>
        </div>
    )
}