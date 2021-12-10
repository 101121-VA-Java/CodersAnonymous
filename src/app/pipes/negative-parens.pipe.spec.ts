import { NegativeParensPipe } from './negative-parens.pipe';

describe('NegativeParensPipe', () => {
  it('create an instance', () => {
    const pipe = new NegativeParensPipe();
    expect(pipe).toBeTruthy();
  });
});
