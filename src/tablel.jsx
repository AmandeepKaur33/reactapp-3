import './index.css';
import './tablel.css';
import pic1 from './images/download (13).jpg';
import pic2 from './images/download (14).jpg';
import pic3 from './images/cust.png';
import pic4 from './images/cust2.avif';

function Tablelist() {
    const tlist = [
                {
                    "user": {
                        "img": pic1,
                        "name": "Micheal Foaster"
                    },
                   "Commit": "2d89f0c8",
                    "Status": "Completed",
                    "Duration": "25s",
                    "Deployed at": "45 minutes ago"
                },
                {
                    "user": {
                        "img": pic2,
                        "name": "Lindsay Walton"
                    },
                    "Commit": "249df660",
                    "Status": "Completed",
                    "Duration": "1m 32s",
                    "Deployed at": "3 hours ago"
                },
                {
                    "user": {
                        "img": pic4,
                        "name": "Courtney Henrey"
                    },
                    "Commit": "11464223",
                    "Status": "Error",
                    "Duration": "1m 4s",
                    "Deployed at": "12 hours ago"
                },
                {
                    "user": {
                        "img": pic4,
                        "name": "Courtsey Hennry"
                    },
                    "Commit": "dad28e95",
                    "Status": "Completed",
                    "Duration": "2m 15s",
                    "Deployed at": "2 days ago"
                },
                {
                    "user": {
                        "img": pic1,
                        "name": "Micheal Foaster"
                    },
                    "Commit": "624bc94c",
                    "Status": "Completed",
                    "Duration": "1m 12s",
                    "Deployed at": "5 days ago"
                },
                {
                    "user": {
                        "img": pic4,
                        "name": "Courtsey Hennry"
                    },
                    "Commit": "e111f80e",
                    "Status": "Completed",
                    "Duration": "1m 56s",
                    "Deployed at": "1 week ago"
                },
                {
                    "user": {
                        "img": pic1,
                        "name": "Micheal Foaster"
                    },
                    "Commit": "5e136005",
                    "Status": "Completed",
                    "Duration": "3m 45s",
                    "Deployed at": "1 week ago"
                },
                {
                    "user": {
                        "img": pic3,
                        "name": "Whitney Francis"
                    },
                    "Commit": "Scifd07f",
                    "Status": "Completed",
                    "Duration": "37s",
                    "Deployed at": "2 weeks ago"
                },
            ]
    return (
        <div className='p-10 w-full bg-gray-900 flex items-center justify-center text-white'>
            <table className=' gap-8 w-full'>
                <tr className='border-b-2 border-b-gray-600'>
                    <td class="td2">User</td>
                    <td class="td2">Commit</td>
                    <td class="td2">Status</td>
                    <td class="td2">Duration</td>
                    <td class="td2">Deployed at</td>
                </tr>
                {tlist.map((element,index)=>(
                    <tr key={index} className='border-b-2 border-b-gray-800'>
                        <td className='bg-red-600 border' class='td td1'>
                            <img src={element.user.img} className='h-12 mr-3 w-12 rounded-full' alt='pic'/>
                            {element.user.name}
                        </td>
                        <td className='bg-green-600 border' class='td td1'>
                            {element.Commit}
                            <button className='ml-3 bg-slate-800 px-3 py-1'>main</button>
                        </td>
                        <td className=' bg-pink-600 border text-center h-14 w-[250px]' class='td td1'>
                        {(element.Status)==="Completed"?
                         <button id='btn-green'></button>
                        :
                         <button id='btn-red'></button>
                        }
                        {element.Status}
                        </td>
                        <td className='bg-blue-600 border' class="td td1">
                            {element.Duration}
                        </td>
                        <td className='bg-purple-600 border' class="td td1">
                            {element['Deployed at']}
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
export default Tablelist;