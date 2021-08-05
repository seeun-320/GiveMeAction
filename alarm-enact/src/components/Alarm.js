import React, {useState} from 'react';
import { firestore } from "../firebase";
import { Link } from 'react-router-dom';

import { DragSwitch } from 'react-dragswitch'
import { RiChatDeleteLine } from "react-icons/ri";
import { BiCommentEdit } from "react-icons/bi";

import deleteAlarm from '../functions/deleteAlarm';
import 'react-dragswitch/dist/index.css'

const Alarm = ({time, isOn, id, history}) => {
    let time1="AM", time2=time
    let setColor='setColorB'
    if(!isOn) setColor='setColorG'
    const [checked, setChecked] = useState(isOn)
    const [Color, setColored] = useState(setColor)
    
    if((time2[0]+time2[1])>'11'){
        time1 = "PM"
        time2 = (time[0]+time[1])-'12'
        time2 = time2+':'+time[3]+time[4]
        if(time2.length === 4) time2 = '0' + time2
    }
    async function handleCheck(e){
        setChecked(e)
        if(checked===false) setColored('setColorB')
        else setColored('setColorG')
        try {
            await firestore.collection('alarms').doc(id)
            .update({isOn : !checked}).then(()=>{
            })
          } catch (err) {
            console.log(err);
          }
        }

        async function godeleteAlarm(){
            await deleteAlarm(id)
            // history.push('/')
            // location.reload()
            
        }

  return (
    <div className="alarms">
        <div className="alarmInner" >
            <div className="alarmTime" id={Color}>
                <span className="smallT">{time1} </span>{time2}
            </div>
            <div>
                <button onClick={godeleteAlarm} style={{fontSize:'0'}}><RiChatDeleteLine size='30px'/></button>
                <Link to={'/add?id='+id}>
                    <button style={{fontSize:'0'}}><BiCommentEdit size='30px'/></button>
                </Link>
            </div>
        </div>
        <div className="alarmInner">
            <DragSwitch checked={checked} onChange={handleCheck} style={{height:'20px', width:'42px'}}/>
        </div>
    </div>
  );
}

export default Alarm;
