import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
// using axios interceptors
apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})

apiClient.interceptors.response.use(res => {
  NProgress.done()
  return res
})

export default {
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
