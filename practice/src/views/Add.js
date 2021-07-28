import React, {useState, useEffect} from 'react';

import {Panel} from '@enact/sandstone/Panels';

import './add.css';

import addAlarmList from '../functions/addAlarmList';
import editAlarm from '../functions/editAlarm';

function Adding({location, history}) {
    var today = new Date();
    const id = location.search.split(/[=|&]/)[1]
    let nowtime, setsound='sound1', setpose='squat';
    var hours = ('0' + today.getHours()).slice(-2);
    var minutes = ('0' + today.getMinutes()).slice(-2);
    nowtime = hours+":"+minutes

    useEffect(()=>{
        if(id!==undefined){
            editAlarm({id}, (success, setAlarm)=>{
                if(!success){
                    window.alert('Server is Error!')
                }else{
                    setTitle('Edit')
                    setTime(setAlarm.time)
                    setSound(setAlarm.sound)
                    setPose(setAlarm.pose)
                }
            })
        }
    },[])
    
    const [time, setTime] = useState(nowtime)
    const [sound, setSound] = useState(setsound)
    const [pose, setPose] = useState(setpose)
    const [title, setTitle] = useState('Add')

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
            id:id,
            time : time,
            isOn : true,
            sound : sound,
            pose : pose
        }
        addAlarmList(input, (success) => {
            if(success){
                window.alert('saved')
                window.location.replace('/')
            }else{
                window.alert('Error!')
            }
        })
    }
 
  return (
    <Panel>
    <div className="bod">
    <div className="header">
        <a className="OrangeT" href='/'>
            cancle
        </a>
        <div className="whiteT">
            {title} Alarm
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
            <select className="selectbox" onChange={handleSound} value={sound}>
                <option value='sound1'>Give Me Action!</option>
                <option value='sound2'>Reflection</option>
                <option value='sound3'>Marimba</option>
            </select>
        </div>
        <div className="setOther">
            <div className="setPose">
                pose
            </div>
            <select className="selectbox" onChange={handlePose} value={pose}>
                <option>squat</option>
                <option>lunge</option>
                <option>triangle</option>
            </select>
        </div>
        </div>
    </div>  

    </Panel>
  )
}

export default Adding;
