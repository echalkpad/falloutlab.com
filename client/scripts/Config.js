var Config = (function () {
    function Config() {
        this.apiUrl = 'https://api.falloutlab.local';
        if (window.location.host === 'falloutlab.com') {
            this.apiUrl = 'https://api.falloutlab.com';
        }
        if (window.location.host === 'falloutlab.local') {
            this.apiUrl = 'http://api.falloutlab.local';
        }
        if (window.location.host === '127.0.0.1:8080') {
            this.apiUrl = 'http://127.0.0.1:3000';
        }
        if (window.location.host === 'localhost:8080') {
            this.apiUrl = 'http://localhost:3000';
        }
    }
    return Config;
})();
exports.Config = Config;
