import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';
import './main.css';

import getAlarmList from '../functions/getAlarmList';

import Alarm from '../components/Alarm';



function Main() {
  const [list, setList] = useState([]);


  useEffect(() => {
    // 메모를 서버에 요쳥해서 불러오는 함수
    getAlarmList((success, memo_list) => {
      if (success) {
        setList(memo_list);
        console.log(list)
      } else {
        alert('서버에 오류가 생겨서 메모를 가져올 수 없습니다');
      }
    });
  }, []);

  return (
    <>
      <div>
        <div className="headers">
          <div><Link to={'/add'} className="addBtn">+</Link></div>
          <div><Link to={'/wait'} className="addBtn">x</Link></div>
        </div>
        <div className="alarm_list">
          {
            list.map(alarm => (
              <Alarm key={alarm.id} id={alarm.id} time={alarm.time} isOn={alarm.isOn} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Main;
