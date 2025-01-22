import PropTypes from "prop-types";
import { FaBeer,FaBookmark } from 'react-icons/fa';

const Blog = ({ blog }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20  space-y-4">
      <img src={cover} alt={`Cover picture ${title} `} />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <span>{reading_time} min read</span>
        <button><FaBookmark></FaBookmark></button>

      </div>

      <h1 className="text-4xl"> {title} </h1>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
