import { PostItem } from "../components/PostItem/";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  const createPostItem = (post) => {
    return <PostItem key={post.link} post={post} />
  }

  return (
    <>
      {posts.map(post => createPostItem(post))}
    </>
  );
}