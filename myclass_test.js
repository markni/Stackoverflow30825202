var sinon = require('sinon');
var assert = require('assert');
var MyClass = require('./myclass');
var client = require('./extern').createClient('config string');

// All we need to know is doWork() being called.
describe('doSomething method', function() {
  it('should call client.doWork()',function(){
    var stub = sinon.stub(client,'doWork');
    MyClass.doSomething();
    assert(stub.calledOnce); //not working! returns false
  })
});