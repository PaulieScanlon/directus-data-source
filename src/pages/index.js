import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const {
    apod: { id, date, title, explanation }
  } = useStaticQuery(graphql`
    query {
      apod {
        id
        date
        title
        explanation
      }
    }
  `);

  return (
    <main>
      <small>{id}</small>
      <p>{date}</p>
      <h1>{title}</h1>
      <p>{explanation}</p>
    </main>
  );
};

export default IndexPage;
