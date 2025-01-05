import React from 'react';
import { render } from '@testing-library/react-native';
import { Home } from './home';

describe('<Home />', () => {
  it('should render the Home Screen title', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Home Screen')).toBeTruthy();
  });
});
