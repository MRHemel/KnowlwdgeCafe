import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {

    return (
        <div className='right-side-content'>
            <div className='spent-time'>
                <h4>Spent time on read : {props.oldTime} min</h4>

            </div>
            <div className='bookmarked'>
                <h4>Bookmarked Blogs : </h4>

            </div>

        </div>
    );
};

export default Bookmark;