import React, { useState, useEffect } from 'react';
import './main.css';
import {Panel} from '@enact/sandstone/Panels';

import getAlarmList from '../functions/getAlarmList';
import alarmOn from '../functions/alarmOn';

import Alarm from '../components/Alarm';

import {Link} from 'react-router-dom';

function Main({history}) {
    const [list, setList] = useState([]);

    useEffect(() => {
      alarmOn(history={history})
      // 메모를 서버에 요쳥해서 불러오는 함수
      getAlarmList((success, memo_list) => {
        if (success) {
          setList(memo_list);
        } else {
          window.alert('서버에 오류가 생겨서 메모를 가져올 수 없습니다');
        }
      });

      return()=>{clearInterval()}
    }, []);
    
    return (

    <Panel>
      <div>
        <div className="headers">
          <div><Link to={'/add'} className="addBtn">+</Link></div>
          <div><Link to={'/wait'} className="addBtn">x</Link></div>
        </div>
        <div className="alarm_list">
          {
            list.map(alarm => (
              <Alarm history={history} key={alarm.id} id={alarm.id} time={alarm.time} isOn={alarm.isOn} />
            ))
          }
        </div>
      </div>
    </Panel>
  )
}

export default Main;
