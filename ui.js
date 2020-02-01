function setExercise(value) {
    // setTimeout()
    $("#exerciseName").text(value);
}

function setPhase(value) {
    $("#phase").text(value);
}

function setTimeLeft(value) {
    $("#timeLeft").text(value);
}

function getTimeLeft() {
    return $("#timeLeft").text();
}

function setData(exerciseName, phaseName, timer) {
    setExercise(exerciseName);
    setPhase(phaseName);
    setTimeLeft(timer);
}

