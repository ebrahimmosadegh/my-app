import React, {act} from "react";
import FetchComponent from "./fetch";
import { render, cleanup, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import axiosMock from 'axios';
afterEach(cleanup);
it('renders data',async ()=>{
    axiosMock.get.mockResolvedValue({data:"hello"})
    const url = '/reactjs.de';
    const {getByTestId} = render(<FetchComponent url={url} />);
    expect(getByTestId("loading")).toHaveTextContent("...loading");
    const resolvedSpan = await waitFor(()=>getByTestId('resolved'));
    expect(resolvedSpan).toHaveTextContent("hello");
})