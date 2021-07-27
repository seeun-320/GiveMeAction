import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Clock from 'react-live-clock';

import alarmOn from '../functions/alarmOn';

import './waiting.css';

class Waiting extends Component{

    render(){
      alarmOn()
        return (
          <>
          <div className="waiting">
          <div id="nowtime">
            <Clock format={'HH:mm:ss'} ticking={true}/>
          </div>
          <div>
              <Link to={"/"}>
                  <button>^</button>
              </Link>
          </div>

          </div>
          </>
        )
    }
}


export default Waiting;
