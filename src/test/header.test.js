import React from "react";
import Header from "./header";
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom';
afterEach(cleanup)
it('rendesnapshot <Header />', ()=>{
    const {asFragment} = render(<Header text="hello" />);
    // expect(asFragment()).toMatchSnapshot();
})
it('renders',()=>{
    const {getByTestId, getByText} = render(<Header text="hello" />);
    expect(getByTestId('h1tag')).toHaveTextContent('hello');
    expect(getByText('hello')).toHaveClass('h1-class');
})
it('renders button',()=>{
    const {getByTestId, getByText} = render(<Header text="hello" />);
    expect(getByTestId('ok-button')).toHaveAttribute('type','submit');
})