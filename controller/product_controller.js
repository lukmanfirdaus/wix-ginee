
const sendRequest = require('../serviceGinee');

const productController = {

	createProduct: async (req, res) => {
		const requestUri = '/openapi/shop/v1/list';
		const paramJson = JSON.stringify({ page: 0, size: 100 });
		const wixProductData = `{
				"name": "ad ullamco",
				"sku": "nostrud et id veniam",
				"visible": true,
				"price": {
						"discountedPrice": 0,
						"price": 0,
						"formatted": {
								"price": "price",
								"pricePerUnit": "pricePerUnit",
								"discountedPrice": "discountedPrice"
						},
						"pricePerUnit": 0,
						"currency": "currency"
				},
				"slug": "non mollit",
				"brand": "velit deserunt adipisicing Ut tempor",
				"costAndProfitData": {
						"formattedProfit": "formattedProfit",
						"profitMargin": 0,
						"profit": 0,
						"formattedItemCost": "formattedItemCost",
						"itemCost": 0
				},
				"media": {
						"items": [
								{
										"mediaType": "mediaType",
										"image": {
												"format": "format",
												"url": "url",
												"altText": "altText",
												"height": {},
												"width": {}
										},
										"thumbnail": {
												"format": "format",
												"url": "url",
												"altText": "altText",
												"height": {},
												"width": {}
										},
										"id": "id",
										"video": {
												"files": [
														{
																"format": "format",
																"url": "url",
																"altText": "altText",
																"height": {},
																"width": {}
														}
												],
												"stillFrameMediaId": "stillFrameMediaId"
										},
										"title": "title"
								}
						],
						"mainMedia": {
								"mediaType": "mediaType",
								"image": {
										"format": "format",
										"url": "url",
										"altText": "altText",
										"height": {},
										"width": {}
								},
								"thumbnail": {
										"format": "format",
										"url": "url",
										"altText": "altText",
										"height": {},
										"width": {}
								},
								"id": "id",
								"video": {
										"files": [
												{
														"format": "format",
														"url": "url",
														"altText": "altText",
														"height": {},
														"width": {}
												}
										],
										"stillFrameMediaId": "stillFrameMediaId"
								},
								"title": "title"
						}
				},
				"productPageUrl": {
						"base": "base",
						"path": "path"
				},
				"productId": "sint",
				"originatedFromVersion": "V1_CATALOG"
		}`;
		const productData = `{
				"name": ${wixProductData.name},
				"spu":"spu0609001",
				"fullCategoryId": ["100534", "100577"],
				"saleStatus": "FOR_SALE",
				"condition": "NEW",
				"shortDescription": "short_desc,short_desc,short_desc,short_desc",
				"description": "Long description，Long description，Long description",
				"variantOptions": [],
				"variations": [{
						"purchasePrice":{},
						"averageCostPrice": {
								"amount": 10,
								"currencyCode": "IDR"
						},
						"barcode":"barcode100123",
						"images": ["https://cdn-oss.ginee.com/erp/prod/ginee_20230609113051954_9415714818.png"],
						"optionValues": ["-"],
						"sellingPrice": {
								"amount": 20,
								"currencyCode": "IDR"
						},
						"sku": "sku-normal-0609001",
						"status": "ACTIVE",
						"stock": {
								"availableStock": 10,
								"safetyAlert": false,
								"safetyStock": 0
						},
						"type": "NORMAL"
				}],
				"images": ["https://cdn-oss.ginee.com/erp/prod/ginee_20230609113051954_9415714818.png"],
				"delivery": {
						"length":10,
						"width":20,
						"height":30,
						"weight":40,
						"lengthUnit": "cm",
						"weightUnit": "g",
						"declareAmount":10,
						"declareWeight":100,
						"declareCurrency":"IDR",
						"declareEnName":"English name of customs declaration",
						"declareZhName":"报关中文名称",
						"declareHsCode":"hscode001"
				},
				"type": "NORMAL",
				"costInfo": {
						"purchasingTime":1,
						"purchasingTimeUnit": "HOUR",
						"salesTax": {
								"amount":2,
								"currencyCode": "IDR"
						}
				},
				"status": "PENDING_REVIEW",
				"extraInfo": {
						"hasShelfLife":false,
						"preOrder": {
								"settingType": "PRODUCT_ON",
								"timeUnit": "DAY",
								"timeToShip":12
						}
				},
				"minPurchase": 10   
		}`;
		const data = await sendRequest(requestUri, productData);
		res.send(data);
	}
};

module.exports = productController;