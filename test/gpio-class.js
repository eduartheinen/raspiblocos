var Q = require('q'),
should = require('should'),
gpioFactory = require('../node_modules/raspiblocos/gpio.js'),
gpio;

describe('gpio class', function(){
  before(function () {
    gpio = gpioFactory(17, 'out')
  });

  after(function () {
    gpio.unexport()
  });

  it('should return the port state',function(done){
    Q.async(function* (){
      return gpio.getState();
    })()
    .then((res) => {
      res.should.be.equal(0);
      done();
    })
  });

  it('should change the state to 1 through the function turnOn()',function(done){
    Q.async(function* (){
      return gpio.turnOn();
    })()
    .then((res) => {
      res.should.be.equal(1);
      done();
    });
  });

  it('should change the state to 0 through the function turnOff()',function(done){
    Q.async(function* (){
      return gpio.turnOff();
    })()
    .then((res) => {
      res.should.be.equal(0);
      done();
    });
  });
});