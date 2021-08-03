const request = require('supertest');
const router = require('./router.js');

test("when request home page get 200 status code", (done) => {
    request(router)
        .get('/')
        .expect(200)
        .expect('Content-Type', 'text/html')
        .end((err, data) => {
            if (err) {
                done(err);
                return;
            } else {
                return done();
            }
        });
})