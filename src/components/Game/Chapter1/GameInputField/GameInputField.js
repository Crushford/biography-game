import React, { Component } from 'react';

class GameInputField extends Component {
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    }
    handleGameInputFieldClick = () => {
        this.props.handleClick('name', this.state.name,1);
        // this.props.handleClick();
        console.log('click')
    }

    handleDataChange = (e) => {
        console.log(e.target)
        this.setState({ name: e.target.value })
    }

    render() {
        switch(this.props.stageInChapter) {
            case 0:
              return <button onClick={this.handleGameInputFieldClick}>Continue</button>
            case 1:
                return (
                     <form>
                    <input onChange={this.handleDataChange}/>
                    <button onClick={this.handleGameInputFieldClick}>yes, thats my name</button>
                </form>
                );
            default:
                return <div></div>
          }
    }
}

export default GameInputField 