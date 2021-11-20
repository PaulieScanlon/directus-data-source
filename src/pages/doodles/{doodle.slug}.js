import React from 'react';
import { graphql, Link } from 'gatsby';

const Page = ({ data }) => {
  return (
    <main>
      <section>
        <Link to="/">Back</Link>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
    </main>
  );
};

export const data = graphql`
  query doodleQuery($id: String) {
    doodle(id: { eq: $id }) {
      id
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
`;

export default Page;
