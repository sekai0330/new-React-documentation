import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ResourcePage from "../components/ResourcePage"

const ResourcesEn = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  return (
    <Layout location={location} defaultLang="资源">
      <Seo title="Resources" location={location} />
      <ResourcePage defaultLang="资源" />
    </Layout>
  )
}
export default ResourcesEn
