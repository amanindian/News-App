import React, { Component } from "react";

export default class NewsCart extends Component {
  render() {
    return (
      <div className="card my-2 mx-3" style={{ width: "18rem" }}>
        <img
          src={
            this.props.element.urlToImage
              ? this.props.element.urlToImage
              : "data:image/png;base64,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"
          }
          className="card-img-top"
          alt="News pic not available"
        />
        <div className="card-body">
          <h5 className="card-title">
            {this.props.element.title
              ? this.props.element.title.slice(0, 46)
              : ""}
          </h5>
          <p className="card-text">
            {this.props.element.description
              ? this.props.element.description.slice(0, 80)
              : ""}
          </p>{" "}
          <a
            href={this.props.element.url}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Read Article
          </a>
        </div>
      </div>
    );
  }
}