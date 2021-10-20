import { OnlyFirstWordsPipe } from './only-first-words.pipe';

describe('OnlyFirstWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new OnlyFirstWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
