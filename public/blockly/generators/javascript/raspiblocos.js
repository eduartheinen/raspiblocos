//gpio
Blockly.JavaScript['gpio'] = function(block) {
  var dropdown_number = block.getFieldValue('number');
  var value_instruction = Blockly.JavaScript.valueToCode(block, 'instruction', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "yield builder.gpio(" + dropdown_number + ")" + value_instruction + ";\n";
  return code;
};

Blockly.JavaScript['turnon'] = function(block) {
  var code = '.turnOn()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['turnoff'] = function(block) {
  var code = '.turnOff()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['getstate'] = function(block) {
  var dropdown_number = block.getFieldValue('number');
  var code = "yield builder.gpio(" + dropdown_number + ").getState()";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//dc-motor
Blockly.JavaScript['dcmotor'] = function(block) {
  var gpio1 = block.getFieldValue('gpio1');
  var gpio2 = block.getFieldValue('gpio2');
  var instruction = Blockly.JavaScript.valueToCode(block, 'instruction', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "yield builder.dcmotor([" + gpio1 + "," + gpio2 + "])" + instruction + ";\n";
  return code;
};

Blockly.JavaScript['moveforward'] = function(block) {
  var time = block.getFieldValue('time');
  var code = '.moveForward(' + time + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['movebackward'] = function(block) {
  var time = block.getFieldValue('time');
  var code = '.moveBackward(' + time + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['twodcmotor'] = function(block) {
  var gpio1 = block.getFieldValue('gpio1');
  var gpio2 = block.getFieldValue('gpio2');
  var gpio3 = block.getFieldValue('gpio3');
  var gpio4 = block.getFieldValue('gpio4');
  var instruction = Blockly.JavaScript.valueToCode(block, 'instruction', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "builder.dcmotor([" + gpio1 + "," + gpio2 + "])" + instruction;
  var code = code + "; yield builder.dcmotor([" + gpio3 + "," + gpio4 + "])" + instruction + ";\n";
  return code;
};

//sensor
Blockly.JavaScript['sensor'] = function(block) {
  var gpio1 = block.getFieldValue('gpio1');
  var gpio2 = block.getFieldValue('gpio2');
  var instruction = Blockly.JavaScript.valueToCode(block, 'instruction', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "yield builder.sensor([" + gpio1 + "," + gpio2 + "])" + instruction;
  console.log(code);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['measure'] = function(block) {
  var code = '.measure()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['return'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'return ' + value_var + ';\n';
  return code;
};

//dc-motor
Blockly.JavaScript['wait'] = function(block) {
  var time = block.getFieldValue('time');
  var code = "yield builder.wait(" + time + ");\n";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
