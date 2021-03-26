function flipACoin(){
    return Math.random() > 0.5
}

function isCatHungry(){
    console.log('Checking if cat is hungry')
    const catIsHungry = flipACoin()
    console.log(catIsHungry ? 'cat is hungry': 'nope, cat is not hungry yet')
    return catIsHungry
}

function playWithCat()
{
    console.log('playing with cat')
}

while (isCatHungry() == false){
    playWithCat()
}