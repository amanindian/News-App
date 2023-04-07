import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export default function News({ category, country }) {
  const [NewsArticles, setNewsArticles] = useState([]);
  const [totalResults, settotalResults] = useState(0);
  const [pageNo, setpageNo] = useState(1);

  const loadData = async () => {
    // let Key = "4511ced488bd4c16a8fbd24119ca5ad2";
    let Key = "4511ced488bd4c16a8fbd24119ca5ad2";
    let URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${5}&page=${pageNo}&apiKey=${Key}`;
    let NewsData = await fetch(URL);
    NewsData = await NewsData.json();
    settotalResults(NewsData.totalResults);
    setNewsArticles(NewsData.articles);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setpageNo(pageNo + 1);
    let Key = "4511ced488bd4c16a8fbd24119ca5ad2";
    let URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${5}&page=${pageNo + 1}&apiKey=${Key}`;
    let NewsData = await fetch(URL);
    NewsData = await NewsData.json();
    setNewsArticles(NewsArticles.concat(NewsData.articles));
  };
  return (
    <div className="container">
      <h1 className="text-center mt-5">Top {category.charAt(0).toUpperCase() + category.slice(1)} HeadLines</h1>
      <InfiniteScroll
        dataLength={NewsArticles.length}
        next={fetchMoreData}
        hasMore={NewsArticles.length !== totalResults}
        loader={
        <Spinner/>
        }
        endMessage="No More News"
      >
        <div className="container">
          <div className="row ">
            {NewsArticles.map((Item, Index) => {
              return (
                <NewsCard
                  title={Item.title}
                  key={Index}
                  description={Item.description}
                  urlToImage={Item.urlToImage}
                  url={Item.url}
                  author={Item.author}
                  publishedAt={Item.publishedAt}
                />
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
