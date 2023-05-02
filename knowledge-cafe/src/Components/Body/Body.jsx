import React, { useEffect, useState } from 'react';
import './Body.css'
import Content from '../Content/Content';
import Bookmark from '../Bookmark/Bookmark';

const Body = () => {
    const [contents, setContents] = useState([])
    // const [bookmark, setBookmark] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setContents(data))
    }, [])
    // const handleBookmark = (content) => {
    //     const newBookmark = [...bookmark, content]
    //     setBookmark(newBookmark)
    // }
    let oldTime = 10;
    const time = (content) => {
        // console.log(content.ReadTime)
        oldTime = oldTime + content.ReadTime
        console.log("now", oldTime)
        return oldTime;

    }
    return (
        <div className='body-content'>
            <div className='main-content'>

                {
                    contents.map(content => <Content
                        key={content.id}
                        content={content}
                        time={time}
                    ></Content>)
                }

            </div>
            <div className='side-content'>

                <Bookmark oldTime={oldTime}></Bookmark>

            </div>

        </div>
    );
};

export default Body;