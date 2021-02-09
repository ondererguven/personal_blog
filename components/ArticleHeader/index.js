import * as style from "./ArticleHeader.module.css";

export default function ArticleHeader({ props }) {
    const { title, description, date } = props

    return (
        <div className={style.rootContainer}>
            <div className={style.articleHeader}>
                <h1 className={style.headerTitle}>{title}</h1>
                <body className={style.headerBody}>{description}</body>
                <caption className={style.headerCaption}>{date}</caption>
            </div>
        </div>
    )
}