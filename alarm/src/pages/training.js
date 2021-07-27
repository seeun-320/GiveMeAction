import React from 'react';
// import { View } from 'react-native';
import Sketch from 'react-p5';
import ml5 from 'ml5';
import './training.css';
import Waiting from './Waiting';


function Training({location, history}) {
    //const poseCompare = location.search.split(/[=|&]/)[3]
    const poseCompare = 'squat'
    let video;
    let poseNet;
    let pose;
    let skeleton;
    let count =0;
    let camera=0;

    let brain;
    let poseLabel = "loading...";
    let state;
    let start;
    const ww = window.innerWidth * 0.7;
    const wh = window.innerHeight * 0.7;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth * 0.7, window.innerHeight * 0.7).parent(canvasParentRef);
        video = p5.createCapture(p5.VIDEO);
        video.size(window.innerWidth * 0.7, window.innerHeight * 0.7);
        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);

        let options = {
            inputs: 34,
            outputs: 7,
            task: 'classification',
            debug: true
        };
        brain = ml5.neuralNetwork(options);
        const modelInfo = {
            model: '/model/model.json',
            metadata: '/model/model_meta.json',
            weights: '/model/model.weights.bin',
        };
        brain.load(modelInfo, brainLoaded);
    };

    const modelLoaded = () => {
        console.log('poseNet ready');
    };

    const brainLoaded = () => {
        console.log('pose classification ready!');
        classifyPose();
    };

    const classifyPose = () => {
        detectPose();
        if (pose && (state === 'ready')) {
            let inputs = [];
            for (let i = 0; i < pose.keypoints.length; i++) {
                let x = pose.keypoints[i].position.x;
                let y = pose.keypoints[i].position.y;
                inputs.push(x);
                inputs.push(y);
            }
            brain.classify(inputs, gotResult);
        } else {
            setTimeout(classifyPose, 100);
        }
    };


    const detectPose = () => {
        camera++;
                console.log(camera);
                if(camera >= 1000)
                {
                    alert('Please come to camera');
                    goToWait();
                    
                }
        state = 'waiting'
        if (pose) {
            let nose = pose.keypoints[0].score;
            let ankleR = pose.keypoints[14].score;
            if ((nose > 0.5) && (ankleR > 0.5)) {
                state = 'ready';
                if (start === 0) {
                    // choiceExercise();
                    poseLabel = 'start!'
                    // document.getElementById("test").innerHTML = `${exercise}` + " 시작하세요";
                    //current = 3; //current selected exercise
                    // current = exercise;
                    start = 1;
                }
            } else {
                state = 'waiting';
            }
        }
    };

    const gotResult = (error, results) => {
        console.log('결과 받으러');
        if (error) {
            console.log(error);
            return;
        }
        if (results[0].confidence > 0.75) {
            switch (results[0].label) {
                case '1'://stand
                    poseLabel = 'stand';
                    break;
                case '2'://left
                case '3'://right
                    poseLabel = 'lunge';
                    break;
                case '4'://left
                case '5'://right
                    poseLabel = 'triangle';
                    break;
                case '6'://left
                case '7'://right
                    poseLabel = 'squat';
                    break;
                default:
                    break;
                }
                // if(current != poseLabel)
                //   poseLabel = 'analyzing...'
            } else {
                poseLabel = 'analyzing...';
            }
            if( poseLabel == poseCompare)//같으면 알람이 멈추게 끔 하면 된다..
            {
                goToWait();
            }
            else
            {
                count++;
                console.log(count);
                if(count >= 1000)
                {
                    alert('Ooooop ! After 10 minutes, the alarm will play again. ');
                    goToWait();
                }

            }
        //console.log(results[0].confidence);
        classifyPose();
        // setTimeout(classifyPose, 800);
    };

    const goToWait = () => {
        history.push('/wait');
      }

    const gotPoses = (poses) => {
        if (poses.length > 0) {
            pose = poses[0].pose;
            skeleton = poses[0].skeleton;
        }
    };

    const draw = (p5) => {
        p5.push();
        p5.translate(p5.width, 0);
        p5.scale(-1, 1);
        p5.image(video, 0, 0, window.innerWidth * 0.7, window.innerHeight * 0.7);

        if (pose) {
            for (let i = 0; i < skeleton.length; i++) {
                let a = skeleton[i][0];
                let b = skeleton[i][1];
                p5.strokeWeight(2);
                p5.stroke(0);

                p5.line(a.position.x * (window.innerWidth * 0.7 / ww), a.position.y * (window.innerHeight * 0.7 / wh), b.position.x * (window.innerWidth * 0.7 / ww), b.position.y * (window.innerHeight * 0.7 / wh));
            }
            for (let i = 0; i < pose.keypoints.length; i++) {
                let x = pose.keypoints[i].position.x * (window.innerWidth * 0.7 / ww);
                let y = pose.keypoints[i].position.y * (window.innerHeight * 0.7 / wh);
                p5.fill(0);
                p5.stroke(255);
                p5.ellipse(x, y, 16, 16);
            }
        }
        p5.pop();

        p5.fill(255, 0, 255);
        p5.noStroke();

        // textSize(250);
        // textAlign(CENTER, CENTER);
        // text(poseLabel, width / 2, height / 2);
        document.getElementById("test").innerHTML = poseLabel;
    };

    const windowResized = (p5) => {
        p5.resizeCanvas(window.innerWidth * 0.7, window.innerHeight * 0.7, true);
    }

    //training page
    return <>
    
        <body>
            <h1 id="title">Give Me Action!</h1>
            <h2 id="test"></h2>
            <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
        </body>
    </>

}

export default Training;
