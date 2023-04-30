import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const News = ({ category, country }) => {
  const [NewsArticles, setNewsArticles] = useState([]);
  const [totalResults, settotalResults] = useState(0);
  const [pageNo, setpageNo] = useState(1);
  const [LodingState, setLodingState] = useState(null);

  const loadData = async () => {
    // let Key = "4511ced488bd4c16a8fbd24119ca5ad2";
    let Key = "d2f8411d3b7642cda1d1bb13187d854d";
    // let Key = "4511ced488bd4c16a8fbd24119ca5ad2";
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
    setLodingState(" ");
    setpageNo(pageNo + 1);
    let Key = "d2f8411d3b7642cda1d1bb13187d854d";
    // let Key = "4511ced488bd4c16a8fbd24119ca5ad2";
    let URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${5}&page=${pageNo + 1
      }&apiKey=${Key}`;
    let NewsData = await fetch(URL);
    NewsData = await NewsData.json();
    setNewsArticles(NewsArticles.concat(NewsData.articles));
    setLodingState(null);
  };
  return (
    <div className="container">
      <h1 className="text-center mt-5">
        Top {category.charAt(0).toUpperCase() + category.slice(1)} HeadLines
      </h1>
      <InfiniteScroll
        dataLength={NewsArticles.length}
        next={fetchMoreData}
        hasMore={NewsArticles.length !== totalResults}
        loader={<Spinner LodingState={LodingState} />}
        endMessage="No More News in this section"
      >
        <div className="container">
          <div className="row justify-content-around">
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


export default News;