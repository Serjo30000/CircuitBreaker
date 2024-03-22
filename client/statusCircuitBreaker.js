class StatusCircuitBreaker {
    constructor() {
        this.CLOSED = 'CLOSED';
        this.OPEN = 'OPEN';
        this.HALF_OPEN = 'HALF-OPEN';
        this.currentState = this.CLOSED;
    }

    setState(newState) {
        if (Object.values(this).includes(newState)) {
            this.currentState = newState;
        }
    }
}

module.exports = StatusCircuitBreaker;