import axios from 'axios'

const api = axios.create({
  baseURL: 'https://apiadonis2023.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api