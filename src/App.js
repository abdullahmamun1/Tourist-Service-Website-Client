import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import Login from './Components/Login/Login';
import AddDestination from './Components/AddDestination/AddDestination';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import Nav from './Components/Home/Header/Nav/Nav';
import Footer from './Components/Home/Footer/Footer';

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
            <PrivateRoute path="/orders/">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/destinations/add">
              <AddDestination></AddDestination>
            </PrivateRoute>
            <PrivateRoute exact path="/manage">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/destinations/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
