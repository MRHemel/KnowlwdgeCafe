import React, { useEffect, useState } from 'react';
import './Body.css'
import Content from '../Content/Content';

const Body = () => {
    const [contents, setContents] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setContents(data))
    }, [])
    return (
        <div className='body-content'>
            <div className='main-content'>

                {
                    contents.map(content => <Content
                        key={content.id}
                        content={content}></Content>)
                }

            </div>
            <div className='side-content'>
                <h6>side content</h6>

            </div>

        </div>
    );
};

export default Body;