var boot = require('../bin/www').boot,
shutdown = require('../bin/www').shutdown,
port = require('../bin/www').port,
should = require('should'),
Q = require('q'),
request = require('superagent');

function sendInstruction(data, route){
  var deferred = Q.defer();
  request.post('http://localhost:' + port + route)
  .set('Content-Type', 'application/json')
  .send(data)
  .end((error, res) => {
    res.status.should.be.equal(200);
    error ? deferred.reject(error) : deferred.resolve(res);
  });

  return deferred.promise;
}


describe('send code', function () {
  before(function () {
    boot();
  });

  after(function () {
    shutdown();
  });


  it('should create a dcmotor and moveforward for 1 second', function(done){
    this.timeout(3000);
    var code = '{"code": "yield builder.dcmotor([17,18]).moveForward(1000);"}';
    sendInstruction(code, '/raspiblocos')
    .then((res) => {
      res.body.should.be.equal('done');
      done();
    })
    .fail((e) => {
      console.log(e.error);
    });
  })

  it('should create a dcmotor, moveforward for 1 second, then move backward for 2 seconds and finally move forward for 3 seconds', function(done){
    this.timeout(6500);
    var code = '{"code": "var dcmotor = builder.dcmotor([17,18]); yield dcmotor.moveForward(1000); yield dcmotor.moveBackward(2000); yield dcmotor.moveForward(3000);"}';
    sendInstruction(code, '/raspiblocos')
    .then((res) => {
      res.body.should.be.equal('done');
      done();
    })
    .fail((e) => {
      console.log(e.error);
    });
  })
});