import { should } from 'chai';

import { createLogger } from '../src/';

should();


describe('createLogger', () => {
    it('should create a logger', () => {
        const logger = createLogger('debug');

        ((): void => { logger.info('hello world') }).should.not.throw();
    });
});
