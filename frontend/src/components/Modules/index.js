import React, { Component }  from 'react' ;
import axios from 'axios'

import {ModuleTitle , ModuleSection , ModuleButton , ModuleDesc ,  Span , ModulePart}  from './style.js' ;
import { connect } from 'react-redux';


class Modules extends Component {  
  state = {
    modules : [] ,
  } 

 componentDidMount()  {
    axios.get('static/js/data.json').then(res => {this.setState({ modules: res.data.modules}) }  )
  }
  render() {
    const {isAuthenticated} = this.props ;

    const {modules} = this.state ;
    const modulesList = modules && modules !== null && modules !== undefined && modules.map( (moduleItem) => {
      return(
        <ModulePart first={moduleItem.id} key = {moduleItem.id}>
              <ModuleTitle first={moduleItem.id}>{moduleItem.title}</ModuleTitle>
              <ModuleDesc first={moduleItem.id}>{moduleItem.description}</ModuleDesc>
              {isAuthenticated ? <ModuleButton to= '/image-upload'>Start</ModuleButton> : '' }
          </ModulePart>
      )

    })
    return (
      <ModuleSection>
      <div className="page_conatiner">
          <Span>Modules</Span>
          {modulesList}
      </div>
  </ModuleSection>
    );

  }
    
}
  
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps , null) (Modules);