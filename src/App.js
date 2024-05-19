import logo from './logo.svg';
import './App.css';
//import Navbar from './Menu/Navbar';
import UserComponents from './components/UserComponent';

//import HomeComponents from './components/HomeComponent';
//import LoginComponents from './components/LoginComponent';
//import {BrowserRouter,Router,Routes,Route,Switch} from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




// Filename - App.js
//import "./App.css";
import Sidebar from "./components/Sidebar";

import {
    Services,
    ServicesOne,
    ServicesTwo,
    ServicesThree,
} from "./pages/Services";
import {
    Events,
    EventsOne,
    EventsTwo,
} from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import HouseOwnerComponent from './components/HouseOwnerComponent';
import { LiaStackExchange } from 'react-icons/lia';
import ListHouseOwnerComponent from './components/ListHouseOwnerComponent';
import ListDietitianComponent from './components/ListDietitianComponent';
import DietitianComponent from './components/DietitianComponent';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import { AboutUs } from './pages/AboutUs';
import page from './components/page';
import Navbar from './components/Navbar';
import RecipeGenerator from './components/RecipeGenerator';
//import RecipeCard from './components/RecipeCard';
//import RecipeGenerator from './components/RecipeGenerator';





function App() {
  return (
      <Router>
          <Routes>
            <Route
              path="/"
              element={<HomeComponent/>}
            />
            <Route
              path="/login"
              element={<LoginComponent/>}
            />
             <Route
              path="/register"
              element={<UserComponents />}
            />
          </Routes>
          <Sidebar />
          <Routes>
              <Route
                  path="/dashboard"
                  element={<AboutUs />}
              />
              
              <Route
                  path="/Recipe"
                  element={<RecipeGenerator />}
              />
              <Route
                  path="/HouseOwnerProfile"
                  element={<HouseOwnerComponent />}
              />
              <Route
                  path="/ListHouseOwner"
                  element={<ListHouseOwnerComponent />}
              />
              <Route
                  path="/edit-houseowner/:id"
                  element={<HouseOwnerComponent />}
              />
              <Route
                  path="/contact"
                  element={<Contact />}
              />
              <Route
                  path="/ListDietitian"
                  element={<ListDietitianComponent />}
              />
              <Route
                  path="/DietitianProfile"
                  element={<DietitianComponent />}
              />
              <Route
                  path="/edit-dietitian/:id"
                  element={<DietitianComponent />}
              />
           
          </Routes>
      </Router>


  );
}



export default App;