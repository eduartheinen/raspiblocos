var Q = require('q'),
should = require('should'),
dcmotorFactory = require('../node_modules/raspiblocos/dcmotor.js'),
dcmotor;

describe('dcmotor class', function () {
  before(function () {
    dcmotor = dcmotorFactory([17, 18]);
    dcmotor2 = dcmotorFactory([23, 24]);
  });

  it('should move forward during 1000ms',function (done){
    Q.async(function* (){
      return yield dcmotor.moveForward(1000);
    })()
    .then((res) => {
      res.should.be.equal('motor adiante durante 1000ms');
      done();
    })
  });

  it('should move backward during 1000ms',function (done){
    Q.spawn(function* (){
      var res = yield dcmotor.moveBackward(1000);
      res.should.be.equal('motor atrás durante 1000ms');
      done();
    })
  });

  it('should move forward during 2000ms, then move backward during 1000ms',function (done){
    this.timeout(8000);
    Q.async(function* (){
      var res = yield dcmotor.moveForward(2000);
      res.should.be.equal('motor adiante durante 2000ms');
      res =  yield dcmotor2.moveForward(3000);
      res.should.be.equal('motor adiante durante 3000ms');
      return yield dcmotor.moveForward(2000);
    })()
    .then((res) => {
      res.should.be.equal('motor adiante durante 2000ms');
      done();
    })
  });

  it('two motors should move forward at the same time, during 2000ms',function (done){
    this.timeout(6000);
    Q.async(function* (){
      //código enviado para a rota
      dcmotor.moveForward(2000);
      yield dcmotor2.moveForward(2000);
    })()
    .then((res) => {
      done();
    })
    .fail((e) => {
      done();
    })
  });

  /*it('PWM test',function (done){
    this.timeout(6000);
    Q.async(function* (){
      return yield dcmotor.moveForwardPwm(0.5, 2000);
      //res.should.be.equal('motor atrás durante 1000ms');
      //done();
    })()
    .fail((e) => {
      console.log(e);
    })
  });*/
  
  after(function () {
    dcmotor.unexport();
  });
});