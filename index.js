const fs = require('fs');
const path = require('path');

function isProxyConfigured(projectPath) {
    const packageJsonPath = path.join(projectPath, 'package.json');
    const webpackConfigPath = path.join(projectPath, 'webpack.config.js');

    // Check if 'package.json' exists
    if (!fs.existsSync(packageJsonPath)) {
        return false;
    }

    const packageJson = require(packageJsonPath);

    // Check if 'proxy' field is present in 'package.json'
    if (packageJson.proxy) {
        return true;
    }

    // If applicable, check if a proxy is configured in 'webpack.config.js'
    if (fs.existsSync(webpackConfigPath)) {
        const webpackConfig = require(webpackConfigPath);
        if (webpackConfig.devServer && webpackConfig.devServer.proxy) {
            return true;
        }
    }

    return false;
}

module.exports = isProxyConfigured;
