/**
 * App environment
 */


// module scafolding


const environments = {};

environments.staging = {
    port: 4000,
    envName: 'staging'
}

environments.production = {
    port: 5000,
    envName: 'production'
}

const currentEnvironments = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

const environmentToExports = typeof(environments[currentEnvironments]) === 'object' ? environments[currentEnvironments] : environments.staging;

module.exports = environmentToExports;