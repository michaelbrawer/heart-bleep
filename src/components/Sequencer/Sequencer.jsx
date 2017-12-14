
import React, { Component } from 'react';
//adds Tone audio Framework
import Tone from 'tone';
import PositionTransform from '../assets/js/position';
import userService from '../../utils/userService';
//fixed pattern assets
import { demoTrack, nullTrack } from '../assets/js/patterns';

// import { nullTrack } from '../assets/js/null_track';

//custom React Components
import SequenceRow from '../SequenceRow/SequenceRow';
import ProgressBar from '../ProgressBar/ProgressBar';
import Transport from '../Transport/Transport'
// import bitKit from '../assets/js/kits'

//Styling:
import {Col, Row, Container} from 'react-materialize'
import './Sequencer.css'


//8-bit drum kit
const bitKit = {
  BD: "https://dl.dropboxusercontent.com/s/91nfm9xg7p16isy/Kick.wav?dl=1",
  SD: "https://dl.dropboxusercontent.com/s/5eqwywqcfu6s1c5/Snare.wav?dl=1",
  CL: "https://dl.dropboxusercontent.com/s/wkonst7oiepsimu/Clap.wav?dl=1",
  CA: "https://dl.dropboxusercontent.com/s/e4k3dqqo7xaqfim/Tamb.wav?dl=1",
  LT: "https://dl.dropboxusercontent.com/s/t191837d7unfh31/LowTom.wav?dl=1",
  CH: "https://dl.dropboxusercontent.com/s/jypkqgpkcve863z/ClosedHat.wav?dl=1",
  OH: "https://dl.dropboxusercontent.com/s/ykqfdn3q8ridglg/OpenHat.wav?dl=1",
  HT: "https://dl.dropboxusercontent.com/s/hx3l8shrbm47bsh/HighTom.wav?dl=1"
}

class Sequencer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 100,
      position: 0,
      volume: -6,
      playing: false,
      bside: false,
      // swing: 0.2,
      currentPattern: (this.props.user ? this.props.user.pattern : nullTrack),
      // currentPattern: (this.props.user ? this.props.user.pattern: nullTrack),
      // (this.props.user ? this.props.user.pattern: nullTrack),
      currentKit: bitKit
    }
  }

//Pattern Save  / Load Methods:

    handleSaveClick = () => {
      let pattern = this.state.currentPattern;
      let email = this.props.user.email
      let id = this.props.user._id
      return fetch(`/api/users/${id}`,{
        method: 'Put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: id, pattern: pattern, email: email})
      }).then(console.log(pattern)).then(this.setState({currentPattern: pattern}))
    }

    loadPattern = () => {
      fetch(userService.getUser()).then(this.setState({currentPattern: this.props.user.pattern}))
      .then(setTimeout(this.getInitialState, 200));
    }

    clearPattern = () => {
      if(this.state.playing){
        Tone.Transport.stop()
        this.setState({currentPattern: nullTrack});
        setTimeout(this.getInitialState, 400);
      } else {
        this.setState({currentPattern: nullTrack});
        setTimeout(this.getInitialState, 400);
      }
    }

      //old Clear Pattern
  clearZZZPattern () {
    this.playSeq.dispose();
    this.setState({currentPattern: nullTrack});
    setTimeout(this.getInitialState, 400)
    // window.location.reload();
  }

    //old Load Pattern
    loadZZZPattern = () => {
    // if (this.state.playing){
    // Tone.Transport.stop();
    // this.setState({currentPattern: this.props.user.pattern});
    // setTimeout(this.getInitialState, 400);
    // } else {
    //   this.setState({currentPattern: this.props.user.pattern});
    //   setTimeout(this.getInitialState, 400);
    // }
    this.setState({currentPattern: this.props.user.pattern})
    setTimeout(this.getInitialState, 400);
    // alert('load')
    // window.location.reload();
    }


    //Instantiates Sequencer
    getInitialState = () =>{
    this.sampleOrder = ['BD', 'SD', 'CL', 'CA', 'LT', 'CH', 'OH', 'HT'];
    let multSampler = new Tone.MultiPlayer({
      urls: (undefined? bitKit : this.state.currentKit)
    }).toMaster();

    let steps = Array(32).fill(1).map((v, i) => {
      return i;
    });

    //generate columns from step values
    let getColumns = (track) => {
      const result = [];
      for (let i = 0; i < 32; i += 1) {
        result.push(track.map((v, idx) => { return v[i] ? this.sampleOrder[idx] : null }).filter(v => v));
      }
      return result;
    };

    this.columnPattern = getColumns(this.state.currentPattern);
    this.playSeq = new Tone.Sequence((time, value) => {
      this.columnPattern[value].forEach((v) => { return multSampler.start(v, time, 0, '16n', 0);});
    }, steps, '16n');

    this.playSeq.start();
    this.playSeq.loop = true;
    // Tone.Transport.setLoopPoints(0, '2m');
    // Tone.Transport.swing = this.state.swing;
    Tone.Transport.setLoopPoints(0, '1m');
    Tone.Transport.loop = true;
    Tone.Transport.scheduleRepeat(this.positionMarker, '16n');
    Tone.Transport.bpm.value = this.state.bpm;
    Tone.Master.volume.value = this.state.volume;
    
  }

  positionMarker = () => {
    this.setState({ position: PositionTransform[Tone.Transport.position.slice(0, 5)] });
  }

  changeTempo = (e) => {
    let newTempo = parseInt(e.currentTarget.value, 10);
    if (isNaN(newTempo)) {
      newTempo = 10;
    }
    if (newTempo > 200) {
      newTempo = 200;
    }
    Tone.Transport.bpm.value = newTempo;
    this.setState({ bpm: newTempo });
  }

  updatePattern = (event) => {
    const channelNum = parseInt(event.currentTarget.dataset.channel, 10);
    const stepNum = parseInt(event.currentTarget.dataset.stepindx, 10);
    const cpattern = this.state.currentPattern;
    if (cpattern[channelNum][stepNum]) {
      cpattern[channelNum][stepNum] = null;
      const colpattemp = this.columnPattern[stepNum].slice();
      const target = colpattemp.indexOf(this.sampleOrder[channelNum]);
      colpattemp.splice(target, 1);
      this.columnPattern[stepNum] = colpattemp;
      this.setState({ currentPattern: cpattern });
    }
    else {
      const newSamp = this.sampleOrder[channelNum];
      this.columnPattern[stepNum].push(newSamp);
      cpattern[channelNum][stepNum] = true;
      this.setState({ currentPattern: cpattern });
    }
    this.setState({ currentPattern: cpattern });
  }

  startStop = () => {
    if (this.state.playing) {
      Tone.Transport.stop();
      this.setState({ playing: false });
    }
    else {
      Tone.Transport.start('+0.25');
      this.setState({ playing: true });
    }
  }

  // changeSwing (s) {
  //   var e = s / 100
  //   Tone.Transport.swing = e;
  //   this.setState({ swing: e });
  // }

  changeVolume(e, value) {
    this.setState({ volume: value });
    if (value < -40) {
      value = -100;
    }
    Tone.Master.volume.value = value;
  }

    /*---------- Lifecycle Methods ----------*/

  componentDidMount(){
    this.getInitialState();
    document.addEventListener('keydown', (e) => {
      const pressed = e.key;
      if (pressed === ' ') {
        this.startStop();
      }
    });
  }

    /*---------- Render ----------*/
  render() {
    function makeSeqRow(v, i) {
      let pattern;
      if (this.state.bside) {
        pattern = v.slice(16);
      }
      else {
        pattern = v.slice(0, 16);
      }
      return (
        <SequenceRow
          bside={this.state.bside}
          key={`${i}row`}
          channelNum={i}
          updateSeq={this.updatePattern}
          channel={pattern}
        />
      );
    }

    return (
      <Container>
      <div className="rackcabinet">
        <div className="rack">
          <div className="drumrack">
            <ProgressBar prog={this.state.position} />
            {this.state.currentPattern.map(makeSeqRow, this)}
          </div>
        </div>
      </div>
     
      <Transport
              user={this.props.user}
              handleSaveClick={this.handleSaveClick}
              playing={this.state.playing}
              bpm_num={this.state.bpm}
              swing_num={this.state.swing}
              pattern={this.state.currentPattern}
              tempo_f={this.changeTempo}
              swing_f={this.changeSwing}
              playbutton_f={this.startStop}
              clearPattern={this.clearPattern}
              loadPattern={this.loadPattern}
            />
            {/* <button onClick={this.clearPattern}>Clear Pattern</button>
            <button onClick={this.loadPattern}>Load Pattern</button> */}
      </Container>
    );
  }
}

export default Sequencer;
