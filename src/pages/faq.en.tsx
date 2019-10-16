import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FaqPage from "../components/FaqPage"

const Faq = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="en">
    <Seo title="常见问题" location={location} />
    <FaqPage defaultLang="en"/>
  </Layout>
)

export default Faq
