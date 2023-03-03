import React, { Component } from "react";
import NewsCart from "./NewsCart";

export default class NewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      pageSize: 20,
    };
  }

  async componentDidMount() {
    let URL = `https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=aebed76b8f1144079dec6723ce57b841&page=1&pageSize=${this.state.pageSize}`;
    let newsdata = await fetch(URL);
    let newsdatajs = await newsdata.json();
    this.setState({ articles: newsdatajs.articles });
  }

  hendleNext = async () => {
    this.setState({ articles: [] });
    let URL = `https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=aebed76b8f1144079dec6723ce57b841&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
    let newsdata = await fetch(URL);
    let newsdatajs = await newsdata.json();
    this.setState({
      page: this.state.page + 1,
      articles: newsdatajs.articles,
      totalResults: newsdatajs.totalResults,
    });
  };

  hendlePrev = async () => {
    let URL = `https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=aebed76b8f1144079dec6723ce57b841&page=${this.state.page - 1
      }&pageSize=${this.state.pageSize}`;
    let newsdata = await fetch(URL);
    let newsdatajs = await newsdata.json();
    this.setState({
      page: this.state.page - 1,
      articles: newsdatajs.articles,
    });
  };

  render() {
    return (
      <>
        <h1 className="container">Read News With Aman</h1>

        <div className="container d-flex flex-wrap">
          {this.state.articles.map((element, index) => {
            return <NewsCart element={element} key={index} />;
          })}
        </div>

        <div className="container my-5 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.hendlePrev}
          >
            &larr; Previus{" "}
          </button>
          <button
            className="btn btn-dark"
            onClick={this.hendleNext}
            disabled={
              this.state.page >= Math.ceil(this.state.totalResults / 20)
            }
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
