import React, {Component} from 'react';

class Chapter1 extends Component{
    constructor(props){
        super(props)
        this.state={
            stageInChapter:0,
            name:''
        }
    }
    nameHandleClick=()=>{
        this.props.updatePlayer("name", this.state.name)
    }
    handleNameChange=(e)=>{
        this.setState({name:e.target.value})
    }
    render(){
        return (
            <div className="Chapter1">
                <h1 className="game-text">What is your name?</h1>

                    <input className="name-form__input-field" type='text' ref="nameInput" onChange={this.handleNameChange}/>
                    <button className="name-form__submit-button" onClick={this.nameHandleClick}>OK</button>

            </div>
        )
    }
}

export default Chapter1 