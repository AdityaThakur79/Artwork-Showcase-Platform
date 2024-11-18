const webpack = require("webpack");

module.exports = {
    // ... other Webpack configuration
    resolve: {
        fallback: {
            zlib: false,
            querystring: false,
            path: false,
            crypto: false,
            stream: false,
        },
    },
};
