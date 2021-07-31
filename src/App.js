import './App.css';
import { Home } from './screen/Home';
import {Route} from 'react-router-dom'
import BookingList from './components/BookingList';

function App() {
  return (
    <>
    <Route exact path='/' component={Home}/>
    <Route exact path='/booking-list' component={BookingList} />
    </>
  );
}

export default App;
