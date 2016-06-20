var chai = require('chai'),
  expect = chai.expect,
  util   = require('util'),
  sinon  = require('sinon'),
  sinonChai = require('sinon-chai');

var envVars = require('./env-vars'),
  access_token = envVars['BLIZZARD_ACCESS_TOKEN'];

var Overwatch = require('../main.js'),
  client = new Overwatch(access_token, 'enUS');

describe('Overwatch Endpoints', function(){});
