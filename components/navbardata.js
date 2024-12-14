import React from 'react';
import homeIcon from './images/homeicon.jpg';
import user_icon from './images/585e4beacb11b227491c3399.png'
import bookIcon from './images/book.jpg';
import bookUpdateIcon from './images/bookupdate.jpg';
import './navbar.css'
export const Sidebardata=[
    {
        title:<div className='title'>Home</div>,
       icon:<img className="nav" src={homeIcon} alt=""/>,
        link:"/"
    },
    {
        title:<div  className='title'>Admin Profile</div>,
        icon:<img  className="nav"src={user_icon} alt=""/>,
        link:"/admin"
    },
    {
        title:<div className='title'>Book Update</div>,
        icon:<img className="nav" src={bookIcon} alt=""/>,
        link:"/book"
    },
    {
        title:<div className='title'>Student Details</div>,
        icon:<img  className="nav"src={ bookUpdateIcon} alt=""/>,
        link:"/details"
    },
]