// lib/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.10minuteschool.com/d.iscovery-service/api/v1',
  headers: {
    'X-TENMS-SOURCE-PLATFORM': 'web',
  },
  timeout: 10000,
});

export default axiosInstance;
