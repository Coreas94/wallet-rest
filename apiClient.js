const axios = require("axios");

const apiClient = axios.create({
   baseURL: "http://127.0.0.1:8000/api/wallet",
	timeout: 5000,
});

module.exports = apiClient;
