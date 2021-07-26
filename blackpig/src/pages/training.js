import React, { useState, useEffect, Component } from 'react';
// import { View } from 'react-native';

import { Link } from 'react-router-dom';
// import { Camera } from 'expo-camera';


import '/Users/seeun/Documents/2021인도인턴/GiveMeAction/blackpig/src/pages/training.css';

function Training() {
    

    return  <>
        
        <body>
            <p id="title">Give Me Action!</p>
            <div id="box">
                <div id="camshow">
                   
                    
                    {/* <img src="https://lh3.googleusercontent.com/proxy/VNZp3l2j_bTe8rtozr5NhtXpXuk_THE3XgpN36D3TcUmNUYBl-W3T_OVtfHOtrpXKPzY8Lqap5MCI1nvdv2koaVnxmE12JGoLPA" alt="" /> */}
                </div>
                <div id="canvas"></div>
                <div id="exshow">
                    {/* style="object-fit: cover" */}
                    <img style={{ objectFit: "cover" }} src="https://health.chosun.com/site/data/img_dir/2021/05/20/2021052000854_0.jpg" alt="" />
                </div>
            </div>
            {/* style={{border: "none", borderRadius:"100px", backgroundColor:"dimgray", width:"200px", height:"50px", fontSize:"15px"}} */}
            <p ><button style={{ backgroundColor: "dimgray" }} >force quit</button></p>

        </body>
    </>

}

export default Training;
