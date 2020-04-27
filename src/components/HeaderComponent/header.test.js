import React from 'react';
import Header from './header';
import { render } from '@testing-library/react';

test("Header component exists", () => {
    const {getByTestId, getByText} = render(<Header></Header>);

    expect(getByTestId('header')).toBeTruthy();
});