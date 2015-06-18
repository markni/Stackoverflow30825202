var Client = function(config) {

  this.config = config;
  return this;

};


Client.prototype.doWork = function(a, b) {
  console.log('doing nothing but it works!');
};

module.exports.createClient = function(config) {
  return new Client(config);
};
