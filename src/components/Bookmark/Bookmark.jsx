

const Bookmark = ({bookmark}) => {
    const {title, url} = bookmark;
    return (
        <div>
             <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
        </div>
    );
};

export default Bookmark;