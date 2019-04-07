import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// WAŻNE!!!!!  Poniżej defaultowe ustawienie URL. Można wtedy w poszczególnych headerach usunąć powtarzający się URL
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
// WIĘCEJ w ostatnim wykładzie 165 :)

axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application.json';

axios.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
})
axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
