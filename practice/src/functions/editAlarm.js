import { firestore } from "../firebase";

async function editAlarm(input,callback) {
  let alarm =[]
  try {
    await firestore.collection('alarms')
    .doc(input.id).get()
    .then((doc)=>{
      alarm = ({ time: doc.data().time, isOn: doc.data().isOn, id: doc.id, sound:doc.data().sound,pose:doc.data().pose });   
    })
    callback(true, alarm);
  } catch (err) {
    console.log(err);
    callback(false);
  }
}

export default editAlarm;
