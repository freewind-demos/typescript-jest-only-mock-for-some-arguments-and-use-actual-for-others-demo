import {mocked} from 'ts-jest/utils';
import {hello} from './hello';
import {when} from 'jest-when';

jest.mock('./hello');

const actualHello = jest.requireActual('./hello').hello;

export function mockHello() {
  const mockedHello = mocked(hello);
  beforeEach(() => {
    when(mockedHello).mockImplementation(actualHello);
  })
  return mockedHello;
}
