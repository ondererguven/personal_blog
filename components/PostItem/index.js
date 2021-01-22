import Link from "next/link"
import * as style from "./PostItem.module.css";

export const PostItem = ({ post }) => {
  const { link, module: { meta } } = post;

  return (
    <>
      <div className="outerContainer">
        <Link href={link}>
          <div className={style.postItemContainer}>
            <h1 className={style.postItemHeading}>{meta.title}</h1>
            <p>{meta.description}</p>
            <p className={style.postItemDate}>{meta.date}</p>
          </div>
        </Link>
        <style jsx>
          {`
            .outerContainer {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 2rem;
            }
          `}
        </style>
      </div>
    </>
  )
}
