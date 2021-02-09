import * as style from "./BlogLayout.module.css";
import ArticleHeader from "../ArticleHeader/";

export default function BlogLayout(props) {
  const { children, meta } = props

  return (
    <div className={style.rootContainer}>
      <div className={style.outerContainer}>
        <article className={style.articleContainer}>
          <ArticleHeader props={meta} />
          {children}
        </article>
      </div>
    </div>
  )
}