import { firestore } from "../firebase";

async function addAlarmList(data, callback) {
  try {
    console.log(data)
    await firestore.collection('alarms').doc(data.id)
    .set({
        time : data.time,
        isOn : data.isOn,
        sound : data.sound,
        pose : data.pose
    })
    .then(()=>{
        // console.log("success")
        callback("success")
    });
  } catch (err) {
    console.log(err);
    callback("error")
  }
}

export default addAlarmList;
