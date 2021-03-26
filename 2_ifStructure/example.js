function wearingWorkoutAppriopriateClothing() {
    console.log('checking clothes')
    return false                                // change this to true to try again
}

function wearWorkoutClothes(){
    console.log('changing to workout clothes')
}

function stretchAndRollout(){
    console.log('warming up')
}

// run the if
if (wearingWorkoutAppriopriateClothing() === false){
    wearWorkoutClothes()
}
stretchAndRollout()