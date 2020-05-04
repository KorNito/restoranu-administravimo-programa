import React from 'react';
import UserAvatar from './UserAvatar';
import { render } from '@testing-library/react';


test("Username avatar image exists", () => {
    const {getByTestId, getByText} = render(<UserAvatar></UserAvatar>);

    expect(getByTestId('user-avatar-image')).toBeTruthy();
});

test("Username avatar component exists", () => {
    const {getByTestId, getByText} = render(<UserAvatar></UserAvatar>);

    expect(getByTestId('user-avatar-username')).toBeTruthy();
});

it("Inserts username in h2", () => {
    const {getByTestId, getByText} = render(<UserAvatar></UserAvatar>);
    
    expect(getByTestId('user-avatar-username')).toHaveTextContent('Test Username');
    
});

it("Checks if username is not empty", () => {
    const {getByTestId, getByText} = render(<UserAvatar></UserAvatar>);
    
    expect(getByTestId('user-avatar-username').length).not.toEqual(0);
});
