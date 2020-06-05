import { should } from 'chai';

import { createLogger } from '../src/';

should();


describe('createLogger', () => {
    it('should create a logger', () => {
        const logger = createLogger('debug');

        ((): void => { logger.info('hello world') }).should.not.throw();
        ((): void => { logger.debug('hello world') }).should.not.throw();
        ((): void => { logger.error('hello world') }).should.not.throw();
        ((): void => { logger.warn('hello world') }).should.not.throw();
        ((): void => { logger.verbose('hello world') }).should.not.throw();
    });
});
