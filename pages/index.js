import { PostItem } from "../components/PostItem/"
import { posts } from "../getAllPosts"
import * as style from "./index.module.css"

export default function IndexPage() {
  const createPostItem = (post) => {
    return <PostItem key={post.link} post={post} />
  }

  return (
    <div className={style.postContainer}>
      {
        posts.map(post => createPostItem(post))
      }
    </div>
  )
}