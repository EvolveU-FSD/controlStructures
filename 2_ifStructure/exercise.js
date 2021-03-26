function isAlarmBlaring(){
    console.log('checking alarm')
    return true                     // change this for testing
}

function shower(){
    console.log('taking shower')
}

function heySiri(){
    console.log('fix alarm')
}

if (isAlarmBlaring() == true){
    heySiri()
}
shower()