import React, { PropTypes } from 'react';

const SequenceRow = (props) => {
  function makeRow(v, i) {
    const channelClasses = v ? 'lighton' : 'lightoff';
    return (
      <div
        className="stepbutton"
        data-channel={props.channelNum}
        data-stepindx={props.bside ? i + 13 : i}
        onClick={props.updateSeq}
        key={`c${v}s${i}`}
      >
      <div className={channelClasses} /></div>
    );
  }

  return (
    <div className="SequenceRow">
      {props.channel.map(makeRow, this)}
    </div>
  );
};

// channelRow.propTypes = {
//   channelNum: PropTypes.number.isRequired,
//   bside: PropTypes.bool.isRequired,
//   updateSeq: PropTypes.func.isRequired,
//   channel: PropTypes.array.isRequired
// };

export default SequenceRow;