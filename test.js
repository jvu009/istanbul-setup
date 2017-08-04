import funcs from './index';

require('chai').should();

describe('index.js', () => {
    describe('sum', () => {
        it('should return the sum', () => {
            funcs.sum([1, 2]).should.equal(3);
        });
    });

    describe('avg', () => {
        it('should return the average', () => {
            funcs.avg([1,2,3,4,5]).should.equal(3);
        });
    });
});
