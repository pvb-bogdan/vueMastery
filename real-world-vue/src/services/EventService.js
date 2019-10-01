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
  // get all events from api
  // getEvents() {
  //   return apiClient.get('/events')
  // },
  // get a limt events per page -- GET /events?_limit=3&_page=2
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
