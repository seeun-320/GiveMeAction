import React from 'react';
import Clock from 'react-live-clock';

import ReactAudioPlayer from 'react-audio-player';
import './alarm.css';
import sound1 from '../queen-samantha-give-me-action.mp3'

function Alarm({location, history}) {
    // const sound = location.search.split(/[=|&]/)[1]
    const pose = location.search.split(/[=|&]/)[3]


    function goTrain(){
        history.push('/training?pose='+pose)
    }
    // printTime();
     
    return (<>

        <div>
        <ReactAudioPlayer
            src={sound1}
            autoPlay={true}
            loop
        />
 

        
            <div id="timebox" className="alarmdiv">
                <span id="clock">
                    <Clock format={'HH : mm'} ticking={true} />

                </span><br />
                <span id="date">
                    <Clock format={'yyyy. MM. DD dddd'} />
                </span>
            </div>
            <div id="btnbox" className="alarmdiv"><button id="Abutton" className="btn-1" type="button" onClick={goTrain}>start training</button></div>

        </div>
    </>)

}

export default Alarm;