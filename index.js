/**
 * title: learn with sumit simple raw node project
 * Author: Md. A Awal Hadi
 */

const http = require('http');
const { handleReqRes } = require('./helpers/ReqResHelpers');
const environment = require('./helpers/Environments');



// app scafolder
const app = {};

// // app config
// app.config = {
//     port: 3000,
// };

// console.log("env",environment);
// create a server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`server listening from port: ${environment.port}`);
    });
};

// handle request and response
app.handleReqRes = handleReqRes

// start server
app.createServer();
