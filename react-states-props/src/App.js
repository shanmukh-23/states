import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login'
import Profile from './Profile'
import NN from './NN'
import Dashboard from './Dashboard'
import Itsm from './Itsm'
import Optix from './Optix'
import Hybridit from './Hybridit'
import Security from './Security'
import Visibility from './Visibility'
import Collaboration from './Collaboration'
import Project from './Project'
import Alarm from './Alarm'
import Settings from './Settings'
// import Content from './Content'


function App() {

 
  return (
    <div>
       {/* <Props name = "john" company = "EverestDX"/>
      <Props name = "kane" company = "EverestDX"/>
      <Props name = "williamson" company = "EverestDX"/>


      <ClassProps n = "classcomponent"/>
      <ClassProps n = "another one"/>  
        <CC2/>
   
       <UseE/>
      <Increment/> 
       <CC3/> 
      <CLC/>  */}
      <Router>
        <Switch>
        <Route exact path = "/"  component = {NN}/>
          <Route exact path = "/login" component = {Login}/>
          <Route exact  path = "/profile" component = {Profile}/>
          <Route exact path = "/nn" component = {NN}/>
          <Route exact path = "/dashboard" component = {Dashboard}/>
          <Route exact path = "/itsm" component = {Itsm}/>
          <Route exact path = "/optix" component = {Optix}/>
          <Route exact path = "/hybridit" component = {Hybridit}/>
          <Route exact path = "/security" component = {Security}/>
          <Route exact path = "/visibility" component = {Visibility}/>
          <Route exact path = "/collaboration" component = {Collaboration}/>
          <Route exact path = "/project" component = {Project}/>
          <Route exact path = "/alarm" component = {Alarm}/>
          <Route exact path = "/settings" component = {Settings}/>
        </Switch>
      </Router>
     {/* <Login/> */}
     {/* <Content/> */}
    </div>
  );
}

export default App;
