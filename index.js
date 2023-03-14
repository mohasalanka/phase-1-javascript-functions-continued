function saturdayFun(string = 'roller-skate'){
    return `This Saturday, I want to ${string}!`
}
saturdayFun();

function mondayWork(work='go to the office'){
    return `This Monday, I will ${work}.`
}
mondayWork();

function wrapAdjective(adjective = '*'){

    return function(message){
        // message = 'a hard worker'
        return `You are ${adjective}${message}${adjective}!`
    };
}

wrapAdjective('*')('a hard worker')('*')
wrapAdjective('||')('a dedicated programmer')('||')
