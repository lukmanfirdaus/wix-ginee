const sendRequest = require('../serviceGinee');

const orderController = {
	createOrder: async (req, res) => {
		const requestUri = '/openapi/order/v1/create-manual-order';
        const productData = `{
            "externalOrderSn": "1581170997811",
            "customerName": "15811709978",
            "customerMobile": "+6215811709978",
            "customerEmail": "15811709978@qq.com",
            "shopId": "SH659B7927CFF47E00019E7104",
            "logisticsInfos": [
                {
                    "logisticsProviderName": "Ninja Van ID Express",
                    "logisticsTrackingNumber": ""
                }
            ],
            "noteByBuyer": "15811709978",
            "mobileCountry": "ID",
            "shippingAddress": {
                "name": "15811709978",
                "phoneNumber": "+6215811709978",
                "zipCode": "15811709978",
                "fullAddress": "15811709978",
                "id": "OAI633055A95908010001C4005E",
                "mobileCountry": "ID",
                "country": "Indonesia",
                "province": "Bali",
                "city": "Buleleng",
                "district": "Sawan"
            },
            "senderAddress": {
                "name": "15811709978",
                "phoneNumber": "+6215811709978",
                "zipCode": "15811709978",
                "fullAddress": "15811709978",
                "country": "Indonesia",
                "province": "Bali",
                "city": "Buleleng",
                "district": "Sawan"
            },
            "orderItems": [
                {
                    "sku": "8809625870119",
                    "id": "WW658D3976C9E77C00014C7E39",
                    "warehouseId": "WW658D3976C9E77C00014C7E39",
                    "warehouseName": "Direct Sales_B2C",
                    "warehouseCode": "WH0295",
                    "weight": 4,
                    "actualPrice": 11,
                    "quantity": 1
                }
            ],
            "orderPayment": {
                "totalShippingFee": 1,
                "totalDiscounts": 1,
                "taxationFee": 1,
                "insuranceFee": 1,
                "serviceFee": 11,
                "commissionFee": 1,
                "currency": "IDR"
            },
            "payAmount": 1,
            "payAtDatetime": "2022-09-20T16:00:01.000Z",
            "paymentMethod": "PREPAY",
            "payRecords": [
                {
                    "payAtDatetime": "2024-03-31T03:55:28.669Z",
                    "payAmount": "3000",
                    "paySerialNumber": "15811709978",
                    "payAccountNumber": "VB1234567890",
                    "receiptAccountNumber": "VB1234567890",
                    "payRecordNote": "Fully paid"
                }
            ],
            "noteBySeller": "15811709978"
        }`;
		const data = await sendRequest(requestUri, 'POST', productData);
		res.send(data);
	},
};

module.exports = orderController;