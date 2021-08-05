import React from 'react';
import Clock from 'react-live-clock';

import Panels, {Panel} from '@enact/sandstone/Panels';

import ReactAudioPlayer from 'react-audio-player';
import './alarm.css';
import sound1 from '../queen-samantha-give-me-action.mp3'
import sound2 from '../Opening.mp3'
import sound3 from '../Radar.mp3'

function Alarm({location, history}) {
    const sound = location.search.split(/[=|&|/]/)[1]
    const pose = location.search.split(/[=|&|/]/)[3]
    const ids = location.search.split(/[=|&|/]/)[5]

    console.log(sound, pose, ids)
    const track = {
        'sound1' : {sound1},
        'sound2' : {sound2},
        'sound3' : {sound3},
    }


    function goTrain(){
        history.push('/#/training?pose='+pose+'&id='+ids)
    }
    // printTime();
    return (<Panels>

        <div>

        {(sound === 'sound1') && (
                <ReactAudioPlayer src={sound1} autoPlay={true} loop/> 
        )}
        {(sound === 'sound2') && (
                <ReactAudioPlayer src={sound2} autoPlay={true} loop/> 
        )}
        {(sound === 'sound3') && (
                <ReactAudioPlayer src={sound3} autoPlay={true} loop/> 
        )}

        
            <div id="timebox" className="alarmdiv" style={{fontSize:'50px'}}>
                <div id="clock" style={{marginBottom:'30px'}}>
                    <Clock format={'HH : mm'} ticking={true} />

                </div>
                <div id="date">
                    <Clock format={'yyyy. MM. DD dddd'} />
                </div>
            </div>
            <div id="btnbox" className="alarmdiv"><button id="Abutton" className="btn-1" type="button" onClick={goTrain} style={{borderRadius:"200px", padding:'1em 2em'}}>start training</button></div>

        </div>
    </Panels>)

}

export default Alarm;