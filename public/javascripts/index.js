//as seen in: http://stackoverflow.com/questions/950087/include-a-javascript-file-in-another-javascript-file
function loadScript(url, callback){
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  script.onreadystatechange = callback;
  script.onload = callback;

  head.appendChild(script);
};

function sequentialLoader(url, i, callback){
  var next;
  if(i > 0){
    next = function(){
      sequentialLoader(url, i - 1, callback);
    }
  } else {
    next = callback;
  }
  loadScript(url[i], next);
};

function paralelLoader(url, callback){
  for(var i = 0; i < url.length; i++){
    loadScript(url[i], null);
  }
  callback();
}

var loadBlockly = function(callback){
  var array =
  ['/blockly/msg/js/pt-br.js',
  '/blockly/javascript_compressed.js',
  '/blockly/blocks_compressed.js',
  '/blockly/blockly_compressed.js'];

  sequentialLoader(array, array.length - 1, callback);
};

var loadCustomBlocks = function(customBlocks, callback){
  var path = ['/blockly/blocks/', '/blockly/generators/javascript/'];
  var url = [];

  for (var i = customBlocks.length - 1; i >= 0; i--) {
    for (var j = path.length - 1; j >= 0; j--) {
      url.push(path[j] + customBlocks[i]);
    }
  }
  //sequentialLoader(url, url.length -1, callback);
  paralelLoader(url, callback);
};
