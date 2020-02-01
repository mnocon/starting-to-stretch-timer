$(document).ready(function () {
    exercises = getExercises();

    timeToWait = 0;

    for (i in exercises) {
        phases = getPhases();
        for (j in phases) {
            name = exercises[i]['name'], phase = phases[j]['name'], time = phases[j]['time'];
            setTimeout(callbackClosure(name, phase, time, function(name, phase, time) {
                setData(name, phase, time);
                playSound();
                setIntervalLimited(function() {
                    setTimeLeft(getTimeLeft() - 1);
                }, 1000, time);
            }), timeToWait);
            timeToWait += phases[j]['time'] * 1000;
        }
    }

});