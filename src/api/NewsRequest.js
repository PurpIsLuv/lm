import DefaultRequest from "./DefaultRequest";

class NewsRequest extends DefaultRequest {
  constructor() {
    this.baseURL.concat("news/");
  }
  
  async getAllNews() {
    const url = this.baseURL + "getAllNews";
    const response = await fetch(url, {
      method: "GET",
      headers: this.defaultHeader 
    });

    const data = await response.json();
    
    return new Promise((resolve, reject) => {
      resolve(data);
      reject(data);
    });
  }
}

export default NewsRequest;