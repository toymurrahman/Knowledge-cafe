import "./App.css";
import Header from "./components/header/Header";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/Bookmarks/bookmarks";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl m-8 p-8 mx-auto px-4 sm:px-6 lg:px-8">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
