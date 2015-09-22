var Q = require('q'),
should = require('should'),
sensorFactory = require('../node_modules/raspiblocos/sensor.js'),
sensor;

describe('proximity sensor class', function () {
  before(function () {
    sensor = sensorFactory([17,18]);
  });

  it('should measure the distance',function (done){
    Q.async(function* (){
      return yield sensor.measure();
    })()
    .then((res) => {
      console.log(res);
      res.should.be.a.number;
      done();
    })
  });
});
