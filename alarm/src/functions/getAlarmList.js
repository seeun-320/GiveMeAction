import { firestore } from "../firebase";

async function getAlarmList(callback) {
  let alarm_list =[]
  try {
    await firestore.collection('alarms').orderBy("time")
    .get()
    .then((docs)=>{
      docs.forEach(doc => {
        alarm_list.push({ time: doc.data().time, isOn: doc.data().isOn, id: doc.id });   
      });
      console.log(alarm_list)
    })
    callback(true, alarm_list);
  } catch (err) {
    console.log(err);
    callback(false);
  }
}

export default getAlarmList;
