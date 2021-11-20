import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Page = () => {
  const {
    allDoodle: { nodes }
  } = useStaticQuery(graphql`
    query allDoodleData {
      allDoodle {
        nodes {
          created_on
          modified_on
          posted_date
          description
          reference
          more_info
          sku {
            sku_id {
              sku_name
            }
          }
        }
      }
    }
  `);

  return (
    <main>
      {nodes.map((node, index) => {
        const {
          created_on,
          modified_on,
          posted_date,
          description,
          reference,
          more_info,
          sku
        } = node;

        return (
          <section>
            <Link to="/">Back</Link>
            <ul>
              <li>Created On: {new Date(created_on).toDateString()}</li>
              <li>Modified On: {new Date(modified_on).toDateString()}</li>
              <li>Posted Date: {new Date(posted_date).toDateString()}</li>
            </ul>
            <p>{description}</p>
            <p>{reference}</p>
            <p>{more_info}</p>
            <a href={more_info} target="_blank" rel="noreferrer">
              More Info
            </a>
            <pre>{JSON.stringify(sku, null, 2)}</pre>
          </section>
        );
      })}
    </main>
  );
};

export default Page;
