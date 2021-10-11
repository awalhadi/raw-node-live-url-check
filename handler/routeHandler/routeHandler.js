/**
 * Routed Handlar
 */

const routeHandler = {};

routeHandler.sampleHandler = (requestPropertise, callback) => {

    console.log('requestPropertise :', requestPropertise);
    callback(200, {
        res:"this fro sample handler",
    })
}

module.exports = routeHandler;