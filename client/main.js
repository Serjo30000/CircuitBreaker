const AxiosCircuitBreaker = require('./axiosCircuitBreaker.js');
const StatusCircuitBreaker = require('./statusCircuitBreaker.js');

const timeout = 3000
const failureThreshold = 3
const statusCircuitBreaker = new StatusCircuitBreaker()
const axios_circuit_breaker = new AxiosCircuitBreaker(timeout, failureThreshold, statusCircuitBreaker)
const HOST = 'localhost'
const PORT = 5001
const url = `http://${HOST}:${PORT}/service`
const data = null
const method = "Get"
const config = null

async function makeRequests() {
    for (let i = 0; i < 100; i++) {
        try {
            const responseRes = await axios_circuit_breaker.request(method, url, data, config)
            console.log('Ответ сервера:', responseRes.status)
        }
        catch (error) {
            console.log(error.message)
        }
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
}

makeRequests();