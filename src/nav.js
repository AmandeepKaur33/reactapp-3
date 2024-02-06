import './index.css';
import logo from './images/Screenshot (5).png';
function Nav(){
    return (
        <div className='h-20 w-full bg-white flex items-center justify-around'>
            <div className='flex items-center justify-evenly w-1/4'>
            <i className="fa-brands fa-facebook-f text-3xl w-12 h-12 border rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-duration-[0.8s]" />
            <i className="fa-brands fa-twitter text-3xl w-12 h-12 border rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white" />
            <i className="fa-brands fa-instagram text-3xl w-12 h-12 border rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white" />
            <i className="fa-brands fa-xbox text-3xl w-12 h-12 border rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white" />
            </div>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <div className='h-14 bg-gray-300 w-80 rounded-full flex items-center justify-between pl-2 overflow-hidden'>
                <h3>Search</h3>
                <div className='w-14 bg-slate-400 h-full flex items-center justify-center'>
                <i className='fas fa-search text-white'></i>
                </div>
            </div>
        </div>
    );
}
export default Nav;