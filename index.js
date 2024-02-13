// proxyconnect-test/index.js
function isProxyConfigured(projectPath) {
    // Check if 'package.json' exists
    try {
        const packageJsonPath = projectPath + '/package.json';
        const packageJson = require(packageJsonPath);

        // Check if 'proxy' field is present in 'package.json'
        if (packageJson.proxy) {
            return true;
        }
    } catch (error) {
        // Handle the error (e.g., log it) or ignore it, depending on your needs
    }

    // If applicable, check if a proxy is configured in 'webpack.config.js'
    try {
        const webpackConfigPath = projectPath + '/webpack.config.js';
        const webpackConfig = require(webpackConfigPath);

        if (webpackConfig.devServer && webpackConfig.devServer.proxy) {
            return true;
        }
    } catch (error) {
        // Handle the error (e.g., log it) or ignore it, depending on your needs
    }

    return false;
}

module.exports = isProxyConfigured;
