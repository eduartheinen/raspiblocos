var express = require('express'),
router = express.Router(),
Q = require('q'),
sensorFactory = require('raspiblocos/sensor'),
dcmotorFactory = require('raspiblocos/dcmotor'),
gpioFactory = require('raspiblocos/gpio');
//singletons
//ports = new Array(),
//modules = new Array();

/* GET home page. */
router.post('/', function (req, res, next) {
  textToFunction(req.body.code)
  .then((code) => {
    Q.async(code)()
    .then(
      () => {res.status(200).json('done')},
      (e) => {console.log(e); return new Error(e)})
  })
  .fail((e) => {
    res.status(500).send({ error : e.message });
  });
});


function textToFunction(text) {
  var deferred = Q.defer();
  try {
    var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
    //console.log(String(res));
    deferred.resolve(new GeneratorFunction(text));
  } catch (e) {
    deferred.reject(new Error(e));
  }
  return deferred.promise
}

global.builder = {
  /*sensor : function(params){
    return sensorFactory(params);
  },*/
  dcmotor : function(params){
    return dcmotorFactory(params);
  },
  gpio : function(params){
    return gpioFactory(params);
  },
  sensor : function(params){
    return sensorFactory(params);
  }
};


/*var _builder = function(name, params){
  var mod = modules[name + '[' + params + ']'];
  if(mod == undefined){
    //portas ocupadas? ocupadas por o que?
    var factory = name + 'Factory()';
    mod = factory(params);
    modules['sensor[' + params + ']'] = mod;
    params.forEach(function(port){
      ports[port] = modules['sensor[' + params + ']'];
    });
    console.log(ports)
;l o   console.log(modules);
  }
  return mod;
}
var time = {
  wait: function(time){
    return Q.delay(time * 1000).then(function(){
      return 'paused for ' + time * 1000;
    })
  }
}*/

module.exports = router;
