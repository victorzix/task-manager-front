import axios from "axios";

class ApiHandler {
constructor(baseUrl = 'http://localhost:3010/') {
  this.baseUrl = baseUrl;
}
  async register(request) {
    const sendReq = await axios.post(`${this.baseUrl}user`, {
      ...request
    }).then((response) => {
      return response.data
    }).catch((err) => {
      return err.response.data
    })

    return sendReq;
  }
}

export default new ApiHandler();