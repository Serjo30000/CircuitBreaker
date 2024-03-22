class CircuitBreaker {
    constructor(wrapAxios, timeout, failureThreshold, statusCircuitBreaker) {
        this.timeout = timeout
        this.failureCount = 0
        this.failureThreshold = failureThreshold
        this.state = statusCircuitBreaker
        this.last_failure_time = Date.now()
        this.wrapAxios = wrapAxios
    }

    request(method, url, data, config) {
        switch (this.state.currentState) {
            case this.state.OPEN:
                return this.handleOpenState();
            case this.state.HALF_OPEN:
                return this.handleHalfOpenState(method, url, data, config);
            case this.state.CLOSED:
                return this.handleClosedState(method, url, data, config);
            default:
                return Promise.reject(new Error("Non-existent status"));
        }
    }

    handleOpenState() {
        if (Date.now() - this.last_failure_time > this.timeout) {
            this.halfOpen();
            return Promise.reject(new Error('Circuit breaker is half-open'));
        } else {
            return Promise.reject(new Error('Circuit breaker is open'));
        }
    }

    handleHalfOpenState(method, url, data, config) {
        return this.wrapAxios.request(method, url, data, config)
            .then(response => {
                this.closeAndStatus();
                return response;
            })
            .catch(error => {
                this.open();
                return Promise.reject(error);
            });
    }

    handleClosedState(method, url, data, config) {
        return this.wrapAxios.request(method, url, data, config)
            .then(response => {
                this.close();
                return response;
            })
            .catch(error => {
                this.trip();
                return Promise.reject(error);
            });
    }

    trip() {
        this.failureCount++
        this.last_failure_time = Date.now()
        if (this.failureCount >= this.failureThreshold) {
            this.state.setState(this.state.OPEN)
        }
    }

    open() {
        this.last_failure_time = Date.now()
        this.state.setState(this.state.OPEN)
    }

    close() {
        this.failureCount = 0
    }

    halfOpen() {
        this.state.setState(this.state.HALF_OPEN)
    }

    closeAndStatus() {
        this.state.setState(this.state.CLOSED)
        this.failureCount = 0
    }
}

module.exports = CircuitBreaker;