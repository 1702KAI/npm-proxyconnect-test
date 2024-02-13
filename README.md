# proxyconnect-test

A simple npm package to check if a project is configured to proxy correctly.

## Installation

npm install proxyconnect-test 

## Example Usage

const isProxyConfigured = require('proxyconnect-test');

const projectPath = '/path/to/your/project';

if (isProxyConfigured(projectPath)) {
    console.log('Proxy is configured correctly.');
} else {
    console.log('Proxy is not configured correctly.');
}
