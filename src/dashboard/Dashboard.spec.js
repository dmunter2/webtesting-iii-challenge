// Test away
import React from 'react';

import { render } from 'react-testing-library';
import Dashboard from './Dashboard'



test('it renders correctly', () => {
    const { getByTestId } = render(<Dashboard />);

    expect(getByTestId('displayCard')).toBeDefined();
    expect(getByTestId('controlCard')).toBeDefined();
})