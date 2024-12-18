
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
	},

	getInventory: async (req,res) => {		
		const requestUri = `/openapi/warehouse-inventory/v1/sku/get`;
		const paramJson = 'id=WW658D3976C9E77C00014C7E39';
		const data = await sendRequest(requestUri, 'GET', paramJson);
		res.send(data);
	}
};

module.exports = productController;