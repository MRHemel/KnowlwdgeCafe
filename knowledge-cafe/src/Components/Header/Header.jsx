import React from 'react';
import './Header.css'
import user from '../../assets/user.png'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <h1>Knowledge Cafe</h1>
                <div className='header-img'>
                    <img src={user} alt="" />
                </div>

            </div>
            <hr />
        </div>

    );
};

export default Header;