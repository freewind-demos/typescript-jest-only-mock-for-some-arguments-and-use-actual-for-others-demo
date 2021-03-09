import {when} from 'jest-when';
import {mockHello} from './hello.mock';

describe('hello', () => {
  const hello = mockHello();

  it('mock for argument 1', () => {
    when(hello).calledWith(1).mockReturnValue('123123123');
    expect(hello(1)).toBe('123123123');
    expect(hello(2)).toBe('bbb');
  })

  it('mock for argument 2', () => {
    when(hello).calledWith(2).mockReturnValue('123123123');
    expect(hello(1)).toBe('aaa');
    expect(hello(2)).toBe('123123123');
  })

})
