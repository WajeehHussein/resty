import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../App";

beforeEach(() => {
    render(<App />);

})

test('load and display app', async () => {
})

test('Test header', async () => {
    const header = await waitFor(() => screen.getByTestId('header'));

    expect(header.textContent).toBe('RESTy');

});
