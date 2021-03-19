import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/articleTemplate.scss"
import "../styles/button.scss"
import "../styles/layout.scss"
function loadComments(title) {
  var disqus_config = (function () {
    this.page.url = "https://motivational-blog.netlify.app/jedz-i biegaj" // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = title // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  })(function () {
    var d = document,
      s = d.createElement("script")
    s.src = "https://blog-motywacyjny.disqus.com/embed.js"
    s.setAttribute("data-timestamp", +new Date())
    ;(d.head || d.body).appendChild(s)
  })()
}
const ArticleTemplate = ({ pageContext: { data } }) => (
  <Layout>
    <SEO title={data.title} />
    <div className="article-container">
      <h1>{data.title}</h1>
      <h2>{data.author}</h2>
      <div className="article-box">
        <img src={data.image.url} alt={data.title} />
        <p>{data.description}</p>
      </div>
    </div>
    <p onClick={loadComments(data.title)}>Load Comments</p>
    <div id="disqus_thread"></div>

    <noscript>
      Please enable JavaScript to view the{" "}
      <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
    </noscript>
  </Layout>
)

export default ArticleTemplate
