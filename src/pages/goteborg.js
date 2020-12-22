import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const getStuff = () => {
  return "Stuff";
}

const hairDressers = () => {

  return (<h1>Frisörer</h1>);
}


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    { getStuff() }
    <h1>G&ouml;teborg</h1>
    <p>Welcome to page 2</p>
    { hairDressers() }
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
