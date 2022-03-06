import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function NormalPage({ data }) {
  const image = getImage(data.normalPage.avatar)
  return (
    <section>
      <h2>{data.normalPage.title}</h2>
      <GatsbyImage image={image} alt={data.normalPage.author} />
      <p>{data.normalPage.body}</p>
    </section>
  )
}

export const pageQuery = graphql`
  query {
    normalPage(id: { eq: $Id }) {
      title
      body
      author
      avatar {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
}
