import React from 'react';
import './LoadSave.css';
import {Button} from 'react-materialize';

const LoadSave = (props) => {
  let butz = props.user
    ? <div>
        <Button s={12} className="grey" waves="dark" onClick={props.loadPattern}>Load</Button>
        <Button s={12} className="red" waves="light" onClick={props.handleSaveClick}>Save</Button>
      </div>
    : <div></div>
  return (
    <div>
      {butz}
    </div>
  )
}

export default LoadSave;