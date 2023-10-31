/*
parameter function 
*/ 

//array*
let score = [10, 20, 30, 40]


for (let index = 0; index < score.length; index++) {
    console.log('score: ', score[index])
    // if (score[index] >= 30) {
    //     newScore.push(score[index])
    // }
}

let = newScore = score.filter((s) => {
    if (s >= 30) {
        return true
    } else {
        return false
    }
})

newScore.forEach((ns) => {
    console.log(' newScore: ', ns)
})

// score[0] = score[0] * 2
// score[1] = score[1] * 2
// score[2] = score[2] * 2
// score[3] = score[3] * 2

// score = score.map((s) => {
//     return s * 2
// })

// score.forEach((s) => {
//     console.log('new score: ', s)
// })

