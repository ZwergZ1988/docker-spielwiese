import axios from "axios";

class HelloService {
  async executeHelloService() {
    const response = await axios.get("http://localhost:3300/api/hello");

    return response.data;
  }
}

export default new HelloService();
