import React, { Component } from 'react';
import Clock from 'react-live-clock';
import {Panel} from '@enact/sandstone/Panels';
import {Link} from 'react-router-dom';

import alarmOn from '../functions/alarmOn';


import './waiting.css';

function Waiting({history}) {
    alarmOn(history={history})
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
            <Link to={"/"}>
              <button>^</button>
            </Link>
          </div>

        </div>
      </Panel>
    )
}


export default Waiting;
