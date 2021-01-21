export default function BlogLayout(props) {
  const { children, meta } = props
  const { title, description, date } = meta

  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
      {children}
      <style jsx>{`
        h1 {
          color: blue;
        }
      `}</style>
    </article>
  )
}
