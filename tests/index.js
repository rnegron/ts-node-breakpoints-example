const nock = require('nock')
const { beforeEach } = require("mocha");


beforeEach(async () => {
    nock.disableNetConnect();
    nock.enableNetConnect('127.0.0.1');
  });
