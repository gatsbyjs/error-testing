import { graphql, useStaticQuery } from "gatsby";
import React from "react";

// This user wants to build a reusable component that prints out the buildTime with a custom dateFormat
// that gets input by a prop. If no input is given the format will be DD.MM.YYYY
// The solution is not about building this reusable component but getting the site to build without an error

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
