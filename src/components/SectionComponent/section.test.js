import React from 'react';
import Section from './section';
import { render } from '@testing-library/react';

test("Section component exists", () => {
    const {getByTestId, getByText} = render(<Section></Section>);

    expect(getByTestId('section')).toBeTruthy();
});