import axios from 'axios'

let serve = function (options) {
  return axios(options)
}
serve.prototype.get = function(url, options) {
  return axios.get(url, options)
}

serve.prototype.post = function(url, options) {
  return axios.post(url, options)
}

serve.prototype.request = function(url, options) {
  return axios.request(url, options)
}

serve.prototype.delete = function(url, options) {
  return axios.delete(url, options)
}

serve.prototype.head = function(url, options) {
  return axios.head(url, options)
}

serve.prototype.options = function(url, options) {
  return axios.options(url, options)
}

serve.prototype.put = function(url, options) {
  return axios.put(url, options)
}

serve.prototype.patch = function(url, options) {
  return axios.patch(url, options)
}

serve.prototype.successFn = function() {

}

serve.prototype.errorFn = function() {
  
}

axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  serve.errorFn()
  return Promise.reject(error)
})

axios.interceptors.response.use((config) => {
  return config
}, (error) => {
  serve.errorFn()
  return Promise.reject(error)
})

export default serve
