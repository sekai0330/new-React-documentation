import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/HomePage"
import home from "../data/home"

const IndexPage = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="jp">
    <Seo
      title={home.title.jp}
      description={home.description.jp}
      location={location}
    />
    <Home location={location} defaultLang="jp" />
  </Layout>
)

export default IndexPage
