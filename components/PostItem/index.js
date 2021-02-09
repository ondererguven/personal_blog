import Link from "next/link"
import * as style from "./PostItem.module.css";

export const PostItem = ({ post }) => {
  const { link, module: { meta } } = post;

  return (
    <Link href={link}>
      <div className={style.postItemContainer}>
        <h1 className={style.postItemHeading}>{meta.title}</h1>
        <p>{meta.description}</p>
        <p className={style.postItemDate}>{meta.date}</p>
      </div>
    </Link>
  )
}