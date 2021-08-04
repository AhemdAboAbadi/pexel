const request = require('supertest');
const router = require('./router');
const filter = require('./utils');
const data = require('./data.json');

test('when request home page get 200 status code', (done) => {
  request(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html')
    .end((err, data) => {
      if (err) {
        done(err);
      } else {
        return done();
      }
    });
});
// test filter function
test('when user type value should this function return array', () => {
  const expected = [
    'reed', 'ruit', 'robe', 'rural',
    'rost', 'railing', 'radio', 'roadsign',
    'railway', 'road', 'ractal', 'radiotelescope',
    'rail', 'renchtoast', 'renchdoor', 'room',
    'ruit', 'rose', 'railing', 'rose',
    'redfox', 'room', 'redsky', 'ruit',
    'ruins', 'rog', 'ruit', 'ruit',
    'rose', 'redsky', 'reptile', 'ripple',
    'railing', 'rock', 'rubble', 'rural',
    'ruit', 'raspberry', 'rose', 'roadsign',
    'rubble', 'roof', 'reighter', 'reptile',
    'reed', 'ries', 'ruit', 'rope',
    'rake', 'redfox', 'ruit', 'roadsign',
    'robe', 'renchhorn', 'roof', 'renchbulldog',
    'rutabaga', 'runningshoe', 'reef', 'redsky',
    'roadsign', 'rural', 'raincoat', 'ridge',
    'railing', 'reptile', 'reading', 'ranch',
    'rural', 'road', 'roof', 'rodent',
    'rooster', 'riendly', 'retriever', 'resting',
    'rubble', 'rural', 'road', 'robe',
    'roadsign', 'ripple',
  ];
  const actual = filter('r', data);
  expect(expected).toEqual(actual);
});
