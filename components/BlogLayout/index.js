import * as style from "./BlogLayout.module.css";

export default function BlogLayout(props) {
  const { children, meta } = props
  const { title, description, date } = meta

  return (
    <div className="rootContainer">
      <div className={style.outerContainer}>
        <article className={style.articleContainer}>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{date}</p>
          {children}
        </article>
      </div>
      <style jsx>
        {`
        .rootContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        `}
      </style>
    </div>

  )
}
