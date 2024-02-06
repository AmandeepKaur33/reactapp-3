// import logo from './logo.svg';
import './App.css';
import pic1 from './images/download (13).jpg';
import pic2 from './images/download (14).jpg';
import pic3 from './images/cust.png';
import './index.css';

function App() {
  const list = [
    {
        name: "Leslie Alexander",
        email: "leslie.alexander@example.com",
        image: pic2,
        job: "Co-Founder/CEO",
        status: "3h ago"
,
lastSeen: '2024-01-23T13:23Z'
    },
    {
        name: "Michael Foster",
        email: "michael.foster@example.com",
        image: pic3,
        job: "Co-Founder/CTO",
        status: "3h ago"
,
lastSeen: '2024-01-23T13:23Z'
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      image: pic1,
      job: "Business Relations",
      status: "4h ago",
      lastSeen: null
  },
  {
    name: "Lindsey Walton",
    email: "lindsay.walton@example.com",
    image: pic1,
    job: "Business Relations",
    status: "4h ago",
    lastSeen: '2024-01-23T13:23Z'
},
{
  name: "Dries Vincent",
  email: "dries.vincent@example.com",
  image: pic1,
  job: "Business Relations",
  status: "4h ag0",
  lastSeen: '2024-01-23T13:23Z'
},
{
  name: "Dries Vincent",
  email: "dries.vincent@example.com",
  image: pic1,
  job: "Business Relations",
  status: "4h ago",
  lastSeen: '2024-01-23T13:23Z'
}
]
  return (
      list.map((element) => (
      <div className='wrapper'>
        <div className='left'>
          <img src={element.image} alt='pic1' />
          <div className='info'>
            <h2>{element.name}</h2>
            <h3>{element.email}</h3>
          </div>
        </div>
        <div className="right">
          <h2>{element.job}</h2>
          {element.lastSeen?(
            <h3>Last seen {element.status}</h3>
          ):(
            <div className="chnge">
              <button className="online"></button>
              <h3>Online</h3>
            </div>
          )}
        </div>
      </div>
      
    ))
  );
}

export default App;
