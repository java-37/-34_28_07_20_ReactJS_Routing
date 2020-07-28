import React from 'react';
import './App.css';
import {Link, NavLink,Route, Switch} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactsComponent from './components/ContactsComponent';
import ListComponent from './components/ListComponent';
import ViewListComponent from './components/ViewListComponent';

function App() {
  return (
    <div className="App">
      <ul className="App-nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to={{
          pathname:"/about",
          search:"?a=10&b=20",
          hash:"TelRan"
        }} 
        activeClassName="my-active">About</NavLink></li>
        <li><NavLink to="/contacts" activeStyle={{color:"blue"}}>Contacts</NavLink></li>
      </ul>
      <hr />

      {/* <Route path="/" exact render={() => <HomeComponent />} />
      <Route path="/about" render={() => <AboutComponent />} />
      <Route path="/contacts" render={() => <ContactsComponent />} /> */}
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/contacts" component={ContactsComponent} />
        {/* <div style={{display:"flex"}}> */}
          
          <Route path="/list" component={ListComponent}/>
          
        {/* </div> */}
        <Route path="**" render={()=><div style={{color:'red',fontWeight:'bold'}}>404 Not found</div>}/>
      </Switch>
    </div>
  );
}

export default App;
