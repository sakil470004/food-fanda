import { createContext, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import HomeDescription from './components/HomeDescription/HomeDescription';
import ToAppBar from './components/TopAppBar/TopAppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodDetails from './components/FoodDetails/FoodDetails';


import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Cart from './components/Cart/Cart';
import AddFood from './components/AddFood/AddFood';
import ManageFood from './components/ManageFood/ManageFood';


export const UserContext = createContext();




function App() {

  const [foods, setFoods] = useState([])
  // const [foods, setFoods] = useState([])

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <ToAppBar />

        <Switch>
          <Route exact path="/">

            <Home foods={foods} setFoods={setFoods} />
            <HomeDescription />
          </Route>
          <Route path="/home">
            <Home foods={foods} setFoods={setFoods} />
            <HomeDescription />
          </Route>
          <Route path="/food/:foodId">
            <FoodDetails />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/addFood'>
            <AddFood />
          </Route>
          <Route path='/manageFood'>
            <ManageFood/>
          </Route>
        </Switch>
      </Router>

      <Footer />

    </UserContext.Provider>
  );
}

export default App;
