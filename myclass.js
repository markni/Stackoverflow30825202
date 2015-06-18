var client = require('./extern').createClient('config string');

//constructor
function MyClass(){
}

MyClass.prototype.doSomething = function(a,b){
  client.doWork(a+b);
};

module.exports = new MyClass();