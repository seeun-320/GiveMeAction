import { firestore } from "../firebase";

async function deleteAlarm(id) {
    if(!window.confirm('Do you really want to delete this alarm?')) return;
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
