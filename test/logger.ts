import { should } from 'chai';

import { createLogger } from '../src/';

should();


describe('createLogger', () => {
    it('should create a logger', () => {
        const logger = createLogger('debug');

        ((): void => {
            logger.info('hello world');
            logger.log('info', 'hello from log');
        }).should.not.throw();
        ((): void => {
            logger.debug('hello world');
            logger.log('debug', 'hello from log');
        }).should.not.throw();
        ((): void => {
            logger.error('hello world');
            logger.log('error', 'hello from log');
        }).should.not.throw();
        ((): void => {
            logger.warn('hello world');
            logger.log('warn', 'hello from log');
        }).should.not.throw();
        ((): void => {
            logger.verbose('hello world');
            logger.log('verbose', 'hello from log');
        }).should.not.throw();
    });
});
