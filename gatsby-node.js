require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const axios = require('axios');

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest
}) => {
  const { data } = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.GATSBY_NASA_API_KEY}`
  );

  createNode({
    ...data,
    id: createNodeId(data.date),
    internal: {
      type: 'apod',
      contentDigest: createContentDigest(data)
    }
  });
};
