function onTimeOnExam(hr, min, arrivHr, arrivMin) {
    let examTime = hr * 60 + min;
    let arrivTime = arrivHr * 60 + arrivMin;
    let diff = Math.abs(examTime - arrivTime);
    let h = 0;
    let m = 0;
    if (examTime === arrivTime) {
        console.log(`On time`);
    } else if (examTime - arrivTime >= 1 && examTime - arrivTime <= 30) {
        console.log(`On time ${diff} minutes before the start`);
    } else if (examTime - arrivTime > 30) {
        if (diff > 59) {
            h = Math.floor(diff / 60);
            m = diff % 60;
            if (m < 10) {
                console.log(`Early ${h}:0${m} hours before the start`);
            } else {
                console.log(`Early ${h}:${m} hours before the start`);
            }
        } else {
            console.log(`Early ${diff} minutes before the start`);
        }
    } else if (arrivTime - examTime > 0) {
        if (diff > 59) {
            h = Math.floor(diff / 60);
            m = diff % 60;
            if (m < 10) {
                console.log(`Late ${h}:0${m} hours after the start`);
            } else {
                console.log(`Late ${h}:${m} hours after the start`);
            }
        } else {
            console.log(`Late ${diff} minutes after the start`);
        }
    }
}


onTimeOnExam(9, 30, 9, 50)
//Late 20 minutes after the start 
onTimeOnExam(9, 0, 10, 30)
//Late 1:30 hours after the start 
onTimeOnExam(10, 0, 10, 0)
//On time
onTimeOnExam(9, 0, 8, 30)
//On time 30 minutes before the start 
onTimeOnExam(14, 0, 13, 55)
//On time 5 minutes before the start 
onTimeOnExam(11, 30, 10, 55)
//Early 35 minutes before the start
onTimeOnExam(16, 0, 15, 0)
//Early 1:00 hours before the start 
onTimeOnExam(11, 30, 8, 12)
//Early 3:18 hours before the start
onTimeOnExam(11, 30, 12, 29)
//Late 59 minutes after the start