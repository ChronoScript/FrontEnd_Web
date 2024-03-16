import logo from './logo.svg';
import './App.css';
import UserComponents from './components/UserComponent';
import LoginComponents from './components/LoginComponent';
import {BrowserRouter,Router,Routes,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/Register"> <UserComponents/></Route>
              <Route path="/Login"> <LoginComponents/></Route>

          
              </Switch>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
