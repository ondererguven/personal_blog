import { PostItem } from "../components/PostItem/";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  const createPostItem = (post) => {
    return <PostItem key={post.link} post={post} />
  }

  return (
    <div>
      {posts.map(post => createPostItem(post))}
      <style jsx>
        {`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      </style>
    </div>
  );
}