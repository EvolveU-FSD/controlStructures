function flipACoin(){
    return Math.random() > 0.5
}

function doTheyHaveJacketAndBag(){
    console.log('checkting do they have jacket and bag')
    const areReady = flipACoin()
    console.log(areReady ? 'oh, they are ready' : 'not ready yet')
    return areReady
}

function flog(){
    console.log('initiating flogging!')
}

while(doTheyHaveJacketAndBag() == false){
    flog()
}
console.log('finally!')