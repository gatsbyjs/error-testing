import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default ({ dateFormat = "DD.MM.YYYY" }) => {
  const data = useStaticQuery(graphql`
    query Build($dateFormat: String!) {
      site {
        buildTime(formatString: $dateFormat)
      }
    }
  `);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
