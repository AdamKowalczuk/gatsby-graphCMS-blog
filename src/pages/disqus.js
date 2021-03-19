import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import * as React from "react"

const PostTemplate = () => {
  let disqusConfig = {
    url: `${config.siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.title,
  }
  return (
    <>
      <h1>{post.title}</h1>
      <CommentCount config={disqusConfig} placeholder={"..."} />

      <Disqus config={disqusConfig} />
    </>
  )
}

export default PostTemplate
