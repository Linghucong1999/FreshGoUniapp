"use strict";
function countdowmn(time) {
  const endTime = new Date("2023-06-01 12:00:00");
  const endDiff = parseInt((endTime.getTime() - time) / 1e3);
  if (endDiff < 0) {
    return -1;
  } else {
    const day = timeFullZero(parseInt(endDiff / 3600 / 24));
    const hour = timeFullZero(parseInt(endDiff / 3600 % 24));
    const minute = timeFullZero(parseInt(endDiff / 60 % 60));
    const second = timeFullZero(parseInt(endDiff % 60));
    return [day, hour, minute, second];
  }
}
function timeFullZero(num) {
  return num >= 10 ? `${num}` : `0${num}`;
}
exports.countdowmn = countdowmn;
