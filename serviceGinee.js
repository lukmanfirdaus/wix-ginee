const crypto = require('crypto');

// Define the required parameters
const requestHost = 'https://api.ginee.com';
const httpMethod = 'POST';
const accessKey = '01e5c121f99a6a70';
const secretKey = '5885d824b2e39296';
const newline = '$';

// Create HMAC SHA256 hash using the secret key and the signature string
const createSignature = (requestUri, secretKey) => {
  const signStr = httpMethod + newline + requestUri + newline;
  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(signStr);
  const signature = hmac.digest('base64'); // Base64 encode the HMAC hash
  return `${accessKey}:${signature}`;
};

// Prepare the headers
const prepareHeaders = (requestUri) => {
  const authorization = createSignature(requestUri, secretKey);
  console.log(authorization);
  return {
    'Authorization': authorization,
    'Content-Type': 'application/json',
    'X-Advai-Country': 'ID'
  };
};

// Send the HTTP request using the fetch API
const sendRequest = async (requestUri, paramJson) => {
  const headers = prepareHeaders(requestUri);
  try {
    const response = await fetch(requestHost + requestUri, {
      method: httpMethod,
      headers: headers,
      body: paramJson,
    });

    // Parse the response if needed
    const data = await response.json();
    console.log(data);
		return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

module.exports = sendRequest;