import DefaultRequest from "./DefaultRequest";

class QuestionRequest extends DefaultRequest {
  constructor() {
    this.baseURL.concat("question/");
  }
  
  async postAddQuestion(obj) {
    const url = this.baseURL;
    const response = await fetch(url, {
      method: "POST",
      headers: this.defaultHeader,
      body: JSON.stringify(obj)
    });

    const data = await response.text();

    return new Promise((resolve, reject) => {
      resolve(data);
      reject(data);
    });
  }
}

export default QuestionRequest;