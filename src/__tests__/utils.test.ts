// Example test for utility functions
import { capitalize } from '../utils';

describe('Utils', () => {
  it('capitalizes a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});