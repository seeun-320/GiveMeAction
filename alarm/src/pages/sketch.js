// ml5.js: Pose Classification
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/ml5/7.2-pose-classification.html
// https://youtu.be/FYgYyq-xqAw

// All code: https://editor.p5js.org/codingtrain/sketches/JoZl-QRPK

// Separated into three sketches
// 1: Data Collection: https://editor.p5js.org/codingtrain/sketches/kTM0Gm-1q
// 2: Model Training: https://editor.p5js.org/codingtrain/sketches/-Ywq20rM9
// 3: Model Deployment: https://editor.p5js.org/codingtrain/sketches/c5sDNr8eM

let video;
let poseNet;
let pose;

let brain, skeleton,state = 'waiting', current, exercise = '';
    let squat = 0, lungeL = 0, lungeR = 0, press = 0, tree = 0, ck = 0;  //운동 횟수 변수 -> 시간으로 변경
    let squatCk = 0, lungeLCk = 0, lungeRCk = 0, pressCk = 0, treeCk = 0; // 각 운동 종료 여부 확인 변수
    let poseLabel = 'Come to camera , please';
    let countArr = [];
    let timer, timeover;
    const wh = window.innerHeight*0.7;
    let start = 0;

function setup() {
  createCanvas(window.innerWidth*0.7, window.innerHeight*0.7);
  video = createCapture(VIDEO);
  video.size(window.innerWidth*0.7, window.innerHeight*0.7);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

  let options = {
    inputs: 34,
    outputs: 4,
    task: 'classification',
    debug: true
  }
  brain = ml5.neuralNetwork(options);

  const modelInfo = {
    model: 'model2/model.json',
    metadata: 'model2/model_meta.json',
    weights: 'model2/model.weights.bin',
  };
  brain.load(modelInfo, brainLoaded);
}

function brainLoaded() {
  console.log('pose classification ready!');
  classifyPose();
}

function detectPose () {
  state = 'waiting'
  console.log("detect")
  if (pose) {
    let nose = pose.keypoints[0].score;
    let ankleR = pose.keypoints[14].score;
    if ((nose > 0.5) && (ankleR > 0.5)) {
      state = 'ready';
      if (start === 0) {
          document.getElementById("test").innerHTML =  "Let's start";
          current = exercise;
          start = 1; 
      }
    } else {
      state = 'waiting';
    }
  }
};

function classifyPose() {
  detectPose();//카메라 안으로 들어왔는지 확인
  console.log("카메라 안 으로 들어왔는지 확인");
  if (pose && (state == 'ready')) {
    let inputs = [];
    poseLabel = "alayzing"
    for (let i = 0; i < pose.keypoints.length; i++) 
    {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      inputs.push(x);
      inputs.push(y);
    }
    brain.classify(inputs, gotResult);
  } 
  else {
    setTimeout(classifyPose, 100);//포즈 없으면 다시 대기
    console.log("포즈 없어서 다시 대기")
  }
}

function gotResult(error, results) {

  if(results[0].confidence > 0.55)
  {
    switch(results[0].label)
    {
      case '1': 
        poseLabel = 'stand'
        
      case '2': 
        poseLabel = 'left lunge'  
      case '3': 
        poseLabel = 'right lunge'  
       
      case '4': 
        poseLabel = 'tree'
        
      default:
        poseLabel = 'analyzing' 
           
    }
  }else{
    poseLabel = 'anayzing'
  }
  classifyPose();
}


function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  push();
  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0, video.width, video.height);

  if (pose) {
    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(2);
      stroke(0);

      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }

    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;

      fill(0);
      stroke(255);
      ellipse(x, y, 16, 16);
    }
  }
  pop();

  fill(255, 0, 255);
  noStroke();
  // textSize(100);
  // textAlign(CENTER, CENTER);
  // text(poseLabel, width / 2, height / 2);

  document.getElementById("test").innerHTML =  poseLabel
}