export default function BlogLayout({ children, frontMatter }) {
    return (
        <article>
            <h1>{frontMatter.title}</h1>
            <div>{children}</div>
        </article>
    );
}