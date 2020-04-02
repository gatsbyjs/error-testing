import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => <div>{JSON.stringify(data, null, 2)}</div>

export const query = graphql`
  {
    site {
      buildTime(length: 10)
    }
  }
`
