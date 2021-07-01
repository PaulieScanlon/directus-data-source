import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const {
    apod: { id, date, explanation, media_type, service_version, title, url }
  } = useStaticQuery(graphql`
    query {
      apod {
        id
        date
        explanation
        media_type
        service_version
        title
        url
      }
    }
  `);

  return (
    <main>
      <p>{date}</p>
      <h1>{title}</h1>
      <p>{explanation}</p>
      <img alt={title} src={url} />
      <p>{`id: ${id}`}</p>
      <p>{`media_type: ${media_type}`}</p>
      <p>{`service_version: ${service_version}`}</p>
    </main>
  );
};

export default IndexPage;
