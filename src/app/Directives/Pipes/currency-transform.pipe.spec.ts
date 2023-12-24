import { CurrencyTransformPipe } from './currency-transform.pipe';

describe('CurrencyTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
