const WrapAxios = require('./wrapAxios.js');
const CircuitBreaker = require('./circuitBreaker.js');

class AxiosCircuitBreaker {
    constructor(timeout, failureThreshold, statusCircuitBreaker){
        let wrapAxios = new WrapAxios()
        this.circuitBreaker = new CircuitBreaker(wrapAxios, timeout, failureThreshold, statusCircuitBreaker)
    }

    request(method, url, data, config){
        return this.circuitBreaker.request(method, url, data, config)
    }
}

module.exports = AxiosCircuitBreaker;