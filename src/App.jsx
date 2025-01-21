import "./App.css";
import Header from "./components/header/Header";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/Bookmarks/bookmarks";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
