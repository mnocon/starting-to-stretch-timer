$(document).ready(function () {
    exercises = getExercises();

    timeToWait = 0;

    for (i in exercises) {
        phases = getPhases();
        for (j in phases) {
            timeToWait += phases[j]['time'] * 100;
            name = exercises[i]['name'], phase = phases[j]['name'], time = phases[j]['time'];
            setTimeout(callbackClosure(name, phase, time, function(name, phase, time) {
                setData(name, phase, time);
                setIntervalX(function() {
                    setTimeLeft(getTimeLeft() - 1);
                }, 1000, getTimeLeft())
            }), timeToWait);
        }
    }

});