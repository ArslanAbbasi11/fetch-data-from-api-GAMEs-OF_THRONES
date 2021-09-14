import logo from './logo.svg';
import './App.css';
import UserList from './Components/List';
import ShowMore from './Components/More';
import { Switch,Route } from 'react-router';
import AppHeader from './Components/Header';
function App() {
  return (
    <div>
      <AppHeader/>
<Switch>
      <div className="container">
        <Route path="/" exact component={UserList}/>
        <Route path="/details/:id"  component={ShowMore}/>
      </div>
</Switch>
     
    </div>
  );
}

export default App;
