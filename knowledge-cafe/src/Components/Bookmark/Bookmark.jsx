import React from 'react';
import './Bookmark.css'

const Bookmark = ({ time, bookmark, title }) => {
    // console.log(time);

    let totalTime = 0;
    for (const Time of time) {
        totalTime = totalTime + Time.ReadTime
    }

    return (
        <div className='right-side-content'>
            <div className='spent-time'>
                <h4>Spent time on read :{totalTime} min</h4>

            </div>
            <div className='bookmarked'>
                <h4>Bookmarked Blogs :{bookmark.length} </h4>
                {
                    title.map(arr => <p>{arr}</p>)
                }

            </div>

        </div>
    );
};

export default Bookmark;