interface waiter {
    anjiao: boolean
    say : () => {}
}
interface Teacher {
    anjiao: boolean
    skill : () => {}
}

function judgeWho (animal : waiter | Teacher) {
    if(animal.anjiao) {
        (animal as Teacher).skill()
    } else {
        (animal as waiter ).say()
    }
}

function judgeWho2 (animal : waiter | Teacher) {
    if('skill' in animal) {
        animal.skill()
    } else {
        animal.say()
    }
}

function add (first : string | number, second : string | number) {
   if (typeof first === 'string' || typeof second === 'string') {
       return `${first}${second}`
   } else {
       return first + second
   }
}

class numberObj {
    count : number
}

function addObj (first : object | numberObj, second : object | numberObj) {
    if ( first instanceof numberObj && second instanceof numberObj) {
        return first.count + second.count
    }
}
