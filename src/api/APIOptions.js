import { URL } from "../constants/config";

class APICaller {
  constructor(apiURL) {
    if (apiURL.endsWith("/")) {
      apiURL = apiURL.slice(0, -1);
    }

    this.URL = apiURL;
  }

  async post(endpoint, data, signIn = false) {
    console.log(endpoint);
    console.log(data);
    const url = this.prepareURL(endpoint);
    console.log(signIn);
    const header = signIn
      ? { "Content-Type": "application/json", Authorization: signIn }
      : { "Content-Type": "application/json" };
    console.log(header);
    return await fetch(url, {
      method: "Post",
      header: header,
      body: JSON.stringify(data),
    });
  }

  async get(endpoint) {
    const url = this.prepareURL(endpoint);
    return await fetch(url);
  }

  prepareURL(endpoint) {
    while (endpoint.startsWith("/")) {
      endpoint = endpoint.slice(1);
    }

    while (this.URL.endsWith("/")) {
      this.URL = this.URL.slice(0, -1);
    }

    return `${this.URL}/${endpoint}`;
  }
}

export const API = new APICaller(URL);
