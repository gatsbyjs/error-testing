import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => (
  <div>
    <p>All working!</p>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

export const query = graphql`
  {
    site {
      buildTime(dateFormat: "DD.MM.YYYY")
    }
  }
`;
