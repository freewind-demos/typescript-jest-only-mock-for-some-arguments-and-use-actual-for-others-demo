import {when} from 'jest-when';
import hello from './hello';
import {mocked} from 'ts-jest';

jest.mock('./hello');

const actualHello = jest.requireActual('./hello').default;

function mockHello() {
  const mockedHello = mocked(hello);
  beforeEach(() => {
    when(mockedHello).mockImplementation(actualHello);
  })
  return mockedHello;
}


describe('hello', () => {
  const mockedHello = mockHello();

  it('mock for argument 1', () => {
    when(mockedHello).calledWith(1).mockReturnValue('123123123');
    expect(hello(1)).toBe('123123123');
    expect(hello(2)).toBe('bbb');
  })

  it('mock for argument 2', () => {
    when(mockedHello).calledWith(2).mockReturnValue('123123123');
    expect(hello(1)).toBe('aaa');
    expect(hello(2)).toBe('123123123');
  })

})
