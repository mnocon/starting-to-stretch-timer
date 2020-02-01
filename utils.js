function callbackClosure(name, phase, time, callback) {
    return function() {
       return callback(name, phase, time);
    }
  }

  