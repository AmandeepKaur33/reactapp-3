import './index.css';

function Space() {
    const measurement = {
                Name: [0,"px",0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16],
                size: ["0px","1px","0.125rem","0.25rem","0.375rem","0.5rem","0.625rem","0.75rem","0.875rem","1rem","1.25rem",
            "1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem","3rem","3.5rem","4rem"],
                Pixels: ["0px","1px","2px","4px","6px","8px","10px","12px","14px","16px","20px","24px","28px","32px","36px","40px","44px","48px","56px","64px"]
            };

            return (
                <div className='w-full bg-gray-900 px-4 py-2 flex items-center justify-center'>
                    <div className='w-3/5 flex'>
                        <div className='text-white justify-evenly items-center w-1/2 flex'>
                        {Object.keys(measurement).map((element,index)=>(
                            <div>
                                <h1 key={index} className='text-2xl'>{element}</h1>
                                <ul className='mt-3 flex flex-col gap-5 text-gray-500'>
                                    {measurement[element].map((item,itemIndex)=>(
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            </div>
    
                        ))}
                         <div className='flex flex-col gap-6 mt-11'>
                                    {Object.values(measurement.Pixels).map((e,i)=>(
                                       <div key={i} style={{width: e}} className='h-5 bg-green-500 '></div>  
                                    ))}
                          </div>
                        </div>
                    </div>
                </div>
            );
}
export default Space;