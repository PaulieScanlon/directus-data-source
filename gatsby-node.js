require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const axios = require('axios');

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest
}) => {
  const {
    data: { data }
  } = await axios.get(
    `https://api.apps.thedoodleproject.net/project/items/notes?limit=50?access_token=${process.env.DIRECTUS_ACCESS_TOKEN}&fields[]=*.*&fields[]=sku.sku_id.sku_name`
  );

  data.forEach((item) => {
    createNode({
      ...item,
      id: createNodeId(item.id),
      slug: `${item.id}`,
      internal: {
        type: 'doodle',
        contentDigest: createContentDigest(item)
      }
    });
  });
};
