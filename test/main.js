var chai = require('chai'),
  expect = chai.expect,
  util   = require('util'),
  sinon  = require('sinon'),
  sinonChai = require('sinon-chai');

var envVars = require('./env-vars'),
  access_token = envVars['BLIZZARD_ACCESS_TOKEN'];

chai.use(sinonChai);

var Overwatch = require('../main.js'),
  client = new Overwatch(access_token, 'enUS');

describe('Overwatch', function(){
  describe('when instantiated', function(){
    it('returns a client', function(){
      expect(client).to.be.an.instanceof(Overwatch);
    });
  });

  describe('when instantiated with a locale', function(){
    it('has a locale', function(){
      var client = new Overwatch(access_token, 'jaJP');
      expect(client.locale).to.be.equal('jaJP');
    });
  });

  describe('when instantiated without a locale', function(){
    it('has a default locale', function(){
      var client = new Overwatch(access_token);
      expect(client.locale).to.not.be.undefined;
    });
  });

  describe('when instantiated without an Access Token', function(){
    it('throws Access Token error', function(){
      var fn = function(){ new Overwatch(); }
      expect(fn).to.throw('CustomError', 'No Access Token set!');
    });
  });
});
