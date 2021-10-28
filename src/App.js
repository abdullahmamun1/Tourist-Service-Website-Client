import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageAllServices from './Components/ManageAllServices/ManageAllServices';
import Login from './Components/Login/Login';
import AddService from './Components/AddService/AddService';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import Nav from './Components/Home/Header/Nav/Nav';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/services/add">
              <AddService></AddService>
            </Route>
            <Route path="/services/manage">
              <ManageAllServices></ManageAllServices>
            </Route>
            <PrivateRoute path="/services/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
