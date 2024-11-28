const crypto = require('crypto');

// Define the required parameters
const requestHost = 'https://api.ginee.com';
let httpMethod = 'POST';
const accessKey = '01e5c121f99a6a70';
const secretKey = '5885d824b2e39296';
const newline = '$';

// Create HMAC SHA256 hash using the secret key and the signature string
const createSignature = (requestUri, secretKey) => {
  console.log(httpMethod)
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
const sendRequest = async (requestUri, method = httpMethod, paramJson = null) => {
  httpMethod = method
  const headers = prepareHeaders(requestUri);
  try {
    if (method.toUpperCase() === 'GET' && paramJson !== null) {
      // Append query parameters to the URL
      const queryString = new URLSearchParams(paramJson).toString();
      requestUri += `?${queryString}`;
    }
    const payload = {
      method: method,
      headers: headers,
    }
    console.log(requestUri)
    if (method.toUpperCase() !== 'GET' && paramJson !== null) {
      payload.body = paramJson;
    }
    console.log(payload);
    const response = await fetch(requestHost + requestUri, payload);
    const data = await response.json();
		return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

module.exports = sendRequest;