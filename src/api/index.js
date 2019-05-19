import axios from 'axios'
require('../mock')
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export const http = {
}