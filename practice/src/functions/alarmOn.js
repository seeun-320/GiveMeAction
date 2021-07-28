import getAlarmList from "./getAlarmList";

function alarmOn() {
    let alarms;
    getAlarmList((success, memo_list) => {
        if (success) {
          alarms = memo_list;
          console.log(alarms)
        } else {
            window.alert('서버에 오류가 생겨서 알람을 가져올 수 없습니다');
        }
    })

    setInterval(function () {
        var today = new Date(); 
        var hours = ('0' + today.getHours()).slice(-2);
        var minutes = ('0' + today.getMinutes()).slice(-2);
        let now = hours+":"+minutes
        console.log(now);
        alarms && alarms.map((alarm)=>{
            if(alarm.time === now && alarm.isOn===true){
                window.location.replace('/alarm?sound='+alarm.sound+'&pose='+alarm.pose+'&id='+alarm.id)
            }
            return 0
        })
    }, 1000);
}

export default alarmOn;
