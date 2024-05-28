import { mapApiOptions } from './llm-options';

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
});