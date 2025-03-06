import { flip, mapApiOptions } from './llm-options';

describe('mapApiOptions', () => {
  it('should return an empty object if no options are provided', () => {
    const result = mapApiOptions();
    expect(result).toEqual({});
  });

  it('should map the provided options using the provided mapping', () => {
    const options = { foo: 'bar', baz: 'qux' };
    const mapping = { foo: 'mappedFoo', baz: 'mappedBaz' };
    const result = mapApiOptions(options, mapping);
    expect(result).toEqual({ mappedFoo: 'bar', mappedBaz: 'qux' });
  });

  it('should include options that are not present in the mapping', () => {
    const options = { foo: 'bar', baz: 'qux' };
    const mapping = { foo: 'mappedFoo' };
    const result = mapApiOptions(options, mapping);
    expect(result).toEqual({ mappedFoo: 'bar', baz: 'qux' });
  });

  it('should handle nested options using dot notation in the mapping', () => {
    const options = { nested: { foo: 'bar', baz: 'qux' } };
    const mapping = { 'nested.foo': 'mappedNestedFoo' };
    const result = mapApiOptions(options, mapping);
    expect(result).toEqual({ 'mappedNestedFoo': 'bar', nested: {baz: 'qux'} });
  });

  it('should not include nested options that are not present in the mapping', () => {
    const options = { nested: { foo: 'bar', baz: 'qux' } };
    const mapping = { 'nested.baz': 'mappedNestedBaz' };
    const result = mapApiOptions(options, mapping);
    expect(result).toEqual({ 'mappedNestedBaz': 'qux', nested: {foo: 'bar'} });
  });

  it('should include options map with array', () => {
    const options = { foo: 'bar', baz: 'qux' };
    const mapping = { foo: ['mappedFoo', 'mappedFoo2'] };
    const result = mapApiOptions(options, mapping);
    expect(result).toEqual({ mappedFoo: 'bar', mappedFoo2: 'bar', baz: 'qux' });
  });
});

describe('flip function', () => {
  it('should flip key-value pairs correctly when there are no duplicate values', () => {
    const input = { a: 'x', b: 'y', c: 'z' };
    const expected = { x: 'a', y: 'b', z: 'c' };
    expect(flip(input)).toEqual(expected);
  });

  it('should handle duplicate values by storing keys in an array', () => {
    const input = { a: 'x', b: 'x', c: 'y' };
    const expected = { x: ['a', 'b'], y: 'c' };
    expect(flip(input)).toEqual(expected);
  });

  it('should ignore specified keys when provided with ignoreKeys', () => {
    const input = { a: 'x', b: 'y', c: 'z' };
    const ignoreKeys = ['b'];
    const expected = { x: 'a', z: 'c' };
    expect(flip(input, ignoreKeys)).toEqual(expected);
  });

  it('should return an empty object when input is empty', () => {
    const input = {};
    const expected = {};
    expect(flip(input)).toEqual(expected);
  });

  it('should handle all keys being ignored', () => {
    const input = { a: 'x', b: 'y', c: 'z' };
    const ignoreKeys = ['a', 'b', 'c'];
    const expected = {};
    expect(flip(input, ignoreKeys)).toEqual(expected);
  });

  it('should not add duplicate keys to the array when values are repeated', () => {
    const input = { a: 'x', b: 'x', c: 'x' };
    const expected = { x: ['a', 'b', 'c'] };
    expect(flip(input)).toEqual(expected);
  });

  it('should handle mixed types of values (string and number)', () => {
    const input = { a: '1', b: '2', c: '1' };
    const expected = { '1': ['a', 'c'], '2': 'b' };
    expect(flip(input)).toEqual(expected);
  });
});
