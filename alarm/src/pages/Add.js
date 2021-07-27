import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './add.css';

import addAlarmList from '../functions/addAlarmList';

function Adding({history}) {
    var today = new Date(); 
    var hours = ('0' + today.getHours()).slice(-2);
    var minutes = ('0' + today.getMinutes()).slice(-2);
    let nowtime = hours+":"+minutes
        
    const [time, setTime] = useState(nowtime)
    const [sound, setSound] = useState('sound1')
    const [pose, setPose] = useState('squat')

    function handleTime(e){
        setTime(e.target.value)
        console.log(time)
    }
    function handleSound(e){
        setSound(e.target.value)
    }
    function handlePose(e){
        setPose(e.target.value)
    }
    function handleSubmit(){
        const input = {
            time : time,
            isOn : true,
            sound : sound,
            pose : pose
        }
        addAlarmList(input, (success) => {
            if(success){
                alert('Saved');
                history.push('/')
            }else{
                alert('Error!')
            }
        })
    }
 
  return (
    <>
    <div className="bod">
    <div className="header">
        <Link className="OrangeT" to={'/'}>
            cancle
        </Link>
        <div className="whiteT">
            Add Alarm
        </div>
        <button className='OrangeT' onClick={handleSubmit}>
            save
        </button>
    </div>
    <div className="main">
        <div className="setTime">
            <div>
                Time
            </div>
            <div>
               <div className="setinner">
                    <input value={time} onChange={handleTime} id='currentTime' className="inputTime" type="time"/>
                </div>
            </div>
        </div>
        <div className="setOther">
            <div className="setSound">
                sound
            </div>
            <select className="selectbox" onChange={handleSound}>
                <option value='sound1'>Give Me Action!</option>
                <option value='sound2'>Reflection</option>
                <option value='sound3'>Marimba</option>
            </select>
        </div>
        <div className="setOther">
            <div className="setPose">
                pose
            </div>
            <select className="selectbox" onChange={handlePose}>
                <option>squat</option>
                <option>lunge</option>
                <option>triangle</option>
            </select>
        </div>
        </div>
    </div>  

    </>
  )
}

export default Adding;
