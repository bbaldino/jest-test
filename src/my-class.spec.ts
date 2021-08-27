import { mocked } from 'ts-jest/utils';
import { MyClass } from './my-class';

test('MyClass', () => {
  const c = new MyClass('hello');
  const mockedInstance = mocked(c, true);

  console.log(mockedInstance.somethingClassy.mock.calls.length);
});
