import React from 'react';
import RestaurantLogo from './RestaurantLogo';
import { render } from '@testing-library/react';

test("Restaurant name component exists", () => {
    const {getByTestId, getByText} = render(<RestaurantLogo></RestaurantLogo>);

    expect(getByTestId('restaurant-name')).toBeTruthy();
});

it("Checks if restaurant name is not empty", () => {
    const {getByTestId, getByText} = render(<RestaurantLogo></RestaurantLogo>);
    
    expect(getByTestId('restaurant-name').length).not.toEqual(0);
});

it("Inserts username in h1", () => {
    const {getByTestId, getByText} = render(<RestaurantLogo></RestaurantLogo>);
    
    expect(getByTestId('restaurant-name')).toHaveTextContent('Test Restaurant Name');
});
