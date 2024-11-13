const sendRequest = require("../serviceGinee");

const orderController = {
  createOrder: async (req, res) => {
    const requestUri = "/openapi/order/v1/create-manual-order";
    const wixOrderData = `{
            "invoices": [],
            "payments": [
              {
                "amount": {
                  "value": "238980.0",
                  "currency": "IDR"
                },
                "creditCardLastDigits": "",
                "_id": "1ab6f8c1-b1a1-43bc-9f7d-9504f9eefb1e",
                "_createdDate": "2024-11-11T10:10:32.799Z"
              }
            ],
            "orderNumber": "10008",
            "purchaseFlowId": "60c668f4-54cb-4397-b8f0-d1f3df259ecb",
            "lineItems": [
                {
                "quantity": 1,
                "sku": "8809625870119",
                "image": "https://static.wixstatic.com/media/092bde_64ff8526b5e24c8c8b0bfd831f303377~mv2.jpg/v1/fit/w_640,h_640,q_90/file.jpg",
                "totalPriceBeforeTax": {
                    "value": "198980.00",
                    "currency": "IDR"
                },
                "taxRate": "0.0000",
                "shippable": true,
                "totalPrice": {
                    "value": "198980.00",
                    "currency": "IDR"
                },
                "catalogItemId": "819bad46-b73f-7aeb-1bc6-0a1f10ed34e5",
                "taxAmount": {
                    "value": "0.00",
                    "currency": "IDR"
                },
                "totalDiscount": {
                    "value": "0.00",
                    "currency": "IDR"
                },
                "itemType": "PHYSICAL",
                "rootCatalogItemId": "819bad46-b73f-7aeb-1bc6-0a1f10ed34e5",
                "catalogId": "215238eb-22a5-4c36-9e7b-e7c08025e04e",
                "itemName": "Bio Runner2",
                "descriptionLines": [],
                "_id": "00000000-0000-0000-0000-000000000001"
                }
            ],
            "paymentStatus": "NOT_PAID",
            "refunds": [],
            "shippingInfo": {
                "price": {
                "value": "40000",
                "currency": "IDR"
                },
                "taxRate": "0.0000",
                "totalPriceAfterTax": {
                "value": "40000.00",
                "currency": "IDR"
                },
                "logistics": {
                "deliveryTime": "3-4",
                "shippingDestination": {
                    "address": {
                    "city": "Kota Bogor",
                    "countryFullname": "Indonesia",
                    "subdivisionFullname": "West Java",
                    "addressLine": "Kota Bogor",
                    "country": "ID",
                    "postalCode": "16720",
                    "subdivision": "ID-JB"
                    },
                    "contactDetails": {
                    "firstName": "lukman",
                    "lastName": "firdaus",
                    "phone": "082258012365"
                    }
                  }
                },
                "carrierId": "86575bcf-6208-44ba-8c84-c92ebd6f2f10",
                "region": "국내",
                "totalTax": {
                  "value": "0.00",
                  "currency": "IDR"
                },
                "title": "JNE Trucking"
            },
            "context": {
                "metaSiteId": "a83a8f86-c8a1-453b-9f94-44924a363e9e",
                "activationId": "8918ab41-b800-4bbd-837e-96d7d524f734"
            },
            "channelType": "WEB",
            "checkoutCustomFields": {},
            "_context": {
                "app": {
                "_id": "1380b703-ce81-ff05-f115-39571d94dfcd"
                },
                "trigger": {
                "key": "wix_e_commerce-order_placed"
                },
                "configuration": {
                "_id": "18f5079a-0603-4d8b-b3ff-a10acef0ea41"
                },
                "activation": {
                "_id": "8918ab41-b800-4bbd-837e-96d7d524f734"
                }
            },
            "appliedDiscounts": [],
            "attributionSource": "UNSPECIFIED",
            "contact": {
                "name": {
                "first": "Lukman",
                "last": "Firdaus"
                },
                "email": "lukmanfrdas@gmail.com",
                "emails": [
                {
                    "tag": "UNTAGGED",
                    "email": "lukmanfrdas@gmail.com",
                    "primary": true,
                    "_id": "3ed932ee-cb79-4950-a538-4c13168e9364"
                }
                ],
                "phone": "",
                "_updatedDate": "2024-11-11T10:10:49.275Z",
                "_createdDate": "2024-10-09T02:02:06.205Z"
            },
            "weightUnit": "KG",
            "priceSummary": {
                "additionalFees": {
                "value": "0.00",
                "currency": "IDR"
                },
                "tax": {
                "value": "0.00",
                "currency": "IDR"
                },
                "total": {
                "value": "238980.00",
                "currency": "IDR"
                },
                "subtotal": {
                "value": "198980.00",
                "currency": "IDR"
                },
                "discount": {
                "value": "0.00",
                "currency": "IDR"
                },
                "shipping": {
                "value": "40000.00",
                "currency": "IDR"
                }
            },
            "buyerEmail": "lukmanfrdas@gmail.com",
            "status": "APPROVED",
            "contactId": "b849d91c-0632-4934-92f7-f6bf30f5a667",
            "billingInfo": {
                "address": {
                "city": "Kota Bogor",
                "countryFullname": "Indonesia",
                "subdivisionFullname": "West Java",
                "addressLine": "Kota Bogor",
                "country": "ID",
                "postalCode": "16720",
                "subdivision": "ID-JB"
                },
                "contactDetails": {
                "firstName": "lukman",
                "lastName": "firdaus",
                "phone": "082258012365"
                }
            },
            "fulfillmentStatusesAggregate": [],
            "catalogs": [
                "215238eb-22a5-4c36-9e7b-e7c08025e04e"
            ],
            "currency": "IDR",
            "balanceSummary": {
                "balance": {
                "value": "238980.00",
                "currency": "IDR"
                },
                "paid": {
                "value": "0",
                "currency": "IDR"
                },
                "refunded": {
                "value": "0",
                "currency": "IDR"
                }
            },
            "checkoutId": "07ac2ab2-c27c-42f5-8830-4f8efda16e4d",
            "buyerLanguage": "id",
            "_id": "a1589b9d-653f-4d67-b56b-f2999d60560c",
            "_createdDate": "2024-11-11T10:10:31.679Z"
    }`;
    const parseData = JSON.parse(wixOrderData);
    const orderData = `{
			"externalOrderSn": "1581170997849",
			"customerName": "${parseData.contact.name.first} ${parseData.contact.name.last}",
			"customerMobile": "${parseData.shippingInfo.logistics.shippingDestination.contactDetails.phone}",
			"customerEmail": "${parseData.contact.email}",
			"shopId": "SH659B7927CFF47E00019E7104",
			"logisticsInfos": [
				{
					"logisticsProviderName": "${parseData.shippingInfo.title}",
					"logisticsTrackingNumber": ""
				}
			],
			"noteByBuyer": "15811709978",
			"mobileCountry": "${parseData.shippingInfo.logistics.shippingDestination.address.country}",
			"shippingAddress": {
				"name": "
          ${parseData.shippingInfo.logistics.shippingDestination.contactDetails.firstName}
          ${parseData.shippingInfo.logistics.shippingDestination.contactDetails.lastName}
        ",
				"phoneNumber": "${parseData.shippingInfo.logistics.shippingDestination.contactDetails.phone}",
				"zipCode": "${parseData.shippingInfo.logistics.shippingDestination.address.postalCode}",
        "fullAddress": "
          ${parseData.shippingInfo.logistics.shippingDestination.address.addressLine},
          ${parseData.shippingInfo.logistics.shippingDestination.address.city}, 
          ${parseData.shippingInfo.logistics.shippingDestination.address.subdivisionFullname},
          ${parseData.shippingInfo.logistics.shippingDestination.address.countryFullname}
        ",
				"id": "OAI633055A95908010001C4005E",
				"mobileCountry": "${parseData.shippingInfo.logistics.shippingDestination.address.country}",
				"country": "${parseData.shippingInfo.logistics.shippingDestination.address.countryFullname}",
				"province": "${parseData.shippingInfo.logistics.shippingDestination.address.subdivisionFullname}",
				"city": "${parseData.shippingInfo.logistics.shippingDestination.address.city}",
				"district": "${parseData.shippingInfo.logistics.shippingDestination.address.addressLine}"
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
			"orderItems": ${JSON.stringify(
        parseData.lineItems.map((item) => ({
          sku: item.sku,
          id: item._id,
          warehouseId: "WW658D3976C9E77C00014C7E39",
          warehouseName: "Direct Sales_B2C",
          warehouseCode: "WH0295",
          weight: item.quantity,
          actualPrice: parseFloat(item.totalPriceBeforeTax.value),
          quantity: item.quantity,
        }))
      )},
			"orderPayment": {
				"totalShippingFee": "${parseFloat(parseData.shippingInfo.price.value)}",
				"totalDiscounts": "${parseFloat(parseData.priceSummary.discount.value)}",
				"taxationFee": "${parseFloat(parseData.priceSummary.tax.value)}",
				"insuranceFee": 0,
				"serviceFee": 0,
				"commissionFee": 0,
				"currency": "${parseData.priceSummary.total.currency}"
			},
			"payAmount": "${parseFloat(parseData.priceSummary.total.value)}",
			"payAtDatetime": "${parseData._createdDate}",
			"paymentMethod": "PREPAY",
			"payRecords": ${JSON.stringify(
        parseData.payments.map((item) => ({
					payAtDatetime: item._createdDate,
					payAmount: parseFloat(item.amount.value),
					paySerialNumber: "15811709978",
					payAccountNumber: "VB1234567890",
					receiptAccountNumber: "VB1234567890",
					payRecordNote: "Fully paid"
        }))
      )},
			"noteBySeller": "15811709978"
	  }`;
    const data = await sendRequest(requestUri, "POST", orderData);
    res.send(data);
  },
};
module.exports = orderController;
