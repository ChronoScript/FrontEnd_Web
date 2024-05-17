import logo from './logo.svg';
import './App.css';
import Navbar from './Menu/Navbar';
import UserComponents from './components/UserComponent';
import HomeComponents from './components/HomeComponent';
import LoginComponents from './components/LoginComponent';
import ListHouseOwnerComponents from './components/ListHouseOwnerComponent';

import {BrowserRouter,Router,Routes,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
         
          <div className="App">
            <Switch>
             
              <Route path="/Register"> <UserComponents/></Route>
              <Route path="/Login"> <LoginComponents/></Route>
              <Route path="/ListHouseOwner"><ListHouseOwnerComponents/></Route>
            
              <Route path="/"> <HomeComponents/></Route>



          
              </Switch>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
