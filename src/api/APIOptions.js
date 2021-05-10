import { URL } from "../constants/config";

class APICaller {
  constructor(apiURL) {
    if (apiURL.endsWith("/")) {
      apiURL = apiURL.slice(0, -1);
    }

    this.URL = apiURL;
  }

  async post(endpoint, data, signIn = false) {
    const url = this.prepareURL(endpoint);
    const header = signIn
      ? {
          "Content-Type": "application/json",
          Role: "hospital",
          Authorization: signIn,
        }
      : { "Content-Type": "application/json", Role: "hospital" };
    console.log(header);
    return await fetch(url, {
      method: "Post",
      headers: header,
      body: JSON.stringify(data),
    });
  }

  async get(endpoint, header) {
    const url = this.prepareURL(endpoint);
    console.log(url);
    console.log(header);
    return await fetch(url, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Role: "hospital",
        Authorization: header,
      },
    });
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
