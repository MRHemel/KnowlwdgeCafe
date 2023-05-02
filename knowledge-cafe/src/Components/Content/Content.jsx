import React from 'react';
import './Content.css'
import bookmark from '../../assets/image/bookmark.svg'

const Content = (props) => {
    const { id, img, Author, BlogTitle, CoverImg, AuthorImg, ReadTime, PublishDate
    } = props.content;
    return (
        <div className='content'>
            <img className='img-cover' src={CoverImg} alt="" />
            <div className='author'>
                <div className='author-info'>
                    <img src={AuthorImg} alt="" />

                    <div className='author-details'>
                        <h3>{Author}</h3>
                        <small>{PublishDate}</small>
                    </div>
                </div>
                <a href=''>
                    <div className='bookmark'>
                        <p>{ReadTime} min read</p>
                        <img src={bookmark} alt="" />
                    </div>
                </a>
            </div>
            <h2>{BlogTitle}</h2>
            <p><a href="">Mark as read</a></p>
            <hr />


        </div>
    );
};

export default Content;