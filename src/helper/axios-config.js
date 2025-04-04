import axios from 'axios';

const axiosInstance = axios.create({
    //baseURL: 'http://localhost:5000/'
    baseURL: 'https://inventory-backend-iud.onrender.com/'

});

export {
    axiosInstance
}