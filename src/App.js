import React, {Component} from 'react';
import Start from './components/Start/Start.js';
import Biography from './components/Biography/Biography.js';
import Game from './components/Game/Game.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentlyDisplaying:'Start',
      player:{
        name:'',
        birthplace:''
      }
    }
    this.changeDisplay=this.changeDisplay.bind(this)
    this.updatePlayer=this.updatePlayer.bind(this)
  }

  updatePlayer(key,data){
    console.log(key,data)
    if(key && data){
      this.setState((prevState)=>{
        prevState.player[key] = data;
      })}
  } 

  changeDisplay(display){
    this.setState({currentlyDisplaying:display})
  }
  
  
  render(){
    console.log(this.state.player)
    let toDisplay= '';
    switch(this.state.currentlyDisplaying){
      case 'Game':
      toDisplay=<Game changeDisplay={this.changeDisplay} player={this.state.player} updatePlayer={this.updatePlayer}/>;
      break;
      case 'Bio':
      toDisplay=<Biography changeDisplay={this.changeDisplay} player={this.state.player} updatePlayer={()=>this.updatePlayer}/>;
      break ;       
      default:
      toDisplay=<Start changeDisplay={this.changeDisplay}/>
      break;
    }

    return (
      <div className="App">
        {toDisplay}
      </div>
    );
  }
}

export default App;
