import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
  it('should render', () => {
    expect(render(<Home />)).toBeTruthy();
  });
});
