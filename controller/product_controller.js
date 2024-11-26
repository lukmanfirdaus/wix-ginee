
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
		const warehouseId = "WI61EFAB237D560D0001A43BEA"
		
		const requestUri = `/openapi/warehouse-inventory/v1/sku/get?id=WI61EFAB237D560D0001A43BEA`;
		
		const data = await sendRequest(requestUri, 'GET');
		res.send(data);
	}
};

module.exports = productController;