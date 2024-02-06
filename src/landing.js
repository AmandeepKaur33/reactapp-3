import './index.css';
import video from './images/1.mp4';

function Landing(){
    return (
        <div className='w-full h-[88vh] bg-fuchsia-600 relative' >
            <div className=' w-2/4 h-[35%] absolute bottom-8 left-[2%] text-white'>
                <h1 className='text-6xl font-thin'>Experience Real <br/> Estate Agility</h1>
                <div className='h-[35%] w-full absolute bottom-0 flex items-center justify-between mt-2'>
                    <h4 className='font-thin text-xl'>Create a digital twin of your existing building <br/> and release the potential of web3.</h4>
                    <button className=' pt-2 pb-2 pl-5 pr-5 rounded-3xl bg-white text-blue-900 text-base font-normal'>LEARN MORE</button>
                </div>
            </div>
            <video src={video} className='h-full w-full object-cover' autoPlay loop muted></video>
        </div>
    );
}

export default Landing;