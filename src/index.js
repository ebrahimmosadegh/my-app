import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import ThemeContextProvider from './context/Theme/themeContext';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(request=>{
  console.log(request);
  return request;
},error=>{
  console.log(error)
  Promise.reject(new Error('fail'))
})
axios.interceptors.response.use(response=>{
  console.log(response);
  return response;
},error=>{
  console.log(error)
  Promise.reject(error)
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
