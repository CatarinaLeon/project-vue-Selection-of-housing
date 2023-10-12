import axios from 'axios';
// import stores from '../stores';

const axiosInstance = axios.create({
  baseURL: 'https://apt-booking-api.herokuapp.com/',
});

export default axiosInstance