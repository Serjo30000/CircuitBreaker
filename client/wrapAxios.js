const axios = require('axios');

class WrapAxios {
    constructor() {
        this.instance = axios.create({
            validateStatus: function (s) {
                return s < 500;
            }
        });
        this.setupInterceptors();
    }

    setupInterceptors() {
        this.instance.interceptors.request.use(
            request => request,
            error => Promise.reject(error)
        );

        this.instance.interceptors.response.use(
            response => response,
            error => Promise.reject(error)
        );
    }

    request(method, url, data, config) {
        if (!(method && url)) {
            return Promise.reject('Empty values');
        }

        return this.instance({
            method: method,
            url: url,
            data: data,
            ...config
        });
    }
}

module.exports = WrapAxios;