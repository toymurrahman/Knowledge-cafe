import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center p-8 m-8 border-b-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '> 
             <h1 className='text-6xl bg-transparent'>Knowledge Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;