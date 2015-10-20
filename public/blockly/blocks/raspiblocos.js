var opt = [["2", "2"], ["3", "3"], ["4", "4"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["14", "14"], ["15", "15"], ["17", "17"], ["18", "18"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"]];

//GPIO
Blockly.Blocks['gpio'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);
    this.appendDummyInput()
        .appendField("gpio");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(opt), "number");
    this.appendValueInput("instruction");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['turnon'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);
    this.appendDummyInput()
        .appendField("ligar");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['turnoff'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);
    this.appendDummyInput()
        .appendField("desligar");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['getstate'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);
    this.appendDummyInput()
        .appendField("gpio");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(opt), "number");
    this.appendDummyInput()
        .appendField("retornar estado");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

//DC-MOTOR
Blockly.Blocks['dcmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor dc");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(opt), "gpio1")
        .appendField(new Blockly.FieldDropdown(opt), "gpio2")
    this.appendValueInput("instruction");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['moveforward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mover adiante");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("100"), "time")
        .appendField("ms");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['movebackward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mover atrás");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("100"), "time")
        .appendField("ms");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['twodcmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motores dc");
    this.appendDummyInput()
        .appendField("motor1")
        .appendField(new Blockly.FieldDropdown(opt), "gpio1")
        .appendField(new Blockly.FieldDropdown(opt), "gpio2");
    this.appendDummyInput()
        .appendField("motor2")
        .appendField(new Blockly.FieldDropdown(opt), "gpio3")
        .appendField(new Blockly.FieldDropdown(opt), "gpio4");
    this.appendValueInput("instruction");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//sensor
Blockly.Blocks['sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sensor de proximidade");
    this.appendDummyInput()
        .appendField("echo:")
        .appendField(new Blockly.FieldDropdown(opt), "gpio1")
        .appendField("trigger:")
        .appendField(new Blockly.FieldDropdown(opt), "gpio2")
    this.appendValueInput("instruction");
    this.setOutput(true);
    this.setInputsInline(true);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['measure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("medir distância");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return");
    this.appendValueInput("var");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
