import './index.css';

function Navlinks(){
    return (
        <div className='w-full h-24  flex items-center justify-center'>
            <ul className=' w-4/5 h-full flex text-zinc-700 items-center justify-evenly'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>COMING SOON</li>
                <li>TOP SELLER</li>
                <li>BOOKS</li>
                <li>AUTHOR</li>
                <li>BLOG</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
}

export default Navlinks;