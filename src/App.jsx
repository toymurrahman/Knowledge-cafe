import "./App.css";
import Header from "./components/header/Header";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/Bookmarks/bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks,setBookmark] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmark(newBookmarks);
    console.log(blog);
  }
  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl m-8 p-8 mx-auto px-4 sm:px-6 lg:px-8">
        <Blogs handleAddToBookmark={handleAddToBookmark}  />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </>
  );
}

export default App;
