import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import SpentTime from './components/SpentTime/SpentTime'


function App() {
  const [data, setData] = useState([]);
  const [time, setTime] = useState(0);
  const [bookmarkedList, setBookmarkedList] = useState([]);


  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const handleMarkAsRead = (readingTime) => {
    const newTime = time + readingTime;
    setTime(newTime);
  }

  const handleBookmarkAndShowTitle = (blogTitle) => {
    const newTitleList = [...bookmarkedList, blogTitle];
    setBookmarkedList(newTitleList);
    console.log('bookmark list : ', bookmarkedList);


  }

  return (
    <div className='main-div'>
      <Header></Header>
      <div className="entire-container">

        <div className="blog-container">
          {
            data.map(datum => <Blog
              key={datum.id}
              blog={datum}
              handleMarkAsRead={handleMarkAsRead}
              handleBookmarkAndShowTitle={handleBookmarkAndShowTitle}
            ></Blog>)
          }
        </div>
        <div className="bookmark-container">
          <SpentTime time={time}></SpentTime>
          <div className="bookmarked-title-list">
            <h2>Bookmarked Blogs: {bookmarkedList.length}</h2>
            {
              bookmarkedList.map(bookmark => <p className='bookmarked-title-list-item'>{bookmark}</p>)
            }
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
