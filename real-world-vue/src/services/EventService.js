import axios from 'axios'

// axios.create -  create a single instace of axios
const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // base url for all the calls
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
