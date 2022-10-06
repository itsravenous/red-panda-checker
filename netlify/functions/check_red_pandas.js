const axios = require("axios");

const url = 'https://www.chesterzoo.org/online-shop/meet-experiences-at-chester-zoo/red-panda-experience/';
const soldOutTest = /sold out/i

exports.handler = async (event, context) => {
  try {
    const { data } = await axios(url);
    const result = { soldOut: soldOutTest.test(data) };
    return { statusCode: 200, body: JSON.stringify(result) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
