import React from "react";
import Clickers from "./Clickers";
import {cleanup, fireEvent, render, act, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
afterEach(cleanup);
jest.useFakeTimers();
describe('<Clickers />',()=>{
    it('renders button correctly',()=>{
        const {getByTestId} = render(<Clickers />);
        expect(getByTestId('count')).toHaveTextContent('0');
    })
    it('increament',()=>{
        const {getByTestId, getByText} = render(<Clickers />);
        fireEvent.click(getByText('up'));
        expect(getByTestId('count')).toHaveTextContent('1');
    })
    it('decreament', async()=>{
        const {getByTestId, getByText} = render(<Clickers />);
        fireEvent.click(getByText('down'));
        // const Count = await waitFor(()=>getByText('-1'));
        // expect(Count).toHaveTextContent('1');
        act(()=>jest.advanceTimersByTime(510));
        expect(getByTestId('count').textContent).toBe('-1')
    })
})
