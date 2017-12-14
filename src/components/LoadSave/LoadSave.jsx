import React from 'react';
import './LoadSave.css';
import {Button} from 'react-materialize';

const LoadSave = (props) => {
  let butz = props.user ?
  <div>
  <Button onClick={props.loadPattern}>Load</Button>
  <Button onClick={props.handleSaveClick}>Save</Button>
  </div>
  :
  <div></div>

  return (
    <div>
    {butz}
    </div>
  )
}

export default LoadSave;