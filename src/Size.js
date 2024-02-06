import './index.css';

function Price(){
    // const priceList = {
    //     Freelancer: {

    //     }
    // }
    return (
        <div className='w-full p-20 bg-gray-900 text-white flex flex-col items-center'>
            <h3 className=' text-blue-500'>Pricing</h3>
            <h1 className='text-5xl font-bold '>Pricing plans for team of all sizes</h1>
            <h4 className='text-gray-400 mt-4 w-1/2 text-1xl text-center'>Choose an affordable price that packed with the best features engaging your audience, creating customer
                loyality, and driving sales
            </h4>
            <div className='flex items-center justify-between w-40 p-1 bg-slate-700 rounded-3xl mt-10 text-white'>
                <h2 className='text-white bg-blue-900 h-7 flex items-center justify-center w-full rounded-3xl'>Monthly</h2>
                <h2 className='text-white'>Annually</h2>
            </div>
        </div>
    );
}
export default Price;