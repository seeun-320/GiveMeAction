import React, { useState, useEffect, Component } from 'react';
import Clock from 'react-live-clock';

import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import './alarm.css';

import Iframe from 'react-iframe'


var now = new Date();                                                  // 현재시간
var min = now.getMinutes();
var hour = now.getHours();


function Alarm() {

    // document.getElementById('sound').play;
    // <ReactAudioPlayer
    //     src="/Users/seeun/Documents/2021인도인턴/GiveMeAction/alarm/src/chicken.MP3"
    //     autoPlay
    //     controls
    // />
    // printTime();
    // useSound('/Users/seeun/Documents/2021인도인턴/GiveMeAction/school.MP3',50,0);
    return (<>
        <body>

            {/* 이거 소리나는 코드 */}
            {/* <audio id="sound" loop autoPlay controls>
                <source src="https://t1.daumcdn.net/cfile/tistory/99B972335F720D1502?original" />
                <embed src="https://t1.daumcdn.net/cfile/tistory/99B972335F720D1502?original" width="320" height="45" type="audio/mpeg" />

            </audio> */}

            <video src="https://youtu.be/DjYTEfWuVes" id="sound" loop autoPlay controls>
                {/* <source src="https://youtu.be/DjYTEfWuVes" /> */}
                {/* <embed src="https://www.youtube.com/watch?v=uvdC5FooVEU" width="320" height="45" type="audio/mpeg" /> */}

            </video>

            {/* <Iframe loop url="https://t1.daumcdn.net/cfile/tistory/99B972335F720D1502?original"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="inline"
                position="relative"
                allow="autoPlay" /> */}

        
            <div id="timebox" className="alarmdiv">
                <span id="clock">
                    <Clock format={'HH : mm'} ticking={true} />

                </span><br />
                <span id="date">
                    <Clock format={'yyyy. MM. DD dddd'} />
                </span>
            </div>
            <div id="btnbox" className="alarmdiv"><button id="Abutton" class="btn-1" type="button">start training</button></div>

        </body>
    </>)

}

export default Alarm;