import Link from "next/link"
import * as style from "./PostItem.module.css";

export const PostItem = ({ post }) => {
  const { link, module: { meta } } = post;

  return (
    <>
      <Link href={link}>
        <div className="outerContainer">
          <div className={style.postItemContainer}>
            <h1 className={style.postItemHeading}>{meta.title}</h1>
            <p className={style.postItemDescription}>{meta.description}</p>
            <p className={style.postItemDate}>{meta.date}</p>
          </div>
          <style jsx>
            {`
            .outerContainer {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}
          </style>
        </div>
      </Link>
    </>
  )
}
