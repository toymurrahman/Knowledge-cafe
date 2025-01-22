import "./App.css";
import Header from "./components/header/Header";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/Bookmarks/bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks,setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmark(newBookmarks);
    console.log(blog);
  }

  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }
  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl m-8 p-8 mx-auto px-4 sm:px-6 lg:px-8">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}  />
        <Bookmarks bookmarks={bookmarks} 
        readingTime={readingTime}  />
      </div>
    </>
  );
}

export default App;
