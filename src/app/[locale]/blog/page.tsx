import { FC } from "react"
//local libs
import { db } from '@/modules/db'

const Blog: FC = async () => {
  const posts = await db.post.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div>
      <h1>Blog</h1>

      <div />

      {
        posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
            <span>{post.createdAt.toUTCString()}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Blog