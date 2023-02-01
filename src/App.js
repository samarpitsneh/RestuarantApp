import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail  from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     
     <Router>
     
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/detail">Details</Link></li>
        <li><Link to="/update">Update</Link></li>
      </ul>
      <Routes>
      <Route path='/list' element={<RestaurantList />} />
        
      
      <Route path="/create" element={<RestaurantCreate />} />
       
      <Route path="/search" element={<RestaurantSearch />} />
        
      
      <Route path="/detail" element={<RestaurantDetail />} />
        
      
      <Route path="/update" element={<RestaurantUpdate />} />
        
      
      <Route exact path="/" element={<Home />} />
        
      </Routes>
     </Router>


    </div>
  );
}

export default App;
