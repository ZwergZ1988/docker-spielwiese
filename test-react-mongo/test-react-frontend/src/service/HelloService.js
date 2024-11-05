import axios from "axios";

const api_url = import.meta.env.VITE_REACT_APP_API_URL;

class HelloService {
  async executeHelloService() {
    console.log("HelloService.js: executeHelloService(" + api_url + "/hello)");
    const response = await axios.get(api_url + "/hello");

    return response.data;
  }

  async executeGetDBMessagesService() {
    console.log(
      "HelloService.js: executeGetDBMessagesService(" + api_url + "/messages)"
    );
    const response = await axios.get(api_url + "/messages");

    return response.data;
  }

  async executePostDBMessageService(message) {
    console.log(
      "HelloService.js: executePostDBMessageService(" + api_url + "/message)",
      { message }
    );
    const response = await axios.post(api_url + "/message", { message });

    console.log(response.status == 200 ? "OK" : "ERROR");

    return response.data;
  }
}

export default new HelloService();
