import React from 'react'

const NewsCard = ({ title, description, url, urlToImage, author, publishedAt }) => {
    return (
        <div className="card col-2 m-2 p-0" style={{ width: '17rem' }}>
            <span className="badge text-bg-info position-absolute" style={{ top: "-10px", right: "-5px" }}>{author ?? "Unablable"}</span>
            <img src={urlToImage ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADPzrYm_hQg2XMNc_9KTr9Axmn35s0DbsIQ&usqp=CAU"} className="card-img-top" alt="Not Available" />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0, 48) : "Title Not Avalible"}</h5>
                <p className="card-text">{description ? description.slice(0, 70) : "Description Not Avalible"} </p>
                <p className="card-text">{new Date(publishedAt).toLocaleString()}</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsCard;