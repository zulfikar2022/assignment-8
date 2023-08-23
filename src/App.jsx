import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import SpentTime from './components/SpentTime/SpentTime'

function App() {
  const [data,setData ] = useState([]);
  const [time,setTime] = useState(0);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  },[])
  const handleMarkAsRead = (readingTime) => {
    const newTime = time + readingTime;
    setTime(newTime);
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
                ></Blog>)
          }
          </div>
          <div className="bookmark-container">
            <SpentTime time={time}></SpentTime>
          </div>

        </div>
    </div>
  )
}

export default App
