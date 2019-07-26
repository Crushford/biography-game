import React from 'react';

function GameText(props){
    switch(props.stageInChapter) {
        case 0:
          return <h1>Hello there, you've been alseep for a long time</h1>;
        case 1:
            return <h1>Do you know your name?</h1>
        default:
          return <p>you've reached the end fo the game, check out your bio</p>
      }
}

export default GameText 