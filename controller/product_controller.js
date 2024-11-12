
const sendRequest = require('../serviceGinee');

const productController = {
	getProduct: async (req, res) => {
		const requestUri = '/openapi/product/master/v1/list';
		const paramJson = JSON.stringify({
			page: 0,
			pageSize: 100,
		});
		const data = await sendRequest(requestUri, 'POST', paramJson);
		res.send(data);
	}
};

module.exports = productController;