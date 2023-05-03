import React from 'react';
import './Content.css'
import bookmark from '../../assets/image/bookmark.svg'

const Content = (props) => {
    const { Author, BlogTitle, CoverImg, AuthorImg, ReadTime, PublishDate
    } = props.content;
    const handleTime = props.handleTime;
    const handleBookmark = props.handleBookmark;

    // const handleBookmark = props.handleBookmark;

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

                {/* <button onClick={() => handleBookmark(props.content)}>{ReadTime} min read <img src={bookmark} alt="" /></button> */}
                <button onClick={() => handleBookmark(props.content)}>{ReadTime} min read <img src={bookmark} alt="" /></button>
            </div>
            <h2>{BlogTitle}</h2>
            <button onClick={() => handleTime(props.content)}>Mark as read</button>
            <hr />


        </div>
    );
};

export default Content;