const convertToString =(currLenght)=>{
    let hour = Math.floor(currLenght / 3600);
    let min = Math.floor(currLenght / 60);
    let sec = Math.floor(currLenght % 60);

    if (hour < 10) {
      hour = "0" + hour;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    const time = hour + ":" + min + ":" + sec;
    return time;
}
export default convertToString;