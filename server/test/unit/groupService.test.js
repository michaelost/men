const sinon = require('sinon');
const expect = require('chai').expect;
const appRoot = process.cwd();

const createService = require(appRoot + '/server/services/group.js');

describe('userService test', function () {
  const connection = {};
  connection.query = function () { return Promise.resolve([]) }
  let st = sinon.stub(connection, 'query');
  const groupService = createService(connection);

  describe('getAll', function (done) {
    it('should get all groups', function (done) {
      const query = { };
      const supposedCalledString = 'SELECT name FROM groups'; 
      groupService.getAll(query).then(result => {
        console.log('result', result);
        expect(st.calledWith(supposedCalledString)).to.equal(true);
        done();
      }).catch(err => {
        done(err);
      });
    })
    
  });
});