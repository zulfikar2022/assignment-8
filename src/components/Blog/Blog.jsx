import React, { useState } from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = ({ blog,handleMarkAsRead }) => {
    const notify = () => toast("This blog is already bookmarked!");
    const { coverImage, authorImage, authorName, writingDate, readingTime, blogTitle, id } = blog;
    const [bookmarked, setBookmarked] = useState(false);
    const handleBookmark = () => {
        if (!bookmarked) {
            setBookmarked(!bookmarked);
            console.log("The blog is bookmarked")
        }
        else {
            // window.alert("The blog is already bookmarked");
            toast('This blog is already added to the bookmark!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div className='blog'>
            <img className='cover-image' src={coverImage} alt="" />
            <div className="author-section">
                <div className="first-section">
                    <img className='author-image' src={authorImage} alt="" />
                    <div className="authorName-and-writing-time">
                        <h3>{authorName}</h3>
                        <p>{writingDate}</p>
                    </div>
                </div>
                <div className="reading-time">
                    <p>{readingTime} min to read <span onClick={handleBookmark}><FontAwesomeIcon icon={faBookmark} /></span> </p>
                </div>
            </div>
            <h1>{blogTitle}</h1>
            <button className='mark-as-read' onClick={() => handleMarkAsRead(readingTime)}>Mark as Read</button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick = {true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover = {false}
                theme="light"
            />
           <hr />
        </div>
    );
};

export default Blog;