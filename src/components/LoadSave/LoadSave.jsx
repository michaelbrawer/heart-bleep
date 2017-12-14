import React from 'react';
import {Button} from 'react-materialize';
import './LoadSave.css';

const LoadSave = (props) => {
  let buttons = props.user
    ? <div>
        <Button s={12} className="grey" waves="light" onClick={props.loadPattern}>Load</Button>
        <Button s={12} className="red" waves="light" onClick={props.handleSaveClick}>Save</Button>
      </div>
    : <div></div>
  return (
    <div>
      {buttons}
    </div>
  )
}

export default LoadSave;