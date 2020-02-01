function callbackClosure(name, phase, time, callback) {
    return function() {
       return callback(name, phase, time);
    }
  }

function setIntervalLimited(callback, interval, x) {
    for (var i = 0; i < x; i++) {
        setTimeout(callback, i * interval);
    }
}

function playSound() {
    var audio = new Audio('bell.mp3');
    audio.play();
}