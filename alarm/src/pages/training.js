import React from 'react';
// import { View } from 'react-native';

// import { Camera } from 'expo-camera';

import './training.css';

function Training({location, history}) {
    const pose = location.search.split(/[=|&]/)[3]

    return  <>
        
        <div>
            <p id="title">Give Me Action!</p>
            <div id="box" className="Tdiv">
                <div id="camshow" className="Tdiv">
                   
                    
                    {/* <img src="https://lh3.googleusercontent.com/proxy/VNZp3l2j_bTe8rtozr5NhtXpXuk_THE3XgpN36D3TcUmNUYBl-W3T_OVtfHOtrpXKPzY8Lqap5MCI1nvdv2koaVnxmE12JGoLPA" alt="" /> */}
                </div>
                <div id="canvas" className="Tdiv"></div>
                <div id="exshow" className="Tdiv">
                    {/* style="object-fit: cover" */}
                    <img style={{ objectFit: "cover" }} src="https://health.chosun.com/site/data/img_dir/2021/05/20/2021052000854_0.jpg" alt="" />
                </div>
            </div>
            {/* style={{border: "none", borderRadius:"100px", backgroundColor:"dimgray", width:"200px", height:"50px", fontSize:"15px"}} */}
            <p ><button className="Tbutton" style={{ backgroundColor: "dimgray" }} >force quit</button></p>

        </div>
    </>

}

export default Training;
