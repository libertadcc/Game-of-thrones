import React from 'react';
import './scss/main.scss';
import Houses from './Components/Houses';
import Detail from './Components/Detail';
import {data} from './Components/data';
import got from './Components/got.png';
import {Switch, Route} from 'react-router-dom';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      houses: []
    }
  }
  componentDidMount(){
    this.setState({
      houses: data
    })
  }
  render(){
    return(
      <div className="page">
        <h1 className="title">Houses of <img className="logo" src={got} alt="Game of thrones oficial logo"/></h1>
        <Switch>
          <Route exact path="/" render={() => (
            <Houses houses={this.state.houses} /> )}/>
          <Route path="/detail/:child" render={(casita) => (
            <Detail parametros={casita} houses={this.state.houses}/>
          )}/>
        </Switch>

          
      </div>
    );
  }
}

export default App;
