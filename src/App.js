import logo from './logo.svg';
import './App.css';
import "./assets/css/main.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivateRoute from './protectedRoute/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import PlaceOrder from './pages/PlaceOrder';
import Products from './components/Products';
import PageNotFound from "./pages/PageNotFound";
import ContextProvider from './contexts/ContextProvider';

function App() {
  return (
    <div className="App">
       <ContextProvider>
       <BrowserRouter>
            <Header></Header>
          <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/products">
                <Products></Products>
              </Route>
              <PrivateRoute path="/placeorder/:id">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
              <Route path="*">
                <PageNotFound></PageNotFound>
              </Route>
          </Switch>
            <Footer></Footer>
        </BrowserRouter>
       </ContextProvider>
    </div>
  );
}

export default App;
