import axios from 'axios';

export default axios.create({
    baseURL: `${process.env.BASE_URL}`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE", // Required for cookies, authorization headers with HTTPS
        "Access-Control-Allow-Headers": "X-Requested-With,content-type", // Required for cookies, authorization headers with HTTPS
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    }
})