import React, { useEffect, useState } from 'react';
import './Body.css'
import Content from '../Content/Content';
import Bookmark from '../Bookmark/Bookmark';

const Body = () => {
    const [contents, setContents] = useState([])
    const [time, setTime] = useState([]);

    // const [bookmark, setBookmark] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setContents(data))
    }, [])
    const handleTime = (readTime) => {
        const newTime = [...time, readTime]
        setTime(newTime);

    }


    return (
        <div className='body-content'>
            <div className='main-content'>

                {
                    contents.map(content => <Content
                        key={content.id}
                        content={content}
                        handleTime={handleTime}
                    ></Content>)
                }

            </div>
            <div className='side-content'>

                <Bookmark time={time}></Bookmark>

            </div>

        </div>
    );
};

export default Body;