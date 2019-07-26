import React, { Component } from 'react';
import GameText from './GameText/GameText';
import GameInputField from './GameInputField/GameInputField'

class Chapter1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stageInChapter: 0,
        }
    }
    handleGameInputFieldClick = (dataToChange='', newData='', movingForward=1) => {
        if(dataToChange)  this.props.updatePlayer(dataToChange, newData)
        this.setState((state)=>{return{stageInChapter: state.stageInChapter + movingForward}})

    }
    handleDataChange = (dataToChange,e) => {
        this.setState({ [dataToChange]: e.target.value })
    }
    render() {
        console.log(this.state.stageInChapter)
    return(
            <div className = "Chapter1" >
            <GameText stageInChapter={this.state.stageInChapter} />
            <GameInputField stageInChapter={this.state.stageInChapter} handleChange={this.handleDataChange} handleClick={this.handleGameInputFieldClick}/>

            </div>
        )
    }
}

export default Chapter1 