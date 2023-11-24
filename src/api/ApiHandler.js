import axios from "axios";

class ApiHandler {
constructor(baseUrl = 'http://localhost:3010/') {
  this.baseUrl = baseUrl;
}
  async register(request) {
    const response = await axios.post(`${this.baseUrl}user`, {
      ...request
    }, { withCredentials: true }).then((response) => {
      return response.data
    }).catch((err) => {
      return err.response.data
    })

    return response;
  }

  async login(request) {
    const response = await axios.post(`${this.baseUrl}login`, {
      ...request
    }, { withCredentials: true }).then((response) => {
      return response.data
    }).catch((err) => {
      return err.response.data
    })

    return response
  }
}

export default new ApiHandler();