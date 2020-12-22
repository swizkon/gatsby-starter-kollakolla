import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const links = () => {

  const salonger = [
    { name: "Göteborg", link: "/goteborg/" },
    { name: "Kinna", link: "/kinna/" },
  ]

  return (
    <div>
      { salonger.map(s => (
        <Link to={s.link}> {s.name} </Link>
      )) }
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="kolla kolla" />
    <h1>Välj salong</h1>
    {links()}
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
