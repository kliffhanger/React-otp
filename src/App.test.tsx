import { fireEvent, render, screen } from '@testing-library/react';
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

describe("test different inputs in the input field and check the responding action", ()=>{
    it("enter non numueric values", ()=>{
        render(<App/>);
        const input = screen.getByPlaceholderText('enter phone number') as HTMLInputElement;
        fireEvent.change(input, {target: {value: 'qwerty'}})
        expect(input.value).toBe('');
    });
    it("enter numeric data values", ()=>{
        render(<App/>);
        const input = screen.getByPlaceholderText('enter phone number') as HTMLInputElement;
        fireEvent.change(input, {target: {value: '12345678901'}})
        expect(input.value).toBe('12345678901');
    })
})
// describe("test if users enter incomplete data in input fields and press submit",()=>{
//     it('empty input field and submit pressed',()=>{
//         const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
//         render(<App/>);
//         const input = screen.getByPlaceholderText('enter phone number') as HTMLInputElement;
        
//         const sumbit =screen.getByTestId('submitbtn');
//         fireEvent.change(input, {target: {value: ''}});
//         fireEvent.click(sumbit);
//         expect(alertMock).toHaveBeenCalled();
//         alertMock.mockRestore();
//     })
// })