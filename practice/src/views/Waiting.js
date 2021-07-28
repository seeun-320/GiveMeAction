import React, { Component } from 'react';
import Clock from 'react-live-clock';
import {Panel} from '@enact/sandstone/Panels';

import alarmOn from '../functions/alarmOn';

import './waiting.css';

class Waiting extends Component {

  render() {
    alarmOn()
    return (
      <Panel>
        <div className="waiting" >
          <div id="nowdate">
            <Clock format={'yyyy.MM.DD ddd'} ticking={true} />
          </div>
          <br />
          <div id="nowtime">
            <Clock format={'HH:mm:ss'} ticking={true} />
          </div>
          <div>
            <a href="/">
              <button>^</button>
            </a>
          </div>

        </div>
      </Panel>
    )
  }
}


export default Waiting;
