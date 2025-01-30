import { emailApi } from './email-api';

describe('emailApi', () => {
  it('should work', () => {
    expect(emailApi()).toEqual('email-api');
  });
});
