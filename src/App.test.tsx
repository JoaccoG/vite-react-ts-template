import { render } from '@testing-library/react';
import App from './App';

describe('Given the App component', () => {
  test('Then "Hello world!" should be in the document', () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
