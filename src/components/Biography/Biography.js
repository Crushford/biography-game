import React, {Component} from 'react';

class Biography extends Component{
    handleGameButtonClick(){
        this.props.changeDisplay('Game')
    }

    render(){
        console.log(this.props.player)
        return (
            <div className="Biography-page">
                <h1 className="Biography-page__title">The story of {this.props.player.name}</h1>
                <button onClick={()=>this.handleGameButtonClick()}>Back to Game</button>
            </div>
        )
    }
}

export default Biography 