import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ApiPage from "../components/ApiPage"
import api from "../data/api"

const ApiPT = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang={"pt"}>
    <Seo title={api.title.pt} location={location} />
    <ApiPage defaultLang="pt" />
  </Layout>
)

export default ApiPT
