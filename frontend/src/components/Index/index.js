import React , {Component} from 'react' ;
import Home from './../Home'
import Modules from './../Modules'



class Index extends Component{
  render(){
    return (
      <div className="App">
        <Home/>
        <Modules/>
      </div>
    );
  }
}

export default Index;