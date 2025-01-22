import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
        <h3 className="text-2xl">Reading Time: {readingTime} </h3>
        </div>

      <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
        <h1 className="text-2xl"> Bookmark Blogs: {bookmarks.length} </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
