export default function BlogLayout(props) {
  const { children, meta } = props
  const { title, description, date, readTime } = meta

  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
      <p>{readTime} mins</p>
      {children}
      <style jsx>{`
        h1 {
          color: blue;
        }
      `}</style>
    </article>
  )
}
