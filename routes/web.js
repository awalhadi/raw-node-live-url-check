/**
 * web route
 */


// dependency
const { sampleHandler } = require("../handler/routeHandler/routeHandler")

// module scafolfing
 const route = {
    about: sampleHandler,
 }


 module.exports = route;


//  "start": "NODE_ENV=staging nodemon index",
//     "production": "NODE_ENV=production nodemon index"