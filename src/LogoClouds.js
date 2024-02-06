import './index.css';
// import transistor from './images/transistor.svg';
// import reform from './images/reform.svg';
// import statmatic from './images/statmatic.svg';
// import savvycol from './images/savvycol.svg';
// import tuple from './images/tuple.svg';

function Logo(){
    // const arr = [transistor,reform,tuple,savvycol,statmatic];
    const arr = ["https://tailwindui.com/img/logos/tuple-logo-gray-900.svg","https://tailwindui.com/img/logos/reform-logo-gray-900.svg",
"https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg","https://tailwindui.com/img/logos/transistor-logo-gray-900.svg",
"https://tailwindui.com/img/logos/statamic-logo-gray-900.svg","https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"]
    return (
        <div className='flex items-center justify-evenly  w-[100vw] h-[100vh] m-0 flex-wrap'>
            <div className='w-[50%]  h-[60vh] flex items-start justify-evenly flex-col p-14 pt-16'>
                <h2 className='text-3xl font-semibold'>Trusted by the most innovative teams</h2>
                <p className='text-gray-700 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.</p>
                <div className='flex'>
                    <button className='mr-8 bg-blue-900 text-white p-2 rounded-md text-base'>Create account</button>
                    <button className='text-base'>Contact us</button>
                </div>
            </div>
            <div className='w-[50vw] h-[60vh] grid grid-cols-2 p-14 items-start'>
                {arr.map((element)=>(
                    <img src={element} height={48} width={158} alt='logo' />
                ))}
            </div>
        </div>
    );
}
export default Logo;