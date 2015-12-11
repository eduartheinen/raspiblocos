var express = require('express');
var router = express.Router();
var Q = require('q');
// var sensorFactory = require('raspiblocos/sensor');
// var dcmotorFactory = require('raspiblocos/dcmotor');
// var gpioFactory = require('raspiblocos/gpio');
// var buttonFactory = require('raspiblocos/button');

/*
TODO
 - singletons
*/

/* As the functions are called inside a dinamically
created GeneratorFunction, we needed to declare the 'component
builders', 'send' and 'wait' functions in the global scope */
global.wait = require('raspiblocos/wait');
global.print = require('raspiblocos/print');

global.builder = {
  dcmotor: function(params) {
    return dcmotorFactory(params);
  },

  gpio: function(params) {
    return gpioFactory(params);
  },

  sensor: function(params) {
    return sensorFactory(params);
  },

  button: function(params) {
    return buttonFactory(params);
  }
};

/* receive and handle instructions */
router.post('/', function(req, res, next) {
  //turns the request text in GeneratorFunctions
  textToFunction(req.body.code)
    .then((code) => {
      //then runs it and sends succes or error messages back to view
      Q.async(code)()
        .then(
          (mes) => {
            mes != undefined ? res.status(200).json(mes) : res.status(200).json('done');
          }, (e) => {
            console.log(e);
            return new Error(e);
          });
    })
    .fail((e) => {
      res.status(500).send({
        error: e.message
      });
    });
});

function textToFunction(text) {
  var deferred = Q.defer();
  try {
    //gets the GeneratorFunction constructor
    var GeneratorFunction = Object.getPrototypeOf(function*() {}).constructor;

    //and uses it to declare a new function with the text received
    deferred.resolve(new GeneratorFunction(text));
  } catch (e) {
    deferred.reject(new Error(e));
  };

  return deferred.promise;
};

module.exports = router;
