import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import App from './App';

describe("shows the input form and submit button on 1st render",()=>{
    it("shows the input field", () =>{
        render(<App/>);
        const data = screen.getByPlaceholderText('enter phone number');
        expect(data).toBeVisible();
    });
    it("shows the submit button",()=>{
        render(<App/>);
        const visible = screen.getByTestId('submitbtn');
        expect(visible).toBeVisible();
    })
});
