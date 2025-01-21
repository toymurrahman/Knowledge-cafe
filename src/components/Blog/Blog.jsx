import PropTypes from 'prop-types';

const Blog = () => {
    return (
        <div>
            
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;