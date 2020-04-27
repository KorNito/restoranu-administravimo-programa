import React from 'react';
import Footer from './footer';
import { render } from '@testing-library/react';

test("Footer component exists", () => {
    const {getByTestId, getByText} = render(<Footer></Footer>);

    expect(getByTestId('footer')).toBeTruthy();
});