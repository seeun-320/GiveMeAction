import React, { useState, useEffect, Component } from 'react';
import Clock from 'react-live-clock';

import { Link } from 'react-router-dom';

import '/Users/seeun/Documents/2021인도인턴/GiveMeAction/blackpig/src/pages/alarm.css';

var now = new Date();                                                  // 현재시간
var min = now.getMinutes();
var hour = now.getHours();

function Alarm() {
   
    // printTime();
    return (<>
        <body>
            <div id="timebox">
                <span id="clock">
                    <Clock format={'HH : mm'} ticking={true}/>
                    
                    </span><br />
                <span id="date">
                    <Clock format={'yyyy. MM. DD dddd'}/>
                    </span>
            </div>
            <div id="btnbox"><button class="btn-1" type="button">start training</button></div>

        </body>
    </>)
    
}

export default Alarm;