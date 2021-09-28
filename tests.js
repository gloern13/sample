const expect = require('chai').expect;
const request = require('request');

let host = process.env.HOST || 'localhost'
let port = process.env.PORT || 3000

it('Main page status', function (done) {
    request(`http://${host}:${port}`, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        console.log(`http://${host}:${port} return status code 200`);
        done();
    });
});
