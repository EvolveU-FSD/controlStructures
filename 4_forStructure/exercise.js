function wakeAChild(childNumber){
    console.log('time to wake child', childNumber)
}

for (var childNumber = 0; childNumber < 3; childNumber = childNumber+1){
    wakeAChild(childNumber)
}