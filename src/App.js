import { Placeholder } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';

import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import HomePage from './Pages/Home/HomePage/HomePage';
import PlaceOrders from './Pages/Home/PlaceOrders/PlaceOrders';
import Purchase from './Pages/Home/Services/Purchase/Purchase';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';

import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import SpecialOffer from './Pages/SpecialOffer/SpecialOffer';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
      <Switch>
        <Route exact path='/'>
            <HomePage></HomePage>
        </Route>
        <Route exact path='/home'>
            <HomePage></HomePage>
        </Route>
        <Route exact path='/login'>
            <Login></Login>
        </Route>
        <Route exact path='/register'>
           <Register></Register>
        </Route>
        <Route exact path='/specialoffer'>
            <SpecialOffer></SpecialOffer>
        </Route>
       <PrivateRoute path='/dashboard'>
         <Dashboard></Dashboard>
       </PrivateRoute>
       
        <PrivateRoute exact path='/purchase/:detailId'>
        <Purchase></Purchase>
        </PrivateRoute>
        <Route exact path='/placeorder'>
        <PlaceOrders></PlaceOrders>
        </Route>
      

      </Switch>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
