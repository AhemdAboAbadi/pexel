/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');
const router = require('../router');
const filter = require('../utils/filter');
const dataObject = require('../data.json');

test('when request home page get 200 status code', (done) => {
  request(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html')
    .end((err) => {
      if (err) {
        return done(err);
      }
      return done();
    });
});
test('when request search with query should return json', (done) => {
  const dataExpect = [
    'tree',
    'trademark',
    'tulip',
    'transportation',
    'treetrunk',
  ];
  request(router)
    .get('/search?q=t')
    .expect(200)
    .expect('Content-Type', 'application/json')
    .end((err, data) => {
      if (err) {
        return done(err);
      }
      expect(dataExpect).toEqual(data.body);
      return done();
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
  const actual = filter('r', dataObject);
  expect(expected).toEqual(actual);
});
