import { useEffect,useState } from 'react';
import './App.css';
import Body from './components/Body';

function App() {
  const[ Tickets,setTickets]=useState([]);
  const[Users,setUsers]=useState([]);
  const [groupingValue, setGroupingValue] = useState(
    localStorage.getItem('groupingValue') || 'Status'
  );
  const [orderingValue, setOrderingValue] = useState(
    localStorage.getItem('orderingValue') || 'Title'
  );

  const handleGroupingChange = (event) => {
    const value = event.target.value;
    setGroupingValue(value);
    localStorage.setItem('groupingValue', value);
  };

  const handleOrderingChange = (event) => {
    const value = event.target.value;
    setOrderingValue(value);
    localStorage.setItem('orderingValue', value);
  };


  useEffect(() => {
    // Fetch tickets and users data from the provided API
    const fetchTicketData = async () => {
      try {
const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTicketData();
  }, []);

  console.log(groupingValue);
  
  return (
    <div className="App">
       <div className="navbar">
      <div className="dropdown-container">

        <input type="checkbox" id="displayToggle" className="display-toggle" />

        <label htmlFor="displayToggle" className="display-btn">
        <img src='https://visualpharm.com/assets/240/Horizontal%20Settings%20Mixer-595b40b75ba036ed117d6284.svg' alt='Image' className='display-image' />
          Display
        </label>
        <div className="dropdown-content">
          <div className="form-group">
            <label htmlFor="groupingDropdown" className="display-heading">
              Grouping
            </label>
            <select id="groupingDropdown" className="dropdown-btn"
            value={groupingValue}
            onChange={handleGroupingChange}>
              <option value="Status">Status</option>
              <option value="User">User</option>
              <option value="Priority">Priority</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="orderingDropdown" className="display-heading">
              Ordering
            </label>
            <select id="orderingDropdown" className="dropdown-btn"
                        value={orderingValue}
                        onChange={handleOrderingChange}>
              <option value="Title">Title</option>
              <option value="Priority">Priority</option>
            </select>
          </div>
        </div>
      </div>
    </div>


      <Body tickets={Tickets} users={Users} grouping={groupingValue} ordering={orderingValue} />
 
    </div>
  );
}

export default App;
