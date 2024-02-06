import './index.css';
import home from './images/home.svg';
import team from './images/team.svg';
import project from './images/project.svg';
import calendar from './images/calender.svg';
import documents from './images/document.svg';
import reports from './images/reports.svg';


function Vertical() {
    const dashboard = [
        {
            imgUrl: home,
            title: "Dashboard",
            number: 5
        },
        {
            imgUrl: team,
            title: "Team",
            number: null
        },
        {
            imgUrl: project,
            title: "Projects",
            number: 12
        },
        {
            imgUrl: calendar,
            title: "Calender",
            number: "20+"
        },
        {
            imgUrl: documents,
            title: "Documents",
            number: null
        },
        {
            imgUrl: reports,
            title: "Reports",
            number: null
        }
    ]
    const proj = [
        {
            logo: "w",
            text: "Website redesign"
        },
        {
            logo: "G",
            text: "GraphicQL API"
        },
        {
            logo: "C",
            text: "Customer migeration guides"
        },
        {
            logo: "P",
            text: "Profit sharing program"
        }
    ]
    return (
        <div className=' w-full h-screen flex items-center justify-center'>
            <div className=' w-1/4 h-4/5 bg-white p-4'>
                {dashboard.map((element)=>(
                    <div className='flex items-center justify-between mb-2 p-1 hover:bg-blue-100 hover:text-blue-500'>
                        <div className='flex items-center w-1/4'>
                        <img src={element.imgUrl} alt="icon" width="26" />
                        <h2 className='pl-2 text-zinc-900 font-normal hover:text-blue-500'>{element.title}</h2>
                        </div>
                        {element.number!=null?
                        (<h3 className='border border-zinc-300 pl-4 pr-4 rounded-xl align-middle text-center bg-white'>{element.number}</h3>)
                        :
                        (null)}
        
                    </div>
                ))}
                <h3 className='mt-8'>Projects</h3>
                {proj.map((element)=>(
                    <div className='flex items-center mb-1 p-2 hover:bg-blue-100 hover:text-blue-500'>
                        <h3 className='pl-2 align-middle items-center pr-2 rounded-lg bg-white border hover:border-blue-500 hover:text-blue-500'>{element.logo}</h3>
                        <h2 className='ml-2 text-zinc-900 hover:text-blue-500'>{element.text}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Vertical;