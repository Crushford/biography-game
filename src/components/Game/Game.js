import React, {Component} from 'react';
import Chapter1 from './Chapter1/Chapter1.js'

class Game extends Component{
    handleBioButtonClick(){
        this.props.changeDisplay('Bio')
    }

    render(){
        return (
            <div className="Game-page">
                <Chapter1 player={this.props.player} updatePlayer={this.props.updatePlayer}/>
                <button onClick={()=>this.handleBioButtonClick()}>View my Biography so far</button>
            </div>
        )
    }
}

export default Game 