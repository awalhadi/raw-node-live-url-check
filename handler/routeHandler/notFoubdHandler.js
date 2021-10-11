/**
 * Not found Handlar
 * 404 not found status
 */

 const handler = {};

 handler.notFoundeHandler = (requestPropertise, callback) => {
     console.log('404 not found handlar');
    callback(404, {
        res:"404 not found",
    })
 }
 
 module.exports = handler;