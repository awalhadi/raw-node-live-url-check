/**
 * Request response helpers
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const route = require('../routes/web');
const { notFoundeHandler } = require('../handler/routeHandler/notFoubdHandler');


// modle scafolding
const handlar = {};

handlar.handleReqRes = (req, res) => {
    // handle requeuest
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const queryStringObject = parseUrl.query;
    const method = req.method.toLowerCase();
    const headersObject  = req.headers;

    const requestPropertise = {
        parseUrl,
        path,
        trimmedPath,
        queryStringObject,
        method,
        headersObject
    }
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    console.log("path:", trimmedPath, 'route:', route[trimmedPath]);
    const choosenHandler = route[trimmedPath] ?  route[trimmedPath] : notFoundeHandler;

    

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    })
    req.on('end', () => {
        realData += decoder.end();
        // res.end("test project");

        choosenHandler(requestPropertise, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};
    
            const payloadString = JSON.stringify(payload);
            res.writeHead(statusCode);
            res.end(payloadString);
        })
    })
};

module.exports = handlar;