import './index.css';

const Footer = () => {
    const footerLinks = {
        Solution: ["Marketing","Analytics","Commerce","Insights"],
        Support: ["Pricing","Documentation","Guides","API status"],
        Company: ["About","Blog","Jobs","Press","Partners"],
        Legal: ["Claim","Privacy","Terms"],
    };

    return (
        <footer className=' bg-gray-900 px-10 py-20 w-full h-5/6'>
            <div className='grid grid-cols-6 border-b-2 border-b-zinc-700 h-4/5 py-4'>
                {Object.keys(footerLinks).map((element,index)=>(
                    <div key={index} className='col-span-1 text-gray-400'>
                        <h2 className='font-medium mb-4 text-white'>{element}</h2>
                        <ul className=' space-y-2'>
                            {footerLinks[element].map((item,itemIndex)=>(
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className='col-span-2 text-gray-400 flex items-start flex-col justify-start'>
                    <h1 className='text-white mb-2'>Subscribe to our newsletter</h1>
                    <p className='mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div>
                        <input type='email' placeholder='Enter your email' className=' bg-slate-800 pl-3 pr-10 py-1 rounded-md'/>
                        <button className='ml-3 px-2 py-1 border-none bg-blue-600 text-white rounded-md'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between mt-7'>
                <h2 className='text-gray-400'>@ 2020 Your Company, Inc.All rights reserved.</h2>
                <div className='flex items-center justify-evenly w-1/4'>
                    <i className="fa-brands fa-facebook text-gray-400 text-2xl"></i>
                    <i className="fas fa-facebook text-gray-400 text-2xl"></i>
                    <i className="fas fa-facebook text-gray-400 text-2xl"></i>
                    <i className="fas fa-facebook text-gray-400 text-2xl"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;