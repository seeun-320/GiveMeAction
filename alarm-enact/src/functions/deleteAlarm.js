import { firestore } from "../firebase";

async function deleteAlarm(id) {
  try {
    await firestore.collection('alarms').doc(id)
    .delete()
    .then(()=>{
      console.log('success')
    })
  } catch (err) {
    console.log(err);
  }
}

export default deleteAlarm;
