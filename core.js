function getExercises() {
    const exercises = [
        {"name": "Shoulder Backbend", "isUpper": true, "areLimbsSeparated": false},
        {"name": "Spine Backbend", "isUpper": true, "areLimbsSeparated": false},
        {"name": "Rear Hand Clasp", "isUpper": true, "areLimbsSeparated": true},
        {"name": "Lying Cross", "isUpper": true, "areLimbsSeparated": true},
        {"name": "Wrist-Biceps Stretch", "isUpper": true, "areLimbsSeparated": true},
        {"name": "One-Leg Pike", "isUpper": false, "areLimbsSeparated": true},
        {"name": "Kneeling Lunge", "isUpper": false, "areLimbsSeparated": true},
        {"name": "Pancake", "isUpper": false, "areLimbsSeparated": false},
        {"name": "Butterfly", "isUpper": false, "areLimbsSeparated": false},
        {"name": "Calf Stretch", "isUpper": false, "areLimbsSeparated": true},
    ]

    return exercises;
}

function getPhases() {
    const phases = [
        {"name" : '10 stretches', "time": 10 },
        {"name" : 'Hold the stretch', "time": 10 },
        {"name" : '10 stretches', "time": 10 },
        {"name" : 'Hold the stretch', "time": 20 },
        {"name" : '10 stretches', "time": 10 },
        {"name" : 'Hold the stretch', "time": 30 },
    ]

    return phases;
}