const assert = require('assert');

describe('CalculService',function(){

  describe('#add',function(){
    it('should add values',function(){
      let result = CalculService.add(1,5);
      assert.equal(result,6);
    });
  });
  describe('#sub',function(){
    it('should substract values',function(){
      let result = CalculService.sub(6,5);
      assert.equal(result,1);
    });
  });
  describe('#mul',function(){
    it('should multiple values',function(){
      let result = CalculService.mul(2,5);
      assert.equal(result,10);
    });
  });
  describe('#div',function(){
    it('should dividade values',function(){
      let result = CalculService.prct(6,2);
      assert.equal(result,3);
    });
  });
});
