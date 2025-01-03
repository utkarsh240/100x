function canVote(age){
    if(age >= 18){
        return "can vote";
    } else {
        return "can't vote";
    }
}

let num = canVote(72);
console.log(num);
