function setAlarm (employed, vacation){
  let logic = employed && !vacation; {
    console.log (logic);
  }
}
setAlarm (true, true);
setAlarm (false, true);
setAlarm (false, false);
setAlarm (true, false);
