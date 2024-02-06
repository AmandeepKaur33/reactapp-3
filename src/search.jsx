import './index.css';
import bgimg from './images/download (18).jpg';
import textimg from './images/text.svg';
import videoimg from './images/video.svg';
import pageimg from './images/page.svg';
import calimg from './images/calen.svg';
import tblimg from './images/table.svg';
import codeimg from './images/code.svg';
import iimg from './images/image.svg';
// import serchinp from './searchFunc';

function Search(){
    const User = [
        {imgUrl: textimg, color: "rgba(28, 28, 182, 0.623)", title: "Text", description: "Add freeform text with basic formatting options."},
        {imgUrl: videoimg, color: "rgb(55, 102, 231)", title: "Video", description: "Add a video from Youtube, Vimeo or other services."},
        {imgUrl: pageimg, color: "rgb(137, 55, 231)", title: "Page", description: "Add a new blank page to your project."},
        {imgUrl: calimg, color: "rgb(13, 202, 202)", title: "Calender", description: "Add a full month calender or a week view calender."},
        {imgUrl: tblimg, color: "rgb(22, 153, 153)", title: "Table", description: "Add a table for displaying larger sets of data."},
        {imgUrl: codeimg, color: "rgba(127, 22, 153, 0.918)", title: "Code", description: "Add raw HTML, Javascript or CSS code."},
        {imgUrl: iimg, color: "rgb(255, 35, 138)", title: "Image", description: "Add a simple image or a photo gallery."},
    ]
    return (
        <div className='w-full h-[90vh] bg-[image:var(--image-url)] bg-no-repeat bg-cover flex items-center justify-center' style={{'--image-url': `url(${bgimg})`}}>
           <div className='bg-white w-2/5 h-4/5 rounded-xl overflow-y-auto scroll-smooth'>
            <div className='p-3'>
                <input className='p-5 w-full h-6' type='text' placeholder='Search' id='inp' />
            </div>
            <div className='overflow-y-auto scroll-smooth'>
            <ul className='flex flex-col items-start gap-2 p-5 '>
                {User.map((element,index)=>(
                    <li key={index} className='flex items-center' >
                        <div style={{backgroundColor: element.color}} className=' rounded-lg h-12 w-12 flex items-center justify-center'>
                        <img src={element.imgUrl} width={36} alt='logo'/>
                        </div>
                        <div className=' h-full flex flex-col justify-center m-3'>
                            <h1 className=' font-semibold' >{element.title}</h1>
                            <h3>{element.description}</h3>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
           </div>
        </div>
    );
    // function searchinp(){
    //      let srch = document.getElementById("inp").value.toUpperCase();
    //      let display = document.querySelectorAll(".display");

    //      display.forEach(function(v){
    //         let tag = v.getElementsByTagName('h1')[0];
    //         let text = tag.textContent.toUpperCase();

            // if(text.indexOf(srch)>-1){
            //     v.style.display = "flex";
            // }
            // else{
            //     v.style.display = "none";
            // }
        //  })

    
}

export default Search;