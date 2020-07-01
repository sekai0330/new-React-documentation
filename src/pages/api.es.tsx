import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ApiPage from "../components/ApiPage"
import api from "../data/es/api"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="es">
    <Seo title={api.title} location={location} />
    <ApiPage defaultLang="es" api={api} />
  </Layout>
)

export default Api
