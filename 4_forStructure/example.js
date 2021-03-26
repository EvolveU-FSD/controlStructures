const exercises = ['warmup', 'squats', 'benchpress', 'deadlifts']

function doExercise(exercise){
    console.log('doing my', exercise)
}

function rest(){
    console.log('resting')
}

for (var index = 0; index < exercises.length; index++){
    const currentExercise = exercises[index]
    doExercise(currentExercise)
    rest()
}