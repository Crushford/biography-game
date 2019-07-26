import React, {Component} from 'react';

class Start extends Component {
    handleGameButtonClick(){
        this.props.changeDisplay('Game')
    }
    // handleBioButtonClick(){
    //     this.props.changeDisplay('Bio')
    // }
    

    render(){
        return (
            <div className="start-page">
                <h1 className="start-page__title">This is a Game about the Creation your own Biography</h1>
                <button onClick={()=>this.handleGameButtonClick()}>Play Game</button>
                {/* <button onClick={()=>this.handleBioButtonClick()}>View my Biography</button> */}
            </div>
        )
    }
}

export default Start 