import './index.css';

function Size(){
    const sizeList = [
        [0,"0px","0px"],
        ["px","1px","1px"],
        [0.5,"0.125rem","2px"],
        [1,"0.25rem","4px"],
        [1.5,"0.375rem","6px"],
        [2,"0.5rem","8px"],
        [2.5,"0.625rem","10px"],
        [3,"0.75rem","12px"],
        [3.5,"0.875rem","14px"],
        [4,"1rem","16px"],
        [5,"1.25rem","20px"],
        [6,"1.5rem","24px"],
        [7,"1.75rem","28px"],
        [8,"2rem","32px"],
        [9,"2.25rem","36px"],
        [10,"2.5rem","40px"],
        [11,"2.75rem","44px"],
        [12,"3rem","48px"],
    ]
   return (
    <div className='w-full bg-gray-900 p-10 flex justify-center items-center'>
        <div className='w-3/5'>
            <div className='text-white justify-evenly items-center w-1/2 flex'>
                <h1>Name</h1>
                <h1>Size</h1>
                <h1>Pixels</h1>
            </div>
            {sizeList.map((element,index)=>(
                <div key={index} className='text-white justify-evenly items-center w-1/2 flex gap-4 m-6'>
                    {element.map((item,itemIndex)=>(
                        <div key={itemIndex} className='mt-2 flex flex-col items-center gap-7 text-gray-500'>
                            {item}
                        </div>
                        
                    ))}
                     <div style={{width: element[2]}} className='h-4 bg-green-500 mt-2'></div>
                </div>
            ))}
        </div>
    </div>
   );
}

export default Size;