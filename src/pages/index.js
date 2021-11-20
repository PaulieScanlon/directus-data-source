import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Page = () => {
  const {
    allDoodle: { nodes }
  } = useStaticQuery(graphql`
    query allDoodleSlug {
      allDoodle {
        nodes {
          slug
        }
      }
    }
  `);

  return (
    <main>
      <ul>
        <li>
          <Link to="/all-doodle-data">All Doodle Data</Link>
        </li>
        {nodes.map((node, index) => {
          const { slug } = node;
          return (
            <li key={index}>
              <Link to={`doodles/${slug}`}>{slug}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Page;
