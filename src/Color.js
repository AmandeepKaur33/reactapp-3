import './index.css';

const Color = () => {
    const colorList = {
        Slate: {
            col: ["#000","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b","#0f172a","#020617"],
            range: [50,100,200,300,400,500,600,700,800,900,950]
        },
        Gray: {
            col: ["#f9fafb","#f3f4f6","#e5e7fb","#d1d5db","#9ca3af","#6b7280","#4b5563","#374151","#1f2937","#111827","#030712"],
            range: [50,100,200,300,400,500,600,700,800,900,950]
        },
        Zinc: {
            col: ["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#52525b","#3f3f46","#27272a","#18181b","#09090b"],
            range: [50,100,200,300,400,500,600,700,800,900,950]
        },
        Neutral: {
            col: ["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#737373","#525252","#404040","#262626","#171717","#0a0a0a"],
            range: [50,100,200,300,400,500,600,700,800,900,950]
        },
        Stone: {
            col: ["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#78716c","#57534e","#44403c","#292524","#1c1917","#0c0a09"],
            range: [50,100,200,300,400,500,600,700,800,900,950]
        }
    }

    return (
        <div className='w-full h-screen bg-gray-900 p-4'>
            {Object.keys(colorList).map((e,i)=>(
                <div>
                    <h1 key={i} className='text-white'>{e}</h1>
                    <ul className='flex items-center justify-evenly w-full'>
                        <li className='h-7 w-7' style={{backgroundColor: `${Object.values(colorList)[0].col[6]}`}}></li>
                    </ul>
                    {/* <ul className='h-5 w-5'>
                        {colorList[e].map((item,itemIndex)=>(
                            <div key={itemIndex} style={{backgroundColor: `${item}`}} className='h-6 w-6'></div>
                        ))}
                    </ul> */}
                </div>
            ))}
        </div>
    );
}

export default Color;