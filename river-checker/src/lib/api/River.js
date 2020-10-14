import axios from 'axios'
export default class Reg {
  constructor () {
    this._http = axios
    this._apiUrl = 'https://reqres.in'
  }
  getData (page = 2) {
    let route = `${this._apiUrl}/api/users`
    return this._http.get(`${route}`, {
      params: {
        page: `${page}`
      }
    })
  }
}
